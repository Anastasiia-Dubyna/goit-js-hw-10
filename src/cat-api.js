const URL = 'https://api.thecatapi.com/v1/';

const options = {
  headers: {
    'x-api-key':
      'live_xABKVPf3xLO7THRgojF2kJdfRAq1JgyNKpgS4PintKnOLvj8ak2zMlPQzmHcM11d',
  },
};

function fetchBreeds(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(url) {
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export { URL, fetchBreeds, fetchCatByBreed };