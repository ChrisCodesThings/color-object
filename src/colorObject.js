import isCSSHexColor from '@chriscodesthings/is-css-hex-color';

export default class Color {
    #rgba;
    #format;

    constructor(col = colourRandomRGB(true)) {
        if (typeof col === 'boolean') {
            col = colourRandomRGB(col);
        }

        this.#format = colourType(col);
        this.set(col);
    }

    get [Symbol.toStringTag]() {
        return 'Color';
    }

    toString() {
        if (this.#format == "rgb") {
            return (
                "rgb("
                    + this.#rgba[0] + " "
                    + this.#rgba[1] + " "
                    + this.#rgba[2]
                    + this.#rgba != 1 ? " / " + Math.round(this.#rgba[3] * 100) + "%" : ""
                + ")"
            );
        }

        if (this.#format == "hex") {
            return colourRGBToHex(this.#rgba);
        }
    }

    toJSON() {
        if (this.#format == "rgb") {
            return JSON.stringify(this.#rgba);
        }

        if (this.#format == "hex") {
            return colourRGBToHex(this.#rgba);
        }
    }

    set(col) {
        this.#rgba = colourResolveTo(col, "rgba");
    }

    fade(f) {
        return colourResolveTo(colourFade(this.#rgba, f), this.#format);
    }
}

// https://24ways.org/2010/calculating-color-contrast
