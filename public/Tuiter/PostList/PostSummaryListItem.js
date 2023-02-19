const PostSummaryListItem = (PostItem) => {
    return(`
    <div class="wd-box2">
                 <img src = "${PostItem.userIcon}" width="48" height= "48" style="float:left" class="wd-rounded wd-paddingtop5 wd-paddingleft"/>

                 <h2 class="wd-paddingtwelve wd-fontfifteen">${PostItem.userName}
                     <span class="wd-paddingfour wd-fontthirteen">${PostItem.handle} • ${PostItem.date1}</span>
                     </br>${PostItem.reshareTitle}
                 </h2>

                 <div class="wd-box3 ">
                     <img src = "${PostItem.image}" width="100%" height= "264" class="wd-rounded1 wd-paddingforty "/>
                     <h2 class="wd-fontfifteen wd-paddingtwelve">${PostItem.title}</h2>
                     <p class="wd-fontfifteen wd-paddingtwelve  wd-righttwelve">${PostItem.abstract} </p>
                 </div>

                 <i class="fa-regular fa-comment wd-paddingfifty1">
                     <span class="wd-righttwelve wd-fontthirteen">${PostItem.noOfComments}</span>
                 </i>

                 <i class="fa-solid fa-arrows-rotate wd-paddingfifty2">
                     <span class="wd-righttwelve wd-fontthirteen">${PostItem.noOfRotates}</span>
                 </i>

                 <i class="fa-solid fa-heart wd-paddingfifty2">
                     <span class="wd-righttwelve wd-fontthirteen">${PostItem.noOfLikes}</span>
                 </i>

                 <i class="fa-solid fa-share wd-paddingfifty2"></i>

    </div>
    `);
}
export default PostSummaryListItem;