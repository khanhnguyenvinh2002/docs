---
title: User Manual
description: Learn everything to build your game in a day
---

# {% $markdoc.frontmatter.title %}
Learn everything to build your game in a day

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Navigating the Dashboard](#navigating-the-dashboard)
4. [Analytics](#analytics)
5. [Create](#create)
6. [Game servers](#game-servers)
7. [Data Flow](#data-flow)
8. [Shop](#shop)
9. [Erc 1155](#erc-1155)
10. [Troubleshooting](#troubleshooting)
11. [Frequently Asked Questions](#frequently-asked-questions)
12. [Contact Information](#contact-information)

## Introduction
Welcome to Hyperedge Labs! This user manual will guide you through our application and show you how to use all of its features effectively.

## Getting Started
To begin, navigate to our website [here](http://localhost:9000/app). If you haven't already created an account, click the "Sign Up" button and fill out the form.

Make sure to have Metamask installed on your browser so we can verify your identity!

## Navigating the Dashboard
When you first log in, you'll be brought to the game dashboard. This is your main control panel where you can view all the games you have built and build new game

Welcome officially to HyperEdge Labs! Let's walk you through all our functionalities

Game dashboard:

![games image](/images/frontend/games.png)

Create new game:

![new-game image](/images/frontend/new-game.png)

## Analytics

After selecting a game, you will be brought to Analytics screen at http://localhost:9000/app/<your_app_id>/analytics, where you can view all user metrics for your game 

![analytics image](/images/frontend/analytics.png)

- [Learn about all user metrics](/analytics-metrics)

### Navigation bar

To the left of the screen you can find a navigation bar that can take you to our different screens.

![navigation bar image](/images/frontend/navigate.png)

## Create

Inside Create screen, you can easily define all objects and tokens for the game:

- [Learn about the functionalities of each component](/create)

Data Structure:

Add Request Handler:

![Add Request Handler image](/images/frontend/add-request-handler.png)

Erc 721 Handler:

![Erc 721 image](/images/frontend/erc721.png)

Erc 20 Handler:

![Erc 20 image](/images/frontend/erc20.png)

Data Class Item Handler:

![Data Class Item image](/images/frontend/data-class-item.png)

Data Class Contract Handler:

![Data Class Contract image](/images/frontend/data-class-contract.png)

## Game Servers

Inside Game Servers screen, you can monitor the game server:

![Game Servers image](/images/frontend/game-servers.png)

- [Learn about all server metrics](/server-metrics)

### Top-right corner buttons
1. Start server (green): start your game server (make sure to build and deploy your game server first)
2. Stop server (red): stop your running game server
3. Restart server (yellow): reboot your running game server

### Generate code
After you have created all objects and tokens as desired, click on `Gen Code`. 

Upper right corner now should pop up a notification saying `Generating Code in progress...`

![Gen Code In Progress image](/images/frontend/gen-code-in-progress.png)

After about one minute, upper left corner should pop up a notification saying `Complete! Now you can download your file`

![Gen Code Completed image](/images/frontend/gen-code-completed.png)

Now, the `Download File` button should be clickable for you. Click on the button to download generated code. 

### Upload Game Logic and Build Server

After you have developed your own Game Logic, click on `Upload File` and send your compressed `GameLogic.zip`. 

On complete, click on `Build Server` to build your game into a separate server!

On the top right corner would now show that `Building Server in progress...`

![Build Server In Progress image](/images/frontend/build-server-in-progress.png)

After a while, the top right corner would have a notification saying `Built successfully, starting server!` and a notification saying `Start successfully, starting server!`

![Build Server Completed image](/images/frontend/build-server-completed.png)

## Data flow

Inside Data Flow screen, you can visualize generated request handlers and corresponding data structures:

![Data Flow image](/images/frontend/data-flow.png)

## Shop

Inside Shop screen, you can create shops and packages:

![Shop image](/images/frontend/shop.png)

You can create packages for each shop like this:

![Package image](/images/frontend/package.png)

## Erc 1155

Inside Erc 1155 screen, you can create a new Erc 1155 token for each app:

In this form, you can find that the token id is auto-filled, you only have to choose a data class for that token:

![Erc 1155 image](/images/frontend/erc1155.png)

## Troubleshooting
If you're having trouble with the application, try these common troubleshooting steps:

1. Refresh the page.
2. Log out and log back in.
3. Clear your browser's cache and cookies.

If you're still having trouble after trying these steps, please contact us for assistance.

## Frequently Asked Questions
- **Question 1?**
  - Answer 1.
- **Question 2?**
  - Answer 2.
- **Question 3?**
  - Answer 3.

## Contact Information
If you need further assistance or have any questions, please feel free to contact us at [your support email] or visit our support page at [support page URL].
