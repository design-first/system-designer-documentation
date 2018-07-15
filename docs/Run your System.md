---
id: run-your-system
title: Run your System
sidebar_label: Run your System
---

You can run and debug your system in System Designer.

## Run your system

To run a system:
* click on the *Run* button on the left and
* a new window will be open and your system will run in its context.

>**You can test Node.js APIs**
>
>If your systems uses native **[Node.js](https://nodejs.org/en/)** apis, you can run your system with *System Designer* (* Windows 10 and macOS versions only).

## Debug your system

* to debug your system, add some logs in your code. For example, you can add this code in the *start* method of your system:

```js
function start() { 
  this.require('logger').debug('Hello World');
}
```

* run your app,
* click on the **Logs** tab and
* all the logs will be shown there.

![Image Alt](../img/2cfa521-debug.png)

>**What are these informations shown at the bottom?**
>
>All logs of your systems are also shown as messages (at the bottom right of *System Designer*).

>**How can I log informations?**
>
>*logger* APIs are inspired by *Log4J*, so you have:
>- **this.require('logger').debug**('this is a debug message'');
>- **this.require('logger').info**('this is an info message'');
>- **this.require('logger').warn**('this is a warning message'');
>- **this.require('logger').error**('this is an error message'');

## Advanced mode

>**Compatibility version**
>
>This feature is only available on the **Windows 10** and **macOS** versions of *System Designer*.

When running your application:
* go to the menu,
* click on **Menu > Toggle Developper Tools**.

The [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/) is opened and you can debug your system.

![Image Alt](../img/ac7ce0e-debugger.png)

>**Use System Runtime APIS**
>
>Remember that you can use [System Runtime](https://designfirst.io/systemruntime/) APIs to explore your system.
