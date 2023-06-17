FROM node:18.16.0

WORKDIR /usr/src/app

EXPOSE 3333

CMD ["npm", "run", "start:dev"]