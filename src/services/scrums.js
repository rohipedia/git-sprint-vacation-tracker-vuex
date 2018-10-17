import Vue from 'vue'

export default {

  save(request) {

    return Vue.http.put('scrums.json', request)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  }
  
}