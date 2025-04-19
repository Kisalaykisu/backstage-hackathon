# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install  
yarn dev
```

---

🚀 **TWS DevOps Hackathon 2025 – Final Submission**

Welcome to my 7-day journey through the **TWS DevOps Hackathon 2025**, where I explored the full lifecycle of a Backstage-based platform, DevOps best practices, and production-grade observability tools like **Prometheus**, **Grafana**, **ArgoCD**, **GitHub Actions**, and more.

---

### 🗕️ Day-wise Highlights

#### 🧱 Day 1 – Local Setup & Exploration
- Setup Backstage locally  
- Explored plugins and folder structure  
- Created initial working baseline

#### 🐳 Day 2 – Dockerization
- Dockerized the Backstage app  
- Created multi-stage Dockerfile  
- Used Docker Compose for service orchestration

#### ☸️ Day 3 – Kubernetes + ArgoCD Setup
- Created Kubernetes manifests for Backstage  
- Deployed via ArgoCD and set up GitOps pipeline  
- Verified syncing and auto-deployments

#### 🗄️ Day 4 – DB Integration + Secrets Handling
- Integrated Postgres DB and secrets using Helm  
- Synced via ArgoCD with GitHub token injection  
- Verified Backstage DB connectivity

#### 🛡️ Day 5 – GitOps + Security Scanning
- Created GitHub Actions workflow to trigger ArgoCD  
- Integrated Trivy to scan Docker image vulnerabilities  
- Stored report in `trivy-report.txt`

#### 📊 Day 6 – UI Polish + Metrics
- Enabled Prometheus monitoring for Backstage pods  
- Configured Prometheus via ArgoCD  
- Integrated Grafana and loaded metrics dashboards

#### 🎮 Day 7 – Final Demo + Alerts
- Created Prometheus alert rules  
- Added Grafana alerts dashboard with JSON  
- Recorded final demo  
- Included project-wide architecture diagram  
- Cleaned and organized repo for submission

---

### 💎 Project Structure

```
backstage-hackathon/
├── Day-1-Kickoff/
│   ├── README.md          ← Project idea, toolstack, objective
│   └── screenshots/       ← Logo, ArgoCD blank, VS Code setup
│
├── Day-2-Setup-Docker/
│   ├── Dockerfile         ← For Backstage
│   ├── custom-service/    ← Node.js microservice folder
│   ├── docker-compose.yml ← (if using)
│   └── screenshots/
│
├── Day-3-K8s-ArgoCD/
│   ├── k8s/
│   │   ├── backstage-deployment.yaml
│   │   ├── custom-api-deployment.yaml
│   │   └── service.yaml
│   ├── app.yaml           ← ArgoCD Application definition
│   └── screenshots/       ← ArgoCD sync, pod running
│
├── Day-4-DB-Integration/
│   ├── postgres-deployment.yaml
│   ├── node-api-db-connect.js
│   └── screenshots/       ← DB pod, pgadmin, API connect test
│
├── Day-5-GitOps-Actions/
│   ├── .github/
│   │   └── workflows/
│   │       └── deploy.yml
│   ├── trivy-report.txt   ← (if image scan used)
│   └── screenshots/
│
├── Day-6-UI-Polish-Metrics/
│   ├── plugin-screenshot.png
│   ├── Prometheus/
│   │   └── prometheus-values.yaml
│   └── screenshots/       ← Grafana dashboard, Backstage UI
│
├── Day-7-Final-Demo/
│   ├── architecture-diagram.png
│   ├── README-FINAL.md    ← Cleaned up readme
│   └── video-demo.mp4     ← Optional demo recording
    ├── Prometheus/
│   ├── alert-rules.yaml
│   └── prometheus-values.yaml
    ├── Grafana/
│      └── dashboards/
│   └── alerts-dashboard.json
├── screenshots/
│   ├── alertmanager-ui.png
│   └── alert-dashboard.png
│
└── common-assets/
    ├── logo.png
    ├── team-members.txt
    └── linkedin-posts/
        ├── day1.txt
        ├── day2.txt
        └── day7-final.txt



(It will changes as per my requirement)
Credit:Kisalay

```

---

### 🖼️ Visual Assets
- ✅ **Architecture Diagram:** `Day-7-Final-Demo/architecture-diagram.png`  
- ✅ **Backstage UI Screenshot:** `Day-6-UI-Polish-Metrics/screenshots/backstage-ui-polished.png`  
- ✅ **Grafana Alerts Dashboard JSON:** `Day-7-Final-Demo/Grafana/alerts-dashboard.json`  
- 🎥 **Final Demo Video:** `Day-7-Final-Demo/video-demo.mp4`

---

### 👌 Final Thoughts

Every day was a step closer to building a:
- Resilient Developer Portal  
- GitOps-driven K8s setup  
- Secure and Observable DevOps stack

This journey helped reinforce good infrastructure practices while pushing the boundaries of cloud-native tooling and UI polish.

---

### 🤝 Credits

Crafted with heart and hustle by **Kisalay Srivastava**  
#TrainWithShubham #TWSDevOpsHackathon

---

### ✨ Quote to Remember  
**“Don’t just deploy. Observe. Secure. Automate. That’s DevOps.”**
