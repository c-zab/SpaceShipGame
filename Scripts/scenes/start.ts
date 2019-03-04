module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Private Methods
    private _startButtonClick(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }

    // Public Methods
    public Start(): void {
      this._welcomeLabel = new objects.Label(
        "Start Game",
        "40px",
        "Consolate",
        "#000000",
        320,
        240,
        true
      );

      this._startButton = new objects.Button(
        this.assetManager,
        "startButton",
        320,
        340
      );

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._welcomeLabel);

      this.addChild(this._startButton);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}
