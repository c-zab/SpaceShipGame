module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _playButton: objects.Button;
    private _nextButton: objects.Button;
    private _backButton: objects.Button;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);
      this.Start();
    }

    // Private Methods
    private _playButtonClick(): void {
      objects.Game.currentScene = config.Scene.PLAY;
    }
    private _backButtonClick(): void {
      objects.Game.currentScene = config.Scene.START;
    }

    private _nextButtonClick(): void {
      // objects.Game.currentScene = config.Scene.OVER;
    }

    // Public Methods
    public Start(): void {
      this._playButton = new objects.Button(
        this.assetManager,
        "playButton",
        320,
        340
      );

      this._backButton = new objects.Button(
        this.assetManager,
        "backButton",
        140,
        340
      );

      this._nextButton = new objects.Button(
        this.assetManager,
        "nextButton",
        500,
        340
      );

      this.Main();
    }

    public Update(): void {}

    public Main(): void {
      this.addChild(this._playButton);
      this.addChild(this._backButton);
      this.addChild(this._nextButton);

      this._playButton.on("click", this._playButtonClick);
      this._backButton.on("click", this._backButtonClick);
      this._nextButton.on("click", this._nextButtonClick);
    }
  }
}
