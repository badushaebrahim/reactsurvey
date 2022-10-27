import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Listobject from './listobject';
function Listholder() {
    const[data,setData] = useState([]);
    useEffect(() => {
        // var axios = require("axios").default;

        var options = {
          method: 'GET',
          url: 'http://localhost:8081/survey/',
          headers: {Accept: '*/*', 'User-Agent': 'Thunder Client (https://www.thunderclient.com)'}
        };
        
        axios.request(options).then(function (response) {
          console.log(response.data);
          setData(response.data)
        }).catch(function (error) {
          console.error(error);
        });
    
    //   return () => {
    //     second
    //   }
    }, [])
    const deleterecord= (e)=>{
        // const[id,setId]=useState(0);
        // var axios = require("axios").default;
    
    var options = {
      method: 'DELETE',
      url: 'http://localhost:8081/survey/'+e.target.value,
      headers: {Accept: '*/*'}
    };
    console.log(options.url)
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    }
    
  return (
    <div >
        {data.map((obs,key)=>{
            return(<div className='wrap' >
            <Listobject key={key} obj={obs} />
            <button onClick={deleterecord} value={obs.id}>Delete</button>
            </div>)
        })}
    </div>
  )
}

export default Listholder