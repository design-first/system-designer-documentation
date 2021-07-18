---
id: create-a-schema
title: Create a Schema
sidebar_label: Create a Schema
---

A schema helps you to define your model. 
A schema generates a model based on very simple informations. You can then edit the generated model.

## Schema creation

To create a schema in System Designer:

* click on the **Schemas** tab,
* click on the '+' button on the left toolbar,
* type the name of your schema, 
* then click on *Create* button,
* a new schema is now created and appears in the *Schema* list:

![Image Alt](../../img/create-a-schema-create.png)

## Schema edition

* then click on the created schema,
* an editor will open the content of the schema,
* you can now edit your schema:

![Image Alt](../../img/create-a-schema-edit.png)

* go back to the **Schemas** tab and
* your modifications have been updated.

![Image Alt](../../img/create-a-schema-prop.png)

## Define inheritance

To add inheritance between your schemas, you need to add the **_inherit** property to your schemas. This property is an array in which you put all the schemas that this schema must inherit.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "_inherit": [
    "Person"
  ]
}
```

## Define a property

To define a property, add a key that has got a **property** value.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "name": "property"
}
```

## Define a link

To define a link between models, add a key that has got a **link** value. A link is a 1-1 link between models.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "father": "link"
}
```

## Define a collection

To define a collection, add a key that has got a **collection** value. A collection can be:

- a collection of typed objects (example: adresse, ...) or
- a collection of components (i.e. like a 1-N link between models).

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "children": "collection"
}
```

## Define a method

To define a method, add a key that has got a **method** value.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "fullName": "method"
}
```

## Define an event

To define an event, add a key that has got an **event** value. An event is a asynchronous method.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "statusChanged": "event"
}
```

>**Want to know more?**
> 
>For more information on schemas, go to the [System Runtime documentation](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html).