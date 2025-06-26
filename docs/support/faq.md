# FAQ
## General
### What is the intent behind the addon?
Cameras are an essential part of practically any game for rendering what you see on the screen. But rarely do they remain static and immovable, but instead dynamic and changes based on what happens in a given context.

The addon is meant to simplify some common camera behaviour, such as smoothly moving between different points in space at specified points in time or retain a particular positional/rotational value relative to other elements.

The end goal is to make it functional enough to become a generalised camera extension for Godot projects.

---

### What is the state of the addon?
Ongoing, but still in early stages. Core features have been implemented, but may change as more get added. Things will likely break or change along the way. It's also worth keeping in mind that lots of key and, likely, frequently used features are yet to be done.

See the [project page](https://github.com/users/ramokz/projects/3/views/8) to see planned features.

---

### What Godot version is supported?
The minimum Godot version this addon supports is 4.3.
The version requirement will change over time as the addon evolves and takes advantage of new features.
The intent is to support as many versions of Godot as possible, but exceptions are made if significant engine changes or additions are introduced in more recent releases that affect the addon's codebase.

---

### What about Godot 3?
`GDScript` has received a lot of changes and improvements in 4.0, but as a result it would require a rather large rewrite to make it compatible with older versions.

---

### When will X feature be added?
There's no deadline or precise timeframe for when things get implemented. The [milestones page](https://github.com/MarcusSkov/phantom-camera/milestones) should give a good idea for what has, will, and currently being looked at.

---

### Is there C# support?
**Yes**, While the addon is written in `GDScript`, it has an official [C# Wrapper](/c-sharp-wrapper). In short, it allows for strongly typed references to the various properties and methods `GDScript` users have access to and makes using the addon in `C#` feel a lot more native.

---

### Why was the addon made in `GDScript` instead of `C#` / `C++`?
`GDScript` is much easier to run, test and ultimately get things done in compared to `C#` and, in particular, `C++`. Although it doesn't boast as many technical features as either and comes with its shortcomings, ultimately it was allowed for rapid iterations and general improvements to the addon.

---

### A property / method does not seem to work when using the C# Wrapper, but is listed on the documentation site / GDScript files
The process of creating and maintaining this wrapper is a manual process. Meaning, whenever a new property or function is introduced in the original `GDScript` files, they would have to be manually added to the corresponding `C#` file(s).

If you spot any discrepancies of available properties and methods between the `GDScript` and `C#` wrapper, please submit an [issue](https://github.com/ramokz/phantom-camera/issues/new?template=bug_report.yml) or a [pull request](https://github.com/ramokz/phantom-camera/pulls). Any help spotting things like this is always appreciated.

---

### Has rewriting it as an GDExtension been considered?
It has, and likely will happen one day when the addon reaches a more mature state. Partly for performance reasons, but also to make users of `GDScript`, `C#` and others have a similar experience when using it in their language of choice.

---

### Can I use the addon in a commercial project?
**Yes**, the addon is **MIT** licensed.

Put simply, it means you don't have to ask for permission to use it for personal or professional work.
You can copy, modify and do whatever you want with it.
The license file can also be found in the [project's repository](https://github.com/ramokz/phantom-camera/blob/main/LICENSE).

---

### Does the addon do any data collection?
#### Addon
**No**. There's no tracking or any kind of telemetry that tracks the usage of the addon and there **never** will be.

The only "metrics" this project have are [GitHub stars](https://github.com/ramokz/phantom-camera), [donations](https://ko-fi.com/ramokz), [issue reports](https://github.com/ramokz/phantom-camera/issues) / [discussion posts](https://github.com/ramokz/phantom-camera/discussions), and whenever someone posts about the addon.

I have no actual clue about who and how many use the addon, so GitHub stars, messages or social posts are always appreciated.

#### Documentation Site
**Partially**. This site uses [Algolia via their open source program](https://www.algolia.com/for-open-source), which is the search tool that is used on the site. It is a commonly used tool by many open-source documentation sites, including [VueJS](https://vuejs.org/).

It tracks what people are searching for when using the search bar, but not at any other point in time. It doesn't provide any personalised information, at least to my knowledge, about who uses the search tool, just that _someone_ searched for something specific that may or may not be on the site.

The site uses this for three reasons:
1. For improved search results. The tool regularly scrapes the site and allows for a cached version to be searched when users use the search tool. This allows for finding specific words across every text block on the site and without having to wait for the search tool to scan through the various pages.
2. To see what topics people are searching for and then add corresponding documentation that answers those searches. This section here, as an example, was included in large part because people have searched for it. 
3. To see what features people are looking for. Sometimes when features that are not part of the addon have been searched for, they have then consequently been either included or planned for future releases. Many of whom were not directly requested via [issue feature requests](https://github.com/ramokz/phantom-camera/issues/new?template=feature_proposal.yml), so have proven useful for adding new features that was directly communicated as a want, but made sense to include.


## Troubleshooting
### I'm seeing jitter, what can I do?
If you're seeing a targeted node rapidly moving back and forth as you move it, then, yes, that is _not_ an intended effect nor something that should be happening.

If you're using a physics object, such as `CharacterBody2D/3D` as a target, and it's moving in the `_physics_process`, then you will likely notice jitter.

> This is not to be confused with stutter, which [Godot has a good example of showing the difference between the two.](https://docs.godotengine.org/en/stable/tutorials/rendering/jitter_stutter.html)

#### 2D or 3D (Godot 4.4 or above)
It's recommended to enable `Physics Interpolation` inside `Project Setting`. Doing so will effectively achieve the steps outlined below, but without having to do anything extra and allow setting a `PhysicsBody2D` as a `Follow Target` without causing jitter.

#### 3D (Godot 4.3)
For older versions of Godot, the steps below are meant to

The solution here is to make the visual representation, i.e. the thing you're seeing being jittery, only move in the `_process` rather than being controlled by its parent node. This can be achieved in a few ways.

##### Option 1 (Recommended) — The [smoothing-addon](https://github.com/lawnjelly/smoothing-addon/tree/4.x)
This is the most straightforward and well-tested approach by someone who very much knows what they're doing.

It essentially requires parenting the visual representation nodes underneath a custom smoothing node. There is a bit more to it than that, and [the GitHub page](https://github.com/lawnjelly/smoothing-addon/tree/4.x) has more helpful information and context.

##### Option 2 — DIY
It's effectively a simplistic version of the `smoothing-addon`, but is meant for those who would like a solution that doesn't rely on an additional addon. The addon's example scenes use this approach in large part to avoid nesting another addon inside of it.

In your physics node script, or at least one that has access to it, that should be tracked by the camera, e.g. `CharacterBody2D/3D`, add the following:

```gdscript
extends CharacterBody3D # or CharacterBody2D

var _player_visual # Type: Node2D/3D

var _physics_body_tran_last # Type: Transform2D/3D
var _physics_body_tran_current # Type: Transform2D/3D


func _ready() -> void:
	# Prevents the visual node from be affected by the movement of its parent
	_player_visual.top_level = true


func _physics_process(delta: float) -> void:
	_physics_body_tran_last = _physics_body_trans_current
	_physics_body_tran_current = global_transform
	# The global_transform here referring to your physics-node
	# e.g. CharacterBody2D/3D

	# Other code like movement logic


func _process(_delta: float) -> void:
	_player_visual.global_transform = \
	    _physics_body_tran_last.interpolate_with(
            _physics_body_tran_current,
            Engine.get_physics_interpolation_fraction()
        )
```

Again, this is a very simplistic take on Option 1, which provides more functionalities and is generally a more tried and tested solution.

#### Additional Option - Set the target to the Visual Representation Node

<img alt="Target Visual Node" src="/assets/support/follow-visual-node.png" height="1122" width="618"/>

Another thing you can do is to set the target to the visual representation directly. Ultimately, that is what should be followed in any case, though it's a less obvious node to select. The only prerequisite for this is to use either of the two options above so that the visual representation only updates in the `_process`.

<img alt="Editable children" src="/assets/support/editable-children.png" height="648" width="334"/>

Depending on your scene structure, this can be more cumbersome to set than the physics-body node. If you're unsure how to select it, you can either set the `pcam`'s `follow_target` value via code directly or, if it's nested inside a sub-scene, enable `editable children` and select the visual node from the inspector there - all the example scenes do the latter.

#### Is there really no easy fix for this without another addon or having to write additional code?
There is a planned change for Godot that will enable nodes to [set the physics interpolation](https://docs.godotengine.org/en/3.6/tutorials/physics/interpolation/2d_and_3d_physics_interpolation.html). It's unfortunately only fully supported in Godot 3 at the minute — Godot 3.5 introduced it to 3D scenes, and Godot 3.6 introduced it to 2D scene.

2D Physics Interpolation was ported for Godot 4.3, and 3D Physics Interpolation should be happening at some point.
