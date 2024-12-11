name: Docker Build & Publish

on:
  push:
    branches: [main]

jobs:
  build:
    name: Build Docker
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository code 🛎️
        uses: actions/checkout@v4

      - name: Set up Docker Buildx 🚀
        uses: docker/setup-buildx-action@v3

      - name: Login to Docker Hub 🚢
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME}}
          password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN}}

      - name: Build and push 🏗️
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: |
            ${{ secrets.DOCKER_HUB_USERNAME}}/{docker_repository}:${{ github.sha }}
            ${{ secrets.DOCKER_HUB_USERNAME}}/{docker_repository}:latest