import { TebexHeadlessClient } from "../src";

console.log(process.env.WEBSTORE_IDENTIFIER);

describe("TebexHeadlessClient", () => {
  test("should be instantiated with a webstore identifier", () => {
    const client = new TebexHeadlessClient("mock_identifier");
    expect(client.getIdentifier()).toBe("mock_identifier");
  });
});
