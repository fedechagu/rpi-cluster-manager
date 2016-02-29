#!/bin/bash
free -m | grep Mem: | sed -e "s/[[:space:]]\+/ /g"
