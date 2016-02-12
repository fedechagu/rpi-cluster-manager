FROM resin/rpi-raspbian
RUN apt-get update &&n apt-get install curl
RUN curl -O http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key
RUN apt-key add mosquitto-repo.gpg.key
RUN rm mosquitto-repo.gpg.key
RUN cd /etc/apt/sources.list.d/
RUN curl -O http://repo.mosquitto.org/debian/mosquitto-jessie.list
RUN apt-get update & apt-get install mosquitto mosquitto-clients
EXPOSE 3000 3000
CMD ["bin/sh", "/usr/sbin/mosquitto", "-d", "-p 3000"]
