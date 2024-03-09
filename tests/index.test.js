
const { default: testFunc } = await import("../");

describe("testing my module", () => {
    test("expect function to return true", async () => {
        expect(testFunc()).toEqual(true);
    });
});
