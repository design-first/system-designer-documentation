---
id: send-messages
title: Send messages
sidebar_label: Send messages
---

In this tutorial we will show how to react to messages send by the system.

>At runtime a **channel** component is defined to send messages.

## Define the message

After creating a system:
* click on the** import** button on the left toolbar,
* a dialog is shown,
* click on **from the library** radio button,
* select **Send messages threw a channel** from the proposed systems,
* click on the **Compose** button,

![Image Alt](../img/743f357-system-designer-channel-1.png)

This system has now been composed in your system.
* on **Schemas** tab, click on **_Channel** model (on the right panel under *Schemas*),
* click on **_Channel** schema to edit it,
* add **somethingHappened** event:

```json
{
  "_id": "104ad1f48518376",
  "_name": "_Channel",
  "_inherit": [
    "_Component"
  ],
  "send": "event",
  "somethingHappened": "event"
}
```

* on **Models** tab, click on **_Channel** model (on the right panel under *Schemas*),
* click on **_Channel** model,
* edit with this code:

```json
{
  "_id": "135c71078810af2",
  "_name": "_Channel",
  "send": {
    "params": [
      {
        "name": "message",
        "type": "message"
      }
    ]
  },
  "somethingHappened": {
    "description": "",
    "params": [
      {
        "description": "",
        "name": "param",
        "type": "string",
        "mandatory": false,
        "default": ""
      }
    ]
  }
}
```

## Define the listener

Now we will create the listener to that message:
* on **Behaviors** tab, click on **_Channel** model (on the right panel under *Models*),
* then click on **channel** component (on the right panel under *Components*),
* click on the '*+*' button on the left toolbar to add a behavior,
*  select *somethingHappened* from the list,
* click on the *Create* button

![Image Alt](../img/7091872-system-designer-channel-2.png)

* click on the **somethingHappened** behavior,
* add this code:

```js
function somethingHappened(param) { 
  // get logger component
  let logger = this.require('logger');

  logger.info('the message "' + param + '" has been send.');
}
```

##Send the message

* on *Behavior* tab, select your system  (on the right panel under *System*),
* click on *start* behavior,
* add this code:

```js
function start() { 
  this.require('channel').somethingHappened('my message');  
}
````

* run your system

![Image Alt](../img/ef64888-system-designer-channel-3.png)

* you will see a message on the bottom right of System Designer and a new log on the *Logs* tab.