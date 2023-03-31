import React from "react";
import {useDispatch} from "react-redux";
import {useState} from 'react';
import {updateLike} from "./tuits-reducer";
const TuitStats = ({tuit}) => {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();

    const likeClickHandler = () => {
            dispatch(
                  updateLike({
                    ...tuit,
                    liked: !tuit.liked,
                    likes: tuit.liked ? tuit.stats.likes - 1 : tuit.stats.likes + 1,
                  })
                );
    }

    return (

    <div className="row mt-2">
        <div className="col">
            <i class="bi bi-chat me-2"></i>
            {tuit.stats.comments}
        </div>
        <div className="col">
            <i class="bi bi-arrow-repeat"></i>
            {tuit.stats.retuits}
        </div>
        <div className="col">
            <i onClick={likeClickHandler}
            className='bi bi-heart me-2'
            style={{"color": `${(tuit.liked === true) ? "red" : "gray"}`}}></i>
            <span className='ms-1 wd-gray-color'>{tuit.stats.likes}</span>
        </div>
        <div className="col">
            <i class="bi bi-share me-2"></i>
        </div>
    </div>)
}

export default TuitStats;