// 'https://jsonplaceholder.typicode.com/'
class API_CLASS {
  constructor(url) {
    this._api = url;
  }

  get api() {
    return this._api;
  }

  set api(api) {
    this._api = api;
  }

  todos() {
    return new Promise((resolve, reject) => {
      fetch(`${this.api}todos?_limit=5`).then((response) => {
        resolve(response.json());
      });
    });
  }
}

module.exports = API_CLASS;
