import React from 'react';
import { Question } from '../../../models';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
    question: Question;
    onDeleteQuestion: (question: Question) => void;
    onEditQuestion: (question: Question) => void;
}

export const QuestionRow = (props: Props) => {
    const { question, onDeleteQuestion, onEditQuestion } = props;

    const onDeleteQuestionClicked = () => onDeleteQuestion(question);
    const onEditQuestionClicked = () => onEditQuestion(question);

    return (
        <>
            <tr>
                <td>{question.id}</td>
                <td>{question.content}</td>
                <td>{question.description}</td>
                <td>
                    <button onClick={onDeleteQuestionClicked}>
                        <DeleteIcon style={{ fontSize: 24 }} />
                    </button>
                    <button onClick={onEditQuestionClicked}>
                        <EditIcon style={{ fontSize: 24 }} />
                    </button>
                </td >
            </tr >
        </>
    )
}