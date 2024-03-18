
# Editor Updater
Whenever a new version of the addon gets released on [GitHub](https://github.com/ramokz/phantom-camera/releases), by default, a dialogue prompt will appear on start-up asking to update the addon to the latest release. Choosing to update option in the prompt will then download the latest release as a zip, unzip, remove the existing addon and replace the addon with the newly downloaded version. The editor will then need to be relaunched before the changes can go into proper effect.

The dialogue is also discoverable from the `Phantom Camera` panel located at the bottom of the editor.

If this is unwanted, then the updater [can also be disabled](#updater-settings).

::: info NOTE
The updater requires an active internet connection on start-up. 
:::

## Updater Prompt
The main way the addon communicates that a new update is available is via the prompt that appears when the project starts.

The prompt can appear in two different versions, depending on what version is being updated to.
For smaller **Patch** and **Hotfix** releases, an update button will be visible straight away, while larger **Major** or **Minor** releases will require a dropdown menu to be checked before the update button can appear. This is to prevent accidentally updating the addon where potential breaking changes might be introduced.

::: warning KEY ADVICE 
Always make use of source control and read the **Release Notes** before updating - especially for **Major** and **Minor** releases.
:::

| Major & Minor Releases | Patch & Hotfix Releases                                                                               | 
| ---------------------- |-------------------------------------------------------------------------------------------------------|
|![Editor Updater Major & Minor Prompt](/assets/editor-updater/editor-updater-prompt-major-minor.png) | ![Editor Updater Major & Minor Prompt](/assets/editor-updater/editor-updater-prompt-patch-hotfix.png) |

#### Release Naming Definition
| Term | Example            |
|------|--------------------|
| **Major** | `v0.8` ➜ `v1.0`     |
| **Minor** | `v0.6` ➜ `v0.7`     |
| **Patch** | `v0.6.4` ➜ `v0.6.5` |
|**Hotfix** | `v0.6.4` ➜ `v0.6.4.1` |

### Viewfinder Button Prompt
Appears in the viewfinder panel if a new update is available. If pressed, will trigger the contextual [Updater Prompt](#updater-prompt) to appear.
![Editor Updater Viewfinder](/assets/editor-updater/editor-updater-viewfinder.png)



## Updater Settings

![Editor Project Settings](/assets/editor-updater/editor-updater-project-settings-updater.png)

Options to disable the updater to two different levels are available within the `Project Settings`.

::: tip
You may have to enable `Advanced Settings` in the top right-hand corner for the settings to appear in the panel. Alternatively, you can search for them.
:::

<table>
    <tr>
        <th>
            <h5>Enable Updater</h5>
        </th>
        <th><h5>Show New Release Info on Editor Launch in Output</h5></th>
    </tr>
    <tr>
        <td>
            <img alt="Prompt when Enable Updater is enabled" src="/assets/editor-updater/editor-updater-prompt-patch-hotfix.png"/>
        </td>
        <td>
            <img alt="Output when Show New Release Info on Editor Launch in Output" src="/assets/editor-updater/editor-updater-output-updater.png"/>
        </td>
    </tr>
    <tr>
        <td> If enabled, it will trigger the updater dialogue when the Godot project opens and show an updater button in the <code>Phantom Camera</code> editor panel.
            <div class="warning custom-block">
            <p class="custom-block-title">IMPORTANT</p>
            If you are using the addon by having forked the project, then the updater prompt will always be disabled.
            This is to prevent an update from overriding your own changes.
            </div>
        </td>
        <td>
            If <code>Enable Updater</code> is disabled or using a forked version of the project, this will appear by default in the <code>Output</code> tab within the Godot editor on startup. <br><br>
            Like with the <code>Editor Updater</code>, this too can be disabled from the <code>Project Settings</code>. 
        </td>
    </tr>
</table>

::: tip NOTE
The way a **Fork** and a **End User** project is being distinguished is by the inclusion of a scene in the `dev_scenes` directory in the root level of the project, which is only present in **Forks**.
:::