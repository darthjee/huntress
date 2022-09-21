PROJECT=huntress
SAMPLE_NAME=$(PROJECT)_sample

build-sample:
	docker build sample -t $(SAMPLE_NAME)
