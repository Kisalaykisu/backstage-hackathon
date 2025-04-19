🚀 TWS DevOps Hackathon 2025 – Final Submission

Welcome to my 7-day journey through the TWS DevOps Hackathon 2025 where I explored the full lifecycle of a Backstage-based platform, DevOps best practices, and production-grade observability tools like Prometheus, Grafana, ArgoCD, GitHub Actions, and more.

⸻

🗕️ Day-wise Highlights

🧱 Day 1 – Local Setup & Exploration
	•	Setup Backstage locally
	•	Explored plugins and folder structure
	•	Created initial working baseline

⸻

🐳 Day 2 – Dockerization
	•	Dockerized the Backstage app
	•	Created multi-stage Dockerfile
	•	Used Docker Compose for service orchestration

⸻

☸️ Day 3 – Kubernetes + ArgoCD Setup
	•	Created Kubernetes manifests for Backstage
	•	Deployed via ArgoCD and set up GitOps pipeline
	•	Verified syncing and auto-deployments

⸻

🗄️ Day 4 – DB Integration + Secrets Handling
	•	Integrated Postgres DB and secrets using Helm
	•	Synced via ArgoCD with GitHub token injection
	•	Verified Backstage DB connectivity

⸻

🛡️ Day 5 – GitOps + Security Scanning
	•	Created GitHub Actions workflow to trigger ArgoCD
	•	Integrated Trivy to scan Docker image vulnerabilities
	•	Stored report in trivy-report.txt

⸻

📊 Day 6 – UI Polish + Metrics
	•	Enabled Prometheus monitoring for Backstage pods
	•	Configured Prometheus via ArgoCD
	•	Integrated Grafana and loaded metrics dashboards

⸻

🎮 Day 7 – Final Demo + Alerts
	•	Created Prometheus alert rules
	•	Added Grafana alerts dashboard with JSON
	•	Recorded final demo
	•	Included project-wide architecture diagram
	•	Cleaned and organized repo for submission

⸻

💎 Project Structure

my-backstage/
├── Day-1 to Day-7 folders    # Each contains code + screenshots + README
├── common-assets/
│   ├── team-members.txt
│   ├── logo.png
│   └── linkedin-posts/
│       ├── day1.txt
│       ├── day2.txt
│       └── ... day7-final.txt
├── README.md                 # You’re here!
└── .github/workflows/        # GitHub Actions CI/CD



⸻

🖼️ Visual Assets
	•	✅ Architecture Diagram: Day-7-Final-Demo/architecture-diagram.png
	•	✅ Backstage UI Image: Day-6-UI-Polish-Metrics/screenshots/backstage-ui-polished.png
	•	✅ Alerts Dashboard JSON: Day-7-Final-Demo/Grafana/alerts-dashboard.json
	•	🎥 Final Demo Video: Day-7-Final-Demo/video-demo.mp4

⸻

👌 Final Thoughts

Every day was a step closer to building a:
	•	Resilient Developer Portal
	•	GitOps-driven K8s setup
	•	Secure and Observable DevOps stack

This journey helped reinforce good infrastructure practices while pushing the boundaries of cloud-native tooling and UI polish.

⸻

🤝 Credits

Crafted with heart and hustle by Kisalay Srivastava
#TrainWithShubham #TWSDevOpsHackathon

⸻

✨ “Don’t just deploy. Observe. Secure. Automate. That’s DevOps.” ✨
