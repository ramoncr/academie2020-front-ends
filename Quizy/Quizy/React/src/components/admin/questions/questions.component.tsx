import React, { useEffect } from 'react';
import { AdminQuestionsTable } from '../questions-table/questions-table.component';
import { Question } from '../../../models';
import { useHistory } from 'react-router-dom';

interface Props {
    questions: Array<Question>;
    getQuestions: () => void;
    deleteQuestion: (id: number) => void;
}

export const AdminQuestions = (props: Props) => {
    const { questions, getQuestions } = props;
    const history = useHistory();

    useEffect(() => {
        if (questions.length === 0) {
            getQuestions();
        }
    }, [questions, getQuestions]);

    function createNewQuestion() {
        history.push('/admin/questions/create');
    }

    const onDeleteQuestion = (question: Question) => props.deleteQuestion(question.id);
    const onEditQuestion = (question: Question) => {
        history.push(`/admin/questions/create/${question.id}`);
    };

    return (
        <>
            <h1>Question Management</h1>
            <button onClick={createNewQuestion}>Create new question</button>
            <AdminQuestionsTable questions={props.questions} onDeleteQuestion={onDeleteQuestion} onEditQuestion={onEditQuestion} />
        </>
    )
}