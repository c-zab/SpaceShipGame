module managers {
  export class Collision {
    private static explodeSFX: createjs.AbstractSoundInstance;
    public static Check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): void {
      // define points for both object1 and object2
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      // check if there is a collision
      if (
        math.Vec2.Distance(P1, P2) <
        object1.halfHeight + object2.halfHeight
      ) {
        if (!object2.isColliding) {
          object2.isColliding = true;
          switch (object2.name) {
            case "island":
              this.explodeSFX = createjs.Sound.play("explosion");
              this.explodeSFX.volume = 0.1;
              break;
            case "cloud":
              this.explodeSFX = createjs.Sound.play("explosion");
              this.explodeSFX.volume = 0.1;
              break;
          }
        }
      } else {
        object2.isColliding = false;
      }
    }
  }
}
