FROM node:latest

ENV PORT 5000

EXPOSE 5000

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "build/"]