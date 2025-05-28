# What is this?

`Phantom Camera` is a Godot 4 addon designed to simplify common `Camera` (`Camera2D` / `Camera3D`) behaviors and provide an comprehensive out-of-box camera experience for various project sizes and complexities. The addon is heavily inspired by a Unity package called [Cinemachine](https://unity.com/unity/features/editor/art-and-design/cinemachine).

It allows for simple behaviours such as following or looking at specific nodes with an optional smoothing parameter to more advance logic like re-framing itself to keep multiple nodes in view and dynamically animate between different points in space.

## Addon Nodes

All the behaviors and logics within the addon works by using the below nodes.

<div class="side-by-side">
<img alt="PhantomCamera2D" src="/assets/icons/phantom-camera-2D.svg" width="128" />
<img alt="PhantomCamera3D" src="/assets/icons/phantom-camera-3D.svg" width="128" />
</div>

### Phantom Camera (2D & 3D)
Shortened to `PCam` (text) and `pcam` (code) is the primary node type for this addon. It exists in two different variants, one for 2D scenes and another for 3D scenes. See the [PhantomCamera2D](../core-nodes/phantom-camera-2d) and [PhantomCamera3D](../core-nodes/phantom-camera-3d) pages respectively for more details.

Its purpose is to contain the positional, rotational, tween and other data that should be applied to a scene's `Camera`. Upon a `PCam` becoming active it will effectively take over the scene's `Camera` node and apply its data to it.

<img alt="PhantomCameraHost" src="/assets/icons/phantom-camera-host.svg" width="128" />

### Phantom Camera Host
Shortened to `PCamHost` (text) and `pcam_host` (code) is a managerial node for a scene's `PCam` and `Camera` nodes. This node decides which `PCam` the `Camera` should be attached to and, consequently, what logic it should have. For all intents and purposes, it's a set and forget node once it's a child of a `Camera` node.
