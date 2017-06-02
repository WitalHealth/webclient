import axios from 'axios';
import { setCache, getCache, isCacheValid } from '../../utils/cache.util';
import { sortLabsByCity } from './locations.utils';

const LABS = 'labs';

export const fetchLocations = () => {
  if ( isCacheValid(LABS) ) {
    console.log('cached labs');
    return {
      type: 'GET_LOCATIONS',
      locations: getCache(LABS),
    }
  }
  else {
    return dispatch => {
      axios.get('https://dev.wital.se/api/station')
        .then(res => {
          const sortedLabs = sortLabsByCity(res.data);

          dispatch({
            type: 'GET_LOCATIONS',
            locations: sortedLabs,
          });

          setCache(LABS, sortedLabs);
        })
        .catch(err => console.error(err.message));
    }
  }

};