module objects {
  export class Plane extends objects.GameObject {
    // Variables
    public isDead: boolean;

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager, "plane");
      this.Start();
    }

    // Public Methods
    public Start(): void {
      this.isDead = false;
      this.y = 430;
    }
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    public Reset() {}
    public Move() {
      this.x = objects.Game.stage.mouseX;
    }

    public CheckBounds() {
      // Check right boundary
      if (this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // Check left boundary
      if (this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
    }
  }
}
