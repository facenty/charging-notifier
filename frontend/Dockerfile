# React NODE bild

# Common build stage
FROM node:16-alpine3.12 as node-common-build-stage

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .


# Development build stage
FROM node-common-build-stage as node-development-build-stage

ENV NODE_ENV development

CMD ["npm", "run", "start"]

EXPOSE 3000

# Production build stage
FROM node-common-build-stage as node-production-build-stage

ENV NODE_ENV production

RUN npm run build

#Nginx stages

# Common build stage
FROM nginx:alpine as nginx-common-build-stage

COPY ./nginx/common/default.conf /etc/nginx/nginx.conf
# COPY ./nginx/common/default.conf /etc/nginx/conf.d/default.conf

# Development build stage
FROM nginx-common-build-stage as nginx-development-build-stage

COPY ./nginx/development/frontend.conf /etc/nginx/frontend.conf

# Production build stage
FROM nginx-common-build-stage as nginx-production-build-stage

#Copy frontend build files to the html app
COPY --from=node-production-build-stage /app/build/ /usr/share/nginx/html

COPY ./nginx/production/frontend.conf /etc/nginx/frontend.conf