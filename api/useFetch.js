import {useState,useEffect} from 'react'
import axios from 'axios'
import {RAPID_API_KEY} from '@env'

const useFetch=(value) => {
    const[data,setData] =useState([])
    const[error,setError] = useState(null)
    const[isLoading,setIsLoading] = useState(true)
    const options = {
        method: 'GET',
        url: `https://youtube-v3-alternative.p.rapidapi.com/${value}`,
        params: {
          geo: 'NG',
          lang: 'en',
        },
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };
      


    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.request(options)
                if(!res.ok){
                    console.log('something wrong with response')
                }
                setData(res.data.data)     

            } catch(error){
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    },[value])
    return {data,isLoading,error}
}
export default useFetch;