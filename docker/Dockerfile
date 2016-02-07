FROM resin/rpi-raspbian
RUN sudo apt-get update
RUN sudo apt-get install git nodejs-legacy npm
RUN mkdir /home/rpi
RUN git config --global http.sslVerify false
RUN git clone https://github.com/fedechagu/rpi-cluster-manager.git /home/rpi
RUN cd /home/rpi/ npm install
ENV PORT 80
RUN npm start
