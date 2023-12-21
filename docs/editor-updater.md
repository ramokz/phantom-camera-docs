
# Editor Updater
Whenever a new update for `Phantom Camera` is released on GitHub a dialogue prompt appears on start-up to update the addon.
The dialogue is also discoverable from the `Viewfinder` at the bottom of the editor.

It will download the latest release as a zip, unzip, remove the existing addon and replace the addon with the newly downloaded version.

**Note:** The updater will _not_ appear if there are no updates or if there is no internet connection. 

## Appearances

### Viewfinder Button Prompt
Appears in the viewfinder panel if a new update is available.
![Editor Updater Viewfinder](./assets/editor-updater/editor-updater-viewfinder.png)

### Dialogue Prompt
When starting the editor or when pressing the `Update is Available`.<br>
Pressing `Update`will initiate the download process. Upon completion, the editor will need to be reloaded in order to finalize the upgrade - this will be prompted from a new dialogue once it's ready.
![Editor Updater Dialogue](./assets/editor-updater/editor-updater-dialog.png)