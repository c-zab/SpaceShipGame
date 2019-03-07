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
var objects;
(function (objects) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        // Private Instance Variables
        // Public Properties
        // Constructors
        function Cloud(assetManager) {
            var _this = _super.call(this, assetManager, "cloud") || this;
            _this.Start();
            return _this;
        }
        // Private Methods
        // Public Methods
        // Initialization
        Cloud.prototype.Reset = function () {
            this.x = Math.random() * (640 - this.width) + this.halfWidth;
            this.y = -this.height;
            this._dx = Math.random() * 4 - 2;
            this._dy = Math.random() * 3 + 3;
        };
        Cloud.prototype.CheckBounds = function () {
            // check the bottom border
            if (this.y >= 480 + this.height) {
                this.Reset();
            }
        };
        Cloud.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        Cloud.prototype.Start = function () {
            this.Reset();
        };
        // Updates the Object every frame
        Cloud.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map