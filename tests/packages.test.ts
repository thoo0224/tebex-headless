import { TebexHeadlessClient } from "../src";

const client = new TebexHeadlessClient(process.env.WEBSTORE_IDENTIFIER!);

describe("PackagesService", () => {
  it("should get packages", async () => {
    const packages = await client.packages.getPackages();
    console.log(packages);
    expect(packages).toBeDefined();
  });
});
