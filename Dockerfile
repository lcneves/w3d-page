FROM node:10-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]
