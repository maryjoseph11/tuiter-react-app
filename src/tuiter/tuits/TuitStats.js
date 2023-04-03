import React from "react";
import {useDispatch} from "react-redux";
import {useState} from 'react';
import {updateLike} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = ({tuit}) => {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();

    const likeClickHandler = () => {
            dispatch(
                  updateLike({
                    ...tuit,
                    liked: !tuit.liked,
                    stats:{
                        ...tuit.stats,likes: tuit.liked ? tuit.stats.likes - 1 : tuit.stats.likes + 1
                    }

                  })
                );
    }

    return (

    <div className="row mt-2">
        <div className="col">
            <i class="bi bi-chat me-2"></i>
            {tuit.replies}
        </div>
        <div className="col">
            <i class="bi bi-arrow-repeat"></i>
            {tuit.retuits}
        </div>

        <div className="col">
              {tuit.likes}
                  <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                  }))} className="bi bi-heart-fill me-2 text-danger">
                  </i>
        </div>

        <div className = "col">
             {tuit.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down">
                </i>

        </div>

        <div className="col">
            <i class="bi bi-share me-2"></i>
        </div>
    </div>

    )
}

export default TuitStats;