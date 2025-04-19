📦 Day 7 - Final Demo, Cleanup & Alerts

Theme: Bringing it all together! Time for cleanup, visualization, and project closure.

📁 Folder Structure

Day-7-Final-Demo/
├── architecture-diagram.png               # Final project architecture overview
├── 📂README-FINAL.md                        # Polished documentation
├── 📄video-demo.mp4                         # (Optional) Video walkthrough
│
├── 📂Prometheus/
│   ├── 📄alert-rules.yaml                  # Alert conditions like high CPU, memory
│   └── 📄prometheus-values.yaml            # Helm values that include alert rules
│
├── 📂Grafana/
│   └── dashboards/
│       └── 📄alerts-dashboard.json         # Grafana dashboard focused on alerts
│
├── 📂screenshots/
│   ├── 📸alertmanager-ui.png
│   └── 📸alert-dashboard.png               # Dashboards showing alert activity

🛠️ What I Did on Day 7

🗺️ Designed the architecture diagram to showcase the entire stack

✅ Cleaned up unused files, fixed namespace conflicts, and validated Helm deployments

🔔 Configured Prometheus alert rules to detect high CPU/memory and restart failures

📊 Imported a beautiful Grafana alerts dashboard with panels like Pod Restarts, CPU % etc.

👁️ Added Alertmanager and exposed it via NodePort (default: 9093)

📸 Captured key screenshots for final documentation

🎥 (Optional) Recorded a demo walkthrough video to summarize the hackathon

🔥 Key Takeaways

↳ Observability is critical for scalable systems: alerts show what’s going wrong before users feel it

↳ Having a clear project architecture helps new contributors and reviewers understand the setup

↳ Cleanup & documentation takes time but shows professionalism

↳ This project evolved from local Docker to Kubernetes to GitOps to Monitoring 💡

🥳 Closing Notes

This hackathon project taught me:

How to structure DevOps efforts over a week, each day focused and modular

The power of GitOps + Helm for declarative, scalable deployments

The importance of good UI, logs, alerts, and storytelling in engineering

It’s not just YAML. It’s the clarity of engineering thinking.

With ❤️ from — Kisalay Srivastava

#TrainWithShubham #TWSDevOpsHackathon