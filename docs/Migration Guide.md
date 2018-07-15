---
id: migration-guide
title: Migration Guide
sidebar_label: Migration Guide
---

There are some changes in the way System Designer v2 manages its systems comparing to System Designer v1.
Here is a list of changes you have to do to your systems to make them compatible with System Designer v2:

* There is no **subsystem** property in the system. You can remove it from your system.
* **RuntimeComponent** has been renamed **_Component**.
* **RuntimeDatabase** has been renamed **_Database**.
* **RuntimeChannel** has been renamed **_Channel**.
* There is no need to add **@** when referencing another model in your model. You can remove them.
* If you have created a property of **array** type, the behavior to listen to the value changed has now 2 arguments: **(value, type)**.