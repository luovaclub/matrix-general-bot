import * as config from "./config";

interface IConfig {
    homeserverUrl: string;
    accessToken: string;
    autoJoin: boolean;
    dataPath: string;
    encryption: boolean;
    trusted: string;
}

export default <IConfig><unknown>config;
