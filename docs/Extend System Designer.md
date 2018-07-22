---
id: extend-system-designer
title: Extend System Designer
sidebar_label: Extend System Designer
---

There are many ways to add new functionalities to System Designer. To do so you can:
* update its source code,
* add addons or
* add extensions.

## Update System Designer source code

### Installation

To update System Designer, you will need to [clone the repository](https://github.com/design-first/system-designer):

```shell
git clone https://github.com/design-first/system-designer.git
```

Once you have cloned the repository, install the dependencies:

```shell
npm i
```

### Enable development mode

Start System Designer in development mode:

```shell
npm run dev
```

Once server started, go to http://localhost:9001/.

### Update source code

System Designer has got a customizable system. You can update all its components, models or behaviors to follow your needs. To do so:

* go to [/src/systems](https://github.com/design-first/system-designer/tree/master/src/systems) directory,
* open a version of System Designer,
* import the system you want,
* edit the system,
* export it,
* save it in the same place.

Because you have changed the source code, System Designer will be automatically rebuild and the page refreshed.

## Add addons

You can extend System Designer by composing other systems with its systems. In that case, these systems are called **addons**.

To extend System Designer:
* copy and paste a system into the [/addons](https://github.com/design-first/system-designer/tree/master/addons) directory and
* build System Designer:

```shell
npm run build
```

Your system will be then compose with System Designer core system.

## Add extensions

You can extend System Designer by adding **extensions** at runtime.
To do so:

* go to the [/extensions](https://github.com/design-first/system-designer/tree/master/extensions) directory,
* add your created system in *extensions.json* file and
* build System Designer:

```shell
npm run build
````

Your system will be then shown in the list of extensions.

>You can [create extensions inside System Designer](Create an extension.md).