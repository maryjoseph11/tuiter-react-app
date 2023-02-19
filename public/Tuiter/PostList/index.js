import PostSummaryListItem from "./PostSummaryListItem.js";
import PostItem from "./PostItem.js";

const PostList = () => {
   return (`
        <ul>
                ${
                   PostItem.map(post => {
                      return(PostSummaryListItem(post));
                   }).join('')
                }
        </ul>
   `);


}

export default PostList;