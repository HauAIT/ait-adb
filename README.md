ait-adb
==========

## Installing

```bash
npm install ait-adb
```

## Watch

```bash
npm run dev
```

## Test

### unit tests

```bash
npm run test
```

### functional tests

By default the functional tests use an avd named `NEXUS_S_18_X86`, with API Level
18. To change this, you can use the environment variables `PLATFORM_VERSION`,
`API_LEVEL`, and `ANDROID_AVD`. If `PLATFORM_VERSION` is set then it is not
necessary to set `API_LEVEL` as it will be inferred.

```bash
npm run e2e-test
```

## Usage:

example:

```js
import ADB from 'ait-adb';

const adb = await ADB.createADB();
console.log(await adb.getPIDsByName('com.android.phone'));
```

### List of methods:

- `createADB`
- `getAdbWithCorrectAdbPath`
- `initAapt`
- `initZipAlign`
- `getApiLevel`
- `isDeviceConnected`
- `mkdir`
- `isValidClass`
- `forceStop`
- `clear`
- `stopAndClear`
- `availableIMEs`
- `enabledIMEs`
- `enableIME`
- `disableIME`
- `setIME`
- `defaultIME`
- `keyevent`
- `lock`
- `back`
- `goToHome`
- `isScreenLocked`
- `isSoftKeyboardPresent`
- `sendTelnetCommand`
- `isAirplaneModeOn`
- `setAirplaneMode`
- `broadcastAirplaneMode`
- `isWifiOn`
- `getScreenSize`
- `getScreenDensity`
- `setWifiState`
- `isDataOn`
- `setDataState`
- `setWifiAndData`
- `rimraf`
- `push`
- `pull`
- `processExists`
- `forwardPort`
- `reversePort` (ApiLevel >=21)
- `forwardAbstractPort`
- `ping`
- `restart`
- `startLogcat`
- `stopLogcat`
- `getLogcatLogs`
- `getPIDsByName`
- `killProcessesByName`
- `killProcessByPID`
- `broadcastProcessEnd`
- `broadcast`
- `packageAndLaunchActivityFromManifest`
- `compileManifest`
- `insertManifest`
- `hasInternetPermissionFromManifest`
- `getSdkBinaryPath`
- `getBinaryFromSdkRoot`
- `getBinaryFromPath`
- `getConnectedDevices`
- `getDevicesWithRetry`
- `restartAdb`
- `adbExec`
- `shell`
- `getAdbServerPort`
- `getEmulatorPort`
- `getPortFromEmulatorString`
- `getConnectedEmulators`
- `setEmulatorPort`
- `setDeviceId`
- `getRunningAVD`
- `getRunningAVDWithRetry`
- `killAllEmulators`
- `launchAVD`
- `waitForEmulatorReady`
- `waitForDevice`
- `reboot`
- `signWithDefaultCert`
- `signWithCustomCert`
- `sign`
- `zipAlignApk`
- `checkApkCert`
- `checkCustomApkCert`
- `getKeystoreHash`
- `isAppInstalled`
- `startApp`
- `startUri`
- `getFocusedPackageAndActivity`
- `waitForActivityOrNot`
- `waitForActivity`
- `waitForNotActivity`
- `uninstallApk`
- `installFromDevicePath`
- `install`
- `fingerprint` (ApiLevel >=23 | emulator only)
- `sendSMS` (emulator only)
- `rotate` (emulator only)
- `powerAC` (emulator only)
- `powerCapacity` (emulator only)
- `powerOFF` (emulator only)
- `gsmCall` (emulator only)
- `gsmSignal` (emulator only)
- `gsmVoice` (emulator only)
- `root`
- `unroot`