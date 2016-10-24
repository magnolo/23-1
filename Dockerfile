FROM node:latest

RUN npm i -g typings

ENV CONTAINER_PATH /usr/src/23deg
ENV BUILD_ENV production
WORKDIR /tmp

COPY package.json /tmp/

RUN npm install

WORKDIR $CONTAINER_PATH
COPY . $CONTAINER_PATH

RUN cp -a /tmp/node_modules $CONTAINER_PATH
RUN typings install
RUN npm run build

CMD if [ "${BUILD_ENV}" = "dev" ]; then npm start | npm run watch; else npm start; fi
#CMD ["npm", "start"]

EXPOSE 3000
