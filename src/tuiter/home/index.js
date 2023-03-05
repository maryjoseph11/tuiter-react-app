import React from "react";
import "./index.css";

const HomeComponent = () => {
    return(
        <div className="wd-border">
            <div className="wd-border">
                <img src = "PupPicture.jpeg" width="48" height= "48" className="rounded-5 shadow-4 float-start m-1"/>

                <p >Robert Zubrin
                    <span className="wd-grey"> <i className="bi bi-patch-check-fill wd-blue"></i> @robert_zubrin • Feb 3
                    <i class="bi bi-three-dots wd-alignr"></i> </span>
                    <br/><span className="wd-grey">Amazing show about the mission!</span>
                </p>

                <div>
                    <p className="p-1">SpaceX astronaut missions for NASA: Crew-6 updates<br/>
                    <span className="p-1">SpaceX has launched astronauts to the International Space Station and returned them to Earth for NASA since 2020. The companys current astronaut missions for NASA are Crew-6, expected to launch on Feb. 26, and Crew-5, which launched on Oct. 5, 2022.</span> </p>
                    <img src = "spaceship.png" width="100%" height= "264" className="rounded-4 shadow-4 float-start p-2"/>
                </div>

                <i className="bi bi-chat m-3 wd-grey">
                    <span> 5,346</span>
                </i>

                <i className="bi bi-arrow-repeat wd-right wd-left wd-grey">
                    <span> 1,168</span>
                </i>

                <i className="bi bi-heart wd-right wd-left wd-grey">
                    <span> 11.1k</span>
                </i>

                <i className="bi bi-box-arrow-up wd-right wd-left wd-grey"></i>

                <p className="p-3 wd-blue wd-padbottom2">Show this thread</p>
            </div>

            <div className="wd-border">
                <img src = "tesla.png" width="48" height= "48" className="rounded-5 shadow-4 float-start m-1"/>

                   <p >Elon Musk
                    <span className="wd-grey"> <i className="bi bi-patch-check-fill wd-blue"></i> @elon_musk • 15h
                    <i class="bi bi-three-dots wd-alignr"></i> </span>
                    <br/>We might need a different name as this is just Starlink with roaming capability, so you can take
                    your terminal anywhere.
                   </p>

                   <div className="wd-border m-2 rounded-3">
                    <img src = "relativityspace.png" width="48" height= "48" className="rounded-5 shadow-4 float-start m-1"/>
                    <p >SpaceX
                        <span className="wd-grey"> <i className="bi bi-patch-check-fill wd-blue"></i> @rspacexX • 18h
                        <i class="bi bi-three-dots wd-alignr"></i> </span>
                        <br/>Starlink for RVs now has over 100,000 customers! Access high-speed low latency internet on an as-needed
                        basis anywhere Starlink provides active coverage -> starlink.com/rv
                    </p>
                   </div>

                   <i className="bi bi-chat m-3 wd-grey">
                    <span> 4,114</span>
                   </i>

                   <i className="bi bi-arrow-repeat wd-right wd-left wd-grey">
                    <span> 2,153</span>
                   </i>

                   <i className="bi bi-heart wd-right wd-left wd-grey">
                    <span> 1.1k</span>
                   </i>

                   <i className="bi bi-box-arrow-up wd-right wd-left wd-grey"></i>


            </div>
        </div>
    );
};

export default HomeComponent;