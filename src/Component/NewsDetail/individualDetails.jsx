import { useLoaderData } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
const IndividualDetails = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div className="card card-side bg-base-100 shadow-xl p-4 mb-2">
                        
                        <div className="card-body flex ">
                        <img src={data.newsImage} className='w-full h-96 rounded-lg' alt="" />
                            {/* title & date */}
                            <div className='flex  items-center space-x-32'>
                                <h2 className="card-title">{data.newsHeadline}</h2>
                                <p className='flex items-center justify-center' >{data.date}<CiCalendarDate style={{ fontSize: '1.65rem', marginLeft: "10px", color: "pink" }} /></p>
                            </div>

                            {/* Author  */}
                            <div>
                                <h4 className='flex items-center'> <IoIosContact style={{ fontSize: '1.65rem', marginRight: "10px" }} /> {data.authorName}</h4>
                            </div>

                            {/* News details */}
                            <div>
                                <p>{data.newsDescription}</p>
                            </div>
                        </div>
                    </div>
    );
};

export default IndividualDetails;