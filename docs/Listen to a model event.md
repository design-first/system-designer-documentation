---
id: listen-to-a-model-event
title: Listen to a model event
sidebar_label: Listen to a model event
---

In this tutorial we will show how to listen to a property change event.

>**Model events**
>
>In System Designer, you can listen to a property change or a collection change (i.e. add/remove item).

## Define your system

First create a schema that:

* has for name **Person**
* has a **name** property

```json
{
	"_id": "bd8493b0-6e56-4ac3-b008-d5d0b2cf5a71",
	"_name": "Person",
	"_inherit": [
		"_Component"
	],
	"name": "property"
}
```

* then create a component,
* click on it to edit it,
* change the value of **_id** to *luke*,

```json
{
  "_id": "luke",
  "name": ""
}
```

* then edit the **start** method of your system and 
* add this code:

```js
function start() { 
  // get luke component
  let luke = this.require('luke');
  
  // set the name property of luke component
  luke.name('luke');
}
```

## Listen to the property change

* on **Behaviors** tab, click on **Person** model (on the right panel under *Models*),
* click on the **+** button on the left toolbar to add a new behavior,
* a dialog is shown,
* select **name** and click on the **Create** button,

![Image Alt](../../img/listen-to-a-model-event-create.png)

* a behavior is now created,
* click on it to edit it,
* add this code:

```js
function name(value) { 
  // get logger component
  let logger = this.require('logger');
  
  // log this message when the name property of a component changes
  logger.info('component ' + this.id() + ' has for new name ' + value);
}
```

* save it and
* run your system.

You will see a message telling that the property of the component has changed.

![Image Alt](../../img/listen-to-a-model-event-run.png)