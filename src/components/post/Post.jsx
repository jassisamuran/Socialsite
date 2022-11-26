import "./post.css"
import {MoreVert,FavoriteIcon} from "@mui/icons-material"
export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper"> 
        <div className="postTop">
            <div className="posttopLeft">
                <img src="./assets/mickey.png" alt="" className="postprofileImg" />
                <span className="postUsername">john ahdm</span>
                <div className="postDate">5 mins ago</div>
            </div>
            <div className="posttopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey! its my first post:) </span>
            <img src="./assets/mickey.png" alt="" className="postIms" />
        </div>
        <div className="postBottom">
            <div className="postbottomLeft">
                <img src="./assets/like.png" alt="like" className="likeIcon" />
                <img src="./assets/heart.png" alt="heart" className="likeIcon" />
                <span className="postlikeCounter">32 people like it</span>

            </div>
            <div className="postbottomRight">
                <span className="postcommentText">9 comments</span>
            </div>
        </div>

        <div className="postCenter">
            <span className="postText">its so cool baby </span>
            <img src="./assets/post3.png" alt="" className="postIms" />
        </div>
        <div className="postBottom">
            <div className="postbottomLeft">
                <img src="./assets/like.png" alt="like" className="likeIcon" />
                <img src="./assets/heart.png" alt="heart" className="likeIcon" />
                <span className="postlikeCounter">80 people like it</span>

            </div>
            <div className="postbottomRight">
                <span className="postcommentText">45 comments</span>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">never before </span>
            <img src="./assets/post2.png" alt="" className="postIms" />
        </div>
        <div className="postBottom">
            <div className="postbottomLeft">
                <img src="./assets/like.png" alt="like" className="likeIcon" />
                <img src="./assets/heart.png" alt="heart" className="likeIcon" />
                <span className="postlikeCounter">23 people like it</span>

            </div>
            <div className="postbottomRight">
                <span className="postcommentText">4 comments</span>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">hey dear how are you </span>
            <img src="./assets/post4.png" alt="" className="postIms" />
        </div>
        <div className="postBottom">
            <div className="postbottomLeft">
                <img src="./assets/like.png" alt="like" className="likeIcon" />
                <img src="./assets/heart.png" alt="heart" className="likeIcon" />
                <span className="postlikeCounter">100 people like it</span>

            </div>
            <div className="postbottomRight">
                <span className="postcommentText">42 comments</span>
            </div>
        </div>
        </div>
      
    </div>
  )
}
