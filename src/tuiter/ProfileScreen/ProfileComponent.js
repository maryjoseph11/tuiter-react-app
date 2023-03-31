import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./profile.css";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
        return (
            <>
                <div>
                    <div className="row">
                        <div className="col-1">
                            <Link to="/tuiter/home">
                            <button type="button" className="btn-outline-dark wd-grey">
                                Back
                            </button>
                            </Link>
                        </div>

                        <div className="col-6">
                            <div className="row">
                                <span className = "wd-tabs"> <h6>{profile.firstName + " " + profile.lastName}</h6></span>
                            </div>

                            <div className="row">
                                <span className="wd-grey wd-tabs"> 1234 Tweets </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={profile.bannerPicture} className="wd-banner"></img>
                </div>

                <div className="mt-2">
                    <div>
                    <img src={profile.profilePicture} className="wd-profile"></img>
                    </div>

                    <div>
                    <Link to="/tuiter/edit-profile">
                    <button type="button" className="btn-outline-dark wd-grey float-end">
                        Edit Profile
                    </button>
                    </Link>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <span> <h5>{profile.firstName + " " + profile.lastName}</h5></span>
                        <span className="wd-grey"> @{profile.handle} </span>
                        <span className="mt-2"> {profile.bio}</span>

                        <div className="row mt-4">
                            <div className="col-3 wd-padding">
                                <i className="bi bi-geo-alt-fill"></i>
                                <span className="wd-grey"> {profile.location}</span>
                            </div>

                            <div className="col-4 wd-padding">
                                <i className="bi bi-calendar3"></i>
                                <span className="wd-grey"> D.O.B {profile.dateOfBirth} </span>
                            </div>

                            <div className="col-3 wd-padding">
                                <i className="bi bi-briefcase-fill"></i>
                                <span className="wd-grey"> {profile.dateJoined} </span>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-3 wd-padding">
                                <span> {profile.followingCount}</span>
                                <span className="wd-grey"> Following</span>
                            </div>

                            <div className="col-3 wd-padding">
                                <span>{profile.followersCount}</span>
                                <span className="wd-grey"> Followers</span>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
}
export default ProfileComponent;