import { AdminQuestions } from './questions.component';
import { IRootState } from "../../../store";
import { connect } from "react-redux";
import { getQuestions, deleteQuestion, putQuestion } from "../../../store/actions/question.action";
import { Question } from "../../../models";

const mapStateToProps = (state: IRootState) => ({
    questions: state.questions.data
});

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
    getQuestions: () => dispatch(getQuestions()),
    deleteQuestion: (id: number) => dispatch(deleteQuestion(id)),
    putQuestion: (question: Question) => dispatch(putQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminQuestions);