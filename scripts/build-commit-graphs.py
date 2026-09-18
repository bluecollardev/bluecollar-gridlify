"""
Builds the commit-activity graphs in src/data/Products.yml from the local repos.

    python3 scripts/build-commit-graphs.py

Each product gets a 53-week daily grid ending at its last commit, as a string of
levels 0-4 (one character per day, Sunday first), plus totals and duration.
"""
import subprocess, os, re, datetime, collections, json

HOME = os.path.expanduser('~')
PRODUCTS = {
    'mediashare': [f'{HOME}/Workspaces/ppt/mediashare'],
    'rental-cloud': [f'{HOME}/Workspaces/props-apps', f'{HOME}/Workspaces/props-api',
                     f'{HOME}/Workspaces/props-pipelines', f'{HOME}/Workspaces/props-onboarding',
                     f'{HOME}/Workspaces/props-site', f'{HOME}/Workspaces/props-agents'],
    'entraprise': [f'{HOME}/Workspaces/skintyee'],
}

def daily_counts(repos):
    counts = collections.Counter()
    for repo in repos:
        if not os.path.isdir(os.path.join(repo, '.git')): continue
        out = subprocess.run(['git', '-C', repo, 'log', '--all', '--format=%ad', '--date=short'],
                             capture_output=True, text=True).stdout
        for line in out.splitlines():
            if line.strip(): counts[line.strip()] += 1
    return counts

def build(slug, repos):
    counts = daily_counts(repos)
    if not counts: return None
    days = sorted(counts)
    first, last = datetime.date.fromisoformat(days[0]), datetime.date.fromisoformat(days[-1])
    peak = max(counts.values()) or 1

    def level(c):
        return 0 if c == 0 else min(4, 1 + int(3 * (c - 1) / max(peak - 1, 1)))

    # One grid per calendar year that saw commits, so multi-year projects show it
    years = []
    for year in range(first.year, last.year + 1):
        jan1 = datetime.date(year, 1, 1)
        start = jan1 - datetime.timedelta(days=(jan1.weekday() + 1) % 7)   # back to Sunday
        dec31 = datetime.date(year, 12, 31)
        end = dec31 + datetime.timedelta(days=(5 - dec31.weekday()) % 7)   # on to Saturday
        grid, total = [], 0
        d = start
        while d <= end:
            c = counts.get(d.isoformat(), 0) if d.year == year else 0
            total += c
            grid.append(str(level(c)))
            d += datetime.timedelta(days=1)
        if total:
            years.append({'year': str(year), 'total': f'{total:,}', 'levels': ''.join(grid)})

    months = (last.year - first.year) * 12 + last.month - first.month
    yy, mm = divmod(months, 12)
    duration = ' '.join(filter(None, [f'{yy} yr' if yy else '', f'{mm} mo' if mm else ''])) or '<1 mo'
    return {'slug': slug, 'total': sum(counts.values()), 'duration': duration,
            'first': first.strftime('%b %Y'), 'last': last.strftime('%b %Y'), 'years': years}

if __name__ == '__main__':
    for slug, repos in PRODUCTS.items():
        d = build(slug, repos)
        print(slug, d['total'], d['duration'], [f"{y['year']}:{y['total']}" for y in d['years']])
