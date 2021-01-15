import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const baseUrl = 'http://media.mw.metropolia.fi/wbma/';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(baseUrl + 'media?limit=' + limit);
      const json = await response.json();
      console.log('response json data', json);

      const media = await Promise.all(
        json.map(async (item) => {
          const response = await fetch(baseUrl + 'media/' + item.file_id);
          const json = await response.json();
          // console.log('media file id data', json);
          return json;
        })
      );
      console.log('media array data', media);

      setMediaArray(media);
    } catch (error) {
      console.error('loadMedia error', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
