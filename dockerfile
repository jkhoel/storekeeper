FROM node:latest

ENV PORT 3000

EXPOSE 3000

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "build/"]