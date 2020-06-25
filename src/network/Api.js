import {Platform, Alert} from 'react-native';
const host = 'http://192.168.1.3:3000/student/';

class Api {
  static async headers () {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  static get (route) {
    return this.func (route, null, 'GET');
  }

  static async postFormData (endPoint,formdata) {
    const url = host+endPoint;
    console.warn(url)
    return fetch (url, {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    })
      .then (resp => {
        console.log ('Api response is ------------->>>>>>', resp);

        let json = resp.json ();

        if (resp.ok) {
          return json;
        }

        return json.then (err => {
          return null;
        });
      })
      .catch (json => {
        console.log ('Api response is ------------->>>>>>', json);

        return null;
      });
  }

  static async func (route, params, verb) {
    const url = `${host}/${route}`;
    let options = Object.assign (
      {method: verb},
      params ? {body: JSON.stringify (params)} : null
    );

    options.headers = await Api.headers ();

    return fetch (url, options)
      .then (resp => {
        console.log ('Api response is ------------->>>>>>', resp);

        let json = resp.json ();

        if (resp.ok) {
          return json;
        }

        return json.then (err => {
          return null;
        });
      })
      .catch (json => {
        console.log ('Api response is ------------->>>>>>', json);

        return null;
      });
  }
}
export default Api;
