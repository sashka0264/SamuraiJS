import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import { sendMessageAC } from './dialogsReducer';
import Dialogs from './Dialogs/Dialogs';

class DialogsContainer extends PureComponent {
  render() {
    const { dialogs, isAuth, sendMessageAC } = this.props;
    return (
      <Dialogs 
        messagesPage={dialogs} 
        isAuth={isAuth} 
        sendMessageAC={sendMessageAC}
      />
    );
  }
};

const mapStateToProps = ({ dialogs, auth: { isAuth }}) => ({
  dialogs, isAuth
});

const mapDispatchToProps = (dispatch) => ({
  sendMessageAC: (text) => dispatch(sendMessageAC(text))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps), 
  WithAuthRedirect
)(DialogsContainer);
