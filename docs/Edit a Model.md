---
id: edit-a-model
title: Edit a model
sidebar_label: Edit a model
---

A model is the UML representation of the class that you will use in your system.
You can edit these models and update many informations (type, default value, ...).

## View your models

To edit a model in System Designer:

* click on the **Models** tab and
* you will see all the generated models.

![Image Alt](../img/cd61e9c-model.png)

## Model edition

* click on a model,
* an editor will open the content of the model,
* you can now edit its properties by updating its configuration: 

![Image Alt](../img/c51f2db-model-edit.png)

## Edit a configuration

A configuration is an object that defines the behavior of a property / link / collection / method / event of a model.

You can edit for a *property* / *link* / *collection*:

- **type**:  what is the type to the property ?
- **readOnly**: can we change the value of a property after its initialization ?
- **mandatory**: is the property mandatory when creating an instance of the model ?
- **default**: what is the default value of the property ?

>the **default** value needs to have the type defined in **type** property.

You can edit for a *method* / *event*:

- **params**:  what are the parameters ?
- **result**: what is the type of the returned value ?

>**What types can be set in models?**
>
>*System Designer* manages by default these types:
>- **boolean**, **string**, **number**, **array**, **date**: standard types,
>- **object**: for non typed object,
>- **css**, **html**, **javascript**, **json**, **text**: for live editing of CSS, HTML, JavaScript, JSON or a text and
>- **any**: for any kind of type.
>
>You can also define:
>- your own type (enum typed or typed object) or
>- a model.


>**What is the default value for a date?**
>
>The default value of a date must be a valid date converted to ISO.
>
>Example: *"1970-01-01T00:00:00.000Z"* can be used as a default value to represent 01/01/1970.

## Edit a property

When you define in the schema a **property**, a configuration will be then added in the model. 
For example, if you have added in the schema:

```json
{
  "_id": "m1229c1d58217741",
  "_name": "Jedi",
  "name": "property"
}
```

A new configuration will be then added in the model:

```json
{
  "_id": "q17fc81a8f817e3d",
  "_name": "Jedi",
  "name": {
    "type": "any",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
}
```

This new property has **any** type, can be set, is not mandatory and has **""** for default value. You can then edit all this configuration.

## Edit a link

When you define in the schema a **link**, a configuration will be then added in the model.
For example, if you have added in the schema:

```json
{
  "_id": "m1229c1d58217741",
  "_name": "Jedi",
  "father": "link"
}
```

A new configuration will be then added in the model:

```json
{
  "_id": "q17fc81a8f817e3d",
  "_name": "Jedi",
  "father": {
    "type": "_Component",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
}
```

This new link has **_Component** type (it means that it can be any kind of component), can be set, is not mandatory and has **""** for default value. You can then edit all this configuration.

## Edit a collection

When you define in the schema a **collection**, a configuration will be then added in the model.
For example, if you have added in the schema:

```json
{
  "_id": "m1229c1d58217741",
  "_name": "Jedi",
  "father": "collection"
}
```

A new configuration will be then added in the model:

```json
{
  "_id": "q17fc81a8f817e3d",
  "_name": "Jedi",
  "father": {
    "type": [
      "_Component"
    ],
    "readOnly": false,
    "mandatory": false,
    "default": []
  }
}
```

This new collection is a collection of **_Component** type (it means that it can be a collection of any kind of component), can be set, is not mandatory and has **[]** for default value. You can then edit all this configuration.

## Edit a method

When you define in the schema a **method**, a configuration will be then added in the model.
For example, if you have added in the schema:

```json
{
  "_id": "m1229c1d58217741",
  "_name": "Jedi",
  "father": "fullname"
}
```

A new configuration will be then added in the model:

```json
{
  "_id": "q17fc81a8f817e3d",
  "_name": "Jedi",
  "father": {
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
}
```

This new method has one parameter of **any** type that is not mandatory and has **null** for default value.This method returns **any** result. You can then edit all this configuration.

## Edit an event

When you define in the schema an **event**, a configuration will be then added in the model.
For example, if you have added in the schema:

```json
{
  "_id": "m1229c1d58217741",
  "_name": "Jedi",
  "changed": "event"
}
```

A new configuration will be then added in the model:

```json
{
  "_id": "q17fc81a8f817e3d",
  "_name": "Jedi",
  "father": {
    "params": [
      {
        "name": "param",
        "type": "any",
        "mandatory": false,
        "default": null
      }
    ]
  }
}
```

This new event has one parameter of **any** type that is not mandatory and has **null** for default value. You can then edit all this configuration.

>**Want to know more?**
>
>For more information on model definition, go to the [System Runtime documentation](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html).