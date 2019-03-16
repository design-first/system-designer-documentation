---
id: create-a-website
title: Create a website
sidebar_label: Create a website
---

You can use *System Designer* to create websites and edit them live. 

## Create your GitHub repository

- go to **[GitHub](https://github.com)**,
- create a repository to store your website,
- go to the **Settings** of your repository and
- under **GitHub Pages** select your options to publish your repository

>**What are GitHub Pages?**
>
>They are \"websites for you and your projects\". To have more information on *Github pages*, go [there](https://pages.github.com).

## Configure your GitHub repository

- go to the *[Personal Access Tokens](https://github.com/settings/tokens)* page,
- click on *Generate new token* button,
- in *Token Description* type 'System Designer',
- add *repo* scope,
- click on *Generate token* button and
- copy the generated key.

## Configure System Designer

- open the configuration panel,
- in *GitHub token* paste your key,
- in *GitHub repository* set the name of your repository and
- click on *Save* button.

## Create your page

- once you have created your system, open the *GitHub* panel,
- add a comment,
- click on **Add page**,

![Image Alt](../../img/fed4136-config.png)

- click on *Execute* button,
- your system will be pushed in your *GitHub* repository with a HTML file that will include your system and
- you will then access to your app with this url: **https://[user_name].github.io/[repository_name]/[system_name].html**.

Example: *https://me.github.io/myproject/mysystem.html*

>**Live edition and publishing**
>
>Now everytime you push your system on GitHub, your website will be updated.