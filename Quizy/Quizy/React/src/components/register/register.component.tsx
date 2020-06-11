import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Participant } from '../../models/participant.model';
import axios from 'axios';

interface Props {
    participant: Participant | null;
    postParticipant: (participant: Participant) => void;
}

export const Register = (props: Props) => {
    const { participant } = props;

    const history = useHistory();
    const [name, setName] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (participant) {
            history.push('/questions');
        }
    }, [participant, history]);

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        const participant = new Participant();
        participant.name = name;
        axios.post<{ isNameAvailable: boolean }>('participants/IsNameAvailable', { name }).then(res => {
            if (res.data.isNameAvailable) {
                props.postParticipant(participant);
            } else {
                setError(true);
            }
        });
    }

    function onChangeName(event: React.FormEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
        setError(false);
    }

    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <h1>Register</h1>
                    <p>
                        Welcome to this cool quiz tool! Please put in you information below to
                        get started with quizing!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" className="u-full-width" placeholder="John Doe" id="name" onChange={onChangeName} />
                </div>
                {error && (<div className="color-red">Name is already in use</div>)}
            </div>
            <div className="row">
                <div className="twelve columns">
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
}
