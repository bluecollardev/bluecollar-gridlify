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
    # 53 columns of 7 days, ending on the Saturday of the last commit's week
    end = last + datetime.timedelta(days=(6 - last.weekday()) % 7)
    start = end - datetime.timedelta(days=53*7 - 1)
    window = [counts.get((start + datetime.timedelta(days=i)).isoformat(), 0) for i in range(53*7)]
    peak = max(window) or 1
    levels = ''.join(str(0 if c == 0 else min(4, 1 + int(3 * (c - 1) / max(peak - 1, 1)))) for c in window)
    months = (last.year - first.year) * 12 + last.month - first.month
    years, rem = divmod(months, 12)
    duration = ' '.join(filter(None, [f'{years} yr' if years else '', f'{rem} mo' if rem else ''])) or '<1 mo'
    return {'slug': slug, 'total': sum(counts.values()), 'duration': duration,
            'windowFrom': start.strftime('%b %Y'), 'windowTo': end.strftime('%b %Y'),
            'windowTotal': sum(window), 'levels': levels}

print(json.dumps([build(s, r) for s, r in PRODUCTS.items()], indent=1)[:900])
