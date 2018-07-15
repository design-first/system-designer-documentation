---
id: installation
title: Installation
sidebar_label: Installation
---

## Installation from a Store

* Installation via the [Windows Store](https://www.microsoft.com/store/apps/9p05jrx99h87).
* Installation via the [Mac App Store](https://itunes.apple.com/us/app/system-designer/id1102494854?l=fr&ls=1&mt=12).
* Installation via the [App Store](https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1132983280&mt=8).
* Installation via the [Play Store](https://play.google.com/store/apps/details?id=com.ecarriou.systemdesignerios).

## Installation in your existing web application

Install System Designer from [npm](https://www.npmjs.com/package/system-designer):

```shell
# install System Designer as a dependency
npm i system-designer
```

Then copy and paste the content of the **/node_modules/system-designer/dist** repository in your web project and go to the *index.html* page.

>Because System Designer is a full client full web application, it requires no backend to work. It means that you can install System Designer in your PHP, J2E, ASP.net, ... applications.

## Build from the source code

Clone the [GitHub repository](https://github.com/design-first/system-designer):

```shell
$ git clone https://github.com/design-first/system-designer.git
```

Once you have cloned the repository, install the dependencies:

```shell
$ npm i
```

Then build and start System Designer:

```shell
# build
$ npm run build
# start web server
$ npm run start
```
Once server started, go to [http://localhost:8080/](http://localhost:8080/).