FROM node:latest

WORKDIR /web/app/
COPY package.json /web/app
RUN npm install
COPY . /web/app

RUN npm install -g nodemon
EXPOSE 4040
CMD [ "node", "app.js" ]
