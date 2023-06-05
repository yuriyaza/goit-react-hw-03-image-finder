export class Api {
  SRC_URL = 'https://pixabay.com/api/';
  API_KEY = '35549464-6e431a9fbd4d75e0b6b25f5be';

  async getData(query, page) {
    const { SRC_URL, API_KEY } = this;

    const response = await fetch(`${SRC_URL}?q=${query}&key=${API_KEY}&page=${page}&per_page=${12}&image_type=photo&orientation=horizontal`);
    const images = await response.json();
    return images;
  }
}
