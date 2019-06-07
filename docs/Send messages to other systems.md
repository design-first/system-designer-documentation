---
id: send-messages-to-other-systems
title: Send messages to other systems
sidebar_label: Send messages to other systems
---

In this tutorial we will show how to send messages from one system to another system with channels.

>At runtime a **channel** component is defined to send / receive messages between systems

## Define your messages

After creating your system:
* click on the **import** button on the left toolbar,
* a dialog is shown,
* click on **from the library** radio button,
* select **Send messages through a channel** from the proposed systems,
* click on the **Compose** button,

![Image Alt](../../img/7930644-send-messages.png)

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
* click on **_Channel** model to edit it

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
    "params": [
      {
        "name": "param",
        "type": "any",
        "mandatory": false,
        "default": ""
      }
    ]
  }
}
```

We let the default values.

## Define how to send the message

* on **Behaviors** tab, click on **_Channel** model (on the right panel under *Models*),
* click on the **send** behavior to edit it,

```js
function send(message) { 
  // define here how to send the message to another channel (webRTC, XHR, ...)
  // example
  fetch('url_to_a_server', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'X-System-Id': message.from, // current system id (string value)
      'X-System-Event': message.event // event name (string value)
    }),
    body: message.data // arguments send to the event (array value)
  });
}
```

Define in this behavior how to send the message to another channel (webRTC, XHR, ...).

## Send a message

* edit the behavior in which you want to send a message to another channel,
* require the **channel** component,
* call the event you have defined, **somethingHappened** and
* pass as parameter a string (as defined in the model).

```js
this.require('channel').somethingHappened('my message');
```

## Listen to a message

* create another system,
* do all the steps of part **Define your messages**,
* edit the behavior in which you want to listen to a message send from another channel (send via webRTC, XHR, ...),
* require **runtime** component,
* call the **message** method and
* pass an object that contains the information send by the other system:

```js
// we suppose that this system runs on a server and
// get the header and body of the request send by the other system

this.require('runtime').message({
  'event': headers['x-system-event'], // 'somethingHappened' (string value)
  'from': headers['x-system-id'], // system id of the system that send the message (string value)
  'data': body // the arguments send by event (array value)
);
```

* then click on **channel** component (on the right panel under *Components*),
* click on the '*+*' button on the left toolbar to add a behavior,
* select *somethingHappened* from the list,
* click on the *Create* button,
* click on the **somethingHappened** behavior to edit it,
* add this code:

```js
function somethingHappened(param) { 
  // get logger component
  let logger = this.require('logger');

  logger.info('the message ' + param + ' has been send to this system');
}
```

Now your system is able to listen to an event send by the other system.