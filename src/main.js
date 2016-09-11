var CELL_SIZE = 150;
var RAW_COUNT = 4;
var COL_COUNT = 3;
var game = new Phaser.Game(COL_COUNT * CELL_SIZE, RAW_COUNT * CELL_SIZE, Phaser.CANVAS, 'phaser-example', { create: create, update: update, render: render });

function create() {

		game.stage.backgroundColor = '#CCCCCC';
		var graphics = game.add.graphics(0, 0);
		graphics.lineStyle(1, 0x000000, 1);
		// Draw Vertical grid
		for (x = 0; x < COL_COUNT; x++) {
			graphics.moveTo( x * CELL_SIZE, 0);
			graphics.lineTo( x * CELL_SIZE, RAW_COUNT * CELL_SIZE);
		}
		// Draw Horisontal  grid
		for (y = 0; y < RAW_COUNT; y++) {
			graphics.moveTo( 0, y * CELL_SIZE);
			graphics.lineTo( CELL_SIZE * COL_COUNT, CELL_SIZE * y );
		}

}

function update() {

}

function render () {


}
