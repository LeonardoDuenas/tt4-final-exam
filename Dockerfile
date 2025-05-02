#Stage 1: BUILD
FROM node:lts-alpine AS builder

# Set the working directory
WORKDIR /frontend

COPY ./frontend/package*.json /frontend/

RUN npm install

COPY ./frontend /frontend

RUN npm run build

#Stage 2: RUN
FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]