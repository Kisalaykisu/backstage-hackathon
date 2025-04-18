
# ✨ Day 6 - UI Polish + Metrics Monitoring (Prometheus + Grafana)

On Day 6, the focus shifted to improving the **developer experience** by enhancing the **Backstage UI**, adding plugins, and integrating **observability** using **Prometheus and Grafana**.

---


```
Day-6-UI-Polish-Metrics/
├── 📂Prometheus/
│   └── 📄prometheus-values.yaml         ← Custom scrape config for services
│
├── 📂screenshots/
│   ├── 📸grafana-dashboard.png          ← Metrics visualization
│   └── 📸backstage-ui-polish.png        ← Updated UI plugin integration
│
├── 📂plugins-added/                     ← (Optional) Custom plugins or patch notes
│
└── 📄README.md                          ← You’re reading it!
```

---

## 🛠️ Tools & Technologies Used

- **Backstage**: UI refinements via theme and plugin updates
- **Prometheus**: Metrics scraping from Kubernetes services
- **Grafana**: Dashboard to monitor Backstage performance
- **Helm**: Prometheus & Grafana installed via stable charts
- **NodePort & port-forwarding**: To access Grafana dashboards
- **Minikube**: Local Kubernetes runtime for setup

---

## 🧾 Key Steps Performed

1. Customized the Backstage UI (header tweaks, plugin card spacing)
2. Installed Prometheus & Grafana via Helm:
   ```bash
   helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
   helm install prometheus prometheus-community/prometheus
   helm install grafana grafana/grafana
   ```
3. Set up `prometheus-values.yaml` to include custom scrape configs
4. Used `kubectl port-forward` to open Grafana on `localhost:3000` and Prometheus on `localhost:9000`
5. Logged into Grafana (default creds: `admin/admin`) and imported sample dashboards
6. Captured screenshots of dashboard stats and refined UI elements

---

## 🧪 Challenges Faced

- 🧱 Helm failed initially due to CRD conflicts — resolved via `--skip-crds`
- 🔐 Grafana login not accessible — fixed port-forward and reset admin password
- 🔁 Dashboard panels not auto-updating — corrected Prometheus job labels
- 📦 Custom plugin not loading — traced to misconfigured import in `packages/app/src`

---

## 📊 Observability Wins

| Metric               | Insight Gained                          |
|----------------------|------------------------------------------|
| `http_request_total` | Tracked number of backend requests       |
| `pod_cpu_usage`      | Monitored resource spikes in pod usage   |
| `k8s_container_info` | Visualized which components were active  |

---

## 🎯 Takeaways

- Prometheus and Grafana enable **proactive monitoring** of your Backstage instance
- Polishing the UI with thoughtful plugin cards improves **developer UX**
- Metrics help detect performance bottlenecks **before** they impact usability

---

## 📌 Next Step (Day 7)

🎥 Final demo prep, CI/CD cleanup, and presentation polish.  
Get ready for the show! 🎬


