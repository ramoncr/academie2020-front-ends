import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './header.component.scss';
import { Participant } from '../../models/participant.model';

interface Props {
    participant: Participant;
    clearParticipant: () => void;
}

export const Header = (props: Props) => {
    const history = useHistory();

    function logout(event: React.MouseEvent<HTMLDivElement>) {
        localStorage.removeItem('currentParticipant');
        props.clearParticipant();
        history.push('/register');
    }

    return (
        <div id="nav">
            <div className="container">
                <Link to="/questions" id="header-title">Quizy</Link>
                <Link to="/questions">Questions</Link>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link>
                {props.participant &&
                    <div id="current-user" className="u-pull-right" onClick={logout}>
                        Logout {props.participant && props.participant.name}
                    </div>
                }
            </div>
        </div>
    )
}