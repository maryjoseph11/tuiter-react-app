const NavigationSidebar = () => {
 return(`
       <ul class="list-group">
            <li class="list-group-item active"><i class="fa-brands fa-twitter"></i></li>

            <li class="list-group-item"><i class="fa-solid fa-house"></i>
                <span class="d-none d-xl-inline d-xxl-inline">
                <a href="../HomeScreen/index.html">Home</a></span></li>

            <li class="list-group-item "><i class="fa-solid fa-hashtag"></i>
                <span class="d-none d-xxl-inline d-xl-inline">
                <a href="../explore/index.html">Explore</a></span></li>

            <li class="list-group-item"><i class="fa-solid fa-bell"></i>
                <span class="d-none d-xl-inline d-xxl-inline">Notifications</span></li>

            <li class="list-group-item "><i class="fa-solid fa-envelope"></i>
                <span class="d-none d-xl-inline d-xxl-inline">Messages</span></li>

            <li class="list-group-item"><i class="fa-solid fa-bookmark"></i>
                <span class="d-none d-xl-inline d-xxl-inline">Bookmarks</span></li>

            <li class="list-group-item"><i class="fa-solid fa-list"></i>
                <span class="d-none d-xl-inline d-xxl-inline">Lists</span></li>

            <li class="list-group-item"><i class="fa-solid fa-user"></i>
                <span class="d-none d-xl-inline d-xxl-inline">Profile</span></li>

            <li class="list-group-item"><i class="fa-solid fa-ellipsis"></i>
                <span class="d-none d-xl-inline d-xxl-inline">More</span></li>
       </ul>
       <div class="d-grid mt-2">
            <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
       </div>
 `);
}
export default NavigationSidebar;