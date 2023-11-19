FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install additional dependencies needed for development (including Tailwind CSS)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install app dependencies
COPY ./app/package*.json .
RUN npm install

# Add the build:styles step
COPY ./app/src/App.css ./src/
RUN npm run build:styles

# Bundle app source
COPY ./app/ .

EXPOSE 3000

CMD [ "npm", "start" ]
