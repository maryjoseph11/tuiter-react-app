import React from "react";
import {useDispatch} from "react-redux";
import {clickLike} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch({type: 'clickLike', tuit});
    };
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
        <div className="col" onClick={likeClickHandler}>
            {
                tuit.liked &&
                <i className="bi bi-heart me-2"
                   style={{color: tuit.liked ? 'red': "white"}}></i>
            }
            {
                !tuit.liked &&
                <i className="bi bi-heart me-2"></i>
            }
            {tuit.stats.likes}
        </div>
        <div className="col">
            <i class="bi bi-share me-2"></i>
        </div>
    </div>)
}

export default TuitStats;