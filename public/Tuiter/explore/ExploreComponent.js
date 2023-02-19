import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                    <div class="col-11">
                        <div class="form-group has-search">
                            <span class="fa fa-search form-control-feedback"> </span>
                            <input type="text" class="form-control" style="width: 100%" placeholder="Search Twitter">
                        </div>
                    </div>
                    <div class="col-1">
                        <i class="fa-solid fa-gear fa-2x icon-blue"></i>
                    </div>
            </div>

            <ul class="list-group list-group-horizontal mt-2" style="width:100%">
                <li class="list-group-item border-bottom-0"> For You</li>
                <li class="list-group-item border-top-0 border-right-0 icon-blue"> Trending</li>
                <li class="list-group-item border-top-0 border-right-0 icon-blue"> News</li>
                <li class="list-group-item border-top-0 border-right-0 icon-blue"> Sports</li>
                <li class="list-group-item border-top-0 border-right-0 border-left-0 icon-blue"> Entertainment</li>
            </ul>

            <div class="mt-2 container1">
                <img src = "../../a2/teslabot.jpeg" width="100%" height= "450" />
                 <div class="bottom-left">The Tesla Bot</div>
            </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

