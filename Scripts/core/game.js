/// <reference path="_references.ts" />
(function () {
    // Global variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetsManager;
    var assetsManifest;
    var currentScene;
    var currentState;
    assetsManifest = [
        { id: "startButton", src: "/Assets/images/button.png" },
        { id: "playButton", src: "/Assets/images/PlayButton.png" },
        { id: "backButton", src: "/Assets/images/BackButton.png" },
        { id: "nextButton", src: "/Assets/images/NextButton.png" }
    ];
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
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            console.log(objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
    }
    function Main() {
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
                // currentScene = new scenes.StartScene(assetsManager);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map