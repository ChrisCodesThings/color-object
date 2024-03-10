const { default: isCSSHexColor } = await import("@chriscodesthings/is-css-hex-color");
const { default: isDark } = await import("@chriscodesthings/rgb-color-is-dark");

const { default: looksLikeRGBA } = await import("../lib/lookslikergba");
const { default: Color } = await import("../");

describe("test lookslikergba", () => {
    test("should fail for invalid length", async () => {
        expect(looksLikeRGBA([1, 2])).toEqual(false);
    });

    test("should fail for invalid length", async () => {
        expect(looksLikeRGBA([1, 2, 3, 4, 5])).toEqual(false);
    });

    test("should accept black", async () => {
        expect(looksLikeRGBA([0, 0, 0])).toEqual(true);
    });

    test("should accept white", async () => {
        expect(looksLikeRGBA([255, 255, 255])).toEqual(true);
    });

    test("should accept transparent white", async () => {
        expect(looksLikeRGBA([255, 255, 255, 0.5])).toEqual(true);
    });

    test("should fail invalid values", async () => {
        expect(looksLikeRGBA([-3, 255, 255, 0.5])).toEqual(false);
    });

    test("should fail invalid values", async () => {
        expect(looksLikeRGBA([255, 2555, 255, 0.5])).toEqual(false);
    });

    test("should fail invalid values", async () => {
        expect(looksLikeRGBA([255, 255, 256, 1])).toEqual(false);
    });

    test("should fail invalid values", async () => {
        expect(looksLikeRGBA([255, 255, 255, 2])).toEqual(false);
    });
});

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

describe("test class methods", () => {
    const col = new Color("#6495ed7f");

    test("object identifier", () => {
        expect(Object.prototype.toString.call(col)).toEqual("[object Color]");
    });
});
