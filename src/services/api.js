export class Api {
  async getData(query) {
    const API_KEY = '35549464-6e431a9fbd4d75e0b6b25f5be';
    const page = 1;

    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const images = await response.json();
    return images.hits;
  }
}
