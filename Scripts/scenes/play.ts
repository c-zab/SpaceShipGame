module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _playButton: objects.Button;
    private _nextButton: objects.Button;
    private _backButton: objects.Button;

    private _ocean: objects.Ocean;
    private _plane: objects.Plane;
    private _island: objects.Island;
    private _clouds: objects.Cloud[];
    private _cloudnum: number;

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
      objects.Game.currentScene = config.Scene.OVER;
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

      this._ocean = new objects.Ocean(this.assetManager);
      this._plane = new objects.Plane(this.assetManager);
      this._island = new objects.Island(this.assetManager);
      this._cloudnum = 3;
      // create the cloud array
      this._clouds = new Array<objects.Cloud>();

      // add clouds to the array
      for (let count = 0; count < this._cloudnum; count++) {
        this._clouds[count] = new objects.Cloud(this.assetManager);
      }

      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
      this._plane.Update();
      this._island.Update();
      this._clouds.forEach(cloud => {
        cloud.Update();
      });
    }

    public Main(): void {
      this.addChild(this._ocean);
      this.addChild(this._playButton);
      this.addChild(this._backButton);
      this.addChild(this._nextButton);
      this.addChild(this._island);
      this.addChild(this._plane);

      // add clouds to the scene
      this._clouds.forEach(cloud => {
        this.addChild(cloud);
      });

      this._playButton.on("click", this._playButtonClick);
      this._backButton.on("click", this._backButtonClick);
      this._nextButton.on("click", this._nextButtonClick);
    }
  }
}
