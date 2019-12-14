import React from 'react';
import axios from 'axios';

export default function LocationList(props) {

    const url =  "https://rickandmortyapi.com/api/location";
    
    const [locationList, setLocationList] = useState([]);
    
    useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get(url)
    .then((response) => {
        console.log(response.data.results)
        setLocationList(response.data.results)      
        console.log(locationList)
    })
    .catch((error) => 
        error.response.data.error.message,
        // console.log('Network request was unsuccesful'),
    )
    
    },[]);