import { IRootState } from './../../store/index';
import { connect } from 'react-redux';
import { Participant } from '../../models/participant.model';
import { postParticipant } from '../../store/actions/participant.action';
import { Register } from './register.component';
import './register.component.scss';

const mapStateToProps = (state: IRootState) => ({
    participant: state.participant.data
});

const mapDispatchToProps = (dispatch: any) => ({
    postParticipant: (participant: Participant) => dispatch(postParticipant(participant))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);