FROM node:18-alpine

WORKDIR /front/

COPY public/ /front/public
COPY src/ /front/src
COPY package.json /front/

RUN npm i
RUN npm install webpack-dev-server@4.14.0 --save --save-exact --save-dev

CMD ["npm", "start"]