import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {sendMessageAC} from '../../redux/actions';
import Dialogs from './Dialogs/Dialogs';

class DialogsContainer extends PureComponent {
  render() {
    return <Dialogs {...this.props}/>;
  }
};

const mapStateToProps = ({global, auth: {isAuth}}) => ({messagesPage: global.messagesPage, isAuth});

export default compose(
  connect(mapStateToProps, {sendMessageAC}), 
  WithAuthRedirect
)(
  DialogsContainer
);
