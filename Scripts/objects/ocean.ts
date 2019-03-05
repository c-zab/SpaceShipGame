module objects {
  export class Ocean extends createjs.Bitmap {
    // Private Instance Variable

    private _dy: number;
    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager.getResult("ocean"));
      this.Start();
    }

    // Private Methods
    private _reset() {
      this.y = -960;
    }
    private _move() {
      this.y += this._dy;
    }

    private _checkBounds() {
      if (this.y >= 0) {
        this._reset();
      }
    }

    // Public Methods
    public Start(): void {
      this._dy = 5;
      this._reset();
    }
    public Update(): void {
      this._move();
      this._checkBounds();
    }
  }
}
