<img src="/assets/icons/phantom-camera-noise.svg" height="256" width="256"/>

# PhantomCameraNoise

Is a feature that allows `PCam2D/3D` to apply noise, or sometimes referred to as shake, to the camera.

The noise value is stored in the individual `PCam2D/3D` node, but is only applied to the `Camera2D/3D` when that `PCam2D/3D` is active.

## Video Examples
<VideoTabs propertyName="noise-videos" video2d="../assets/videos/noise-2d.mp4" video3d="../assets/videos/noise-3d.mp4"/>

## How to Apply Noise

There are 3 ways to apply noise to a `Camera2D/3D` using this system.

### Noise Property

![noise-property-setup.png](/assets/guides/noise-property-setup.png)

Each `PCam` has a `Noise` property that takes a [PhantomCameraNoise2D](/resource-types/phantom-camera-noise-2d) / [PhantomCameraNoise3D](/resource-types/phantom-camera-noise-3d) resource for [PCam2D](/core-nodes/phantom-camera-2d#noise) / [PCam3D](/core-nodes/phantom-camera-3d#noise) respectively.

Supplying a resource to that will make the noise run persistently without pause on that specific `PCam`. So use this if you want to apply a constant noise movement on the camera when that `PCam2D/3D` is active.

::: info Important
The noise will only go into effect after a tween to it has completed.
:::

---

### Noise Emitter Node

<div :class="$style.image_side_by_side">
    <img alt="Noise Emitter 2D" src="/assets/guides/noise-emitter-2d-setup.png" />
    <img alt="Noise Emitter 3D" src="/assets/guides/noise-emitter-3d-setup.png" />
</div>


Add a [PhantomCameraNoiseEmitter2D](/secondary-nodes/phantom-camera-noise-emitter-2d) / [PhantomCameraNoiseEmitter3D](/secondary-nodes/phantom-camera-noise-emitter-3d) node to a scene, assign a [PhantomCameraNoise2D](/resource-types/phantom-camera-noise-2d) / [PhantomCameraNoise3D](/resource-types/phantom-camera-noise-3d) resource and trigger it at any time by calling the `emit()` [(2D)](/secondary-nodes/phantom-camera-noise-emitter-2d#emit) / [(3D)](/secondary-nodes/phantom-camera-noise-emitter-3d#emit) respectively.

The effect can be previewed in the viewfinder within the editor, and during runtime, by toggling the `Preview` button in the noise emitter's inspector.

::: info Important
Unlike when assigning a Noise resource directly to a `PCam2D/3D`, this can be triggered at any point in time and so can impact the `Camera2D/3D` both when following and during a tween to a `PCam2D/3D` if it has a matching `noise_emitter_layer`.
:::

---

### Emit Noise Function (Custom Noise Values)
If one wants to use a custom value, then the noise can be manually applied by calling the `emit()` function with a `Transform2D` / `Transform3D` parameter for the `emit_noise()` [(2D)](/core-nodes/phantom-camera-2d#emit_noise) / [(3D)](/core-nodes/phantom-camera-3d#emit_noise) respectively.

This is to support external libraries, addons and custom calculations that the user may want to use instead.

<style module>
.image_side_by_side {
    display: flex;
    flex-direction: column;
    @media(min-width: 600px) {
        flex-direction: row;
    }
    img {
        width: 100%;
        @media(min-width: 600px) {
            width: 50%;
        }
    }
}
</style>
