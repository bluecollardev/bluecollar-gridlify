<template>
  <section id="team-profile" class="hero-section angle">
    <div class="military-id-card-container">
      <div class="military-id-card" @click="viewDetail()">
        <!-- Header -->
        <div class="card-header">
          <div class="header-stripe"></div>
          <div class="header-content">
            <div class="department-seal"></div>
            <div class="header-text">
              <h3>BLUE COLLAR SOFTWARE</h3>
              <h4>DEVELOPMENT DIVISION</h4>
            </div>
          </div>
          <div class="header-stripe"></div>
        </div>

        <!-- Main Content -->
        <div class="card-body">
          <!-- Photo Section -->
          <div class="photo-section">
            <div class="photo-frame">
              <img :src="profileData.photo" alt="Profile Photo" />
            </div>
            <div class="id-number">ID: {{ profileData.idNumber }}</div>
          </div>

          <!-- Info Section -->
          <div class="info-section">
            <div class="name-rank">
              <div class="field">
                <span class="label">NAME:</span>
                <span class="value">{{ profileData.name }}</span>
              </div>
              <div class="field">
                <span class="label">RANK:</span>
                <span class="value">{{ profileData.rank }}</span>
              </div>
              <div class="field">
                <span class="label">SPECIALTY:</span>
                <span class="value">{{ profileData.specialty }}</span>
              </div>
            </div>

            <div class="service-info">
              <div class="field">
                <span class="label">YEARS OF SERVICE:</span>
                <span class="value">{{ profileData.yearsOfService }}</span>
              </div>
              <div class="field">
                <span class="label">CLEARANCE:</span>
                <span class="value security-clearance">{{ profileData.clearance }}</span>
              </div>
              <div class="field">
                <span class="label">LANGUAGES:</span>
                <span class="value">{{ profileData.languages }}</span>
              </div>
            </div>

            <div class="about-section">
              <div class="label">ABOUT:</div>
              <div class="about-text">
                {{ profileData.about }}
              </div>
            </div>

            <div class="skills-section">
              <div class="label">PRIMARY TECHNOLOGIES:</div>
              <div v-for="category in profileData.techCategories" :key="category.name" class="tech-category">
                <div class="tech-category__name">{{ category.name }}</div>
                <div class="tech-badges">
                  <span v-for="tech in category.items" :key="tech.name" class="tech-badge">
                    {{ tech.name }} <em>{{ tech.years }}</em>
                  </span>
                </div>
              </div>
            </div>

            <div class="scouting-report-section">
              <div class="label">SCOUTING REPORT:</div>
              <button class="view-report-btn" @click="viewScoutingReport">
                CLICK TO VIEW
              </button>
            </div>

            <div class="missions-section">
              <div class="label">RECENT MISSIONS:</div>
              <div class="missions-list">
                <div v-for="(mission, index) in profileData.recentMissions" :key="index" class="mission-item">
                  <div class="mission-company">
                    {{ mission.company }}
                    <span v-if="mission.years" class="mission-years">{{ mission.years }}</span>
                  </div>
                  <div class="mission-role">{{ mission.role }}</div>
                </div>
              </div>
            </div>

            <div class="open-source-section">
              <div class="label">OPEN SOURCE:</div>
              <div class="open-source-stats">
                <span>{{ openSource.totals.projects }} projects</span>
                <span>{{ openSource.totals.repos }} repositories</span>
                <span>{{ openSource.totals.commits }} commits</span>
              </div>
              <div v-for="group in openSource.groups" :key="group.owner.id" class="open-source-group">
                <div class="open-source-group__name">{{ group.owner.account }}</div>
                <div v-for="project in group.projects" :key="project.name" class="open-source-project">
                  <div class="open-source-item">
                    <span class="open-source-item__name">{{ project.name }}</span>
                    <span class="open-source-item__meta">
                      {{ project.repos.length }} {{ project.repos.length === 1 ? 'repo' : 'repos' }}
                      · {{ projectCommits(project) }} commits<template v-if="project.prs"> · {{ project.prs }} PRs</template>
                    </span>
                  </div>
                  <div v-if="project.active" class="open-source-active">
                    {{ project.active }}<template v-if="project.cadence"> · {{ project.cadence }}</template>
                  </div>
                  <div v-for="repo in project.repos" :key="repo.name" class="open-source-repo">
                    <span v-if="repo.pending" class="open-source-repo__name">
                      {{ repo.name }} <em>publishing</em>
                    </span>
                    <a v-else class="open-source-repo__name" :href="repo.url" target="_blank"
                       rel="noopener" @click.stop>{{ repo.name }}</a>
                    <span class="open-source-repo__meta">{{ repo.commits }}</span>
                  </div>
                </div>
              </div>
              <button class="view-report-btn" @click.stop="viewOpenSource">
                OPEN THE FULL DIRECTORY
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="card-footer">
          <div class="barcode-section">
            <div class="barcode"></div>
            <div class="issue-date">ISSUED: {{ profileData.issueDate }}</div>
          </div>
          <div class="signature-section">
            <button class="view-resume-btn" @click="viewDetail">
              VIEW RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OpenSourceData from '~/data/OpenSource.yml'

// Import resume data from JSON
const resumeData = {
  personalInfo: {
    name: 'Lucas Michael Lopatka'
  }
}

export default {
  data() {
    return {
      profileData: {
        name: resumeData.personalInfo.name.toUpperCase(),
        photo: '/images/bc-001-lucas.jpg',
        idNumber: 'BC-' + new Date().getFullYear() + '-001',
        rank: 'SOFTWARE CAPTAIN',
        specialty: 'FULL-STACK MERCENARY',
        yearsOfService: this.calculateYearsOfService(),
        clearance: 'CSIS-LVL-2',
        languages: 'ENGLISH · FRENCH · THAI',
        about: 'Full-stack and platform engineer with 15+ years shipping production software across payments, identity, government and e-commerce. Works from fundamentals over frameworks and moves fluidly between stacks.',
        recentMissions: [
          {
            company: 'Skin Tyee First Nation (Canada)',
            role: 'Software Developer, Contract',
            years: '2026'
          },
          {
            company: 'CrashPad411 (USA)',
            role: 'Technical Lead',
            years: '2024 – 2026'
          },
          {
            company: 'Opn / Omise (Thailand)',
            role: 'Senior Software Engineer, SSO + Identity',
            years: '2021 – 2024'
          },
          {
            company: 'CGI — BC Provincial Government',
            role: 'Frontend Apps Lead',
            years: '2019 – 2021'
          },
          {
            company: 'Agereh Technologies, formerly Carbeeza (Canada)',
            role: 'Frontend Apps Lead',
            years: '2017 – 2019'
          }
        ],
        techCategories: [
          {
            name: 'Languages',
            items: [
              {name: 'JavaScript', years: '20 yr'},
              {name: 'HTML / CSS', years: '20 yr'},
              {name: 'PHP', years: '15 yr'},
              {name: 'TypeScript', years: '10 yr'},
              {name: 'Python', years: '3 yr'},
              {name: 'Go', years: '3 yr'},
              {name: 'C#', years: '3 yr'},
              {name: 'Java', years: '2 yr'}
            ]
          },
          {
            name: 'Frontend',
            items: [
              {name: 'React', years: '8 yr'},
              {name: 'React Native / Expo', years: '8 yr'},
              {name: 'Vue.js', years: '8 yr'},
              {name: 'Angular', years: '1 yr'}
            ]
          },
          {
            name: 'Backend & APIs',
            items: [
              {name: 'REST / OpenAPI', years: '15 yr'},
              {name: 'WebSockets', years: '15 yr'},
              {name: 'Node / Express', years: '10 yr'},
              {name: 'Laravel', years: '10 yr'},
              {name: 'NestJS', years: '5 yr'},
              {name: 'Flask', years: '3 yr'},
              {name: 'Spring Boot', years: '3 yr'},
              {name: 'gRPC', years: '3 yr'},
              {name: 'Quarkus', years: '2 yr'}
            ]
          },
          {
            name: 'Data',
            items: [
              {name: 'PostgreSQL / PostGIS', years: '10 yr'},
              {name: 'MySQL', years: '10 yr'},
              {name: 'ORMs', years: '15 yr'},
              {name: 'MongoDB', years: '5 yr'},
              {name: 'SQL Server', years: '3 yr'},
              {name: 'Solr', years: '2 yr'}
            ]
          },
          {
            name: 'Cloud & DevOps',
            items: [
              {name: 'CI/CD', years: '10 yr'},
              {name: 'AWS', years: '7 yr'},
              {name: 'Docker', years: '7 yr'},
              {name: 'Helm', years: '5 yr'},
              {name: 'OpenShift', years: '4 yr'},
              {name: 'Azure', years: '3 yr'},
              {name: 'Kubernetes', years: '3 yr'},
              {name: 'FluxCD', years: '3 yr'}
            ]
          },
          {
            name: 'Identity & messaging',
            items: [
              {name: 'OAuth2 / OIDC', years: '10 yr'},
              {name: 'Keycloak', years: '7 yr'},
              {name: 'RabbitMQ', years: '4 yr'},
              {name: 'PCI-DSS scope', years: '3 yr'},
              {name: 'NATS', years: '2 yr'},
              {name: 'Kafka', years: '2 yr'},
              {name: 'Microsoft Entra ID', years: '6 mo'}
            ]
          },
          {
            name: 'AI',
            items: [
              {name: 'Claude / Claude Code', years: '1 yr'},
              {name: 'MCP servers', years: '1 yr'}
            ]
          }
        ],
        issueDate: new Date().getFullYear()
      }
    }
  },
  computed: {
    /** Open-source totals and per-owner grouping, counted from the data file. */
    openSource() {
      const groups = OpenSourceData.owners
        .map(owner => ({owner, projects: OpenSourceData.projects.filter(p => p.owner === owner.id)}))
        .filter(group => group.projects.length)
      const repos = OpenSourceData.projects.flatMap(p => p.repos)

      return {
        groups,
        totals: {
          projects: OpenSourceData.projects.length,
          repos: repos.length,
          commits: repos.reduce((sum, r) => sum + this.toNumber(r.commits), 0).toLocaleString('en-US')
        }
      }
    }
  },
  methods: {
    toNumber(value) {
      return parseInt(String(value).replace(/,/g, ''), 10) || 0
    },
    projectCommits(project) {
      return project.repos.reduce((sum, r) => sum + this.toNumber(r.commits), 0).toLocaleString('en-US')
    },
    viewOpenSource() {
      this.$router.push('/open-source')
    },
    calculateYearsOfService() {
      const startYear = 2006
      const currentYear = new Date().getFullYear()
      return currentYear - startYear
    },
    viewDetail() {
      this.$emit('view-resume')
    },
    viewScoutingReport() {
      // TODO: Implement scouting report view
    }
  }
}
</script>

<style lang="scss">
#team-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 15vh;
  position: relative;
}

.military-id-card-container {
  perspective: 1000px;
  position: relative;
  z-index: 1;
}

.military-id-card {
  width: 800px;
  max-width: 95vw;
  background: linear-gradient(to bottom, #d4d4d4 0%, #e8e8e8 50%, #d4d4d4 100%);
  border: 3px solid #2c3e50;
  border-radius: 8px;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-family: 'Courier New', monospace;
  transform: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: rotateX(1deg) rotateY(-1deg) scale(1.01);
    box-shadow:
      0 15px 50px rgba(0, 0, 0, 0.7),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  }
}

.card-header {
  background: linear-gradient(to bottom, #1a1a1a 0%, #2c2c2c 100%);
  padding: 0.5rem;
  border-bottom: 2px solid #78b7d6;
  position: relative;

  .header-stripe {
    height: 3px;
    background: repeating-linear-gradient(
      90deg,
      #78b7d6 0px,
      #78b7d6 10px,
      #000 10px,
      #000 20px
    );
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
  }

  .department-seal {
    width: 50px;
    height: 50px;
    background: url('/images/blue-collar-dev.png') center/contain no-repeat;
    border: 2px solid #78b7d6;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .header-text {
    flex: 1;
    text-align: center;

    h3 {
      color: #78b7d6;
      font-size: 1.2rem;
      font-weight: 900;
      letter-spacing: 2px;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    h4 {
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      margin: 0.25rem 0 0 0;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
    }
  }
}

.card-body {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(to bottom, #e8e8e8 0%, #f5f5f5 100%);
}

.photo-section {
  flex-shrink: 0;
  text-align: center;

  .photo-frame {
    width: 150px;
    height: 180px;
    border: 3px solid #2c3e50;
    background: #fff;
    padding: 4px;
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.3),
      inset 0 0 0 1px rgba(0, 0, 0, 0.1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .id-number {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 1px;
    background: #000;
    color: #78b7d6;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
  }
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;

  .label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .value {
    font-size: 0.85rem;
    color: #2c3e50;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: right;
  }

  .security-clearance {
    color: #c0392b;
    font-weight: 900;
    text-shadow: 0 0 10px rgba(192, 57, 43, 0.3);
  }
}

.about-section {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ccc;

  .label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .about-text {
    font-size: 0.75rem;
    line-height: 1.4;
    color: #2c3e50;
    font-style: italic;
  }
}

.open-source-section {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ccc;

  /* The bare .label further up the card renders white on the dark header; inside
     the body it has to match the other section headings */
  > .label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .open-source-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
    font-size: 0.75rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .open-source-group {
    margin-bottom: 0.5rem;

    &__name {
      font-size: 0.7rem;
      letter-spacing: 0.05em;
      color: #7f8c8d;
      border-bottom: 1px solid #b6bcc0;
      padding-bottom: 0.15rem;
      margin-bottom: 0.25rem;
    }
  }

  .open-source-project {
    margin-bottom: 0.4rem;
  }

  .open-source-active {
    font-size: 0.7rem;
    color: #7f8c8d;
    padding-left: 0.75rem;
  }

  .open-source-repo {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: 0.7rem;
    padding: 0.05rem 0 0.05rem 0.75rem;

    &__name {
      color: #34495e;
      text-decoration: none;
      word-break: break-all;

      &:hover {
        text-decoration: underline;
      }

      em {
        font-style: normal;
        color: #7f8c8d;
        border: 1px solid #b6bcc0;
        border-radius: 3px;
        padding: 0 0.25rem;
        margin-left: 0.2rem;
      }
    }

    &__meta {
      color: #7f8c8d;
      white-space: nowrap;
    }
  }

  .open-source-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.15rem 0.75rem;
    font-size: 0.75rem;
    padding: 0.1rem 0;

    &__name {
      color: #2c3e50;
      font-weight: 700;
    }

    &__meta {
      color: #7f8c8d;
      white-space: nowrap;
    }
  }

  .view-report-btn {
    margin-top: 0.5rem;
  }
}

.missions-section {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ccc;

  .label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .missions-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .mission-item {
    background: rgba(120, 183, 214, 0.1);
    padding: 0.4rem 0.6rem;
    border-left: 3px solid #78b7d6;
    border-radius: 2px;
  }

  .mission-years {
    float: right;
    opacity: 0.7;
    font-weight: 400;
  }

  .mission-company {
    font-size: 0.7rem;
    font-weight: bold;
    color: #2c3e50;
    letter-spacing: 0.5px;
  }

  .mission-role {
    font-size: 0.65rem;
    color: #555;
    margin-top: 0.1rem;
  }
}

.skills-section {
  margin-top: 0.5rem;

  .label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .tech-category {
    margin-top: 0.5rem;

    &__name {
      font-size: 0.6rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #7b8794;
      margin-bottom: 0.2rem;
    }
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tech-badge {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: #78b7d6;
    font-size: 0.65rem;
    padding: 0.3rem 0.6rem;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: 0.5px;
    border: 1px solid #78b7d6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  em {
    font-style: normal;
    opacity: 0.65;
    margin-left: 0.2rem;
  }
}
}

.scouting-report-section {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #ccc;

  .label {
    font-size: 0.7rem;
    font-weight: bold;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }

  .view-report-btn {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: #78b7d6;
    font-size: 0.7rem;
    padding: 0.5rem 1rem;
    border: 2px solid #78b7d6;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
}

.card-footer {
  background: linear-gradient(to bottom, #2c2c2c 0%, #1a1a1a 100%);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #78b7d6;
}

.barcode-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .barcode {
    width: 120px;
    height: 40px;
    background: repeating-linear-gradient(
      90deg,
      #000 0px,
      #000 2px,
      #fff 2px,
      #fff 4px
    );
    border: 1px solid #78b7d6;
  }

  .issue-date {
    font-size: 0.65rem;
    color: #78b7d6;
    letter-spacing: 1px;
    font-weight: bold;
  }
}

.signature-section {
  text-align: right;

  .view-resume-btn {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #78b7d6 0%, #5a9db8 100%);
    color: #1a1a1a;
    font-size: 0.75rem;
    padding: 0.6rem 1.2rem;
    border: 2px solid #78b7d6;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: 1.5px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(135deg, #5a9db8 0%, #78b7d6 100%);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    }
  }
}

@media (max-width: 768px) {
  .military-id-card {
    transform: none;
  }

  .card-body {
    flex-direction: column;
    align-items: center;
  }

  .info-section {
    width: 100%;
  }

  .card-footer {
    flex-direction: column;
    gap: 1rem;
  }

  .signature-section {
    text-align: center;
  }
}
</style>
