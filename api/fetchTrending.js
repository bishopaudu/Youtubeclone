import {RAPID_API_KEY} from '@env'
import axios from 'axios';


export default async function fetchTrending (params) {
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
          geo: 'NG',
          lang: 'en',
          ...params
        },
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          //console.log(response.data.data);
          return response.data.data
      } catch (error) {
          console.error(error);
          return []
      }

}
//export default fetchTrending;
