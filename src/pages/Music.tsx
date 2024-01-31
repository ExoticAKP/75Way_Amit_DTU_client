import React, { useEffect, useState } from 'react'
import AudioPlayer from '../components/AudioPlayer'
const encodedParams = new URLSearchParams();
encodedParams.set('access_token', '<REQUIRED>');
encodedParams.set('id', '<REQUIRED>');
const Music:React.FC=()=>{
  const songs=[
  {
    title: "Besharam Rang",
    artist: "Unknown",
    src: "/assets/songs/BesharamRangPathaan.mp3",
  },
  {
    title: "Jhoome Jo Pathan",
    artist: "Arijit singh",
    src: "/assets/songs/JhoomeJoPathaan.mp3",
  },
  {
    title: "Care Ni Karda",
    img_src: "./images/care-ni-karda.jpg",
    src: "/assets/songs/LuttPuttGaya.mp3",
  }
];
const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(0);

useEffect(() => {
  setNextSongIndex(() => {
    if (currentSongIndex + 1 > songs.length - 1) {
      return 0;
    } else {
      return currentSongIndex + 1;
    }
  });
}, [currentSongIndex, songs.length]);

return (
  <div className="Music">
    <AudioPlayer
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
    />
  </div>
);
}

export default Music