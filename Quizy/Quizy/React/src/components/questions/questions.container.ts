import { putParticipant, handleAnswer, clearParticipant } from './../../store/actions/participant.action';
import { Participant } from './../../models/participant.model';
import { connect } from 'react-redux';
import { getParticipant } from '../../store/actions/participant.action';
import { getQuestions } from '../../store/actions/question.action';
import { IRootState } from '../../store';
import { Questions } from './questions.component';

const mapStateToProps = (state: IRootState) => {
    return {
        participant: state.participant.data,
        questions: state.questions.data,
        currentQuestion: state.questions.data.find(q => q.id === state.participant.data?.id) ?? null
    };
};

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
    getQuestions: () => dispatch(getQuestions()),
    getParticipant: (id: number) => dispatch(getParticipant(id)),
    putParticipant: (participant: Participant) => dispatch(putParticipant(participant)),
    handleAnswer: (score: number) => dispatch(handleAnswer(score)),
    clearParticipant: () => dispatch(clearParticipant())
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);