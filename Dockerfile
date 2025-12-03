#stage1 BUILD 
FROM node:20-alpine as build
WORKDIR /calculator
COPY package.json ./
RUN npm install 
#stage2 Production
FROM node:20-alpine
WORKDIR /calculator
COPY --from=build /calculator/node_modules ./node_modules
COPY calculator.html server.js .
EXPOSE 5000
CMD [ "node","server.js" ]




