# 🔄 Day 5 - GitOps Actions + Security Scan with Trivy

Day 5 focused on **automating deployments** and **securing our images** — combining the power of **GitHub Actions**, **ArgoCD**, and **Trivy** to enforce a GitOps workflow with security baked in.

---

## 📁 Folder Structure

```
Day-5-GitOps-Actions/
├── 📂.github/
│   └── 📂workflows/
│       └── 📄deploy.yml              ← GitHub Actions workflow for syncing with ArgoCD
│
├── 📄trivy-report.txt                ← Vulnerability scan result using Trivy
├── 📂screenshots/                    ← ArgoCD sync + GitHub Actions run screenshots
└── 📄README.md                       ← You’re reading it!
```

---

## ⚙️ Tools & Technologies Used

- **GitHub Actions**: CI automation to sync code with ArgoCD
- **ArgoCD**: GitOps tool to apply manifests/Helm changes on cluster
- **Trivy**: Security scanner for Docker images (e.g., `backstage/backstage`)
- **Minikube**: Local Kubernetes cluster
- **kubectl**: CLI to interact with K8s
- **YAML**: Declarative config format for GitOps automation

---

## 🧾 Key Steps Performed

1. Created `.github/workflows/deploy.yml` to auto-sync with ArgoCD
2. Configured the workflow to:
   - Install `kubectl` and ArgoCD CLI
   - Authenticate using GitHub token
   - Sync manifests with `argocd app sync`
3. Wrote a sample Trivy scan command:
   ```bash
   trivy image backstage/backstage:latest > trivy-report.txt
   ```
4. Created `trivy-report.txt` to log vulnerabilities for audit/compliance
5. Took screenshots of successful GitHub Action workflow run and ArgoCD sync
6. Pushed the workflow and triggered actions using `git push`

---

## 🧪 Challenges Faced

- ⚠️ **Trivy not found** — had to install Trivy manually on Windows using PowerShell
- 🔑 **Secret token exposure** — ensured GitHub token was kept base64-encoded and secure
- 🚫 **ArgoCD repo access failed** — fixed by configuring `github-token.yaml` as K8s secret

---

## 📊 Trivy Vulnerability Summary

From `trivy-report.txt`:
- Total Vulnerabilities: `6`
  - `CRITICAL`: 1
  - `HIGH`: 2
  - `MEDIUM`: 2
  - `LOW`: 1

Sample entry:
```plaintext
- Package: openssl
  CVE: CVE-2022-0778
  Title: Infinite loop vulnerability in certificate parsing
  Severity: CRITICAL
```

---

## 🚀 What This Setup Enables

- Push to GitHub → GitHub Actions → ArgoCD auto-sync  
- Optional security scan with Trivy before production rollout  
- End-to-end GitOps loop from version control to cluster state  

---

## 🎯 Takeaways

- GitOps isn't just about syncing YAML — it's about enforcing policy, automation, and safety
- GitHub Actions make CI/CD seamless when paired with ArgoCD
- Trivy helps surface hidden security issues early in the pipeline

---

## 🛠️ Next Steps

> 🔐 Rotate GitHub tokens regularly  
> 🔄 Enable ArgoCD auto-sync and webhooks  
> 🧪 Integrate security gates using Trivy + GitHub PR checks  

---

Built with automation, secured with intent — by **Kisalay** 🛡️
```

