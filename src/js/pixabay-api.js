export const axios = require('axios').default;

export const API_KEY = '29801102-c735e5df67f9ec5a047fa49a5';
export let page = 1;

export async function fetchImages(searchParams) {
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(
      `${BASE_URL}?${searchParams}&page=${page}`
    );
    page += 1;
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export function resetPage() {
  page = 1;
}