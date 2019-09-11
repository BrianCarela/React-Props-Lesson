import React from 'react';

class ProfileInfo extends React.Component{
  render(){
    return(
      <div className="profile-row">
        <div className="dp" id="dp">
          <div className="dp-arc-outer"></div>
          <div className="dp-arc-inner"></div>
          <img
            src="https://i.imgur.com/dnQRSAd.jpg"
            alt="Blksheep"
          />
        </div>
        <div className="desc" id="desc">
          <h1>Brian Carela</h1>
          <p>Age: 26</p>
          <p>Eye Color: Black</p>
        </div>
      </div>
    )
  }
}

export default ProfileInfo;
