# Missing data-cy attributes detector Google Chrome & Mozilla Firefox extension
Google Chrome & Mozilla Firefox extension to highlight data-cy attributes 
in interactive elements (input, select, button, etc..).

## How to install it on Google Chrome?
Once cloned, 
1. Navigate to [chrome://extensions](chrome://extensions) 
2. Activate 'Developer mode'
3. Click 'Load Unpacked' (or similar) at the top-left corner of the screen
4. Select the project folder

## How to install it on Mozilla Firefox?
Once cloned, 
1. Navigate to [about:debugging](about:debugging) 
2. In the left menu, click in 'This Firefox'
3. Click 'Load Temporary Add-on...'
4. Select your `manifest.json`
5. Select the project folder

## How it works?
Once installed, 
1. Navigate to the website you want to check
2. Certain interactive elements lice input, select, .switch, .cursor-pointer, button, etc. without data-cy attributes, 
   or data-cy attributes with empty value should have a red border of 5 pixels and be blur.

## How to limit it to certain websites?
Modifying the `manifest.json` file:

The `content_script.matches` define where the `content/js/content.js` will get executed.
This guide from Mozilla tell you the patters to follow
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns

## How to disable it (in Google Chrome)?
1. Go to [chrome://extensions](chrome://extensions)
2. Click on Details in the extension card
3. Toggle disable

## How to uninstall it in Chrome?
Once cloned, 
1. Go to [chrome://extensions](chrome://extensions)
2. Click on Quit (or Uninstall) in the extension card
3. Accept the alert message

## How to uninstall it in Mozilla Firefox?
Once cloned, 
1. Navigate to [about:debugging](about:debugging) 
2. Click on Remove in the extension card

### About
Extension made by David Hermoso

Feel free to contact with me!


