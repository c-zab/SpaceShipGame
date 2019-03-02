/// <reference path="_references.ts" />
(function () {
    // Global variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickbutton;
    function Init() {
        console.log("Initialization start");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // FPS
        createjs.Ticker.on("tick", Update); // tick is a frame, every time the tick changes it calls the Update function
        Main();
    }
    function Update() {
        stage.update(); // redraws the stage
    }
    function Main() {
        console.log("Game Start...");
        helloLabel = new objects.Label("Hello World Carlos Zabaleta Copa", "40px", "Consolate", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickbutton = new objects.Button("/Assets/images/button.png", 320, 340);
        clickbutton.regX = clickbutton.getBounds().width * 0.5;
        clickbutton.regY = clickbutton.getBounds().height * 0.5;
        clickbutton.on("mousedown", mouseClickButton);
        stage.addChild(clickbutton);
    }
    function mouseClickButton() {
        helloLabel.text = "Clicked";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map