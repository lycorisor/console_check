FROM alpine:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add nodejs npm; npm install

COPY . .
