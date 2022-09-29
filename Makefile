PROJECT=huntress
HUNTRESS=$(PROJECT)
HUNTRESS_NAME=darthjee/$(HUNTRESS)
SAMPLE=sample

up-sample:
	docker-compose -f applications/$(SAMPLE)/docker-compose.yml up sample-dev

build:
	docker build source -t $(HUNTRESS_NAME)

up:
	docker-compose up huntress
