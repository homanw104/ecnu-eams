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
    try {
      return await axios(postOptions);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param id track's ID
   * @return {Promise} track result data object.
   * @throws Error error from backend API.
   */
  static async getTracksData(id) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/tracks/info?id=' + id
    }
    try {
      return axios(getOptions)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param id artist's ID
   * @return {Promise} artist result data object.
   * @throws Error error from backend API.
   */
  static async getArtistsData(id) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/artists/info?id=' + id
    }
    try {
      return axios(getOptions)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param query artist's name
   * @return {Promise} artists list result data object.
   * @throws Error error from backend API.
   */
  static async getTracksList(query) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/tracks/search?name=' + query
    }
    try {
      return axios(getOptions)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Return Promise of search results from backend API.
   * @param query artist's tracks
   * @return {Promise} artists list result data object.
   * @throws Error error from backend API.
   */
  static async getArtistTracks(query) {
    let getOptions = {
      method: 'get',
      url: backendUrl + '/tracks/searchByArtists?id=' + query
    }
    try {
      return axios(getOptions)
    } catch (error) {
      throw new Error(error.message)
    }
  }

}

export default BackendApiUtil;
