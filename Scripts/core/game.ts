/// <reference path="_references.ts" />

(function() {
  // Global variables
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;

  let assetsManager: createjs.LoadQueue;
  let assetsManifest: any[];

  let currentScene: objects.Scene;
  let currentState: number;

  let keyboardManager: managers.Keyboard;

  assetsManifest = [
    { id: "startButton", src: "/Assets/images/button.png" },
    { id: "playButton", src: "/Assets/images/PlayButton.png" },
    { id: "backButton", src: "/Assets/images/BackButton.png" },
    { id: "nextButton", src: "/Assets/images/NextButton.png" },
    { id: "restartButton", src: "/Assets/images/QuitButton.png" },
    { id: "ocean", src: "/Assets/images/ocean.gif" },
    { id: "plane", src: "/Assets/images/plane.png" },
    { id: "island", src: "/Assets/images/island.png" },
    { id: "cloud", src: "/Assets/images/cloud.png" },
    { id: "engine", src: "/Assets/audio/play_music.ogg" },
    { id: "explosion", src: "/Assets/audio/explode.wav" },
    { id: "shoot", src: "/Assets/audio/shoot.wav" }
  ];

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

    objects.Game.stage = stage;
    objects.Game.currentScene = config.Scene.START;
    currentState = config.Scene.START;

    keyboardManager = new managers.Keyboard();
    objects.Game.keyboardManager = keyboardManager;
    Main();
  }

  function Update(): void {
    if (currentState != objects.Game.currentScene) {
      Main();
    }

    currentScene.Update();

    stage.update(); // redraws the stage
  }

  function Main(): void {
    stage.removeAllChildren();
    switch (objects.Game.currentScene) {
      case config.Scene.START:
        console.log("Game Start...");
        currentScene = new scenes.StartScene(assetsManager);
        break;
      case config.Scene.PLAY:
        console.log("Game Play...");
        currentScene = new scenes.PlayScene(assetsManager);
        break;
      case config.Scene.OVER:
        console.log("Game Over...");
        currentScene = new scenes.OverScene(assetsManager);
        break;
    }
    currentState = objects.Game.currentScene;
    stage.addChild(currentScene);
  }

  window.onload = Init;
})();
