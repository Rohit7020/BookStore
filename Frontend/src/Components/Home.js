import {useState,useEffect} from 'react';
import axios from 'axios'
import './Home.css'

let Home=()=>{
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/get").then(
            (res)=>{
                setData(res.data)
                console.log(res.data)

            }
        ).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div className='Book'>
            <tbody>
            {
                data.map((item,index)=>{
                    return(<div><td><img src={`http://localhost:7000/img/${item.img}`} key={index}/></td><br/>
                    <td>Book Nmae: {item.Bname}</td><br/>
                    <td>Author: {item.Author}</td><br/>
                    <td>Publisher: {item.Publisher}</td><br/>
                    <td>Price: {item.Price}</td><br/>
                    <td>Ratings: {item.Rating}</td><br/>
                    </div>)
                })
            }
            </tbody>

        </div>
    )

}
export default Home;
