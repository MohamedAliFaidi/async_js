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
//iterateWithAsyncAwait(values);

async function awaitCall(bool) {
    try {
        const data = await fetchDataFromAPI(bool); // Wait for API response
        console.log(data)
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

async function fetchDataFromAPI(bool) {
    return new Promise((resolve, reject) => {
        // Simulating API call
        setTimeout(() => {
            if (bool) {
                resolve('Data from API');
            } else {
                reject(new Error('API request failed'));
            }
        }, 1000);
    });
}

awaitCall(false);

