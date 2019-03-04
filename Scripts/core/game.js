/// <reference path="_references.ts" />
(function () {
    // Global variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetsManager;
    var assetsManifest;
    var currentScene;
    assetsManifest = [{ id: "startButton", src: "/Assets/images/button.png" }];
    function Init() {
        console.log("Initialization start...");
        assetsManager = new createjs.LoadQueue();
        assetsManager.installPlugin(createjs.Sound);
        assetsManager.loadManifest(assetsManifest);
        assetsManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // FPS
        createjs.Ticker.on("tick", Update); // tick is a frame, every time the tick changes it calls the Update function
        currentScene = config.Scene.START;
        Main();
    }
    function Update() {
        stage.update(); // redraws the stage
    }
    function Main() {
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
//# sourceMappingURL=game.js.map