FROM node:18-alpine

RUN mkdir -p /home/app/app; \
    chown node /home/app -R;

WORKDIR /home/app/app

ADD source/  /home/app/app/

RUN npm -g install $(sed -f packages_sed.sed package.json -n); \
    rm /home/node/app/* -f

USER node

ENTRYPOINT ["node", "app/server.js"]
