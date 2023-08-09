FROM node:20-alpine3.17
RUN mkdir app
COPY package*.json ./app/
WORKDIR /app
RUN npm install
RUN npx create-react-app my-react-app
WORKDIR /app/my-react-app
CMD [ "npm","start" ]


