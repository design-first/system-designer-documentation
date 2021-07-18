---
id: listen-to-a-data-store-event
title: Listen to a data store event
sidebar_label: Listen to a data store event
---

In this tutorial we will show how to listen to a components data store event.

>**Component data store**
>
>All your components are stored at runtime in a **data store** that you can access with [System Runtime APIs](https://designfirst.io/systemruntime/documentation/docs/manage-your-components.html).
>It sends:
>- an **update** event when a component has been updated in the data store,
>- an **insert** event when a component has been created in the data store and
>- a **remove** event when a component has been deleted from the data store.

## Define your system

First create a schema that:

* has for name **Person**
* has a **name** property

```json
{
  "_id": "eb74b2c8-a1b7-4a08-aa6e-eaf029e2e3f2",
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
  const luke = this.require('luke');
  
  // set the name property of luke component
  luke.name('luke');
}
```

## Listen to an update event of the data store

* click on the import button on the left toolbar,
* a dialog is shown,
* click on **from the library** radio button,
* select **Listen to components collection events** from the proposed systems,
* click on the **Compose** button,

![Image Alt](../../img/listen-to-a-data-store-event-dialog.png)

This system has now been composed in your system.
* on **Behaviors** tab, click on **_Database** model (on the right panel under *Models*),

![Image Alt](../../img/listen-to-a-data-store-event-_database.png)

* click on the **update** behavior to edit it,
* add this code:

```js
function update(event) { 
  // get logger component
  const logger = this.require('logger');
  
  // react only if the update occurs on Person
  if (event.collection === 'Person') {
    logger.info('component ' + event.id + ' has for new property ' + event.field + ' : ' + event.value);
  }
}
```

* save it and
* run your system.

You will see a message telling that the property of the component has changed.

![Image Alt](../../img/listen-to-a-data-store-event-run.png)

>A system makes a lot of update on the data store when running, so for performance reason always filter on a specific collection.