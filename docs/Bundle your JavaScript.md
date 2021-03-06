---
id: bundle-your-javascript
title: Bundle your JavaScript
sidebar_label: Bundle your JavaScript
---

In this tutorial we will show:

* how to define a JS model,
* how to create a JS component and
* how to use it in your application and
* how to install it in another application.

>**There are many ways to bundle JavaScript files**
>
>This is one example on how to bundle and install JavaScript libraries with System Designer. But it is not the only way. Find the one that matches your needs.

## Define a JS model

First create a schema that:

* has for name **JS**
* has a **source** property and
* a **render** method.

![Image Alt](../../img/bundle-your-js-1.png)

Then edit the model:

* change the type of **source** in from *any* to *javascript* and
* empty *params* array of *render* method.

![Image Alt](../../img/bundle-your-js-2.png)

## Code the behavior of render method

Edit the **render** method of the model as follow:

```js
function render() {
  var div = document.createElement('script');
    
  div.innerHTML = this.source();
  document.head.appendChild(div);
}
```

![Image Alt](../../img/bundle-your-js-3.png)

## Create a JS component

Now create a *JS* component from the interface.

![Image Alt](../../img/bundle-your-js-4.png)

Then edit the component. You will notice that a **source** tab appears. It will allow you to add your javascript in your component. Put the JavaScript you want. In this example we set:

```js
alert('Hello World');
```

![Image Alt](../../img/bundle-your-js-5.png)

>**What happens?**
>
>Because in the model you tell that **source** property has for type *javascript*. System Designer let you edit this property as JavaScript. It means that System Designer will check that the JavaScript you write is correct.

Then click on the **Component** tab to edit the *__id_* property value of the component:

![Image Alt](../../img/bundle-your-js-6.png)

## Render your component in your application

Edit the **start** method of your system and:

* require the *JS* component and 
* call the render method.

```js
function start() { 
  this.require('alertComponent').render();
}
```

![Image Alt](../../img/bundle-your-js-7.png)

## Run your bundle

Now you can run your system and see the result.

![Image Alt](../../img/bundle-your-js-8.png)

## Install your bundle in another system

First, export your bundle by clicking on the *export* button. Choose **JSON** to export your bundle in a JSON file. Your bundle is ready then to be imported in another system.

### Client-side example

```html
<!DOCTYPE html>
<html>
    <head>
        <title>App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- your bundle -->  
        <link rel="system" type="application/json" href="myjs.json">
      
        <!-- other systems --> 
        <link rel="system" type="application/json" href="system1.json">
        <link rel="system" type="application/json" href="system2.json">
    </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/system-runtime/dist/system-runtime.min.js"></script>
    </body>
</html>
```

### Server-side example

```js
let runtime = require('system-runtime');

// install your bundle
runtime.install('myjs.json');

// install other systems
runtime.install('system1.json');
runtime.install('system2.json');
```

>To be able to work on the server, your system must not use the [DOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

>**More details**
>
>See [in this guide](export-a-system.html#export-to-json) to have more details on how to install your bundle client-side or client-side.

>**You can bundle any JavaScript library**
>
>System Designer allows you to easily import JavaScript libraries like [React](https://facebook.github.io/react/) in your system.