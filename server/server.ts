import express from 'express';


const app = express();
import videoData from './videoData.json';

app.listen(videoData, () => {
    console.log(`Server is running at http://localhost:${videoData}`);
});