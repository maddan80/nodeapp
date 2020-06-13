#!/usr/bin/env bash
# sudo -u ec2-user bash
source /home/ec2-user/.bash_profile
cd ~/node
pm2 stop www || true