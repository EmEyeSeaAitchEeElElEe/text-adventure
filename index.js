const log = console.log;
const app = new PIXI.Application();
document.body.appendChild(app.view);
const player = PIXI.Sprite.fromImage('player.png');
player.anchor.set(0.5);
player.x = 300;
player.y = 300;
app.stage.addChild(player);
