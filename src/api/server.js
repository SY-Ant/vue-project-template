/*
 * @description: 
 * @Date: 2020-09-01 09:35:21
 * @LastEditTime: 2020-09-01 12:01:38
 */
import * as $http from '@/api';

class Server {
  getList(url, params) {
    return $http.get(url, params);
  }
  postData(url, params) {
    return $http.postFormData(url, params);
  }
  postJson(url, params) {
    return $http.post(url, params);
  }
}

export default new Server();





