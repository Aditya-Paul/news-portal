import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

const Allnews = () => {
    const { newspaperName } = useParams()
    // const [individual_News, setIndividual_News] = useState([])
    const [newspaperData, setNewspaperData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/news?individual_news=${newspaperName}`)
            .then(res => res.json())
            .then(data => {
                setNewspaperData(data)
            })
    }, [newspaperName])

    // const individual_News = newspaperData.filter(item => item.newspaperName === newspaperName)
    console.log("name", newspaperData)
    return (
        <div className='px-20 bg-gray-100'>
            <h1 className='text-center text-2xl font-bold pb-4'> {newspaperName} News</h1>
            {
                newspaperData?.map(item => (
                    <div className="card card-side bg-base-100 shadow-xl p-4 mb-2">
                        
                        <div className="card-body flex ">
                        <img src={item.newsImage} className='w-full h-96 rounded-lg' alt="" />
                            {/* title & date */}
                            <div className='flex  items-center space-x-32'>
                                <h2 className="card-title">{item.newsHeadline}</h2>
                                <p className='flex items-center justify-center' >{item.date}<CiCalendarDate style={{ fontSize: '1.65rem', marginLeft: "10px", color: "pink" }} /></p>
                            </div>

                            {/* Author  */}
                            <div>
                                <h4 className='flex items-center'> <IoIosContact style={{ fontSize: '1.65rem', marginRight: "10px" }} /> {item.authorName}</h4>
                            </div>

                            {/* News details */}
                            <div>
                                <p>{item.newsDescription.split(' ').splice(0, 50).join(' ')}.....</p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to={`/news/individual/${item._id}`}> 
                                    <button className="btn  hover:bg-red-100">See Details <FaLongArrowAltRight /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Allnews;