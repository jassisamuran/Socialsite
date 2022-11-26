import "./topbar.css"
import {Chat, Person, Search,NotificationAdd} from '@mui/icons-material'
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          Social site
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friends,post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbariconItem">
            <Person/>
            <span className="topbariconBadge">1</span>
          </div>
          <div className="topbariconItem">
            <Chat/>
            <span className="topbariconBadge">1</span>
          </div>
          <div className="topbariconItem">
            <NotificationAdd/>
            <span className="topbariconBadge">1</span>
          </div>
          <img src="./assets/mickey.png" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}
