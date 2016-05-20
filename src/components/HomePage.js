import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="homePage__HeroLink edge--bottom">
          <img src="http://www.planwallpaper.com/static/images/image-159225.jpg" alt="WOW" />
        </div>
        <div className="homePage__HeroLink edge--bottom">
          <img src="http://i.kinja-img.com/gawker-media/image/upload/utsyr3blwnesou8aqyes.jpg" alt="Diablo 3" />
        </div>
        <div className="homePage__HeroLink edge--bottom">
          <img src="http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg" alt="Hearthstone" />
        </div>
        <div className="homePage__HeroLink">
          <img src="http://i.imgur.com/PCyz3b5.jpg" alt="Overwatch" />
        </div>
        <div className="homePage__HeroLink">
          <img src="https://assets.vg247.com/current//2014/11/Starcraft2-logo.jpg" alt="Starcraft 2" />
        </div>
        <div className="homePage__HeroLink">
          <img src="http://www.tacticalgaming.net/hq/news/wp-content/uploads/2015/10/heroes-facebook-preview.jpg" alt="Hereos of the Storm" />
        </div>
      </div>
    );
  }
}
