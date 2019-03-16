---
id: design-a-remote-server-system
title: Design a remote server system
sidebar_label: Design a remote server system
---

>**Version compatibility**
>
>This feature is only available on the **Windows 10**, **macOS** and **HTML5** versions of *System Designer*.

With System Designer you can import a system of a running app on a remote server. You can then update the system from System Designer. All modifications to the system will be then send to the running system.

## Enable design mode on your running system

To enable *design* mode on your application, just install the [mode-admin-server extension](https://github.com/design-first/system-runtime/tree/master/extensions) in your system and start it:

```js
// require system runtime
const runtime = require('system-runtime');

// install mode-admin-server extension
runtime.install('node_modules/system-runtime/extensions/mode-admin-server.json');

// install and start your app
runtime.install('mysystem.json');
```

## Set the url of the server

* In System Designer, on the left toolbar, click on the 'configuration' icon. A configuration panel is then shown.
* Click on *Server-side* as value for *Type of debugging*,
* Set the url of the server you want to debug (example: *http://localhost*).

![Image Alt](../../img/69bc616-debug-1.png)

## Design your system

* Then on the left toolbar, click on the 'design' icon (the square with a pen icon). A message is then shown to inform you that a system has been found and it is ready to be imported.

![Image Alt](../../img/9b531ad-debug-2.png)

* Click on *Import* button. The system is then imported.

![Image Alt](../../img/2f0824c-debug-3.png)

Now you can explore your system. 

>All modifications to the system in System Designer will impact the running system.