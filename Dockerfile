FROM node:14.13.0-alpine3.12
LABEL maintainer="Daniel Rataj <daniel.rataj@centrum.cz>"
LABEL org.opencontainers.image.source="https://github.com/whoopsmonitor/whoopsmonitor-alert-webhook"
LABEL com.whoopsmonitor.documentation="https://github.com/whoopsmonitor/whoopsmonitor-alert-webhook"
LABEL com.whoopsmonitor.env.WM_WEBHOOK_URL="Outgoing webhook URL"
LABEL com.whoopsmonitor.env.WM_WEBHOOK_METHOD="Method - GET or POST"

WORKDIR /app
COPY ./src/index.js ./index.js
COPY ./src/package.json ./package.json
COPY ./src/package-lock.json ./package-lock.json

RUN npm install

CMD [ "npm", "start", "--silent" ]
