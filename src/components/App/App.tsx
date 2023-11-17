import React from "react";

 const App = () => {
    return (
        <div>
            <h1>Hello, let see the video</h1>
            <video controls>
                <source src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`} type="video/webm" />
            </video>
        </div>
    );
};
export  default App