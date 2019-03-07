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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Public Properties
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        PlayScene.prototype._playButtonClick = function () {
            objects.Game.currentScene = config.Scene.PLAY;
        };
        PlayScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        PlayScene.prototype._nextButtonClick = function () {
            objects.Game.currentScene = config.Scene.OVER;
        };
        // Public Methods
        PlayScene.prototype.Start = function () {
            this._playButton = new objects.Button(this.assetManager, "playButton", 320, 340);
            this._backButton = new objects.Button(this.assetManager, "backButton", 140, 340);
            this._nextButton = new objects.Button(this.assetManager, "nextButton", 500, 340);
            this._ocean = new objects.Ocean(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            this._ocean.Update();
            this._plane.Update();
        };
        PlayScene.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._playButton);
            this.addChild(this._backButton);
            this.addChild(this._nextButton);
            this.addChild(this._plane);
            this._playButton.on("click", this._playButtonClick);
            this._backButton.on("click", this._backButtonClick);
            this._nextButton.on("click", this._nextButtonClick);
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map