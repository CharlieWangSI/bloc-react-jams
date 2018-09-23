import React, { Component } from 'react';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
       <section id="buttons">
         <button id="previous" onClick={this.props.handlePrevClick}>
           <span><ion-icon name="skip-backward"></ion-icon></span>
         </button>
         <button id="play-pause" onClick={this.props.handleSongClick} >
           <span><ion-icon name={this.props.isPlaying ? 'pause' : 'play'}>></ion-icon></span>
         </button>
         <button id="next" onClick={this.props.handleNextClick}>
           <span><ion-icon name="skip-forward"></ion-icon></span>
         </button>
       </section>
       <section id="time-control">
         <div className="current-time">–:––</div>
         <input type="range" className="seek-bar" value="0" />
         <div className="total-time">–:––</div>
       </section>
       <section id="volume-control">
         <div className="icon ion-volume-low"></div>
         <input type="range" className="seek-bar" value="80" />
         <div className="icon ion-volume-high"></div>
       </section>
       </section>
     );
   }
 }

 export default PlayerBar;
