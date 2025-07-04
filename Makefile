PROJECT=huntress
HUNTRESS=$(PROJECT)
HUNTRESS_NAME=darthjee/$(HUNTRESS)
SAMPLE=sample

up-sample:
	docker-compose -f applications/$(SAMPLE)/docker-compose.yml up sample-dev

build:
	docker build . -t $(HUNTRESS_NAME)

up:
	docker-compose up $(HUNTRESS_NAME)

test:
	docker-compose run -it $(HUNTRESS_NAME)-test /bin/bash
