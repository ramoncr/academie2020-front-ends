import devEnvironment from './dev.environment';
import prodEnvironment from "./prod.environment";

export interface Environment {
    baseUrl: string;
}

export default process.env.REACT_APP_STAGE === 'production' ? prodEnvironment : devEnvironment;
