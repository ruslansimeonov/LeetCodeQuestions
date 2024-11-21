type P = Promise<number>;

export async function addTwoPromises(
  promise1: P,
  promise2: P
): Promise<number> {
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
}

// Example usage:
const promise1 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(2), 20)
);
const promise2 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(5), 60)
);

// addTwoPromises(promise1, promise2).then((result) => {
//   console.log(result); // Output: 7
// });

const promise3 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(10), 50)
);
const promise4 = new Promise<number>((resolve) =>
  setTimeout(() => resolve(-12), 30)
);

// addTwoPromises(promise3, promise4).then((result) => {
//   console.log(result); // Output: -2
// });
