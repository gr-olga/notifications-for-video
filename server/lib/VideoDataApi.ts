import type {Application, Request, Response} from 'express';
import type {ParsedQs} from 'qs';
import type {RouteParameters} from 'express-serve-static-core';
import videoData from './videoData.json' assert { type: "json" };

export const VideoDataApi = (app: Application): Application => {
    app.get(`/video-data/ticker`, (req: Request<RouteParameters<string>, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void => {
        console.log(`GET video data ticker`);
        res.send(videoData.ticker);
    });

    app.get(`/video-data/events`, (req: Request<RouteParameters<string>, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void => {
        console.log(`GET video data events`);
        res.send(videoData.events);
    });

    return app;
};
