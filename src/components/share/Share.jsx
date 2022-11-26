import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="./assets/mickey.png" className="shareprofileImg" alt="mci" />
            <input placeholder="what`s in yours mind ?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span  className="shareoptionText">photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareoptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="pink" className="shareIcon"/>
                        <span className="shareoptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareoptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
            
        </div>
    </div>
  )
}
