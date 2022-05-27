---
id: edit-a-model
title: Edit a model
sidebar_label: Edit a model
---

A model is the UML representation of the class that you will use in your system.
You can edit these models and update many informations (type, default value, ...).

## View your models

To vies your models in System Designer:

* click on the **Models** tab and
* you will see all the generated models.

![Image Alt](../../img/edit-a-model.png)

## Edit a model

* click on a model,
* an editor will open the content of the model,
* you can now edit its properties by updating its configuration: 

![Image Alt](../../img/edit-a-model-edit.png)

## What is a configuration?

A configuration is an object that defines the behavior of a property / link / collection / method / event of a model.

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
  "_id": "c04bbcea-d1ec-43f0-be52-c7f1bf3120f5",
  "_name": "Jedi",
  "name": "property"
}
```

A new configuration will be then generated in the model:

```json
{
  "_id": "fbb6878d-c7af-4997-a717-0a42cbc6edb0",
  "_name": "Jedi",
  "_description": "",
  "name": {
    "description": "",
    "type": "any",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
}
```

This new property has **any** type, can be set, is not mandatory and has **""** for default value. You can then edit all this configuration.

In the configuration object of a *property* you have:

- **description : string**, comments about the property.
- **type : string|array**, the type to the property.
- **readOnly : boolean**, *true* if we can we change the value of a property after its initialization.
- **mandatory : boolean**, *true* if the property is mandatory when creating an instance of the model.
- **default: any**, default value of the property. It needs to have the type defined in **type** property.

## Edit a link

When you define in the schema a **link**, a configuration will be then added in the model. For example, if you have added in the schema:

```json
{
  "_id": "c04bbcea-d1ec-43f0-be52-c7f1bf3120f5",
  "_name": "Jedi",
  "father": "link"
}
```

A new configuration will be then generated in the model:

```json
{
  "_id": "fbb6878d-c7af-4997-a717-0a42cbc6edb0",
  "_name": "Jedi",
  "_description": "",
  "father": {
    "description": "",
    "type": "_Component",
    "kind": "normal",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
}
```

This new link has **_Component** type (it means that it can be any kind of component), can be set, is not mandatory and has **""** for default value. You can then edit all this configuration.

In the configuration object of a *link* you have:

- **description : string**, comments about the link.
- **type : string|array**, the type to the link.
- **kind : [normal|dependency|aggregation|composition]**, the kind of relationship. It is used only in the Class diagram to specify the kind of link to show.
- **readOnly : boolean**, *true* if we can we change the value of a link after its initialization.
- **mandatory : boolean**, *true* if the link is mandatory when creating an instance of the model.
- **default: any**, default value of the link.It needs to have the type defined in **type** property.

## Edit a collection

When you define in the schema a **collection**, a configuration will be then added in the model.
For example, if you have added in the schema:

```json
{
  "_id": "c04bbcea-d1ec-43f0-be52-c7f1bf3120f5",
  "_name": "Jedi",
  "children": "collection"
}
```

A new configuration will be then generated in the model:

```json
{
  "_id": "fbb6878d-c7af-4997-a717-0a42cbc6edb0",
  "_name": "Jedi",
  "_description": "",
  "children": {
    "description": "",
    "type": ["_Component"],
    "kind": "normal",
    "readOnly": false,
    "mandatory": false,
    "default": []
  }
}

```

This new collection is a collection of **_Component** type (it means that it can be a collection of any kind of component), can be set, is not mandatory and has **[]** for default value. You can then edit all this configuration.

In the configuration object of a *collection* you have:

- **description : string**, comments about the collection.
- **type : array**, the type to the collection.
- **kind : [normal|dependency|aggregation|composition]**, the kind of relationship. It is used only in the Class diagram to specify the kind of link to show.
- **readOnly : boolean**, *true* if we can we change the value of a collection after its initialization.
- **mandatory : boolean**, *true* if the collection is  mandatory when creating an instance of the model.
- **default: any**, default value of the collection. It needs to have the type defined in **type** property.

## Edit a method

When you define in the schema a **method**, a configuration will be then added in the model. For example, if you have added in the schema:

```json
{
  "_id": "c04bbcea-d1ec-43f0-be52-c7f1bf3120f5",
  "_name": "Jedi",
  "fullname": "method"
}
```

A new configuration will be then generated in the model:

```json
{
  "_id": "fbb6878d-c7af-4997-a717-0a42cbc6edb0",
  "_name": "Jedi",
  "_description": "",
  "fullname": {
    "description": "",
    "params": [
      {
        "description": "",
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

This new method has one parameter, **param**, of type **any** that is not mandatory and has **null** for default value. This method returns a result of type **any**. You can then edit all this configuration.

In the configuration object of a *method* you have:

- **description : string**, comments about the method.
- **params : array**, the parameters of the method. A parameter is defined by a configuration object that has for properties:
  - **description : string**, comments about the parameter.
  - **name : string**, the name of the parameter.
  - **type : string|array**, the type of the parameter.
  - **mandatory : boolean**, *true* if the parameter is mandatory when invoking the method.
  - **default: any**, default value of the parameter. It needs to have the type defined in **type** property.
- **result : string|array**, the type of the returned value.

## Edit an event

When you define in the schema an **event**, a configuration will be then added in the model. For example, if you have added in the schema:

```json
{
  "_id": "c04bbcea-d1ec-43f0-be52-c7f1bf3120f5",
  "_name": "Jedi",
  "changed": "event"
}
```

A new configuration will be then generated in the model:

```json
{
  "_id": "fbb6878d-c7af-4997-a717-0a42cbc6edb0",
  "_name": "Jedi",
  "_description": "",
  "changed": {
    "description": "",
    "params": [
      {
        "description": "",
        "name": "param",
        "type": "any",
        "mandatory": false,
        "default": null
      }
    ]
  }
}
```

This new event has one parameter, **param** of type **any** that is not mandatory and has **null** for default value. You can then edit all this configuration.

In the configuration object of an *event* you have:

- **description : string**, comments about the event.
- **params : array**, the parameters of the event. A parameter is defined by a configuration object that has for properties:
  - **description : string**, comments about the parameter.
  - **name : string**, the name of the parameter.
  - **type : string|array**, the type of the parameter.
  - **mandatory : boolean**, *true* if the parameter is mandatory when sending the event.
  - **default: any**, default value of the parameter. It needs to have the type defined in **type** property.

>**Want to know more?**
>
>For more information on model definition, go to the [System Runtime documentation](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html).