FROM node:18 AS development

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
