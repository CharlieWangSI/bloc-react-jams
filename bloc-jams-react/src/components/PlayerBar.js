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
       <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
         <input
           type="range"
           className="seek-bar"
           value={(this.props.currentTime / this.props.duration) || 0}
           max="1"
           min="0"
           step="0.01"
           onChange={this.props.handleTimeChange}
         />
         <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
       </section>

       <section id="volume-control">
         <div className="current-volume">{this.props.currentVolume}</div>
         <input
           type="range"
           className="seek-bar"
           value={this.props.currentVolume}
           max="1"
           min="0"
           step="0.01"
           onChange={this.props.handleVolumeChange}
         />
       </section>
       </section>
     );
   }
 }

 export default PlayerBar;
