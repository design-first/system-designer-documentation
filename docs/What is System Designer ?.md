---
id: doc1
title: What is System Designer ?
sidebar_label: What is System Designer ?
---

**No matter the frameworks you use and the code you write, the most important is the model that you define to create your system**. 

System Designer helps you to design this model and to generate the classes and components to build your system.

## What is a system ?

A system:

* is defined by a model,
* is composed by components and
* reacts to events with actions that we call behaviors.

![Image Alt](../img/0237548-system.png)

## Design your system with ease

If you look at the different JavaScript frameworks on the market, you will notice that they all have their own way to define a model, generally only with code.

System Designer uses [UML](http://www.uml.org), a standard, to define your model. So you probably already how to design in System Designer even if you have never run it.

The definition of the model is stored on a JSON format called [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson). With [MSON](https://system-runtime.readme.io/docs/design-your-model#section-mson) you can define types, classes, one to one / one to many relationships and multi inheritance between classes.

## Code the behavior of your system

Once you have created your model, System Designer generates the skeletons of all your methods. You only have then to add your code to implement them.

System Designer provides you helpers to manage your components. You can easily navigate threw components to create your system.

## Create components graphically

There is no need to code to instantiate a component. Create a component in System Designer is like creating a document in a NoSQL Database.

In fact, System Designer acts as an ODM (Object-Document Mapper) to manage your components as NoSQL Documents.

## Run your system

You can run your system directly from System Designer and then export it to HTML, JSON or a Node.js module (* macOS and HTML5 version only).

Because you have defined a model for your system, a [Dynamic Type Check](https://en.wikipedia.org/wiki/Type_system#DYNAMIC) is done on every action of your system. All warnings are send and shown in System Designer.

## Debug your system

System Designer can load the model of any system that runs on the browser or on [Node.js](https://nodejs.org/en/)  (* macOS and HTML5 version only). You can see the schemas, models, components and methods of the running system and you can edit them.

All modifications to the model done inside System Designer will be send to the running system. There is no need to reload to see your modifications.

## Design on the go

System Designer can be used on  [Windows 10](https://www.microsoft.com/store/apps/9p05jrx99h87), [macOS](https://itunes.apple.com/us/app/system-designer/id1102494854?l=fr&ls=1&mt=12), [iPad](https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1132983280&mt=8), [Android](https://play.google.com/store/apps/details?id=com.ecarriou.systemdesignerios) or [any browsers](https://system-designer.github.io/designer/). You can also install it in your project: System Designer requires no backend to work, it is a full web application.

System Designer has a [Github](https://github.com) module to synchronize your work between all these apps. You can begin your design on your Mac and then continue it on your iPad.

## Design First project

System Designer is part of the [Design First project](https://github.com/design-first). Design First is a set of tools to help developers to design before coding.