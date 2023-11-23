export type TickerItem = {
    id: string;
    body: string;
};

export type Ticker = TickerItem[];

export interface SportEvent {
    id: string;
    time: number;
    type: 'goal' | 'card' | 'endHalf' | 'endGame' ;
    cardType?: 'yellow' | 'red';
    player?: string;
    distanceOfShot?: number;
    newScore?: {
        home: number;
        away: number;
    };
}

export type SportData = {
    ticker: Ticker;
    events: SportEvent[];
};
