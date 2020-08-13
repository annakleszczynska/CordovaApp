# Applanga Sketch Plugin

[![Applanga](https://www.applanga.com/assets/images/applanga_blue.png)](https://applanga.com)

A sketch plugin for translating sketch files with Applanga.  

## Installation

Applanga requires [Sketch](https://www.sketch.com/) v54+ to run.

- To localize a Sketch file [download](https://github.com/applanga/sketch/releases/download/v1.0.2/applanga.sketchplugin.zip) the latest release of the plugin
- Un-zip & Double-click on applanga.sketchplugin, this should create a **Applanga** sub-menu under **Plugins** in Sketch


## Configuration

- Create new project in Applanga Dashboard
- Go to `App Settings` of the project
- Add `0.0.0.0/0` in the List of IP's authorized for API upload
- Add `sketchId` as a Metadata field
- Save changes
- Go to the API section in the Applanga Project Settings and click on “Show API Token” and copy the Token
- Make sure the source language of the Sketch file (e.g. English) does exist on the Applanga dashboard
- Open Sketch and in the Menu Bar, go to Plugins > Applanga > Configure API Token and input the Applanga API Token


## Plugin Commands

1. Upload strings
    * All _(upload strings of the whole sketch file)_
    * Current Layer _(upload strings of the current layer from the sketch file)_
2. Upload Screenshots
    * All _(upload all artboards)_
    * Current Layer _(upload artboards of the current layer)_
3. Download From Applanga
    * Target Mode _(download strings translated as target values)_
    * Draft Mode[1] _(download strings translated strings as draft values)_
    * Target Mode to New File _(download strings translated as target values and save a new translated file)_
    * Draft Mode[1] to New File _(download strings translated strings as draft values and save a new translated file)_
4. Configure Api Token _(copy the API Token from your App settings)_


[1]: if the draft value doesn't exist, the target value will be taken

#### Exclude from Upload

If you want to skip layers, artboards or text elements from uploading to Applanga, prefix them with three underscores (___).


## Usage

**How to upload Sketch content for translation?** 

After you installed the Applanga Sketch Plugin and set up the Applanga Sketch integration as described in the Configuration section, open the Sketch file you want to translate. 

Start by uploading the translatable text content. In the Menu Bar under Plugins > Applanga choose Upload Strings. You can either upload all layers or only the currently selected one. 

After you made you chose the upload option form the Plugin menu, a pop-up will appear to ask you to select a source language (the current language of the file). The upload might take a moment. There will be a pop-up to confirm when the upload is done.  

The Applanga Sketch plugin can also upload the layers in the sketch file itself as a visual reference for the translation process to Applanga. For this feature, use the Upload Screenshots option from the plugin menu.  <br><br>

**How to generate translated Sketch files?**

Once translations are available for your Sketch content on Applanga, you can use the plugin to generate a translated versions of your file. 

From the plugin menu, choose Download from Applanga. You will need to decide to either use the Draft version of the string or the Target version. 

**Important!** Before download resolved any *Missing Fonts* in your file. Translations won’t be displayed where fonts are missing. The string will remain unchanged (e.g. English)

In the pop-up that appears after that, select the language you want to download. When saving the file, using the .sketch ending in the file name is mandatory. <br><br>

**Uploading Translated Screenshots**

If you want to upload screenshots of your translated Sketch file back to Applanga, for example, if you want somebody to review the translation in-context, please follow these steps:

1. Go to Download from Applanga, chose either Target or Draft mode and select the language you want to download from the pop-up
2. After the download is finished, go to Upload Screenshots and in the pop-up select the language you want to upload translated screenshots to  <br><br>

**Uploading Translated Screenshots for multiple languages**

With this option, you can start an automated process that will, step by step, download translations for a language, take screenshots of the translated Sketch design, and upload the translated screenshots back to Applanga for all languages selected one after the other automatically. 

In order to upload translated screenshots for multiple languages, in the plugin, chose the Batch Screenshot Upload option. In the subsection of the Batch option, you can select for which layer (all or only the currently selected) and which set of strings (Draft or Target) will be in scope for the batch process. 

After you confirmed the options you will be presented with a pop-up to enter which languages should be included. The languages need to exist in your project on the Applanga dashboard. By default, all languages in your project will be included. <br><br>
