FROM node:20-bullseye

WORKDIR /docker-container-setup
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# Install Xvfb and Linux dependencies for Cypress
RUN apt-get update && apt-get install -y \
xvfb \
libgbm-dev \
libgtk-3-0 \
libnotify-dev \
libgconf-2-4 \
libnss3 \
libxss1 \
libasound2 \
fonts-liberation \
libappindicator3-1 \
xdg-utils \
curl \
wget \
ca-certificates \
--no-install-recommends && rm -rf /var/lib/apt/lists/*

CMD ["npm", "run", "test-suite"]