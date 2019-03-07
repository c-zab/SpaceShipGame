module objects {
  export class GameObject extends createjs.Bitmap {
    // Private Instance Variable
    protected _dx: number;
    protected _dy: number;

    // Public Properties
    public width: number;
    public height: number;
    public halfWidth: number;
    public halfHeight: number;

    // Constructor
    constructor(assetManager: createjs.LoadQueue, imageString: string) {
      super(assetManager.getResult(imageString));
      this.name = imageString;
      this._Initialize();
    }

    // Private Methods
    private _Initialize(): void {
      this.width = this.getBounds().width;
      this.halfWidth = this.width * 0.5;
      this.height = this.getBounds().height * 0.5;
      this.halfHeight = this.height * 0.5;

      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
    }

    // Public Methods
    public Start(): void {}
    public Update(): void {}
    public Reset(): void {}
    public CheckBounds(): void {}
    public Move(): void {}
  }
}
