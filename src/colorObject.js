import randomHexColor from '@chriscodesthings/random-css-hex-color';
import isCSSHexColor from '@chriscodesthings/is-css-hex-color';
import hexToRGBA from '@chriscodesthings/css-hex-color-to-rgba';

import looksLikeRGBA from '../lib/lookslikergba.js';

export default class Color {
    #rgba = [];

    constructor(col = randomHexColor(true)) {
        if (typeof col === 'boolean') {
            col = randomHexColor(col);
        }

        this.set(col);
    }

    get [Symbol.toStringTag]() {
        return 'Color';
    }

    toString() {
    }

    toJSON() {
    }

    set(col) {
        if (isCSSHexColor(col)) {
            col = hexToRGBA(col);
        }

        if (looksLikeRGBA(col)) {
            this.#rgba = [...col, 1].slice(0, 4);
            return true;
        }

        this.#rgba = [0, 0, 0, 1];
    }

    export() { return this.#rgba; }
}

// https://24ways.org/2010/calculating-color-contrast
