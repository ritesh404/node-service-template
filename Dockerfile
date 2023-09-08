FROM node:18-alpine
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node . /app
RUN npm install && npm cache clean --force
RUN npm run build
CMD ["node", "index.js"]