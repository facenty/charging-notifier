# Common build stage
FROM node:16-alpine3.12 as common-build-stage

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . ./app

EXPOSE 8080

# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "dev"]

# Production build stage
FROM common-build-stage as production-build-stage

ENV NODE_ENV production

CMD ["npm", "run", "start"]
