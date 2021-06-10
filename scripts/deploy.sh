#!/usr/bin/env bash

set -e
set -x

NOW=$(date -u +'%Y-%m-%d %H:%M:%S')

gh-pages --dist build --message "deployment at $NOW"
