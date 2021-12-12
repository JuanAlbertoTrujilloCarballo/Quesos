AFRAME.registerComponent('draw-canvas', {

    init: function () {
        this.canvas = document.getElementById("my-canvas");
        this.ctx = this.canvas.getContext('2d');

        // we'll update this manually
        this.texture = null;
        // let canvas = document.getElementById("source-canvas");
        // wait until the element is ready
        this.el.addEventListener('loaded', e => {

        });
        this.ctx.fillStyle = "#ff0000";
        draw(this.ctx);
        this.ctx.fillStyle = "#0000ff";

        this.ctx.font = "20px Arial ";
        this.ctx.fillText("Te queremos", 15, 65);
        this.ctx.fillText("cada día más", 15, 90);
        this.ctx.fillText("Tiburcio", 38, 110);
        this.el.addEventListener('mouseenter', function () {

        });
    },
    tick: function () {
        // if the texture is created - update it
        if (this.texture) this.texture.needsUpdate = true
    }
});

function draw(ctx) {
    // Lo busqué por internet, no sabría como hacer un corazón

    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
}

