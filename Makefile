PROJECT=huntress
SAMPLE_NAME=$(PROJECT)_sample

build-sample:
	docker build sample -t $(SAMPLE_NAME)

up-sample:
	docker-compose -f applications/sample/docker-compose.yml up sample-test
