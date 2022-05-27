---
id: create-a-type
title: Create a Type
sidebar_label: Create a Type
---

Types defined in System Designer can be the used in *type* property of a model.

## Create a type

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

## Update a type

* click on the created type,
* an editor will open the content of the type, 
* you can now edit the configuration of the type:

![Image Alt](../../img/create-a-type-edit.png)

## Define an enumeration

To define an enumeration click on the *Enumeration* checkbox when creating a type. Then set the *type* of your enumeration (it is *any* by default) and add all the value of your enumeration in the *value* array.

```json
{
  "_id": "a44f44d2-7bcb-4bce-9638-d61dc595e873",
  "name": "color",
  "description": "list of colors",
  "type": "string",
  "value": [
    "blue",
    "red",
    "green",
    "maroon"
  ]
}
```

In the example we have defined a *color* type that is a *string* enumeration. It could have for value: *blue*, *red*, *green* or *maroon*.

In the configuration object of a *enumeration* you have:

- **_id : string**, unique id of the enumeration.
- **name : string**, name of the enumeration.
- **description : string**, comments about the enumeration.
- **type : string|array**, the type of the enumeration.
- **value : array**, possible values of the enumeration.

>**What types can be set?**
>
>- **boolean**, **string**, **number**, **array**, **date**: standard types,
>- **object**: for non typed object,
>- **css**, **html**, **javascript**, **json**, **text**: for live editing of CSS, HTML, JavaScript, JSON or a text and
>- **any**: for any kind of type.

## Use an enumeration in the model

To use an enumeration type in a model set the *type* value of a property with an enumeration type.

```json
{
  "_id": "aae7856b-e531-479d-9ddc-ae7590e4ca93",
  "_name": "Jedi",
  "_description": "",
  "eyeColor": {
    "description": "",
    "type": "eyeColor",
    "readOnly": false,
    "mandatory": false,
    "default": "maroon"
   },
}
```

In this example, a *Jedi* model, *eyeColor* has *eyeColor* type, which is an enumeration type.

>When defining a type in the model do not forget to set a *default* value.

## Use an enumeration in a component

This type can be used to define *eyeColor* value in a component:

```json
{
  "_id": "luke",
  "eyeColor": "maroon"
}
```

>if a not valid value is set for an enumeration you will have an error message in the logs.

## Use an enumeration in the code

You can get and set an enumeration very easily with APIs:

```js
const luke = this.require('luke');

// get the eyeColor of luke component
luke.eyeColor();

// set the eyeColor of luke component
luke.eyeColor('maroon');
```

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

In this example we have defined *address* type that is composed of a *city*, *zip* and *street* property. 

In the configuration object of a *enumeration* you have:

- **_id : string**, unique id of the structure.
- **name : string**, name of the structure.
- **description : string**, comments about the structure.
- **type : string|array**, the type of the structure. Must be object.
- **schema : array**, the properties of the structure. A property is defined by a configuration object that has for properties:
  - **type : string|array**, the type of the property.
  - **mandatory : boolean**, *true* if the property is mandatory.
  - **default: any**, default value of the property. It needs to have the type defined in **type** property.

>**What types can be set?**
>
>- **boolean**, **string**, **number**, **array**, **date**: standard types,
>- **object**: for non typed object,
>- **css**, **html**, **javascript**, **json**, **text**: for live editing of CSS, HTML, JavaScript, JSON or a text and
>- **any**: for any kind of type.

## Use a structure in the model

To use the new type in a model set the *type* value of a property with the new created type.

```json
{
  "_id": "aae7856b-e531-479d-9ddc-ae7590e4ca93",
  "_name": "Jedi",
  "_description": "",
  "location": {
    "description": "",
    "type": "address",
    "readOnly": false,
    "mandatory": false,
    "default": {}
  }
}
```

In this example, a *Jedi* model, *location* has *address* type.

>When defining a type in the model do not forget to set a *default* value.

## Use a structure in a component



```json
{
  "_id": "luke",
  "location": {
    "city": "Tatooine city",
    "zip": 12345,
    "country": "Tatooine"
  }
}
```

## Use a structure in the code

If a type is a structure, you can get and set its values very easily. 

```js
const luke = this.require('luke');

// get the country of luke component
luke.location().country();

// set the country of luke component
luke.location().country('Tatooine');
```

In this example *location* has *address* type. Because it has got a *city* property, we can get and set its values with APIs.

## Define an alias

To organize your type you can define an alias for a type. To do that just set the *type* information with the corresponding type.

```json
{
  "_id": "a44f44d2-7bcb-4bce-9638-d61dc595e873",
  "name": "title",
  "description": "Title of a movie",
  "type": "string"
}
```

In this example *title* type is a *string* and can be used in your model as an alias of *string* type. Example:

```json
{
  "_id": "aae7856b-e531-479d-9ddc-ae7590e4ca94",
  "_name": "Movie",
  "_description": "",
  "title": {
    "description": "title of the movie",
    "type": "title",
    "readOnly": false,
    "mandatory": false,
    "default": ""
  }
}
```