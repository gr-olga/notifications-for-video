import {VideoDataApi,} from './lib/VideoDataApi';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());

const port: string =  '8081';
VideoDataApi(app);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});