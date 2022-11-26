import "./rightbar.css"
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer"></div>
         <img src="./assets/gift.png" alt="birthday" className="birthdayImg" />
         <span className="birthdayText"> <b>jushin</b> and <b>3 others</b> have birthday today</span>
      </div>
      <img src="./assets/add.png" alt="ads" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarprofileimgContainer">
            <img src="./assets/mickey.png" alt="right bar profileimag" className="rightbarprofileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarUsername">John ahdm</div>

        </li>
        <li className="rightbarFriend">
          <div className="rightbarprofileimgContainer">
            <img src="./assets/1.png" alt="right bar profileimag" className="rightbarprofileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarUsername">hosd dds</div>

        </li><li className="rightbarFriend">
          <div className="rightbarprofileimgContainer">
            <img src="./assets/2.png" alt="right bar profileimag" className="rightbarprofileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarUsername">main driver</div>

        </li><li className="rightbarFriend">
          <div className="rightbarprofileimgContainer">
            <img src="./assets/3.png" alt="right bar profileimag" className="rightbarprofileImg" />
            <span className="rightbarOnline"></span>
          </div>
          <div className="rightbarUsername">disi loi</div>

        </li>
      </ul>
    </div>
  )
}
