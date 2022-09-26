PROJECT=huntress
HUNTRESS=$(PROJECT)
HUNTRESS_NAME=darthjee/$(HUNTRESS)
SAMPLE_NAME=$(PROJECT)_sample
SAMPLE=sample

build-sample:
	docker build $(SAMPLE) -t $(SAMPLE_NAME)

up-sample:
	docker-compose -f applications/$(SAMPLE)/docker-compose.yml up sample-test

dev-sample:
	docker-compose -f applications/$(SAMPLE)/docker-compose.yml run sample-test /bin/bash

build-huntress:
	docker build $(PROJECT) -t $(HUNTRESS_NAME)

up-huntress:
	docker-compose up huntress
