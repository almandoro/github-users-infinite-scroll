.PHONY: dev
dev:
	docker-compose --profile dev up --build

.PHONY: prod
prod:
	docker-compose --profile prod up --build

.PHONY: tests
tests:
	docker-compose run --rm gh-users-ui_dev yarn lint && yarn test:ci