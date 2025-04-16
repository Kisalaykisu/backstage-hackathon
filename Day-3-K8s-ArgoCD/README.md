# ☸️ Day 3 - Kubernetes & ArgoCD Setup for Backstage

Another big leap in our DevOps Hackathon journey — deploying Backstage & a custom microservice on Kubernetes, and enabling GitOps using ArgoCD!

---

## 📁 Folder Structure

```
Day-3-K8s-ArgoCD/
├── 📂k8s/
│   ├── 📄backstage-deployment.yaml      ← Backstage deployment using Docker image
│   ├── 📄custom-api-deployment.yaml     ← Node.js Express service deployment
│   └── 📄service.yaml                   ← Services for Backstage & API (NodePort)
│
├── 📄app.yaml                         ← ArgoCD Application manifest
├── 📂screenshots/                     ← CLI outputs, UI screenshots
└── 📄README.md                        ← You're reading it!
```

---

## 🛠️ Tools & Technologies Used

- **Kubernetes**: Container orchestration
- **Minikube**: Local K8s cluster
- **kubectl**: CLI to interact with Kubernetes
- **ArgoCD**: GitOps continuous deployment
- **GitHub**: Repo hosted for syncing with ArgoCD

---

## 🧾 Key Steps Performed

1. Created Kubernetes deployments for Backstage and a custom API
2. Defined NodePort services to expose both applications locally
3. Built & pushed the project code to a **GitHub repo**
4. Created an `app.yaml` pointing to the GitHub path for ArgoCD sync
5. Exposed the ArgoCD dashboard via port-forwarding to access at `localhost:8081`
6. Verified live sync status via the ArgoCD web UI 🎯

---

## 🧪 Challenges Faced

- ❌ **ImagePullBackOff**: Backstage public image wasn't accessible (`ghcr.io` denied access)
- 🛠️ Fixed by updating image references or testing with placeholder running services
- 🔐 Setup GitHub PAT securely using `git-credential-manager`
- 🧵 Port conflicts required changing ArgoCD port to `8081`

---

## 🎯 Learning & Takeaways

- ArgoCD CRDs must be installed before applying an Application
- GitOps = Peace of mind — it enforces declarative sync with zero manual effort
- Port-forwarding can be tricky with reserved ports, always try higher ranges!
- Even if some pods fail, GitOps validation and structure remain valid for demos

---

## 🎉 Fun Fact

GitOps isn’t just CI/CD — it’s how teams like Intuit and Alibaba run thousands of deployments per day using tools like ArgoCD 🚀

---

## 👣 Next Steps

> 🧠 Understand ArgoCD auto-sync, health checks, and lifecycle hooks  
> 🛳️ Prepare for Helm-based customization & CI/CD integration (Day 4+)

---

Built resiliently and GitOps-ready — by **Kisalay** ⚓
```

---

