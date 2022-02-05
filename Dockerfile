FROM node:16
WORKDIR /api-server
ADD package.json /api-server/
RUN npm install --silent
ADD ./scripts/start.js /api-server/scripts/
ADD ./src /api-server/src/