import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(baseUrl + 'media?limit=' + limit);
      const json = await response.json();
      // console.log('response json data', json);

      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(baseUrl + 'media/' + item.file_id);
          const json = await response.json();
          // console.log('media file id data', json);
          return json;
        })
      );
      // console.log('media array data', media);

      setMediaArray(media);
    } catch (error) {
      console.error('loadMedia error', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);
  return mediaArray;
};

const useLogin = () => {
  const postLogin = async (userCredentials) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userCredentials),
    };
    try {
      const response = await fetch(baseUrl + 'login/', options);
      const userData = await response.json();
      console.log('postLogin response status', response.status);
      if (response.ok) {
        console.log('postLogin userData', userData);
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const checkToken = async (token) => {
    const options = {
      method: 'GET',
      headers: {'x-access-token': token},
    };
    try {
      const response = await fetch(baseUrl + 'users/user', options);
      const userData = response.json();
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {postLogin, checkToken};
};

const useRegister = () => {
  const postRegister = async (inputs) => {
    console.log('trying to create user', inputs);
    const fetchOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputs),
    };
    try {
      const response = await fetch(baseUrl + 'users', fetchOptions);
      const json = await response.json();
      console.log('register result', json);
      if (response.ok) {
        return json;
      } else {
        throw new Error(json.message + ': ' + json.error);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return {postRegister};
};

export {useLoadMedia, useLogin, useRegister};
