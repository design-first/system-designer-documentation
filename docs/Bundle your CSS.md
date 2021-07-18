---
id: bundle-your-css
title: Bundle your CSS
sidebar_label: Bundle your CSS
---

In this tutorial we will show:

* how to define a CSS model,
* how to create a CSS component,
* how to use it in your application and 
* how to install it in another application.

>**There are many ways to bundle CSS files**
>
>This is one example on how to bundle and install CSS with System Designer. But it is not the only way. Find the one that matches your needs.

## Define the CSS model

First create a schema that:

* has for name **CSS**
* has a **source** property and
* a **render** method.

![Image Alt](../../img/bundle-your-css-1.png)

Then edit the model:

* change the type of **source** in from *any* to *css* and
* remove all  of *render* method and rename parameter *param* to *id*.

![Image Alt](../../img/bundle-your-css-2.png)

## Code the behavior of render method

Edit the **render** method of the model as follow:

```js
function render() {
  var div = document.createElement('style');

  div.innerHTML = this.source();
  document.head.appendChild(div);
}
```

![Image Alt](../../img/bundle-your-css-3.png)

## Create a CSS component

Now create a *CSS* component from the interface:

![Image Alt](../../img/bundle-your-css-4.png)

Then edit the component by clicking on it. You will notice that a **source** tab appears. It will allow you to add your css in your component. Put the css you want. In this example we set:

```css
body {
  background-color: gray;
}
```

![Image Alt](../../img/bundle-your-css-5.png)

>**What happens?**
>
>Because in the model you tell that **source** property has for type *css*. System Designer let you edit this property as CSS. It means that System Designer will check that the css you write is correct.

Then click on the **Component** tab to edit the *__id_* property value of the component:

```json
{
	"_id": "grayColor",
	"source": "body {\n  background-color: gray;\n}"
}
```

![Image Alt](../../img/bundle-your-css-6.png)

## Render your component in your application

Edit the **start** method of your system and:

* require the *CSS* component and 
* call the render method.

```js
function start() { 
  this.require('grayColor').render();
}
```

![Image Alt](../../img/bundle-your-css-7.png)

## Run your system

Now you can run your system and see the result.

![Image Alt](../../img/bundle-your-css-8.png)

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
        <link rel="system" type="application/json" href="mycss.json">
      
        <!-- other systems --> 
        <link rel="system" type="application/json" href="system1.json">
        <link rel="system" type="application/json" href="system2.json">
    </head>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/system-runtime/dist/system-runtime.min.js"></script>
    </body>
</html>
```

>**More details?**
>
>See [in this guide](export-a-system.html#export-to-json) to have more details on how to install your bundle client-side.

>**You can bundle any CSS library**
>
>System Designer allows you to easily create reusable components from css libraries like [Bootstrap](https://getbootstrap.com) (we do that in the *dvd-collection* system that you can test in our set of system library).