# C# Wrapper

## Why was this made?
The addon is written in `GDScript` and makes use of typed declarations of its methods and properties.

While the addon works just fine out-of-the-box in other languages that Godot supports, including `C#`, the way you reference properties, methods and signals in `GDScript` in those other languages are cumbersome and not type safe.

It's very easy to make a slight spelling mistake that would result in a runtime error that a given IDE would not warn or otherwise flag. For example, to reference a property or call a method from a `PCam` node, you would normally have to type the _**exact**_ name of the method. So to update the priority of a given `PCam` in a `C#` you would have to type:
```csharp
_pcam.Set("priority", 10); // Without the wrapper
```
Which would mean if you misspelled `priority`, it would trigger an error when that line of code is called at runtime.

The intent for the `C#` wrapper is to prevent situations like and make using the addon in `C#` more elegant, where all the properties, methods and signals of the `GDScript` addon files can be accessed using typed language instead. So instead of the above, you the wrapper allows for changing the priority in a safer and easier to write way:

```csharp
_pcam.Priority = 10 // With the wrapper
```

`C#` was made chosen specifically due to popular demand and was introduced to this project by the effort of contributors.

## How do you use it
All the addon nodes and singleton scripts can be referenced once the `PhantomCamera` namespace has been added to a given `.cs` file. It then allows for assigning the appropriate types to variables and access their properties, methods and signals. The names of the properties, methods and signals are the same as the `GDScript` version, but are here PascalCased to follow the common `C#` naming convention.

Note, that due to some technical constraints with how adding a wrapper to custom `GDScript` declared nodes like `PhantomCamera2D` and `PhantomCameraHost`, referencing the addon nodes works a bit differently than one might initially expect.

### Example
```csharp
using Godot;
using PhantomCamera;
using PhantomCamera.Manager;

public partial class MyClassName : Node
{

  private PhantomCamera2D _pcam;
  private PhantomCameraHost _pcamHost;

  public override void _Ready()
  {
    // PhantomCamera reference
    _pcam = GetNode<Node2D>("%PhantomCamera2D").AsPhantomCamera2D();
    _pcam.Priority = 40; // Changes the priority of the PCam to 40

    // PhantomCameraHost reference using the PhantomCameraManager singleton
    _pcamHost = PhantomCameraManager.PhantomCameraHosts[0]; // Fetches the first PCamHost through the PCamManager singleton
    GD.Print(_pcamHost.HostLayers); // Outputs the host_layer value of the PCamHost
  }
}
```


You may notice the perhaps slightly odd inclusion of `.AsPhantomCamera2D()` and the usage of `GetNode<Node2D>` instead of the more intuitive `GetNode<PhantomCamera2D>`. What it is doing is essentially casting the `Node2D` as a `PhantomCamera2D`, which allows for referencing the various public properties, methods, and signals available from the `PhantomCamera` `GDScript` class.

The same approach is also needed for other addon nodes:


```csharp
_pcam2D = GetNode<Node2D>("PathToNode").AsPhantomCamera2D(); // PhantomCamera2D
_pcam3D = GetNode<Node3D>("PathToNode").AsPhantomCamera3D(); // // PhantomCamera3D
_pcamHost = GetNode<Node>("PathToNode").AsPhantomCameraHost(); // PhantomCameraHost
_pcamNoiseEmitter2D = GetNode<Node2D>("PathToNode").AsPhantomCameraNoiseEmitter2D(); // PhantomCameraNoiseEmitter2D
_pcamNoiseEmitter3D = GetNode<Node3D>("PathToNode").AsPhantomCameraNoiseEmitter3D(); // PhantomCameraNoiseEmitter3D
```
The side effect of this system means that in order to change the properties, call method or connect signals inherited from the `Node2D` class, you would need to explicitly reference the `Node2D` class before doing so.
For example, to change the visibility of the `Node2D` property that the `_`pcam variable above is based on, you can do that with:

```csharp
_pcam.Node2D.Visible = false; // Sets the Visible property of the Node2D class to false
```

Nothing complicated, but something to keep in mind.

## A property / method does not seem to work when using the C# Wrapper
The process of creating and maintaining this wrapper is a manual process. Meaning, whenever a new property or function is introduced in the original `GDScript` files, they would have to be manually added to the corresponding `C#` file(s).

If you spot any discrepancies of available properties and methods between the `GDScript` and `C#` wrapper, please submit an [issue](https://github.com/ramokz/phantom-camera/issues/new?template=bug_report.yml) or a [pull request](https://github.com/ramokz/phantom-camera/pulls). Any help spotting things like this is always appreciated.
