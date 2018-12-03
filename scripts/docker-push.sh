#!/bin/bash

VERSION=$(head -n 1 ./VERSION)
IMAGE=$(head -n 1 ./config/docker-tag)
TAG=$IMAGE:$VERSION

docker build -t $TAG .
docker push $TAG
docker image rm $TAG
