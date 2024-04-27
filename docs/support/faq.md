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
The minimum Godot verison this addon supports is 4.2.
The version requirement will change over time as the addon evolves and takes advantage of new features.
The intent is to support as many versions of Godot as possible, but exceptions are made if significant engine changes or additions are introduced in more recent releases that affect the addon's codebase.

---

### What about Godot 3?
GDScript has received a lot of changes and improvements in 4.0, but as a result it would require a rather large rewrite to make it compatible with older versions.

---

### When will X feature be added?
There's no deadline or precise timeframe for when things get implemented. The [milestones page](https://github.com/MarcusSkov/phantom-camera/milestones) should give a good idea for what has, will, and currently being looked at.

---

### Is there C# support?
Short answer, yes. While the addon is written in `GDScript`, it is fully compatible for projects using `C#`.

To call methods, set properties etc. from `C#` files, simply follow the guidelines on [Godot's documentation page](https://docs.godotengine.org/en/stable/tutorials/scripting/cross_language_scripting.html).

Using the addon in `C#` is not as elegant as GDScript, which comes down to the addon having been written in GDScript.

---

### Why was the addon written in `GDScript` instead of `C#` or `C++`?
`GDScript` is much easier to run, test and ultimately get things done in compared to `C#` and, in particular, `C++`. Although it doesn't boast as many technical features as either and comes with its shortcomings, ultimately it was allowed for rapid iterations and general improvements to the addon.

---

### Has rewriting it as an GDExtension been considered?
It has, and likely will happen one day when the addon reaches a more mature state. Partly for performance reasons, but also to make users of GDScript, C# and others have a similar experience when using it in their language of choice.


## Troubleshooting
### I'm seeing jitter, what can I do?
If you're seeing a targeted node rapidly moving back and forth as you move it, then, yes, that is _not_ an intended effect nor something that should be happening.

If you're using a physics object, such as `CharacterBody2D/3D` as a target, and it's moving in the `_physics_process`, then you will likely notice jitter.

> This is not to be confused with stutter, which [Godot has a good example of showing the difference between the two.](https://docs.godotengine.org/en/stable/tutorials/rendering/jitter_stutter.html)

The Solution here is to make the visual representation, i.e. the thing you're seeing being jittery, only move in the `_process` rather than being controlled by its parent node.

#### Option 1 (Recommended) — The [smoothing-addon](https://github.com/lawnjelly/smoothing-addon/tree/4.x)
This is the most straightforward and well-tested approach by someone who very much knows what they're doing.

It essentially requires parenting the visual representation nodes underneath a custom smoothing node. There is a bit more to it than that, and [the GitHub page](https://github.com/lawnjelly/smoothing-addon/tree/4.x) has more helpful information and context.

#### Option 2 — DIY
It's effectively a simplistic version of the `smoothing-addon`, but is meant for those who would like a solution that doesn't rely on an additional addon. The addon's example scenes use this approach in large part to avoid nesting another addon inside of it.

In your physics node script, or at least one that has access to it, that should be tracked by the camera, e.g. `CharacterBody2D/3D`, add the following:

```gdscript
var _visual_node # Type: Node2D/3D

var _physics_body_tran_last # Type: Transform2D/3D
var _physics_body_tran_current # Type: Transform2D/3D


func _ready() -> void:
	_player_visual.top_level = true # Prevents the visual node from be affected by the movement of its parent


func _physics_process(delta: float) -> void:
	_physics_body_trans_last = _physics_body_trans_current
	_physics_body_trans_current = global_transform
	# The global_transform here referring to your physics-node
	# e.g. CharacterBody2D/3D

	# Other code like movement logic


func _process(_delta: float) -> void:
	_visual_node.global_transform = _physics_body_tran_last.interpolate_with(
		_physics_body_trans_current,
		Engine.get_physics_interpolation_fraction()
	)

	# Other code
```

Again, this is a very simplistic take on Option 1, which provides more functionalities and is generally a more tried and tested solution.


#### Additional Option - Set the target to the Visual Representation Node

<img alt="Target Visual Node" src="/assets/support/follow-visual-node.png" height="1122" width="618"/>

Another thing you can do is to set the target to the visual representation directly. Ultimately, that is what should be followed in any case, though it's a less obvious node to select. The only prerequisite for this is to use either of the two options above so that the visual representation only updates in the `_process`.


<img alt="Editable children" src="/assets/support/editable-children.png" height="648" width="334"/>

Depending on your scene structure, this can be more cumbersome to set than the physics-body node. If you're unsure how to select it, you can either set the `pcam`'s `follow_target` value via code directly or, if it's nested inside a sub-scene, enable `editable children` and select the visual node from the inspector there - all the example scenes do the latter.

As you can probably tell, there is still work to be done in this area, and it is a common issue but it's gradually moving in the right direction


#### Is there really no easy fix for this without another addon or having to write additional code?
There is a planned change for Godot that will enable nodes to [set the physics interpolation](https://docs.godotengine.org/en/3.6/tutorials/physics/interpolation/2d_and_3d_physics_interpolation.html). It's unfortunately only available in Godot 3 at the minute — Godot 3.5 introduced it to 3D scenes, and Godot 3.6 introduces it to 2D.

A port for Godot 4.X _should_ be happening at some point.

---

### Where can I go for support?
If there's something you're unsure about or can't quite work out, then feel free to make a [discussion post on the GitHub repo](https://github.com/ramokz/phantom-camera/discussions/new/choose), you're likely not the only person who has had a particular question. Remember, there are **_no_** stupid questions!

Also feel free to reach out to me personally on [Twitter](https://twitter.com/marcusskov), [Mastodon](https://mastodon.gamedev.place/@marcusskov) or [Bluesky](https://bsky.app/profile/marcusskov.bsky.social) - DMs are always open and happy to help!

#### Some minor house rules when asking for help
- Always be polite and respectful.
- Try to only ask questions concerning this addon. General Godot questions can be better answered in dedicated communities where more members are active in.
- Always check existing, and closed, issues before making a post.
- Be as specific as possible and, if you can, include a minimal reproducible project (see [Godot's guideline description for more context](https://github.com/godotengine/godot/blob/master/CONTRIBUTING.md#provide-a-simple-example-project)). Much like typical IT troubleshooting, it's difficult to help without seeing how you've done things.
- And remember, this project is free, open-source and currently maintained by a single individual so don't expect a response nor fix right away.