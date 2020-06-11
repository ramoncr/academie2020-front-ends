import { createSelector } from '@ngrx/store';
import { ParticipantState } from '../reducers/participant.reducer';
import { QuestionsState } from '../reducers/questions.reducer';

export interface AppState {
    questions: QuestionsState;
    participant: ParticipantState;
}

export const selectParticipant = (state: AppState) => state.participant;
export const selectParticipantLoading = createSelector(selectParticipant, (state: ParticipantState) => state.loading);
export const selectParticipantFailed = createSelector(selectParticipant, (state: ParticipantState) => state.failed);
export const selectParticipantSuccess = createSelector(selectParticipant, (state: ParticipantState) => state.success);
export const selectParticipantData = createSelector(selectParticipant, (state: ParticipantState) => state.participant);

export const selectQuestions = (state: AppState) => state.questions;
export const selectQuestionsLoading = createSelector(selectQuestions, (state: QuestionsState) => state.loading);
export const selectQuestionsFailed = createSelector(selectQuestions, (state: QuestionsState) => state.failed);
export const selectQuestionsSuccess = createSelector(selectQuestions, (state: QuestionsState) => state.success);
export const selectQuestionsData = createSelector(selectQuestions, (state: QuestionsState) => state.questions);

export const selectCurrentQuestion = createSelector((state: AppState) => state, (state: AppState) => {
    const participant = state.participant.participant;
    const questions = state.questions.questions;
    if (participant && questions && questions.length > 0 && participant.questionsAnswered < questions.length) {
        return questions[participant.questionsAnswered];
    }
    return null;
});

export default {
    questions: {
        selectQuestionsData,
        selectQuestionsFailed,
        selectQuestionsLoading,
        selectQuestionsSuccess
    },
    participants: {
        selectParticipantData,
        selectParticipantFailed,
        selectParticipantLoading,
        selectParticipantSuccess
    },
    compound: {
        selectCurrentQuestion
    }
};
