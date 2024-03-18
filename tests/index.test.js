const { default: isCSSHexColor } = await import("@chriscodesthings/is-css-hex-color");
const { default: isDark } = await import("@chriscodesthings/rgb-color-is-dark");
const { default: looksLikeRGBA } = await import("@chriscodesthings/color-looks-like-rgba");
const { default: rgbaToHex } = await import("@chriscodesthings/rgba-color-to-css-hex");

const { default: Color } = await import("../");


describe("test initialization types", () => {
    test("should be a random colour", async () => {
        const col = new Color();
        const rgba = col.asRGBA();

        expect(looksLikeRGBA(rgba)).toEqual(true);
    });

    test("should be cornflowerblue", async () => {
        const col = new Color("#6495ed");
        const rgba = col.asRGBA();

        expect(rgba).toEqual([100, 149, 237, 1]);
    });

    test("should be transparent cornflowerblue", async () => {
        const col = new Color("#6495ed7f");
        const rgba = col.asRGBA();

        expect(rgba).toEqual([100, 149, 237, 0.5]);
    });

    test("should be a dark colour", async () => {
        const col = new Color(true);
        const rgba = col.asRGBA();

        expect(isDark(...rgba)).toEqual(true);
    });

    test("should be as rgba given", async () => {
        const col = new Color([12, 34, 56, 0.78]);
        const rgba = col.asRGBA();

        expect(rgba).toEqual([12, 34, 56, 0.78]);
    });

    test("invalid input, should be black", async () => {
        const col = new Color("not a colour");
        const rgba = col.asRGBA();

        expect(rgba).toEqual([0, 0, 0, 1]);
    });
});

describe("test output conversion", () => {
    const col = new Color([100, 149, 237, 0.5]);

    test("output as hex", () => {
        expect(col.asHex()).toEqual("#6495ed7f");
    });
});

describe("test exports", () => {
    const col = new Color([100, 149, 237, 0.5]);

    test("object identifier", () => {
        expect(Object.prototype.toString.call(col)).toEqual("[object Color]");
    });

    test("string coersion", () => {
        expect("" + col).toEqual("#6495ed7f");
    });

    test("JSON stringify", () => {
        expect(JSON.stringify(col)).toEqual("\"#6495ed7f\"");
    });
});

describe("test fading functions", () => {
    test("darken 50%", () => {
        const col = new Color([200, 100, 50]);
        expect(col.fade(-50)).toEqual(rgbaToHex([100, 50, 25]));
    });

    test("lighten 10%", () => {
        const col = new Color([55, 155, 205]);
        expect(col.fade(10)).toEqual(rgbaToHex([75, 165, 210]));
    });
});
