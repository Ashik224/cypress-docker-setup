# Overview
This project covers up the following functionalities:
- Running Cypress tests in a Docker container
- Preparing a base for Jenkins or GitHub Actions integration
- Setting up a clean and reproducible test pipeline
- Generating test reports automatically

It’s ideal for anyone learning test automation, CI/CD, and DevOps fundamentals.
# Project Structure
- Dockerfile --> Defines the test environment
- cypress/ --> Test files and configs
- package.json --> Dependencies & scripts

# Setup
```bash
git clone https://github.com/Ashik224/cypress-docker-setup.git
cd cypress-docker-setup

docker build -t cypress-docker-setup .
docker run --rm cypress-docker-setup

```
