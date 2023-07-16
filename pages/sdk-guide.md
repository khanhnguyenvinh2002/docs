---
title: User Manual
description: Learn everything to build your game in a day
---

# {% $markdoc.frontmatter.title %}
Learn everything to build your game in a day

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Examples](#examples)
5. [Contact Information](#contact-information)

## Introduction
HyperEdge CLI is a command-line interface tool designed to accelerate game development. With HyperEdge CLI, game developers can scaffold their initial project structure interactively, define application data models, and export app data, all within their terminal. This streamlines the development process, making it easier to quickly start and manage your game project.

## Installation
You can install HyperEdge via pip: `pip install he-cli`

## Usage
### Generate Project Structure
`hypercli create_project [options]`
The `create_project` command accepts the following options:
`--template`: The cookiecutter template to use, a directory containing the project template or the URL to a Git repository.

`--checkout`: The branch, tag, or commit ID to checkout after clone, allowing you to specify a specific version or revision of the template. Optional. 

`--no-input`:  A boolean flag indicating whether to prompt the user for manual configuration. If `True`, the user will not be prompted, and the default values or the values provided through `extra_context` will be used. Default is False.

`--extra_context`: A string of a JSON dictionary that overrides default and user configuration, used to customize the template rendering process. Optional. 

`--replay`: A flag indicating whether to read inputs from a saved replay file instead of prompting the user for input. 
If `True`, it reads from the default replay directory that matches the name of the template you're using.
If replay is a string, it's interpreted as a path to a specific replay file，whose context data will be used to generate the project. The string should include the name of the replay file without the .json extension.
Default is None.

`--overwrite_if_exists`: A boolean flag indicating whether to overwrite existing files in the output directory if they have the same name as generated files. Default is False.

`--output_dir`: The output directory where the generated project will be saved. Default is the current directory.

`--config_file`: The path to the user configuration file, allowing you to specify a custom configuration file instead of the default one. Optional. 

`--default_config`: A boolean flag indicating whether to use default values rather than a user configuration file. Default is False.

`--password`: The password to use when extracting the repository. Optional. 

`--directory`: A relative path to a specific directory within the template repository. If provided, only that directory and its contents will be used as the template. Optional. 

`--skip_if_file_exists`: A boolean flag indicating whether to skip file generation if the file already exists in the output directory. Default is False.

`--accept_hooks`: A boolean flag indicating whether to accept pre- and post-generation hooks defined in the template. Default is True.


### Generate Structs and Export App
After generating the project structure, you can navigate into the generated directory and use the hyperadmin CLI to declaritively define your application's data model and structure:

`cd <project name>` 

`hyperadmin [operation]` 

The available operations include:

`collect`: collects all the data model definitions in your project, and then prints them out in JSON format. Used for inspecting or debugging your data models.

`create-dataclass [NAME] [FIELDS]`: create a new data class in your application. You need to provide the name and fields for the class as arguments. Fields are seperated by space and each field is in `<name>:<type>` type.

`create-model [NAME] [DATAREF] [FIELDS]`: create a new model for your application. You need to provide the name, data reference, and fields for the model as arguments. Data reference should be an existing dataclass. Fields are seperated by space and each field is in `<name>:<type>` type.

`create-ladder [NAME] [LEVELS] [FIELDS]`: create a new ladder entity, representing something that can be upgraded.
need to provide Name, Levels, and Fields. Levels should be a json object. Fields are seperated by space and each field is in `<name>:<type>` type.

`create-quest [NAME] [CONDITIONS] [QuestModel] [REWARDS] [FIELDS]`: create a quest, representing a task that will yield some rewards.
need to provide Name, Conditions, QuestModel, Rewards, and Fields.

`create-battlepass [NAME] [QUESTS] [FIELDS]`: create a battlepass entity, representing a list of quests -- you will get rewards when completing available quests, and upgrade the battle pass to unlock new quests.
You need to provide Name, Quests, and Fields.

`export`: sends the collected data to hyperedge's backend and exports the application data to databases


## Examples
Again hypercli and hyperadmin CLIs are provided to sccafold project and create structs respectively.
Here're some examples demonstrating how to use them:

Sccafold a project using a git repository link as the template:
`hypercli create-project --template 'https://github.com/myaccount/rpg_game.git'`

To pass extra context to the cookiecutter template, you can pass a JSON string:
`hypercli create-project --template 'rpg_game' --extra_context '{"database": "MySQL"}'`

To replay a previous project generation using the same context parameters:
`hypercli create-project --template 'rpg_game' --replay` or 
`hypercli create-project --template 'rpg_game' --replay "/.cookiecutter_replay/rpg_game_v0"`

After providing the context, the project skeleton will be generated.
After navigating into it, you can define structures using the hyperadmin CLI:
`hyperadmin create-dataclass enemy attack:int`
`hyperadmin create-model enemy enemy id:int`
`hyperadmin create-ladder petlevels levels:List[str]`
`hyperadmin create-model pet petlevels id:int`
`hyperadmin create-quest quest1 10exp 10kill 100gold`
`hyperadmin create-quest quest2 30exp 3win 300gold`
`hyperadmin create-battlepass season1 '[quest1,quest2]'`

To inspect the structures in your program:
`hyperadmin collect`
Lastly to export the project:
`hyperadmin export`

For a quick reference on the usage of some commands, use:
`hypercli --help` or 
`hyperadmin --help`


## Contact Information
If you need further assistance or have any questions, please feel free to contact us at [abel@hyperedgelabs.xyz](mailto:abel@hyperedgelabs.xyz) or visit our support page at [HyperEdgeLabs](https://www.hyperedgelabs.xyz/).
