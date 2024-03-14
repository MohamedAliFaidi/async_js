// task_1

async function iterateWithAsyncAwait(array) {
  for (const item of array) {
    await delay(1000); // Wait for 1 second
    console.log(item);
  }
}
async function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
