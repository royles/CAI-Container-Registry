#!/usr/bin/env bash
# Installs Python dependencies into the project engine image (CAI build step).
set -ex
pip3 install --no-cache-dir -r requirements.txt
