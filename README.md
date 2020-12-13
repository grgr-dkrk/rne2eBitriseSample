# RN-E2E-Bitrise-sample

## Environment

- React Native 0.63
- Detox 17.14.3
- Yarn 1.22.0
- macOS 10.15

## Setup

```shell
yarn
```

## Test on Local(Android)

```shell
yarn build:android:ci && yarn android:setup && yarn test:android:ci
```

## Test on Bitrise(Android)

### install

```shell
brew update && brew install bitrise
```

### Run

```shell
bitrise run android-e2e
```
