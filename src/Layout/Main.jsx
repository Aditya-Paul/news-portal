import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import axios from 'axios';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />

const Main = () => {
    const [news_data, setNews_data] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/news`)
                setNews_data(res.data)
            }
            catch (error) {
                console.log("this is error ")
            }
        }
        fetchdata()
    }, [])

    // const res = axios.get('http://localhost:3000/news')
    // .then(res=>{
    //     console.log(res.data)
    // })

    const newspaperNames = [...new Set(news_data.map((name) => name.newspaperName))]
    //console.log("unique", newspaperNames)
    console.log("unique", newspaperNames)


    return (
        <div className='px-10'>
            <Header></Header>
            <div className='flex justify-center items-center bg-gray-100'>
                <div className='p-4 bg-gray-100 flex items-center justify-center'>
                    <div className='flex items-center justify-center space-x-3 data-aos="flip-top" data-aos-delay="100000" data-aos-anchor=".example-selector"'>
                        <Link to={"/"} >
                            <button className="bg-teal-50 hover:bg-white text-teal-800 rounded-lg py-3 px-8 shadow-md hover:shadow-2xl transition duration-500">Home</button>
                        </Link>
                        {
                            newspaperNames?.map((item, index) => (
                                <Link to={`/news/${item}`} key={index}>
                                    <button className="bg-teal-50 hover:bg-white text-teal-800 rounded-lg py-3 px-8 shadow-md hover:shadow-2xl transition duration-500">{item}</button>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;