---
title: Create
description: Learn how to create components inside Create screen
---

# {% $markdoc.frontmatter.title %}
Learn how to create components inside Create screen

## Table of Contents
1. [Data Structure](#data-structure)
2. [Erc 721](#erc-721)
3. [Erc 20](#erc-20)
4. [Data Class Contract](#data-class-contract)
5. [Data Class Item Handler](#data-class-item-handler)

- [Create your first Magical RPG with HyperEdge](/examples/magical-rpg)

## Data Structure

This component is used to create data that can be accessed and modified bby Request Handlers

There are 2 different types of Data Structure you can define: a Request type and a Response type

- Request data structure will define all fields you want to send to the handler, see below for an example

![Request Data Structure image](/images/frontend/data-structure.png)

- Response data structure will define all fields you want to receive from the handler, see below for an example

![Response Data Structure image](/images/frontend/data-structure-2.png)

<!-- TODO: add image from json -->

## Erc 721 

This component allows users to create unique tokens on Ethereum blockchain

## Erc 20 

This component also allows users to create unique tokens on Ethereum blockchain

## Data Class Contract 

This component enables users to create contracts with data-permission

## Data Class Item Handler 

This component enables users to create items for each contract with specific data

## Add Request Handler 

This component enables users to use a request and response data structure to customize game logic for each action

You can choose request and response class for the handler like below:

![Add Request Handler image](/images/frontend/add-request-handler.png)