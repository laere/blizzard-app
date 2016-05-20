import React, { Component } from 'react';
import HeroLink from './HeroLink';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <HeroLink path="wow" img="http://www.planwallpaper.com/static/images/image-159225.jpg" />
        <HeroLink path="diablo3" img="http://i.kinja-img.com/gawker-media/image/upload/utsyr3blwnesou8aqyes.jpg" />
        <HeroLink path="hearthstone" img="http://blogs-images.forbes.com/insertcoin/files/2014/12/hearthstone1.jpg" />
        <HeroLink path="overwatch" img="http://i.imgur.com/PCyz3b5.jpg" />
        <HeroLink path="starcraft2" img="https://assets.vg247.com/current//2014/11/Starcraft2-logo.jpg" />
        <HeroLink path="heroes" img="http://www.tacticalgaming.net/hq/news/wp-content/uploads/2015/10/heroes-facebook-preview.jpg" />
      </div>
    );
  }
}
