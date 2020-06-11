import { AdminQuestionCreate } from './question-create.component';
import { IRootState } from '../../../store';
import { getQuestions, postQuestion, putQuestion } from '../../../store/actions/question.action';
import { Question } from '../../../models';
import { connect } from 'react-redux';

const mapStateToProps = (state: IRootState) => ({
    questions: state.questions.data,
    questionPending: state.questions.pending
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
    getQuestions: () => dispatch(getQuestions()),
    postQuestion: (question: Question) => dispatch(postQuestion(question)),
    putQuestion: (question: Question) => dispatch(putQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminQuestionCreate);