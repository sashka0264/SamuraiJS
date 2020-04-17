import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutTC } from '../../redux/authReducer';
import Header from './Header/Header';

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = ({ auth: { isAuth, login } }) => ({ isAuth, login });
  
export default connect(mapStateToProps, { logoutTC })(HeaderContainer);