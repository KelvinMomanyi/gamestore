import React, { useEffect } from 'react';

function YouTubePlayer({ videoId }) {
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player)
    // after the API code downloads.
    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
      });
    };

    // This function destroys the player when the component unmounts
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoId]);

  return <div id="player"></div>;
}

export default YouTubePlayer;
