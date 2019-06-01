import ObjectHighlighter from "rbx-objecthighlighter"

const Players = game.GetService("Players");
const ReplicatedStorage = game.GetService("ReplicatedStorage");
const RunService = game.GetService("RunService");
const Workspace = game.GetService("Workspace");

// This screen gui will contain our ViewportFrames
const myScreenGui = new Instance("ScreenGui");
myScreenGui.Name = "ObjectHighlighter";
myScreenGui.Parent = Players.LocalPlayer.FindFirstChildOfClass("PlayerGui");

// Create a Renderer object with an alternative render implementation.
// `hightlightColor` will override the original model's colors and textures
// with the `color` field provided from `myHighlight`'s state.
const myRenderer = ObjectHighlighter.createRenderer(myScreenGui)
	.withRenderImpl(ObjectHighlighter.Implementations.highlightColor);

// Assume we have a Model as a direct child of Workspace
const myHighlight = ObjectHighlighter.createFromTarget(Workspace.Model);

// Apply our highlight object to our Renderer stack.
// We can add as many highlight objects to a renderer as we need
myRenderer.addToStack(myHighlight);

RunService.RenderStepped.Connect(dt => {
	// Since our highlight object contains it's own state,
	// we have the option to update it before stepping here.
	myHighlight.color = new Color3(math.sin(time()), 0, 0);

	// Our renderer will not render until it steps
	myRenderer.step(dt);
});
