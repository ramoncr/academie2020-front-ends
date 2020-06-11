import { IParticipantsState, initialState as participantInitialState } from './reducers/participant.reducer';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { IQuestionsState, initialState as questionsInitialState } from './reducers/question.reducer';

export interface IRootState {
    questions: IQuestionsState;
    participant: IParticipantsState;
}

const initialState = {
    questions: questionsInitialState,
    participant: participantInitialState
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
