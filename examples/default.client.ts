import ObjectHighlighter from "rbx-objecthighlighter";

const Players = game.GetService("Players");
const ReplicatedStorage = game.GetService("ReplicatedStorage");
const RunService = game.GetService("RunService");
const Workspace = game.GetService("Workspace");

// This screen gui will contain our ViewportFrames
const myScreenGui = new Instance("ScreenGui");
myScreenGui.Name = "ObjectHighlighter";
myScreenGui.Parent = Players.LocalPlayer:FindFirstChildOfClass("PlayerGui");

const myRenderer = ObjectHighlighter.createRenderer(myScreenGui);

// Assume we have a Model as a direct child of Workspace
const myHighlight = ObjectHighlighter.createFromTarget(Workspace.Model);

// Apply our highlight object to our Renderer stack.
// We can add as many highlight objects to a renderer as we need
myRenderer.addToStack(myHighlight);

// Our renderer will not render until it steps
RunService.RenderStepped.Connect(dt => myRenderer.step(dt));
