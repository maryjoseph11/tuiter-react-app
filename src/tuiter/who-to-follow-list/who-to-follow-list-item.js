import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vx4hxg2tnybefwmt4xxb" }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-xxl-2 col-xl-2 col-lg-2 px-0">
       <img className="rounded-circle" height={48}  src={who.avatarIcon}/>
     </div>
     <div className="col-xxl-7 col-xl-6 col-lg-5">
       <div className="fw-bold">{who.userName}</div>
       <div style={{ color: 'grey' }}>@{who.handle}</div>
     </div>
     <div className="col-xxl-2 col-xl-3 col-lg-4 px-0">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;