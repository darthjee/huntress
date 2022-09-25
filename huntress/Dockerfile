FROM node:18-alpine

RUN mkdir -p /home/app/app; \
    chown node /home/app -R;

WORKDIR /home/app/app

ADD source/  /home/app/app/

RUN npm -g install

USER node

ENTRYPOINT ["node", "app/server.js"]
