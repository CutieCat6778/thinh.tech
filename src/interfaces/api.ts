export interface Status {
    name: string;
    image: Images[];
    isPlaying: boolean;
    timestamp: number;
    duration: number;
    url: Url;
    estimatedEnds: number;
}

// interface Context {
//     externalURL: Url;
//     href: string;
//     type: "user" | "episode" | "playlist" | "show" | "track" | "album" | "artist";
//     uri: string;
// }

interface Url {
    spotify: string;
}

// interface Device {
//     id: null | string;
//     is_active: boolean;
//     is_private_session: boolean;
//     is_restricted: boolean;
//     name: string;
//     type: "computer" | "smartphone" | "speaker";
//     volume_percent: number;
// }

interface Images {
    height: number;
    width: number;
    url: string;
}
export interface TextLink {
    text: string;
    url: string;
}