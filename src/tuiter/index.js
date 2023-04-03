import {Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router';
import Nav from "../nav.js";
import React from "react";
import ExploreComponent from "./ExploreComponent";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import HomeComponent from "./home";
import ProfileComponent from "./ProfileScreen/ProfileComponent";
import EditComponent from "./edit-profile/EditComponent";

import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./tuits/tuits-reducer";
import {Provider} from "react-redux";
import profileReducer from "./ProfileScreen/profile-reducer";

const store = configureStore(
    {
    reducer: {
            who: whoReducer,
            tuitsData: tuitsReducer,
            profile: profileReducer
        }

    });

function Tuiter() {
 return (
    <Provider store = {store}>
       <div className="row mt-2">
         <div className="col-2 col-md-2 col-lg-1 col-xl-2">
           <NavigationSidebar active="explore"/>
         </div>
         <div className="col-10 col-md-10 col-lg-7 col-xl-6"
              style={{"position": "relative"}}>
           <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explores" element={<ExploreComponent/>}/>
                    <Route path="profiles" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditComponent/>}/>
           </Routes>

         </div>
         <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
           <WhoToFollowList/>
         </div>
       </div>
    </Provider>
 );
}

export default Tuiter