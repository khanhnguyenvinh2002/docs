---
title: Magical RPG
description: Learn to build a simple game!
---

# {% $markdoc.frontmatter.title %}
This tutorial will walk you through how to create your first game, ShadowRealms, a magical RPG game!

## Table of Contents
1. [New Game](#new-game)
2. [Create Hero](#create-hero)
3. [Create Spell](#create-spell)
4. [Visualize](#visualize)
5. [Gen Code](#generate-code)
6. [Create Game Logic](#create-game-logic)
7. [Build Server](#build-server)
8. [Test Server](#test-server)

## New Game
Create a new game with the name ShadowRealms

![new game image](/images/tutorial/NewGame.png)

After that, click on the icon for ShadowRealms to start developing your game

![all games image](/images/tutorial/AllGames.png)

## Create Hero

First, create a hero data class with a simple name field

![hero data image](/images/tutorial/HeroData.png)

Next, create a hero data class item with the a value for each field specified above

![hero dci image](/images/tutorial/HeroDCI.png)

Next, create an ERC 1155 for the data class item by choosing the data class and corresponding data class item

![hero erc 1155 image](/images/tutorial/HeroERC1155.png)

Next, create an ERC 721 for Hero with the fields desired. Here, we will choose Level and Experience for Hero

![hero erc 721 image](/images/tutorial/HeroERC721.png)

Now, let's create a handler to add a hero:

Specify request and response class:

![add hero request image](/images/tutorial/AddHeroRequest.png)
![add hero response image](/images/tutorial/AddHeroResponse.png)

Create a handler with these classes:

![add hero handler image](/images/tutorial/AddHero.png)


## Create Spell

First, create a spell data class with a simple name field

![spell data image](/images/tutorial/SpellData.png)

Next, create a spell data class item with the a value for each field specified above

![spell dci image](/images/tutorial/SpellDCI.png)

Next, create an ERC 1155 for the data class item by choosing the data class and corresponding data class item

![spell erc 1155 image](/images/tutorial/SpellERC1155.png)

Now, let's create a handler to add a spell:

Specify request and response class:

![add spell request image](/images/tutorial/AddSpellRequest.png)
![add spell response image](/images/tutorial/AddSpellResponse.png)

Create a handler with these classes:

![add spell handler image](/images/tutorial/AddSpell.png)

## Visualize

Now you can go to Data Flow to visualize the handlers:

![data flow image](/images/tutorial/DataFlow.png)

## Generate Code

After completing, go to Game Servers and click gen code, the server will begin generating all the code needed for your game:

![gen code image](/images/tutorial/GenCode.png)

Once finished, you can download the code to your machine:

![download code image](/images/tutorial/DownloadCode.png)

## Create Game Logic

Create game logic for each of your handler to specify what should happen within each handler like this:

![game logic image](/images/tutorial/GameLogic.png)

Once finished, compile into `GameLogic.zip` and upload using `upload code` button:

![upload code image](/images/tutorial/UploadCode.png)

## Build Server

Once uploaded, click on build server, now HyperEdge will automatically compile your logic and create a server for your game

An example in our local docker instance showing 2 containers are created for your game:

![docker containers up image](/images/tutorial/DockerContainersUp.png)

## Test Server

Great! Now let's try use the server!

First, we will test the AddHero handler:

![add hero handler api image](/images/tutorial/AddHeroApi.png)

Then, we will test the AddSpell handler:

![add spell handler api image](/images/tutorial/AddSpellApi.png)