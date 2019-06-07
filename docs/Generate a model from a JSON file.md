---
id: generate-a-model-from-a-json-file
title: Generate a model from a JSON file
sidebar_label: Generate a model from a JSON file
---

In this tutorial we will show how to generate a model from a JSON file.

## Install the extension

* click on the *extension manager* button on the left toolbar,

![Image Alt](../../img/158b15a-JSON-1.png)

* a dialog is shown,
* select the extension *Generate a model from a JSON file*

![Image Alt](../../img/16cde55-JSON-2.png)

* click on the *Add* button.

You will see a message that tells that the extension is installed and a new icon appears on the left toolbar.

![Image Alt](../../img/7c966c8-JSON-3.png)

## Generate the model

* click on it,

![Image Alt](../../img/ed06149-JSON-4.png)

* set a name for your model, *MENU* for example,
* set a JSON, example:

```json
{
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        { "value": "New", "onclick": "CreateNewDoc()" },
        { "value": "Open", "onclick": "OpenDoc()" },
        { "value": "Close", "onclick": "CloseDoc()" }
      ]
    }
  }
}
```
* click on 'OK' button.

You will see a message that says that a model has been generated,

>You can go have a look on the model that has been generated.

## Create a component

* now click on *Components* tab,
* click on *MENU* under *Models* on the right,
* click on '+'' button on the left toolbar

![Image Alt](../../img/140ac52-JSON-5.png)

A new component is created.

* click now on the component to edit it,
* click on *Component* tab,
* paste the JSON you put to create the model,

![Image Alt](../../img/5b8dd67-JSON-6.png)

>We use the same JSON for creating the model and creating the component to validate that the model can validate this JSON.

* save it,

## Use APIs to navigate through your component

* click on the *Behaviors* tab,
* click on your system name under *System* on the right,

![Image Alt](../../img/3b1d623-JSON-7.png)

* click on *start* behavior to edit it,
* edit the code:

```js
function start() { 
  // get the component
  // replace this 'id' with the one of the compoenent
  // you have just created.
  const component = this.require('f14a101ae4913ffd');
 
  this.require('logger').info(component.menu().popup().menuitem(1).value());
}
```

>As you see, every property of the JSON in now a **property** or a **collection** of the new model.

* save it,
* run your system.

You will see a message on the bottom right.

![Image Alt](../../img/16ca1c1-JSON-8.png)

>Because we have no warning or error message, the JSON has been correctly validated by the model we have created.