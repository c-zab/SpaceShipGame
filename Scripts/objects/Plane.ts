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
      this.x = 320;
      this.y = 430;
    }
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    public Reset() {}
    public Move() {
      // this.x = objects.Game.stage.mouseX;
      if (objects.Game.keyboardManager.moveLeft) {
        this.x -= 5;
      }
      if (objects.Game.keyboardManager.moveRight) {
        this.x += 5;
      }
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
