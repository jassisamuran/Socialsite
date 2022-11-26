import "./sidebar.css"
import {Announcement, ChatBubble, GroupAdd, RssFeed, VideoChat, Work} from "@mui/icons-material"
export default function Sidebar() {
  return (
    <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarlistItem">
                <RssFeed className="sidebarIcon"/>
                <span className="sidebarlistitemText">Feed</span>
              </li>
              <li className="sidebarlistItem">
                <Announcement className="sidebarIcon"/>
                <span className="sidebarlistitemText">Feed</span>
              </li>
              <li className="sidebarlistItem">
                <ChatBubble className="sidebarIcon"/>
                <span className="sidebarlistitemText">Feed</span>
              </li>
              <li className="sidebarlistItem">
                <VideoChat className="sidebarIcon"/>
                <span className="sidebarlistitemText">Feed</span>
              </li>
              <li className="sidebarlistItem">
                <Work className="sidebarIcon"/>
                <span className="sidebarlistitemText">Feed</span>
              </li>
              <li className="sidebarlistItem">
                <GroupAdd className="sidebarIcon"/>
                <span className="sidebarlistitemText">Feed</span>
              </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarfriendList">
              <li className="sidebarFriend">
                <img src="./assets/1.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">john </span>
              </li>
              <li className="sidebarFriend">
                <img src="./assets/1.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">seytcr </span>
              </li>
              <li className="sidebarFriend">
                <img src="./assets/2.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">abhrn </span>
              </li>
              <li className="sidebarFriend">
                <img src="./assets/3.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">haday</span>
              </li>
              <li className="sidebarFriend">
                <img src="./assets/4.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">yakd </span>
              </li>
              <li className="sidebarFriend">
                <img src="./assets/5.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">bahyw</span>
              </li>
              <li className="sidebarFriend">
                <img src="./assets/6.png" alt="" className="sidebarfriendImg" />
                <span className="sidebarfriendName">tiada </span>
              </li>
            </ul>
          </div>
    </div>
  )
}
