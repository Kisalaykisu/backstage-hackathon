# 🐘 Day 4 - PostgreSQL Integration & Helm Chart for Backstage

Day 4 of the DevOps Hackathon was all about **bringing persistence and Helm magic** into the Backstage world! We integrated a PostgreSQL database, converted raw Kubernetes manifests into a proper Helm chart, and synced everything with ArgoCD.

---

## 📁 Folder Structure

```
Day-4-DB-Helm-Integration/
├── 📄postgres-deployment.yaml         ← K8s deployment for PostgreSQL
├── 📄node-api-db-connect.js           ← Node.js script to test DB connectivity

├── 📂helm/
│   └── 📂backstage/
│       ├── 📂charts/                  ← Optional subcharts
│       ├── 📂templates/              
│       │   ├── 📄deployment.yaml      ← Helm deployment template
│       │   ├── 📄service.yaml         ← NodePort service template
│       │
│       ├── 📄values.yaml              ← Configurable image/port values
│       └── 📄Chart.yaml               ← Helm metadata

├── 📂secrets/
│   └── 📄github-token.yaml            ← Secure GitHub token for Backstage plugins

├── 📂screenshots/                     ← pgAdmin UI, ArgoCD UI, CLI outputs
├── 📄app.yaml                         ← ArgoCD Application definition for Helm sync
└── README.md                        ← You’re reading it!
```

---

## 🛠️ Tools & Technologies Used

- **Helm**: K8s package manager to templatize configs
- **PostgreSQL**: DB backing for Backstage
- **Kubernetes + Minikube**: Local orchestrator
- **ArgoCD**: GitOps CD for Helm chart sync
- **Node.js**: Quick script to validate DB connectivity
- **kubectl, port-forward**: CLI utilities

---

## 🧾 Key Steps Performed

1. Defined `postgres-deployment.yaml` to deploy a local DB
2. Wrote a simple Node.js script (`node-api-db-connect.js`) to test DB connection
3. Created `helm/backstage/` structure with Chart.yaml and values.yaml
4. Converted raw YAML into Helm templates for Backstage deployment
5. Wrote `github-token.yaml` as a Kubernetes Secret for secure GitHub auth
6. Applied all components using `kubectl` and verified via `kubectl get pods`
7. Synced the Helm chart using ArgoCD’s `app.yaml` pointing to Helm path
8. Captured proof via screenshots (ArgoCD dashboard, pod logs, Helm output)

---

## 🧪 Challenges Faced

- 🧵 Templating `deployment.yaml` correctly with `.Values` took multiple retries
- 🔐 Helm chart couldn’t read GitHub token until namespace was set correctly
- 🔄 ArgoCD didn’t detect the Helm sync until we re-structured repo path properly
- ⚠️ Helm upgrade errors due to leftover CRDs and failed hooks — resolved by cleanup

---

## 🎯 Learning & Takeaways

- Helm templates make your K8s deployment modular and versioned  
- PostgreSQL brings production-like persistence — no more `:memory:` DBs  
- GitOps with ArgoCD supports Helm like a boss  
- `values.yaml` lets you abstract configs cleanly across environments

---

## 🎉 Fun Fact

Helm was originally developed by Deis (acquired by Microsoft) and was nicknamed the **"apt-get for Kubernetes"** 🚀

---

## 👣 Next Steps

> 🔄 Enable auto-sync and prune strategies in ArgoCD  
> 📊 Integrate monitoring tools like Prometheus & Grafana  
> 🎯 Start polishing UI & plugins (Day 5 – let’s roll!)

---

Built to scale, helm'd to perfection — by **Kisalay** ⚓
```

---

