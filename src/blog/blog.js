
import Link from "next/link";
import { useState,useEffect } from "react"; 
import axios from "axios";
import Navbar from "../navbar/navbar";

// export const getStaticProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await res.json();

//     return {
//         props: {
//             data,
//         },
//     };
// };


// export const getStaticProps = async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await res.json();

//     return {
//         props:{
//             data,
//         }
//     }
// }
const Blog = () => {
    const [data,setdata] =useState([])
    const getdata = async()=>{
            const val = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setdata(val.data)
    }
    useEffect(()=>{
        getdata();
    },[])
    console.log("data",data)

    return (
        <>
            {
                data.map((curElem) => {
                    return (
                        <div key={curElem.id}>
                            <h3>{curElem.id}</h3>
                            <Link href={`/component/blogdata/${curElem.id}`}>
                                <h2>{curElem.title}</h2></Link>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Blog;