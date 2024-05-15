import { TebexHeadlessClient } from "../src";

const client = new TebexHeadlessClient("mock-identifier");

describe("TebexHeadlessClient", () => {
  test("should be instantiated with a webstore identifier", () => {
    expect(client.context.identifier).toBe("mock-identifier");
  });
});
