import React from 'react';
import { Question } from '../../../models';
import { QuestionRow } from '../question-row/question-row.component';
import './questions-table.component.scss';

interface Props {
    questions: Array<Question>;
    onDeleteQuestion: (question: Question) => void;
    onEditQuestion: (question: Question) => void;
}

export const AdminQuestionsTable = (props: Props) => {
    const { questions, onDeleteQuestion, onEditQuestion } = props;

    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <table id="questions-table">
                        <thead>
                            <tr>
                                <th id="question-id">#</th>
                                <th id="question-content">Content</th>
                                <th id="question-description">Description</th>
                                <th id="question-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map(q => <QuestionRow key={q.id} question={q} onDeleteQuestion={onDeleteQuestion} onEditQuestion={onEditQuestion} />)}
                        </tbody>
                    </table>
                </div >
            </div >
        </>
    );
};
