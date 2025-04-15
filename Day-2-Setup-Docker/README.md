# 🚀 Day 2 - Docker Setup for Backstage

A major milestone in our DevOps Hackathon journey — containerizing our Backstage app and spinning up a custom Node.js microservice!

---

## 📁 Folder Structure

```
Day-2-Setup-Docker/
├── 📂1-single-stage/
│   ├──📄 Dockerfile            ← Simple all-in-one Backstage image
│   └──📄README.md             ← Why it's good for quick prototyping
│
├── 📂2-multistage/
│   ├── 📄Dockerfile            ← Clean production image using multistage
│   └── 📄README.md             ← Optimizations & reasoning
│
├──📂3-docker-compose/
│   ├── 📄docker-compose.yml    ← Runs Backstage + custom-service
│   ├── 📄Dockerfile            ← Reused multistage Dockerfile
│   ├── 📄custom-service/
│   │   └── index.js          ← Simple Express microservice
│   └── 📄README.md             ← Microservice usage + compose context
│
├── 📂screenshots/
│   ├── docker-backstage.png   ← Backstage CLI logs or localhost:7007
│   └── docker-customapi.png   ← Optional: Custom service test (e.g., curl)
│
└── README.md                 ← Overview of Day 2, summary of all 3 variants
```

---

## 🛠️ Tools & Technologies Used

- **Docker**: Containerization
- **Docker Compose**: Multi-container orchestration
- **Node.js**: Lightweight Express API as microservice
- **Backstage CLI**: For app lifecycle commands

---

## 🧾 Key Steps Performed

1. Created a **single-stage Dockerfile** to quickly prototype the Backstage image
2. Developed a **multistage Dockerfile** to optimize the image size and dependencies
3. Designed a **custom Express service** to simulate backend integration
4. Used **docker-compose** to spin up Backstage and the microservice in parallel
5. Captured **screenshots** of logs and API connectivity for verification

---

## 🧪 Challenges Faced

- TypeScript compiler errors (`tsc`) due to missing tsconfig inputs.
- Docker `yarn build` failed initially — solved by validating `scripts` section.
- Compose misconfigurations until `working_dir` and context paths were fixed.
- Required proper volume mapping for dev mode.

---

## 🎯 Learning & Takeaways

- Single-stage Dockerfiles are best for quick POCs, but multistage wins for production
- Docker Compose speeds up local DevOps simulations
- Breaking builds are your best teacher when debugging container setups 💡

---

## 🎉 Fun Fact

Did you know? Backstage was born at Spotify to solve their internal microservice sprawl — and now we just containerized it ourselves. Feels cool, right?

---

## 👣 Next Steps

> 🏗️ Containerize the project using Docker.
> ⏱️ Configure Dockerfile and move toward Kubernetes/ArgoCD/Helm setup (Day 3).

---

Built with focus & fun, by **Kisalay** 🛠️

