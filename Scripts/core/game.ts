(function() {
  // Global variables
  let canvas = document.getElementById("canvas");

  let stage: createjs.Stage;
  let helloLabel: createjs.Text;

  function Init(): void {
    console.log("Initialization start");

    Start();
  }

  function Start(): void {
    console.log("Starting Application...");

    // Initialize CreateJS

    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60; // FPS
    createjs.Ticker.on("tick", Update); // tick is a frame, every time the tick changes it calls the Update function
    Main();
  }

  function Update(): void {
    helloLabel.rotation += 5;
    stage.update(); // redraws the stage
  }

  function Main(): void {
    console.log("Game Start...");

    helloLabel = new createjs.Text("Hello World", "40px Consolate", "#000000");
    helloLabel.x = 100;
    helloLabel.y = 100;

    stage.addChild(helloLabel);
  }

  window.onload = Init;
})();
