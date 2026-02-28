# Mobile Testing

## Prerequisite

Make sure you have installed `NodeJs` and `npm` on your local machine.

### Install appium globally

```bash
npm install -g appium
```

### Verify appium installation

```bash
appium --version
```

### Install UiAutomator2 driver

```bash
appium driver install uiautomator2
```

## Getting started

### Install required libraries

```bash
npm install
```

### Modify wdio.conf.ts file

#### Edit the appPath

```bash
const appPath = path.join(__dirname, "apk", "ApiDemos-debug.apk");
```

#### Edit capabilities

```bash
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel4XL",
      "appium:platformVersion": "10.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": appPath,
      "appium:noReset": false,
      "appium:fullReset": false,
      "appium:uiautomator2ServerInstallTimeout": 60000,
      "appium:uiautomator2ServerLaunchTimeout": 60000,
      "appium:adbExecTimeout": 120000,
    },
  ],
```

### Run test file

```bash
npm run wdio
```

### Generate report

```bash
npm run serve
```

**Note:** Report can be viewed on [http://127.0.0.1:59364](http://127.0.0.1:59364)
