import { useState } from 'react';
import { ApiClient } from 'twitch';
import { ClientCredentialsAuthProvider } from 'twitch-auth';
import  StreamMetadata  from 'twitch';
import { StaticAuthProvider } from 'twitch-auth';

function App() {
  const [streamKey, setStreamKey] = useState('');

  const handleClick = async () => {
    // Set up the API client with your credentials
    const clientId = 'x1zbg9zvt5rtpde23f8yv0l0hw14qz';
    const clientSecret = 'xta9tb1m85hnpc2ephpo2rdinrssw0';
    const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
    const twitchClient = new ApiClient({ authProvider });

    // Set up the StaticAuthProvider with your access token
    const accessToken = 'YOUR_ACCESS_TOKEN';
    const auth = new StaticAuthProvider(clientId, accessToken);

    // Create the StreamMetadata object
    const streamMetadata = new StreamMetadata({
      title: 'Your stream title',
      game: 'Game name',
    });

    // Call the API to create the live broadcast and get the stream key
    const response = await twitchClient.streams.createStreamMarker(auth, streamMetadata);
    setStreamKey(response.streamKey);

    // Start the live stream
    const streamUrl = `rtmp://live.twitch.tv/app/${streamKey}`;
    const video = document.getElementById('video');
    video.src = streamUrl;
    video.play();
  };

  return (
    <div className='twitch'>
      <button onClick={handleClick}>Start Live Stream</button>
      <video id="video" />
    </div>
  );
}

export default App;
