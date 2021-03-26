import React, { useEffect } from "react";
import axios from "axios";

const Ayat = (props) => {
    const [data,setData] = React.useState([])

    const id = props.match.params.id
    useEffect(() => {
        axios.get("https://api.npoint.io/99c279bb173a6e28359c/data/"+id+"").then(res => {
            setData()
            console.log(res.data)
        })
    })

        return (
           <div>
               ini ayat
           </div> 
        )

}

export default Ayat;