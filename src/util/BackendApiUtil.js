/**
 * @file Backend API utilities. For documents on returned json format,
 * please refer to backend repository: <https://github.com/MxaWnag/demoProject2>
 * @author Homan Wong
 */

import axios from 'axios'

// export const backendUrl = 'http://localhost:8080'; /* Backend server IP (local server, http port)  */
export const backendUrl = 'https://api.eams.homans.world:8443'; /* Backend server IP (remote server, https port) */

class BackendApiUtil {

  /**
   * Return Promise of login results from backend API.
   * @param username
   * @param password
   * @return {Promise} login result.
   * @throws Error error from backend API.
   */
  static async login(username, password) {
    let postOptions = {
      method: 'post',
      url: backendUrl + '/login',
      params: {
        username: username,
        password: password
      }
    };
    return axios(postOptions);
  }

  /**
   * Return Promise of results from backend API.
   * @param id Student ID
   * @return {Promise} Student info data object.
   * @throws Error error from backend API.
   */
  static async getStudentInfo(id) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/showStudentInformation',
      params: {
        id: id
      }
    };
    return axios(getOptions);
  }
}

export default BackendApiUtil;
