---
id: installation
title: Installation
sidebar_label: Installation
---

## Installation of the Progressive Web App

For the web app version optimized for desktop browsers:

* go to [https://designfirst.io/designer/](https://designfirst.io/designer/)
* If your browser is compatible, you will see a Dialog to install the application localy.

![Image Alt](../../img/pwa.png)

For the web app version optimized for mobile browsers:

* go to [https://designfirst.io/design/](https://designfirst.io/design/)
* If your browser is compatible, you will see a Dialog to install the application localy.

>These two version work offline (i.e. without an internet connection) once installed.

## Installation from a Store

* Installation via the [Mac App Store](https://itunes.apple.com/us/app/system-designer/id1102494854?l=fr&ls=1&mt=12).
* Installation via the [App Store](https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1132983280&mt=8).

## Installation in your existing web application

Install System Designer from [npm](https://www.npmjs.com/package/system-designer):

```shell
npm i system-designer
```

Then copy and paste the content of the **/node_modules/system-designer/dist** repository in your web project and go to the *index.html* page.

>Because System Designer is a full client full web application, it requires no backend to work. It means that you can install System Designer in your PHP, J2E, ASP.net, ... applications.

## Build the PWA version from the source code

Clone the [GitHub repository](https://github.com/design-first/system-designer):

```shell
git clone https://github.com/design-first/system-designer.git
```

Once you have cloned the repository, install the dependencies:

```shell
npm i
```

Then build and start System Designer:

```shell
npm run build
npm run start
```
Once server started, go to [http://localhost:8080/](http://localhost:8080/).

## Build the desktop versions from the source code

To build System Designer for [Electron](http://electron.atom.io):

```sh
npm run electron
```

Copy the content of `/dist` directory into your [System Designer for Electron](https://github.com/design-first/system-designer-electron) project.

Then in your [System Designer for Electron](https://github.com/design-first/system-designer-electron) project:

```sh
# build for macOS
npm run macOS

# build for Windows
npm run windows

# build for Linux
npm run linux
```

## Build the mobile versions from the source code

To build System Designer for [Cordova](http://cordova.apache.org):

```sh
npm run cordova
```

Copy the content of `/dist` directory into your [System Designer for Cordova](https://github.com/design-first/system-designer-cordova) project.

Then in your [System Designer for Cordova](https://github.com/design-first/system-designer-cordova) project:

```sh
# build for ios
cordova build ios

# build for android
cordova build android
```