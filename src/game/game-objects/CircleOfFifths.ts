import Phaser from "phaser";

const CIRCLE_OF_FIFTHS_NOTE_BLOCK_SIZE = 64;
const CIRCLE_OF_FIFTHS_X_OFFSET = CIRCLE_OF_FIFTHS_NOTE_BLOCK_SIZE / 2;
const CIRCLE_OF_FIFTHS_Y_OFFSET = 300;

const intentionals = ["A", "B", "C", "D", "E", "F", "G"];
const withoutAccidentals = {
  B: true,
  E: true,
};
const notes = intentionals.reduce((prev, next, index, array) => {
  prev.push(next);

  if (!withoutAccidentals[next]) {
    const following = array[index + 1] || array[0];
    const accidental = `${next}♯/${following}♭`;

    prev.push(accidental);
  }

  return prev;
}, [] as string[]);
const firstSet = notes.slice(0, 3);
const secondSet = notes.slice(3, 6);
const thirdSet = notes.slice(6, 9);
const fourthSet = notes.slice(9);

export default class CircleOfFifths extends Phaser.GameObjects.GameObject {
  rectangleLookup: Record<string, Phaser.GameObjects.Shape> = {};
  textLookup: Record<string, Phaser.GameObjects.Text> = {};

  constructor(scene: Phaser.Scene) {
    super(scene, "circleOfFifths");

    (window as any).notes = this.rectangleLookup;

    this.init();
  }

  init() {
    const { width } = this.scene.scale;

    [firstSet, secondSet, thirdSet, fourthSet].forEach((set, setIndex) => {
      set.forEach((note, noteIndex) => {
        const x =
          width -
          255 +
          (CIRCLE_OF_FIFTHS_NOTE_BLOCK_SIZE + CIRCLE_OF_FIFTHS_X_OFFSET) *
            noteIndex;
        const y = CIRCLE_OF_FIFTHS_Y_OFFSET + setIndex * 90;

        this.rectangleLookup[note] = this.scene.add.rectangle(
          x,
          y,
          CIRCLE_OF_FIFTHS_NOTE_BLOCK_SIZE,
          CIRCLE_OF_FIFTHS_NOTE_BLOCK_SIZE,
          0x000000
        );

        this.textLookup[note] = this.scene.add
          .text(x - 20, y, note, {
            color: "white",
          })
          .setOrigin(0, 0.5);
      });
    });
  }
}
