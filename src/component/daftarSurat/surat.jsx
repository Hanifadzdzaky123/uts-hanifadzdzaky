import React, { useState, useEffect } from "react";
import axios from "axios";

const Surat = props => {
    const [data, setData] = React.useState([]);
    const [search, setSearch] = React.useState([]);

    useEffect(() => {
        axios.get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty").then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err.response)
        })
    })

    const click = id => {
        props.history.push('/' + id)
    }

    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Alquran</h1>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div className="col-10 info-panel">
                            <div className="row justify-content-center">
                        {
                            data.length > 0 ? 
                                data.map((param,index) => {
                                    return (
                                        
                                            <div className="col-md-3 com-sm-12 info-surat"  key={index} onClick={() => click(param.nomor)}>
                                                <h5>{param.nomor}.{param.nama}</h5>
                                                <p>{param.arti}</p>
                                            </div>
                                        
                                    )
                                })
                            :
                                <div class="row justify-content-center">
                                    <div className="col-md-12 col-sm-12">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surat;