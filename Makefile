.PHONY: build ensure-image up dev

PROJECT=huntress
HUNTRESS=$(PROJECT)
IMAGE_NAME=darthjee/$(HUNTRESS)
SAMPLE=sample

up-sample:
	docker-compose -f applications/$(SAMPLE)/docker-compose.yml up sample-dev

build:
	docker build . -t $(IMAGE_NAME)
	
up:
	docker-compose up $(HUNTRESS)

dev:
	docker-compose run -it $(HUNTRESS)-test
