import React, { useEffect, useState } from 'react';
import { AdminQuestionForm } from '../question-form/question-form.component';
import { Answer, Question } from '../../../models';
import { useHistory, useParams } from 'react-router-dom';

interface Props {
    questions: Array<Question>;
    questionPending: boolean;
    getQuestions: () => void;
    postQuestion: (question: Question) => void;
    putQuestion: (question: Question) => void;
}

export const AdminQuestionCreate = (props: Props) => {
    const { questions, getQuestions, putQuestion, postQuestion, questionPending } = props;
    const { questionId } = useParams();
    const existingQuestion = questions.find(q => q.id === parseInt(questionId ?? '')) ?? new Question([new Answer(), new Answer(), new Answer()]);

    const [editing] = useState(questionId != null);
    const [question, setQuestion] = useState(existingQuestion);
    const [submitting, setSubmitting] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (questionId != null && questions.length === 0) {
            getQuestions();
        }
    }, [questions, questionId, getQuestions]);

    useEffect(() => {
        if (submitting && !questionPending) {
            history.push('/admin');
        }
    }, [submitting, questionPending, history]);

    function submit() {
        editing ? putQuestion(question) : postQuestion(question);
        setSubmitting(true);
    }

    function cancel() {
        history.push('/admin');
    }

    return (
        <>
            <h1>{editing ? 'Edit the question' : 'Create a new question'}</h1>
            <AdminQuestionForm question={question} onChange={e => setQuestion({ ...e })} />
            <button onClick={cancel}>Cancel</button>
            <button className="button-primary u-pull-right" onClick={submit} disabled={!question.content}>{editing ? 'Edit' : 'Create'}</button>
        </>
    );
}
