.PHONY: docs

all:
	rm -rf dist
	yarn install
	yarn build
	mv dist/prod docs
