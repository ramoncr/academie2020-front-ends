import React, { useState } from 'react';
import { TextInput, NumberInput, InputChangeEvent } from '../../molecules';
import { Answer } from '../../../models';

export interface AnswerChangeEvent{
    answer: Answer;
    index: number;
}

interface Props {
    answer: Answer;
    index: number;
    onChange: (event: AnswerChangeEvent) => void;
}

export const AdminAnswerRow = (props: Props) => {
    const [answer, setAnswer] = useState(props.answer);
    const [index] = useState(props.index);

    function onChangeText(event: InputChangeEvent<string>) {
        answer.text = event.value;
        setAnswer(answer);
    }

    function onChangeScore(event: InputChangeEvent<number>) {
        answer.score = event.value;
        setAnswer(answer);
        props.onChange({answer, index});
    }

    return (
        <>
            <div className="row">
                <div className="eight columns">
                    <TextInput
                        id={`question-answer-${index}-text`}
                        placeholder="The answer"
                        label={`Answer ${index + 1}`}
                        value={answer.text}
                        onValueChange={onChangeText}
                    />
                </div>
                <div className="four columns">
                    <NumberInput
                        id={`question-answer-${index}-score`}
                        placeholder="300"
                        label="Score"
                        value={answer.score}
                        onValueChange={onChangeScore}
                    />
                </div>
            </div>
        </>
    );
};