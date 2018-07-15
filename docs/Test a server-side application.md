---
id: test-a-server-side-application
title: Test a server-side application
sidebar_label: Test a server-side application
---

>**Version Compatibility**
>
>This feature is only available on the **Windows 10** and **macOS** version of *System Designer*.

This tutorial will show you how to run a simple **[Node.js](https://nodejs.org/en/)** application with *System Designer*.

## Create a system

- create a system,
- click on *Behaviors* tab,
- click on the *start* behavior,
- set the code of the behavior with this code:

```js
function start() { 
  const http = require('http'),
      logger = this.require('logger');

  http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(1234);
  
  logger.info('server is running at http://127.0.0.1:1234');
}
```

![Image Alt](../img/28fcebf-node-app.png)

## Test your system

- run your system,
- open a browser,
- go to http://127.0.0.1:1234 and
- see the result.

>**There are some limitations**
>
>You can only run systems that uses **[Node.js](https://nodejs.org/en/)** native apis.