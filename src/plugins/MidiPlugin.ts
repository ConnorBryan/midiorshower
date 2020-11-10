import Phaser from "phaser";
import WebMidi, { InputEventNoteon } from "webmidi";

export default class MidiPlugin extends Phaser.Plugins.BasePlugin {
  static INPUT_RECEIVED = "Midi Input Received";

  listeners: Phaser.GameObjects.GameObject[] = [];

  init() {
    console.info("Midi plugin initialized.");

    WebMidi.enable(() => {
      const [input] = WebMidi.inputs;

      if (input) {
        input.addListener("noteon", "all", (event) =>
          this.handleMidiInput(event)
        );
      } else {
        console.error("No midi device detected", WebMidi);
      }
    });
  }

  register(gameObject: Phaser.GameObjects.GameObject) {
    this.listeners.push(gameObject);
  }

  unregister(gameObject: Phaser.GameObjects.GameObject) {
    this.listeners = this.listeners.filter(
      (listener) => listener !== gameObject
    );
  }

  handleMidiInput(event: InputEventNoteon) {
    const { name, octave } = event.note;

    console.info(`MidiPlugin received ${name}${octave}.`);

    // For every callback in the stack, execute it.
    this.listeners.forEach((listener) =>
      listener.emit(MidiPlugin.INPUT_RECEIVED, event)
    );
  }
}
