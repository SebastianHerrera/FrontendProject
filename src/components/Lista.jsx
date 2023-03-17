import React, {useState, useEffect} from "react";



const Lista = ()=>{
    const [data, setData] = useState([]);
    const llamarlista = async ()=>{
        const respuesta = await fetch('http://localhost:3000/v1/to-dos');
        const respuestaJson = await respuesta.json();
        setData(respuestaJson.todos);
    };

    useEffect(()=>{
        llamarlista()   
    },[]);

    return (<div>
        {
            data.map((item)=>{
                return <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            })
        }
    </div>)
}

export default Lista 