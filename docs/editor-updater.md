<img src="/assets/icons/editor-updater.svg" height="256" width="256"/>

# Editor Updater

::: tip Note
If this is unwanted, then the updater [can also be disabled](#updater-settings).
:::

Whenever a new version of the addon gets released on [GitHub](https://github.com/ramokz/phantom-camera/releases), by default, the Phantom Camera panel, at the bottom of the editor window, will change color and show an update icon.

![Editor Updater Panel](/assets/editor-updater/editor-updater-panel.png)

Opening the panel will display an update button in the top right hand corner.

![Editor Updater Viewfinder](/assets/editor-updater/editor-updater-panel-opened.png)


Pressing the **Update available** button will then open the updater prompt.

<div align="center">
<img src="/assets/editor-updater/editor-updater-prompt-patch-hotfix.png" width="400" alt="Image example of editor updater prompt"/>
</div>

Pressing **Update** will download the latest release as a zip, unzip, remove the existing addon and replace the addon with the newly downloaded version. The editor will then need to be relaunched before the changes can go into proper effect.

::: tip FOR FORKS
Forks of the project will **_not_** have an option to update the addon via the editor.

Read more in the [Updater Settings](#updater-settings) section.
:::

::: info Note
The updater will only check when a project is opened.
:::


## Updater Prompt Variants
The updater prompt can appear in two different variants depending on what version would be updated to.

For smaller **Patch** and **Hotfix** releases, an update button will be visible straight away, while larger **Major** or **Minor** releases will require a dropdown menu to be checked before the update button can appear. This is to prevent accidentally updating the addon where potential breaking changes might be introduced.

::: warning KEY ADVICE 
Always make use of source control and read the **Release Notes** before updating - especially for **Major** and **Minor** releases.
:::

| Patch & Hotfix Releases                                                                               |  Major & Minor Releases                                                                               | 
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| ![Editor Updater Major & Minor Prompt](/assets/editor-updater/editor-updater-prompt-patch-hotfix.png) |![Editor Updater Major & Minor Prompt](/assets/editor-updater/editor-updater-prompt-major-minor.png) |

#### Release Naming Definition
| Term | Example            |
|------|--------------------|
| **Major** | `v0.8` ➜ `v1.0`     |
| **Minor** | `v0.6` ➜ `v0.7`     |
| **Patch** | `v0.6.4` ➜ `v0.6.5` |
|**Hotfix** | `v0.6.4` ➜ `v0.6.4.1` |

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
            If you are using the addon by having forked the project, then the updater prompt will <i><b>always</b></i> be disabled.
            </div>
        </td>
        <td>
            If <code>Enable Updater</code> is disabled or using a forked version of the project, this will appear by default in the <code>Output</code> tab within the Godot editor on startup. <br><br>
            Like with the <code>Editor Updater</code>, this too can be disabled from the <code>Project Settings</code>. 
        </td>
    </tr>
</table>

::: tip TIP
The way a **Fork** and a **End User** project is being distinguished is by the inclusion of a scene in the `dev_scenes` directory in the root level of the project, which is only present in the development repository / forks.
:::