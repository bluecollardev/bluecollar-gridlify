<template>
  <Layout id="open-source-page">
    <section class="os-hero hero-section angle">
      <div class="os-hero__inner">
        <h1 class="os-hero__title">{{ content.title }}</h1>
        <p class="os-hero__subtitle">{{ content.subtitle }}</p>
        <p class="os-hero__stats">
          <span>{{ totals.projects }} projects</span>
          <span>{{ totals.repos }} repositories</span>
          <span>{{ totals.commits }} commits</span>
        </p>
      </div>
    </section>

    <section class="os-list">
      <div class="os-list__inner">
        <div v-for="group in groups" :key="group.owner.id" class="os-group">
          <div class="os-group__head">
            <h2 class="os-group__name">{{ group.owner.name }}</h2>
            <a class="os-group__account" :href="group.owner.url" target="_blank" rel="noopener">{{ group.owner.account }} ↗</a>
          </div>
          <p class="os-group__note">{{ group.owner.note }}</p>

        <article v-for="project in group.projects" :key="project.name" class="os-project">
          <!-- a div, not <header>: the site styles every header element as the fixed
               site header, which flung this to the top of the page -->
          <div class="os-project__head">
            <div>
              <h3 class="os-project__name">{{ project.name }}</h3>
              <p class="os-project__org">{{ project.org }} · {{ project.role }}</p>
              <p class="os-project__activity">
                <span v-if="project.active">Active {{ project.active }}</span>
                <span v-if="project.prs">{{ project.prs }} pull requests</span>
                <span v-if="project.cadence">{{ project.cadence }}</span>
              </p>
            </div>
            <a v-if="project.live" class="os-project__live" :href="project.live" target="_blank" rel="noopener">
              Live site ↗
            </a>
          </div>

          <p class="os-project__summary">{{ project.summary }}</p>
          <p v-if="project.technologies" class="os-project__tech">{{ project.technologies }}</p>

          <ul class="os-repos">
            <li v-for="repo in project.repos" :key="repo.name" class="os-repo">
              <span v-if="repo.pending" class="os-repo__name os-repo__name--pending">
                <span class="icon-github" aria-hidden="true"></span> {{ repo.name }}
                <em>publishing</em>
              </span>
              <a v-else class="os-repo__name" :href="repo.url" target="_blank" rel="noopener">
                <span class="icon-github" aria-hidden="true"></span> {{ repo.name }}
              </a>
              <span class="os-repo__note">{{ repo.note }}</span>
              <span class="os-repo__meta">
                <span v-if="repo.active">{{ repo.active }}</span>
                <span><strong>{{ repo.commits }}</strong> commits</span>
                <span v-if="repo.prs"><strong>{{ repo.prs }}</strong> PRs</span>
                <span><strong>{{ repo.contributors }}</strong> contributors</span>
              </span>
            </li>
          </ul>
        </article>
        </div>
      </div>
    </section>

    <section class="os-footer">
      <div class="os-footer__inner">
        <p>Everything above is public. The accounts are
          <a href="https://github.com/bluecollardev" target="_blank" rel="noopener">github.com/bluecollardev</a>
          and
          <a href="https://github.com/bcdevlucas" target="_blank" rel="noopener">github.com/bcdevlucas</a>.
        </p>
        <div class="os-footer__actions">
          <a class="os-button os-button--primary" href="/#contact">Get in touch</a>
          <router-link class="os-button" to="/">Back to Blue Collar</router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'
import OpenSourceData from '~/data/OpenSource.yml'

export default {
  components: {
    Layout
  },
  computed: {
    content() {
      return OpenSourceData
    },
    /** Projects grouped under the GitHub account that hosts them. */
    groups() {
      return this.content.owners
        .map(owner => ({owner, projects: this.content.projects.filter(p => p.owner === owner.id)}))
        .filter(group => group.projects.length)
    },
    /** Counted from the data rather than kept in step by hand. */
    totals() {
      const repos = this.content.projects.flatMap(p => p.repos)
      const commits = repos.reduce((sum, r) => sum + (parseInt(String(r.commits).replace(/,/g, ''), 10) || 0), 0)

      return {
        projects: this.content.projects.length,
        repos: repos.length,
        commits: commits.toLocaleString('en-US')
      }
    }
  },
  mounted() {
    if (typeof document !== 'undefined') {
      document.title = 'Open Source — Blue Collar Development'
    }
  }
}
</script>

<style lang="scss">
.os-hero {
  background-color: #4c7896;
  color: #fff;
  padding: 7rem 1.5rem calc(9vh + 3rem);
  position: relative;
  z-index: 2;

  * {
    text-shadow: none !important;
  }

  &__inner {
    max-width: 52rem;
    margin: 0 auto;
    text-align: center;
  }

  &__title {
    font-size: 2.75rem;
    color: #fff;
    margin: 0;
    text-align: center;
  }

  &__subtitle {
    margin: 1.25rem 0 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
  }

  &__stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 1.5rem;
    margin: 1.5rem 0 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;

    span + span::before {
      content: '·';
      margin-right: 1.5rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

.os-list {
  background: #fff;
  margin-top: -9vh;
  padding: calc(4rem + 9vh) 1.5rem 4rem;
  position: relative;
  z-index: 1;

  &__inner {
    max-width: 62rem;
    margin: 0 auto;
  }
}

.os-group {
  margin-bottom: 3rem;

  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #33587a;
  }

  &__name {
    font-size: 1.1rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #33587a;
    margin: 0;
  }

  &__account {
    color: #7b8794;
    font-size: 0.85rem;
    font-family: 'SFMono-Regular', Menlo, Consolas, monospace;
  }

  &__note {
    color: #7b8794;
    font-size: 0.9rem;
    margin: 0.5rem 0 0;
  }
}

.os-project {
  padding: 2rem 0;
  border-top: 1px solid #e6e6e6;

  &:first-child {
    border-top: 0;
    padding-top: 0;
  }

  &__head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem 1.5rem;
  }

  &__name {
    font-size: 1.4rem;
    color: #33587a;
    margin: 0;
  }

  &__org {
    margin: 0.25rem 0 0;
    color: #7b8794;
    font-size: 0.9rem;
  }

  &__live {
    color: #33587a;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  &__activity {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
    margin: 0.4rem 0 0;
    color: #52606d;
    font-size: 0.8rem;

    span + span::before {
      content: '·';
      margin-right: 1rem;
      color: #b6bcc0;
    }
  }

  &__summary {
    margin: 1rem 0 0;
    color: #3e4c59;
    line-height: 1.6;
  }

  &__tech {
    margin: 0.75rem 0 0;
    color: #7b8794;
    font-size: 0.8rem;
  }
}

.os-repos {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
}

.os-repo {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.35rem 1rem;
  padding: 0.6rem 0;
  border-top: 1px solid #f0f0f0;

  &__name {
    font-family: 'SFMono-Regular', Menlo, Consolas, monospace;
    font-size: 0.85rem;
    color: #33587a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__name--pending {
    color: #7b8794;

    em {
      font-family: inherit;
      font-style: normal;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border: 1px solid #d3d8de;
      border-radius: 3px;
      padding: 0.05rem 0.35rem;
      margin-left: 0.35rem;
    }
  }

  &__note {
    color: #7b8794;
    font-size: 0.85rem;
    margin-right: auto;
  }

  &__meta {
    display: flex;
    gap: 1.25rem;
    color: #52606d;
    font-size: 0.8rem;
    white-space: nowrap;
  }
}

.os-footer {
  background: #33587a;
  color: #fff;
  padding: 3.5rem 1.5rem;
  text-align: center;

  * {
    text-shadow: none !important;
  }

  &__inner {
    max-width: 52rem;
    margin: 0 auto;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
  }

  a {
    color: #fff;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }
}

.os-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.18);
  }

  &--primary {
    background: #fff;
    color: #33587a;
    border-color: #fff;

    &:hover,
    &:focus-visible {
      background: rgba(255, 255, 255, 0.85);
    }
  }
}
</style>
