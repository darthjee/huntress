PROJECT=huntress
HUNTRESS=$(PROJECT)
HUNTRESS_NAME=darthjee/$(HUNTRESS)
SAMPLE=sample

up-sample:
	docker-compose -f applications/$(SAMPLE)/docker-compose.yml up sample-dev

build-huntress:
	docker build source -t $(HUNTRESS_NAME)

up-huntress:
	docker-compose up huntress
