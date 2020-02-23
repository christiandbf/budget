# Docker is just for development
# Just run "docker-compose up"

FROM node:12.14.1

WORKDIR /usr/src/app
COPY . .

COPY package* ./
RUN npm install --silent

COPY . .

CMD npm run dev