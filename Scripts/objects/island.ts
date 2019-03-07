module objects {
  export class Island extends objects.GameObject {
    // Private Instance Variable

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "island");
      this.Start();
    }

    // Private Methods

    // Public Methods

    // Initialization
    public Reset() {
      this.x = Math.random() * (640 - this.width) + this.halfWidth;
      this.y = -this.height;
    }

    public CheckBounds() {
      // check the bottom border
      if (this.y >= 480 + this.height) {
        this.Reset();
      }
    }

    public Move() {
      this.y += this._dy;
    }

    public Start(): void {
      this._dy = 5;
      this.Reset();
    }
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }
  }
}
