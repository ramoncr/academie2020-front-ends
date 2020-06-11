import React, { useEffect, useState } from 'react';
import './questions.component.scss';
import { useHistory } from 'react-router-dom';
import { Participant } from '../../models/participant.model';
import { Question } from '../../models/question.model';

interface Props {
    participant: Participant | null;
    questions: Array<Question>;
    currentQuestion: Question | null;
    getQuestions: () => void;
    getParticipant: (id: number) => void;
    putParticipant: (participant: Participant) => void;
    clearParticipant: () => void;
    handleAnswer: (score: number) => void;
}

export const Questions = (props: Props) => {
    const { participant, questions, getQuestions, getParticipant, putParticipant, handleAnswer, clearParticipant } = props;

    const [selectedAnswer, setSelectedAnswer] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(props.currentQuestion);
    const history = useHistory();

    useEffect(() => {
        if (participant) {
            getQuestions();
        } else {
            const currentParticipantId = parseInt(localStorage.getItem('currentParticipant') ?? '');
            if (currentParticipantId) {
                getParticipant(currentParticipantId);
            } else {
                history.push('/register');
            }
        }
    }, [participant, getParticipant, getQuestions, history]);

    useEffect(() => {
        if (participant && questions?.length > 0 && !currentQuestion) {
            setCurrentQuestion(questions[participant.questionsAnswered]);
        }
    }, [questions, currentQuestion, participant]);

    function submit() {
        if (!participant) { return; }
        const answer = currentQuestion?.answers.find(a => a.id === selectedAnswer);
        if (answer) {
            handleAnswer(answer.score);
            setSelectedAnswer(-1);
            putParticipant(participant);

            if (participant.questionsAnswered >= questions.length) {
                alert(`That was the last question; Your score was: ${participant.score}; You will be logged out.`);
                clearParticipant();
                localStorage.removeItem('currentParticipant');
                history.push('/register');
            } else {
                setCurrentQuestion(questions[participant.questionsAnswered]);
            }
        }
    }

    function onAnswerChanged(event: React.FormEvent<HTMLInputElement>) {
        setSelectedAnswer(parseInt(event.currentTarget.value));
    }

    return (
        <>
            <div className="container">
                {participant &&
                    <div className="row" id="score-row">
                        <div className="six columns">
                            Your score: {participant.score} points
                        </div>
                    </div>
                }
                {currentQuestion && <>
                    <div className="row">
                        <div className="twelve columns">
                            <h2>
                                {currentQuestion.content}
                                <small>
                                    {participant &&
                                        <span>{participant.questionsAnswered + 1}/{questions.length}</span>
                                    }
                                </small>
                            </h2>
                        </div>
                    </div>
                    {currentQuestion.image &&
                        <div className="row" >
                            <div className="twelve columns">
                                <img src={currentQuestion.image} height="315" alt="qi" />
                            </div>
                        </div>
                    }
                    {currentQuestion.video &&
                        <div className="row">
                            <div className="twelve columns">
                                <iframe
                                    src={currentQuestion.video}
                                    width="560"
                                    height="315"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Question Video">
                                </iframe>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="twelve columns">
                            <p>{currentQuestion.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="twelve columns">
                            {
                                currentQuestion.answers.map(option => (
                                    <label key={option.id}>
                                        <input type="radio" value={option.id} name="answer" checked={selectedAnswer === option.id} onChange={onAnswerChanged} />
                                        <span className="label-body">{option.text}</span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="twelve columns">
                            <button disabled={selectedAnswer < 0} onClick={submit}>Submit Answer</button>
                        </div>
                    </div >
                </>}
            </div >
        </>
    );
}