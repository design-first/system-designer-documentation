---
id: create-an-extension
title: Create an extension
sidebar_label: Create an extension
---

In this tutorial we will show how to create an extension in System Designer.

>**What can be done in extension?**
>
>- toolbar item creation,
>- actions when clicking on them and
>- dialog creations.

## Create an extension

* click on the **import** button on the left toolbar,
* a dialog is shown,
* click on **from the library** radio button,
* select **Create an extension** from the proposed systems,

![Image Alt](../img/2862ba5-import.png)

* click on the **Import** button. A system is created,

## Create a toolbar item

* Click on *Components* tab and select *ToolbarItem*,

![Image Alt](../img/a28d8e4-toolbar.png)

* A toolbar item is already there in the system example. Click on *toolbar-item-template.html* link (next to html property),
* You navigate to the *HTML* components and you can see the template used for showing the toolbar,

![Image Alt](../img/7082ea1-html.png)

* Click on it if you wan edit the html of the toolbar item,

![Image Alt](../img/b3b308a-html-code.png)

## Create an action when clicking on the toolbar item

* click on *Behaviors* tab,
* click on *ToolbarItem* on the right,
* and then click *toolbar-item-template* on the right,

![Image Alt](../img/d0193e5-click.png)

* a list of behaviors is shown, and you can see that a *click* behavior exist,
* click on it to edit it and update the code,

![Image Alt](../img/336d79e-behavior.png)

## Test your extension

To test your extension, it is very easy. You just have to click on the run button and your extension will be installed in System Designer.

![Image Alt](../img/8f12ab7-run.png)

## Debug your extension on macOS and Windows 10

* go to the menu,
* click on **Menu > Toggle Developper Tools**.

The [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/) is opened and you can debug your extension.

![Image Alt](../img/f0d8235-extension-debug.png)

## Add your extension

* click on the *extension manager* button on the left toolbar,
* a dialog is shown,
* near *From your systems* click on your extension,
* click on the *Add* button,

![Image Alt](../img/435ffe9-ext-man.png)

* your extension is then been added into System Designer. You will be able to remove it from the same dialog.