import axios from 'axios';

class ApiService {
  static getPath(path) {
  	return `https://cors-anywhere.herokuapp.com/${path}`;
  }

  static getFeed(path) {
    return axios.get(this.getPath(path));
  }	
}

export default ApiService;