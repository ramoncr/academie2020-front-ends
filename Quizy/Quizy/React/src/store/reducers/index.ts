import { combineReducers } from 'redux';
import { questionsReducer } from './question.reducer';
import { participantReducer } from './participant.reducer';

const rootReducer = combineReducers({
    participant: participantReducer,
    questions: questionsReducer
});

export default rootReducer;
