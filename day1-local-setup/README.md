# 🚀 Day 1: Backstage Hackathon Setup – Local Dev Environment

Welcome to **Day 1** of the DevOps Hackathon journey! Today, I focused on cloning and setting up the [Backstage demo repository](https://github.com/backstage/demo) on my local system to make sure everything is working before containerizing and deploying.

---

## 🧩 Objectives

- ✅ Clone the Backstage demo project.
- ✅ Install all necessary dependencies.
- ✅ Verify local run using `yarn dev`.
- ✅ Understand folder structure.
- ✅ Troubleshoot and resolve issues for smooth dev setup.

---

## 🛠️ Tools & Technologies Used

| Category              | Tools                                   |
|----------------------|------------------------------------------|
| Version Control       | Git, GitHub                             |
| Package Manager       | Yarn                                     |
| Runtime               | Node.js v18+                             |
| Frontend              | React.js (Backstage UI Framework)        |
| Backend               | Node (with Backstage plugins)            |
| Authentication        | Guest provider setup                     |
| Terminal              | Git Bash (Windows)                       |

---

## 🧾 Key Steps Performed

1. **Cloned the Repo**
   ```bash
   git clone https://github.com/backstage/demo.git
   cd demo
   ```

2. **Installed Dependencies**
   ```bash
   yarn install
   ```

3. **Compiled Project**
   ```bash
   yarn tsc
   yarn build
   ```

4. **Ran Dev Server**
   ```bash
   yarn dev
   ```

---

## 🧪 Challenges Faced

- Node version mismatch ⛔  
- Yarn global conflict on Windows ⚠️  
- GitHub provider error due to missing clientId/clientSecret  
  ✔️ Fixed by switching to **guest authentication** in `app-config.yaml`

---

## 🔍 Fun Fact

🎉 Did you know?  
Backstage was originally built by **Spotify** to streamline developer portals, and now it powers hundreds of teams across the globe! You're stepping into tooling used by companies like Netflix, Splunk, and more!

---

## 📂 Folder Structure for Day 1
```
📦my-backstage/
├── 📂packages/
│   ├── app/              # Frontend React app
│   └── backend/          # Node backend (includes 📁plugins)
├── plugins/              # Custom plugins
├──📄 app-config.yaml       # Main configuration
├── 📄catalog-info.yaml     # Software catalog metadata
├── 📄Dockerfile            # For containerizing the app
├── 📄README.md             # Project overview
```

---

## 👣 Next Steps

> 🛳️ Containerize the project using Docker.  
> 🧭 Configure Dockerfile and move toward Kubernetes/ArgoCD/Helm setup (Day 2).

---

## 🙌 Author

Crafted with patience and passion during the DevOps Hackathon by **Kisalay** ✨

---