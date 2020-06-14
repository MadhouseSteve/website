FROM node:latest AS builder

ARG API_URL
ENV API_URL=$API_URL

WORKDIR /src

COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest AS runner

EXPOSE 80

COPY --from=builder /src/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf