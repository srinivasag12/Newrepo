FROM node:16.20.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --f

COPY . .

RUN export HOST=0.0.0.0 \
    && export PORT=4888 

EXPOSE 4888

CMD [ "npm", "start" ]
