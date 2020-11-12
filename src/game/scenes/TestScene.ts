const GRID_ROW_COUNT = 5;
const GRID_COLUMN_COUNT = 5;
const GRID_TILE_SIZE = 96;
const GRID_TILE_SIZE_HALF = GRID_TILE_SIZE / 2;
const GRID_TILE_DEPTH = GRID_TILE_SIZE / 8;

const WHITE = 0xffff;
const LIGHT_GREY = 0xd3d3d3;
const GREY = 0x708090;
const DARK_GREY = 0x708090;

export default class TestScene extends Phaser.Scene {
  grid: any = [];

  create() {
    this.grid = Array.from({ length: GRID_COLUMN_COUNT }, (_, columnIndex) =>
      Array.from({ length: GRID_ROW_COUNT }, (_, rowIndex) => {
        const centerX = GRID_ROW_COUNT * GRID_TILE_SIZE_HALF + 150;
        const centerY = 200;
        const evenColors = [GREY, DARK_GREY, LIGHT_GREY];
        const oddColors = [WHITE, GREY, LIGHT_GREY];
        const colors =
          columnIndex % 2 === 0 && rowIndex % 2 === 0 ? evenColors : oddColors;

        return this.add.isobox(
          centerX + (columnIndex - rowIndex) * GRID_TILE_SIZE_HALF,
          centerY + (columnIndex + rowIndex) * (GRID_TILE_DEPTH * 2),
          GRID_TILE_SIZE,
          GRID_TILE_DEPTH,
          ...colors
        );
      })
    );
  }
}
