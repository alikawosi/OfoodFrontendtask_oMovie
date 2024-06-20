import axios from 'axios';

class Api {
  token = ' eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTVlNmFlZWU3ZDE0NjRhZTNhMjdhZjdkYmY4OGVkNyIsInN1YiI6IjY2NzQzZmVmM2RiOGFlZjM1ODhmMWVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IYI_jJhWq-0fY25Be8Q1ADcr_LL1YKMVRhfvHGpo_mw';
  baseURL = 'https://api.themoviedb.org/3';

  init() {

    axios.defaults.baseURL = this.baseURL;
    axios.interceptors.request.use(async req => {
      req.headers.Authorization = 'Bearer ' + this.token;
      return req;
    },
  
    error => {
      return Promise.reject(error);
    }
    );
    axios.interceptors.response.use(
      async response => {
        return response.data;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }

  instanse() {
    return axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }
}

const api = new Api();

export {api};

