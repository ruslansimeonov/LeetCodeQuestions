import { addTwoPromises } from "../../src/jsFundamentals/addTwoPromises";

describe("addTwoPromises", () => {
  it("should add two promises (example 1)", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(2), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(5), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(7);
  });

  it("should add two promises (example 2)", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(10), 50)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(-12), 30)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(-2);
  });

  it("should handle zero values", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(0), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(0), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(0);
  });

  it("should handle negative values", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(-5), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(-10), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(-15);
  });

  it("should handle large values", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(1000000), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(2000000), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(3000000);
  });

  it("should handle mixed positive and negative values", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(50), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(-20), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(30);
  });
});
