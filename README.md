# Tracking App - EStudy Studio

## Installation

Config: \.env.local

## Emulator

```bash
$ emulator -list-avds
$ emulator -avd Pixel_XL_API_23
$ emulator -avd Pixel_XL_API_23 -no-cache
```

## Rename Package

```bash
$ npx react-native-rename "Package Tracking" -b com.tronghieuit.tracking.delivery
```

## AppCenter

```bash
$ appcenter codepush release-react -a estudy.studio/tracking-app -d Staging
$ appcenter codepush release-react -a estudy.studio/tracking-app -d Production
```
