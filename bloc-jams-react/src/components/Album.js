import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
     super(props);


   const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

    this.state = {
      album: album,
     currentSong: album.songs[0],
     isPlaying: false
     };

     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
   }

   play() {
     this.audioElement.play();
     this.setState({ isPlaying: true });
   }

   pause() {
     this.audioElement.pause();
     this.setState({ isPlaying: false });
   }

   setSong(song) {
     this.audioElement.src = song.audioSrc;
     this.setState({ currentSong: song });
   }

   handleSongHover(song){
     this.setState({ currentHover: song })
   }

   handleSongClick(song) {
     const isSameSong = this.state.currentSong === song;
     if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
       if (!isSameSong) { this.setSong(song); }
       this.play();
     }
   }

   playButton(song,index){
     let button;

     if (this.state.currentSong === song && this.state.isPlaying){
       button=<ion-icon name="pause"></ion-icon>;
     }else if (this.state.currentSong === song && ! this.state.isPlaying){
       button=<ion-icon name="play"></ion-icon>;
     }else if (this.state.currentHover === song){
       button=<ion-icon name="play"></ion-icon>;
     }else {
       button=<span>{index+1}</span>
     }

     return button;
   }

   handlePrevClick() {
     const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
       const newIndex = Math.max(0, currentIndex + 1);
       const newSong = this.state.album.songs[newIndex];
       this.setSong(newSong);
       this.play();
     }


   render(){

     return (
       <section className="album">
       <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
         <div className="album-details">
         <h1 id="album-title">{this.state.album.title}</h1>
           <h2 className="artist">{this.state.album.artist}</h2>
           <div id="release-info">{this.state.album.releaseInfo}</div>
         </div>
       </section>
       <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
           <tbody>
           {
             this.state.album.songs.map(
               (song,index) =>
               <tr className="song" key={index} onMouseEnter={() => this.handleSongHover(song)} onClick={() => this.handleSongClick(song)} >
               <td>
                 {this.playButton(song, index)}
               </td>
               <td>{song.title}</td>
               <td>{song.duration}</td>
               </tr>
             )
           }
           </tbody>
         </table>
         <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
         />
       </section>
     );
   }
 }

 export default Album;

 // {this.state.currentSong == song && this.state.isPlaying}?(
 //   <ion-icon name="pause"></ion-icon>
 // ):
 // {this.state.currentSong == song && ! this.state.isPlaying}?(
 //   <ion-icon name="play"></ion-icon>
 // ):
 // {this.state.currentHover == song ? (
 //   <ion-icon name="play"></ion-icon>
 // ):(
 //   <span>{index+1}</span>
 // )}
