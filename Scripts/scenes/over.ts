module scenes {
  export class OverScene extends objects.Scene {
    // Private Instance Variables
    private _gameOverLabel: objects.Label;
    private _restartButton: objects.Button;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Private Methods
    private _restartButtonClick(): void {
      objects.Game.currentScene = config.Scene.START;
    }

    // Public Methods
    public Start(): void {
      this._gameOverLabel = new objects.Label(
        "Game Over",
        "40px",
        "Consolate",
        "#000000",
        320,
        240,
        true
      );

      this._restartButton = new objects.Button(
        this.assetManager,
        "restartButton",
        320,
        340
      );

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._gameOverLabel);

      this.addChild(this._restartButton);

      this._restartButton.on("click", this._restartButtonClick);
    }
  }
}
