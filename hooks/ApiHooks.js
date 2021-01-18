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

export {useLoadMedia};
