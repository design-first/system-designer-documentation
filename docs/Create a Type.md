---
id: create-a-type
title: Create a Type
sidebar_label: Create a Type
---

Types defined in System Designer can be the used in *type* property of a model.

## Type creation

To create a type in System Designer:

* click on the **Types** tab,
* click on the '+' button on the left toolbar,
* type the *name* of your type, 

![Image Alt](../../img/create-a-type-dialog.png)

* click on *Enumeration* checkbox if you want to create an enumeration,
* then click on *Create* button,
* a new type is now created and appears in the *Types* list:

![Image Alt](../../img/create-a-type.png)

* this new type can be then used in your model.

## Type edition

* click on the created type,
* an editor will open the content of the type, 
* you can now edit the type:

![Image Alt](../../img/create-a-type-edit.png)

You can then use this new type on a model.

## Define an enumeration

To define an enumeration, juste click on the *Enumeration* checkbox when creating a type. Then set the type of your enumeration (its *any* by default) and add all the value of your enumeration in the *value* array.

```json
{
  "_id": "a44f44d2-7bcb-4bce-9638-d61dc595e873",
  "name": "color",
  "description": "list of colors",
  "type": "string",
  "value": [
    "blue",
    "red",
    "green"
  ]
}
```

In the example we have a *color* enumeration that is a *string* enumeration that contains *blue*, *red* and *green*.

## Define an alias

To define an alias, just set the *type* information.

```json
{
  "_id": "a44f44d2-7bcb-4bce-9638-d61dc595e873",
  "name": "title",
  "description": "Title of a movie",
  "type": "string"
}
```

In this example *title* type is a *string*.

## Define a structure

If you want to define a new type that is a structure, do not click on the *Enumeration* checkbox when creating a type. Then define the different properties of your structure in *schema* configuration object.

```json
{
  "_id": "a44f44d2-7bcb-4bce-9638-d61dc595e873",
  "name": "address",
  "description": "an address",
  "type": "object",
  "schema": {
    "city": {
      "type": "string",
      "mandatory": false,
      "default": ""
    },
    "zip": {
      "type": "number",
      "mandatory": false,
      "default": 1
    },
    "country": {
      "type": "string",
      "mandatory": false,
      "default": ""
   }
  }
}
```

In this example we have defined *address* type that is composed of a *city*, *zip* and *street* property. This type can be used to define location value in this component:

```json
{
  "_id": "edb7ddc1-d0ef-4477-b1ee-c8f309cd6991",
  "location": {
    "city": "paris",
    "zip": "75015",
    "country": "France"
  }
}
```

## Use a new type in the model

To use the new type in a model, just set the *type* value with the new created type.

```json
{
  "_id": "aae7856b-e531-479d-9ddc-ae7590e4ca93",
  "_name": "Jedi",
  "_description": "",
  "name": {
    "description": "",
    "type": "string",
    "readOnly": false,
    "mandatory": false,
    "default": ""
   },
  "location": {
    "description": "",
    "type": "address",
    "readOnly": false,
    "mandatory": false,
    "default": {}
  }
}
```

In this example, a Person model, location has address type.

>When defining a type in the model, do not forget to set a *default* value.

## Use a structured type in the code

If a type is a structure, you can get and set its values very easily. 

```js
const luke = this.require('luke');

// get the country of luke component
luke.location().country();

// set the country of luke component
luke.location().country('Tatooine');
```

In this example *location* has *address* type. Because it has got a *city* property, we can get and set its values with APIs.