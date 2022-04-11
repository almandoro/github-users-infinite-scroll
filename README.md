# Please review my solution! :)

## Instruction

### ⚠️ Required Step ⚠️
```shell
# Create .env and check if some value inside is missing
cp .env.example .env
```

### Standard
```shell
yarn install # install dependencies
yarn start # start dev server
yarn lint && yarn test:ci # run linter and tests
```

### Dockerish way
```shell
# Start the Development container
make dev

# Run tests (linter + UTs)
make tests

# Build & serve app on Nginx
make prod
```