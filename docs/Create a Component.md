---
id: create-a-component
title: Create a Component
sidebar_label: Create a Component
---

A component is the instance of one class of your model.
You can define them graphically but you can of course create them with code.

## Component creation

To create a component in System Designer:

* click on the **Components** tab,
* select a *model* on the right panel,
* click on the '+' button on the left toolbar,
* a new component is now created and appears in the *Components* list:

![Image Alt](../../img/c3f2dac-component.png)

>**What are the values set by default?**
>
>System Designer creates components based on the model you have selected: the created component has got all the default values defined by model.

## Component edition

* then click a component,
* an editor will open the content of the component,
* you can now edit your component:

![Image Alt](../../img/f76f809-component-edit.png)

## Component creation with code

>**Always prefer to create your components graphically**
>
>You can of course create your component with code, but we encourage you to do it graphically. By doing so, you always know what components are in your system and your code will be cleaner.

Lets imagine you have a *Person* schema with a *name* property and that you want to create a component:
* edit the behavior where you want to create a component,
* add this code:
 
```js
// require the Person class
const Person = this.require('Person');

// create the component
const luke = new Person({
  name: 'luke'
});

// then you can use your component
luke.name();
```