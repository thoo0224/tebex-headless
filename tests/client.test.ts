import { TebexError, TebexHeadlessClient } from "../src";

const client = new TebexHeadlessClient("mock-identifier");

describe("TebexHeadlessClient", () => {
  test("should return an error when the webstore identifier is invalid", async () => {
    const client = new TebexHeadlessClient("invalid-identifier");
    try {
      await client.packages.getPackages();
    } catch (error) {
      expect(error).toBeInstanceOf(TebexError);
      if (error instanceof TebexError) {
        expect(error.response).toBeDefined();
      }
    }
  });

  test("should be instantiated with a webstore identifier", () => {
    expect(client.context.identifier).toBe("mock-identifier");
  });
});
