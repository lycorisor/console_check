FROM alpine:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add nodejs npm
RUN npm install

COPY . .
