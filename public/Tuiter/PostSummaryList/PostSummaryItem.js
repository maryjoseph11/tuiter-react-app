const PostSummaryItem = (post) => {
    return(`
    <div class="border p-1">
         <img src = "${post.image}" width="90" height= "90" style="float:right" class="wd-rounded1"/>
         <p><span class="color-grey">${post.topic}</span>
         </br><span class="color-white">${post.userName}</span> <i class="fas fa-check-circle"></i> <span class="color-grey">- ${post.time}</span>
         </br><span class="color-white"> ${post.title}</span>
         </p>
    </div>
    `);
}
export default PostSummaryItem;