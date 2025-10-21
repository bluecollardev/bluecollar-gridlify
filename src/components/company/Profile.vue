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
            </div>

            <div class="about-section">
              <div class="label">ABOUT:</div>
              <div class="about-text">
                {{ profileData.about }}
              </div>
            </div>

            <div class="skills-section">
              <div class="label">PRIMARY TECHNOLOGIES:</div>
              <div class="tech-badges">
                <span v-for="tech in profileData.primaryTech" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="missions-section">
              <div class="label">RECENT MISSIONS:</div>
              <div class="missions-list">
                <div v-for="(mission, index) in profileData.recentMissions" :key="index" class="mission-item">
                  <div class="mission-company">{{ mission.company }}</div>
                  <div class="mission-role">{{ mission.role }}</div>
                </div>
              </div>
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
            <div class="signature-line"></div>
            <div class="signature-label">AUTHORIZED SIGNATURE</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
        photo: '/images/lucas-lopatka-profile.png',
        idNumber: 'BC-' + new Date().getFullYear() + '-001',
        rank: 'SENIOR SOFTWARE ENGINEER',
        specialty: 'FULL-STACK DEVELOPMENT',
        yearsOfService: this.calculateYearsOfService(),
        clearance: 'CSIS-LVL-2',
        about: 'Providing discerning international clients with intuitive, engaging, reliable and secure software solutions, solving complex business problems for a wide range of industries.',
        recentMissions: [
          {
            company: 'Opn Payments (Thailand)',
            role: 'Technical Lead'
          },
          {
            company: 'CGI Inc. (Canada)',
            role: 'Team Lead'
          },
          {
            company: 'BC Developers Exchange',
            role: 'Application Delivery Lead'
          },
          {
            company: 'Carbeeza Inc. (Canada)',
            role: 'Frontend Applications Lead'
          },
          {
            company: 'Alberta Motor Association',
            role: 'Technical Lead'
          }
        ],
        primaryTech: [
          'TypeScript',
          'React',
          'Node.js',
          'Vue.js',
          'Go',
          'AWS',
          'Kubernetes'
        ],
        issueDate: new Date().getFullYear()
      }
    }
  },
  methods: {
    calculateYearsOfService() {
      const startYear = 2006
      const currentYear = new Date().getFullYear()
      return currentYear - startYear
    },
    viewDetail() {
      this.$emit('view-resume')
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
  transform: rotateX(2deg) rotateY(-2deg);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: rotateX(0deg) rotateY(0deg) scale(1.02);
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

  .signature-line {
    width: 150px;
    height: 30px;
    border-bottom: 2px solid #78b7d6;
    margin-bottom: 0.25rem;
  }

  .signature-label {
    font-size: 0.6rem;
    color: #78b7d6;
    letter-spacing: 1px;
    font-weight: bold;
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
