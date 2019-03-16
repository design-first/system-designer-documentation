---
id: create-a-npm-module
title: Create a NPM module
sidebar_label: Create a NPM module
---

You can easily create a [npm](https://www.npmjs.com) module with *System Designer*.

## Configure your Github repository

- go to **[Github](https://github.com)**,
- create a repository to store your npm module,
- go to the *[Personal Access Tokens](https://github.com/settings/tokens)* page,
- click on *Generate new token* button,
- in *Token Description* type 'System Designer',
- add *repo* scope,
- click on *Generate token* button and
- copy the generated key.

## Configure System Designer

- open the configuration panel,

![Image Alt](../../img/39e1078-config.png)

- in *Github token* paste your key,
- in *Github repository* set the name of your repository (example: myname/myrepo ) and
- click on 'Save' button.

## Create your module

- once you have created your system, open the *Github* panel,
- add a comment,
- click on **Add a package.json file**,

![Image Alt](../../img/10f4418-push.png)

- click on *Execute* button and
- your system will be pushed in your *Github* repository with a *package.json*.

## Publish your module

To publish your module:

* [clone your repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) and
* go to [this documentation](https://docs.npmjs.com/getting-started/publishing-npm-packages).

## Use your module

First, you need to install [System Runtime](https://designfirst.io/systemruntime/) server-side:

```shell
npm install system-runtime --save
```

Install your module:

```shell
npm install mysystem --save
```
Then create a new file (*mysystem.js* for example) and call the **install** method of *runtime*:

```js
const runtime = require('system-runtime');

// install and start the system
runtime.install('mysystem');
```