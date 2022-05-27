---
id: create-a-schema
title: Create a Schema
sidebar_label: Create a Schema
---

A schema helps you to define your model. 
A schema generates a model based on very simple informations. You can then edit the generated model.

## Create a schema

To create a schema in System Designer:

* click on the **Schemas** tab,
* click on the '+' button on the left toolbar,
* type the name of your schema, 
* then click on *Create* button,
* a new schema is now created and appears in the *Schema* list:

![Image Alt](../../img/create-a-schema-create.png)

## Edit a schema

* then click on the created schema,
* an editor will open the content of the schema,
* you can now edit the configuration of the schema:

![Image Alt](../../img/create-a-schema-edit.png)

* go back to the **Schemas** tab and
* your modifications have been updated.

![Image Alt](../../img/create-a-schema-prop.png)

## What is a configuration?

A configuration is an object in which you declare the property / link / collection / method / event of the model.

In the configuration object you have by default these properties:

- **_id : string**, unique id of your schema.
- **_name : string**, name of your schema.

## Define inheritance

To add inheritance between your schemas you need to add the **_inherit** property. This property is an *array* in which you put all the schema names that this schema must inherit.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "_inherit": ["Person"]
}

```

In this example *Jedi* schema inherits from *Person*. 

## Define a property

To define a property add a key that has got a **property** value.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "name": "property"
}
```

In this example *Jedi* has a *name* property. 

## Define a link

To define a link between models, add a key that has got a **link** value. A link is a 1-1 link between models.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "father": "link"
}
```

In this example *Jedi* has a *father* link.

## Define a collection

To define a collection add a key that has got a **collection** value. A collection can be:

- a collection of typed objects (example: adresse, ...) or
- a collection of components (i.e. like a 1-N link between models).

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "children": "collection"
}
```

In this example *Jedi* has a *children* collection.

## Define a method

To define a method add a key that has got a **method** value.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "fullName": "method"
}
```

In this example we have defined a *fullName* method for *Jedi*.

>**Important note on renaming**
>
> If you rename an existing method, it will delete the method and create a new one. So any code related to the previous method will be deleted.

## Define an event

To define an event add a key that has got an **event** value. An event is a asynchronous method.

```json
{
  "_id": "ee8b5c97-cb89-4cdf-82b3-d9d8bea23ac5",
  "_name": "Jedi",
  "statusChanged": "event"
}
```

In this example we have defined a *statusChanged* event for *Jedi*.

>**Want to know more?**
> 
>For more information on schemas, go to the [System Runtime documentation](https://designfirst.io/systemruntime/documentation/docs/design-your-model.html).