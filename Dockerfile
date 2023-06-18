FROM node:18.16.0

WORKDIR /usr/src/app

COPY . .

EXPOSE 3333

CMD ["npm", "run", "start:dev"]