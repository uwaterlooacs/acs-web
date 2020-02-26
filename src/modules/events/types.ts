export type EventData = {
  title: string;
  description: string;
  start: Date;
  end: Date;
  images: string[];
  attendees: string[];
};

export type EventMetaData = {
  id: string;
  creationTime: Date;
};

export type Event = EventData & EventMetaData;
