import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./editProfile.css";
import {saveFunction} from "../ProfileScreen/profile-reducer";

const EditComponent = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    let changedData = {...profile};
    const savedInformation = () => {
        dispatch(saveFunction(changedData));
    };

    const location2 = (value) => {
           changedData.location=value;
    }

    const dateOfBirth2 = (value) => {
           changedData.dateOfBirth=value;
    }

    const bio2 = (value) => {
           changedData.bio=value;
    }

    const website2 = (value) => {
           changedData.website=value;
    }

    const name2 = (value) => {
           const data = value.split(" ");
           changedData.firstName = data[0]
           changedData.lastName = data[1]
    }

    return (
        <>
            <div>
                <div className="row mb-2 wd-paddingbottom">
                    <div>
                        <Link to="/tuiter/profile">
                        <button type="button" className="btn-outline-dark wd-grey">
                            Back
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="wd-paddingbottom">
                <span> <strong>Please enter the information</strong></span>
            </div>

            <div className="wd-setting wd-padding wd-paddingbottom">
                <label className="wd-grey">
                    Name
                </label>
                <input type="text" placeholder= "Name" defaultValue={profile.firstName + " " + profile.lastName}
                    onChange={(e) => {
                    name2(e.target.value);
                }} type="text" className="form-control" >
                </input>
            </div>

            <div className="wd-setting wd-paddingbottom">
                <label className="wd-grey">
                    Bio
                </label>
                <input type="text" placeholder= "Bio" defaultValue={profile.bio}
                    onChange={(e) => {
                    bio2(e.target.value);
                }}  type="text" className="form-control">
                </input>
            </div>

            <div className="wd-setting wd-paddingbottom">
                <label className="wd-grey">
                    Location
                </label>
                <input type="text" placeholder= "Location" defaultValue={profile.location}
                    onChange={(e) => {
                    location2(e.target.value);
                }}  type="text" className="form-control" >
                </input>
            </div>

            <div className="wd-setting wd-paddingbottom">
                <label className="wd-grey">
                    Website
                </label>
                <input type="text" placeholder= "Website" defaultValue={profile.website}
                    onChange={(e) => {
                    website2(e.target.value);
                }} type="text" className="form-control">
                </input>
            </div>

            <div className="wd-setting wd-paddingbottom">
                <label className="wd-grey">
                    D.O.B
                </label>
                <input type="date" placeholder= "Date" defaultValue={profile.dateOfBirth}
                    onChange={(e) => {
                    dateOfBirth2(e.target.value);
                }} type="date" className="form-control">
                </input>
            </div>

            <div className=" wd-padding wd-paddingbottom">
                <Link to="/tuiter/profile">
                <button type="button" onClick={() => savedInformation()} class="btn-outline-dark wd-grey">
                    Save
                </button>
                </Link>
            </div>
        </>
    );
};

export default EditComponent;