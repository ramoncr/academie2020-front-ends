import React, { useState } from 'react';
import { Question } from '../../../models';
import { TextInput, InputChangeEvent } from '../../molecules';
import { AdminAnswerRow, AnswerChangeEvent } from '../answer-row/answer-row.component';

interface Props {
    question: Question;
    onChange: (question: Question) => void;
}

export const AdminQuestionForm = (props: Props) => {
    const { onChange } = props;

    const [question, setQuestion] = useState(props.question);

    function onValueChange(event: InputChangeEvent<any>) {
        (question as any)[event.name] = event.value;
        setQuestion(question);
        onChange(question);
    }

    function onAnswerChange(event: AnswerChangeEvent){
        question.answers[event.index] = event.answer;
        setQuestion(question);
        onChange(question);
    }

    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <TextInput
                        id="question-content"
                        name="content"
                        placeholder="Example question?"
                        label="Content"
                        value={question.content}
                        onValueChange={onValueChange}
                    />
                    <TextInput
                        id="question-description"
                        name="description"
                        placeholder="A description for the question"
                        label="Description"
                        value={question.description}
                        onValueChange={onValueChange}
                    />
                    <TextInput
                        id="question-image"
                        name="image"
                        placeholder="https://image.src/cute-animal.png"
                        label="Image URL"
                        value={question.image}
                        onValueChange={onValueChange}
                    />
                    <TextInput
                        id="question-video"
                        name="video"
                        placeholder="https://www.youtube.com/embed/FeJKJ5MoCHY"
                        label="Video Embed URL"
                        value={question.video}
                        onValueChange={onValueChange}
                    />

                    <hr />
                    <h3>Answers</h3>
                    <AdminAnswerRow answer={question.answers[0]} index={0} onChange={onAnswerChange}/>
                    <AdminAnswerRow answer={question.answers[1]} index={1} onChange={onAnswerChange}/>
                    <AdminAnswerRow answer={question.answers[2]} index={2} onChange={onAnswerChange}/>
                </div>
            </div>
        </>
    )
};
