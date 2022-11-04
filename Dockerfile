FROM node:lts as dependencies
WORKDIR /bb-web
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /bb-web
COPY . .
COPY --from=dependencies /bb-web/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /bb-web

COPY --from=builder /bb-web/public ./public
COPY --from=builder /bb-web/.next ./.next
COPY --from=builder /bb-web/node_modules ./node_modules
COPY --from=builder /bb-web/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]