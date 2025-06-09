FROM docker.n8n.io/n8nio/n8n
WORKDIR /home/node
USER root
RUN npm install -g nodemailer
USER node