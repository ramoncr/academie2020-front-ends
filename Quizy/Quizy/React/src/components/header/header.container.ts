import { clearParticipant } from '../../store/actions/participant.action';
import { connect } from 'react-redux';
import { Header } from './header.component';
import { Action } from 'redux';

const mapStateToProps = (state: any) => ({
    participant: state.participant.data
});

const mapDispatchToProps = (dispatch: (action: Action) => void) => ({
    clearParticipant: () => dispatch(clearParticipant())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);