FROM resin/rpi-raspbian
RUN sudo apt-get update
RUN sudo apt-get install git nodejs-legacy npm
RUN mkdir /home/rpi
RUN git config --global http.sslVerify false
RUN git clone https://github.com/fedechagu/rpi-cluster-manager.git /home/rpi
RUN /home/rpi/ npm install npm install -g express
ENV PORT 80
RUN npm start
