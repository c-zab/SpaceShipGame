var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var OverScene = /** @class */ (function (_super) {
        __extends(OverScene, _super);
        // Public Properties
        // Constructor
        function OverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        OverScene.prototype._restartButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        // Public Methods
        OverScene.prototype.Start = function () {
            this._gameOverLabel = new objects.Label("Game Over", "40px", "Consolate", "#000000", 320, 240, true);
            this._restartButton = new objects.Button(this.assetManager, "restartButton", 320, 340);
            this.Main();
        };
        OverScene.prototype.Update = function () { };
        OverScene.prototype.Main = function () {
            this.addChild(this._gameOverLabel);
            this.addChild(this._restartButton);
            this._restartButton.on("click", this._restartButtonClick);
        };
        return OverScene;
    }(objects.Scene));
    scenes.OverScene = OverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map