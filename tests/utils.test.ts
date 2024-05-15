import { transformKeys } from "../src/utils";

describe("transformKeys", () => {
  it("should transform keys to camel case", () => {
    const input = {
      first_name: "John",
      last_name: "Doe",
      address: {
        street_name: "123 Main St",
        city_name: "New York",
      },
    };

    const expectedOutput = {
      firstName: "John",
      lastName: "Doe",
      address: {
        streetName: "123 Main St",
        cityName: "New York",
      },
    };

    const transformed = transformKeys(input);
    expect(transformed).toEqual(expectedOutput);
  });

  it("should handle arrays", () => {
    const input = [
      { first_name: "John", last_name: "Doe" },
      { first_name: "Jane", last_name: "Smith" },
    ];

    const expectedOutput = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Jane", lastName: "Smith" },
    ];

    const transformed = transformKeys(input);
    expect(transformed).toEqual(expectedOutput);
  });

  it("should handle null and non-object values", () => {
    const input = {
      name: null,
      age: 25,
    };

    const expectedOutput = {
      name: null,
      age: 25,
    };

    const transformed = transformKeys(input);
    expect(transformed).toEqual(expectedOutput);
  });
});
