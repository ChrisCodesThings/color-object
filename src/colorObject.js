import randomHexColor from '@chriscodesthings/random-css-hex-color';
import isCSSHexColor from '@chriscodesthings/is-css-hex-color';
import hexToRGBA from '@chriscodesthings/css-hex-color-to-rgba';
import looksLikeRGBA from '@chriscodesthings/color-looks-like-rgba';
import rgbaToHex from '@chriscodesthings/rgba-color-to-css-hex';
import colorFade from '@chriscodesthings/rgb-color-fade';

export default class Color {
    #rgba = [0, 0, 0, 1];

    constructor(col = randomHexColor(true)) {
        if (typeof col === 'boolean') {
            col = randomHexColor(col);
        }

        this.set(col);
    }

    get [Symbol.toStringTag]() {
        return 'Color';
    }

    toString() { return this.asHex(); }
    toJSON() { return this.asHex(); }

    set(col) {
        if (isCSSHexColor(col)) {
            col = hexToRGBA(col);
        }

        if (looksLikeRGBA(col)) {
            this.#rgba = [...col, 1].slice(0, 4);
            return true;
        }

        return false;
    }

    asRGBA() { return this.#rgba; }
    asHex() { return rgbaToHex(this.#rgba); }

    fade(f) { return rgbaToHex(colorFade(this.#rgba, f)); }
}

// https://24ways.org/2010/calculating-color-contrast
