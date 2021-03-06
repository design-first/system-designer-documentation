---
id: bundle-your-html
title: Bundle your HTML
sidebar_label: Bundle your HTML
---

In this tutorial we will show:

* how to define a HTML model,
* how to create a HTML component,
* how to use it in your application and 
* how to install it in another application.

>**There are many ways to bundle HTML files**
>
>This is one example on how to bundle and install html templates with System Designer. But it is not the only way. Find the one that matches your needs.

## Define the HTML model

First create a schema that:

* has for name **HTML**
* has a **source** property and
* a **render** method.

![Image Alt](../../img/bundle-your-html-1.png)

Then edit the model:

* change the type of **source** in from *any* to *html* and
* change the type of the fist parameter from *any* to *string*.

![Image Alt](../../img/bundle-your-html-2.png)

## Code the behavior of render method

Edit the **render** method of the model as follow:

```js
function render(id) {
  let dom = null;

  if (id === 'body') {
    dom = document.body;
  } else {
    dom = document.getElementById(id);
  }

  dom.innerHTML = this.source();
}
```

![Image Alt](../../img/bundle-your-html-3.png)

## Create a HTML component

Now create a *HTML* component from the interface.

![Image Alt](../../img/bundle-your-html-4.png)

Then edit the component. You will notice that a **source** tab appears. It will allow you to add your html in your component. Put the HTML you want. In this example we set:

```html
<input type="text" name="input" placeholder="Enter some text here">
```

![Image Alt](../../img/bundle-your-html-5.png)

>**What happens?**
>
>Because in the model you tell that **source** property has for type *html*. System Designer let you edit this property as HTML. It means that System Designer will check that the html you write is correct.

Then click on the **Component** tab to edit the *__id_* property value of the component:

![Image Alt](../../img/bundle-your-html-6.png)

## Render your component in your application

Edit the **start** method of your system and:

* require the *HTML* component and 
* call the render method.

```js
function start() { 
  this.require('inputComponent').render('body');
}
```

![Image Alt](../../img/bundle-your-html-7.png)

## Run your bundle

Now you can run your system and see the result.

![Image Alt](../../img/bundle-your-html-8.png)

## Install your bundle in another system

First, export your bundle by clicking on the *export* button. Choose **JSON** to export your bundle in a JSON file. Your bundle is ready then to be imported in another system.

Example:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- your bundle -->  
        <link rel="system" type="application/json" href="myhtml.json">
      
        <!-- other systems --> 
        <link rel="system" type="application/json" href="system1.json">
        <link rel="system" type="application/json" href="system2.json">
    </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/system-runtime/dist/system-runtime.min.js"></script>
    </body>
</html>
```

>**More info?**
>
>See [in this guide](export-a-system.html#export-to-json) to have more details on how to install your bundle client-side.