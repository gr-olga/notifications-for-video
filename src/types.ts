export type TickerItem = {
    id: string;
    body: string;
};

export type Ticker = TickerItem[];

export interface BaseEvent {
    id: string;
    time: number;
    type: string;
}

export interface GoalEvent extends BaseEvent {
    type: 'goal';
    player: string;
    distanceOfShot: number;
    newScore: {
        home: number;
        away: number;
    };
}

export interface CardEvent extends BaseEvent {
    type: 'card';
    cardType: 'yellow' | 'red';
    player: string;
}

export interface EndHalfEvent extends BaseEvent {
    type: 'endHalf';
}

export interface EndGameEvent extends BaseEvent {
    type: 'endGame';
}

export type SportEvent = GoalEvent | CardEvent | EndHalfEvent | EndGameEvent;
export type Events = SportEvent[];

export type SportData = {
    ticker: Ticker;
    events: Events;
};
