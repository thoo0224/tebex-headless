import { TebexHeadlessClient } from "../src";

describe("TebexHeadlessClient", () => {
  test("should be instantiated with a webstore identifier", () => {
    const client = new TebexHeadlessClient("mock-identifier");
    expect(client.context.identifier).toBe("mock-identifier");
  });
});
