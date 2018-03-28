FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "/usr/local/bin/npm", "start" ]