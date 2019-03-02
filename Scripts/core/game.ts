/// <reference path="_references.ts" />

(function() {
  // Global variables
  let canvas = document.getElementById("canvas");

  let stage: createjs.Stage;
  let helloLabel: objects.Label;
  let clickbutton: objects.Button;

  let assetsManager: createjs.LoadQueue;
  let assetsManifest: any[];

  assetsManifest = [{ id: "startButton", src: "/Assets/images/button.png" }];

  function Init(): void {
    console.log("Initialization start");
    assetsManager = new createjs.LoadQueue();
    assetsManager.installPlugin(createjs.Sound);
    assetsManager.loadManifest(assetsManifest);
    assetsManager.on("complete", Start, this);
  }

  function Start(): void {
    console.log("Starting Application...");

    // Initialize CreateJS
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60; // FPS
    createjs.Ticker.on("tick", Update); // tick is a frame, every time the tick changes it calls the Update function
    Main();
  }

  function Update(): void {
    stage.update(); // redraws the stage
  }

  function Main(): void {
    console.log("Game Start...");

    helloLabel = new objects.Label(
      "Hello World Carlos Zabaleta Copa",
      "40px",
      "Consolate",
      "#000000",
      320,
      240,
      true
    );
    stage.addChild(helloLabel);

    clickbutton = new objects.Button(assetsManager, "startButton", 320, 340);

    clickbutton.on("mousedown", mouseClickButton);

    stage.addChild(clickbutton);
  }

  function mouseClickButton(): void {
    helloLabel.text = "Clicked";
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
  }

  window.onload = Init;
})();
