FROM node:21.7.1-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
RUN npm rebuild bcrypt

COPY . ./
COPY .env ./

EXPOSE 3101

CMD ["npm", "run", "start"]
