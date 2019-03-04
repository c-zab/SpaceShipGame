/// <reference path="_references.ts" />

(function() {
  // Global variables
  let canvas = document.getElementById("canvas");

  let stage: createjs.Stage;

  let assetsManager: createjs.LoadQueue;
  let assetsManifest: any[];
  let currentScene: number;

  assetsManifest = [{ id: "startButton", src: "/Assets/images/button.png" }];

  function Init(): void {
    console.log("Initialization start...");

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

    currentScene = config.Scene.START;
    Main();
  }

  function Update(): void {
    stage.update(); // redraws the stage
  }

  function Main(): void {
    switch (currentScene) {
      case config.Scene.START:
        console.log("Game Start...");
        break;
      case config.Scene.PLAY:
        break;
      case config.Scene.OVER:
        break;
    }
  }

  window.onload = Init;
})();
