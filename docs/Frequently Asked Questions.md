---
id: faq
title: Frequently Asked Questions
sidebar_label: Frequently Asked Questions
---

## How do I define methods and their parameters/return types ?

To create a method *foo*, for example, in System Designer:

* edit a schema and add this new entry:

```json
"foo": "method"
````

* save your schema. It will automatically create this signature in the model:
 **foo(param:any) : any**
* go to the model and edit it. You will see this new entry in the model:

```json
"foo": {
  "params": [
    {
      "name": "param",
      "type": "any",
      "mandatory": false,
      "default": null
    }
  ],
  "result": "any"
}
```
**params** is an array of parameters. To add a new parameter, just add a new object that defines the new parameter.
**result** is the type of the return value.