#!/usr/bin/env bash
# sudo -u ec2-user bash
export NODE_ENV=production
source /home/ec2-user/.bash_profile
cd ~/node
pm2 start bin/www -n www -i max --update-env

