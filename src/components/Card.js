import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {toast} from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedcourses = props.likedcourses;
    let setLikedCourses = props.setLikedCourses;
    function clickH() {
        if(likedcourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter( (cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else {
            //need to insert
            if(likedcourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
            <div className='relative'>
                <img src={course.image.url} alt=''></img>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickH}>
                        {
                            !likedcourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>) : (<FcLike fontSize="1.75rem"></FcLike>)
                        }
                    </button>
                </div>
            </div>
            
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (course.description.substr(0,100))+"..." : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card