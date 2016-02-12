FROM resin/rpi-raspbian
RUN sudo apt-get update
RUN sudo apt-get install curl
RUN curl -O http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
RUN sudo apt-key add mosquitto-repo.gpg.key
RUN rm mosquitto-repo.gpg.key
RUN cd /etc/apt/sources.list.d/
RUN sudo curl -O http://repo.mosquitto.org/debian/mosquitto-jessie.list
RUN sudo apt-get update
RUN sudo apt-get install mosquitto mosquitto-clients
CMD ["/usr/sbin/mosquitto", "-d", "-p 3000"]
