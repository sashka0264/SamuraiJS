
import React, { Component } from 'react';
import {
  Route, 
  withRouter, 
  BrowserRouter, 
  Switch, 
  Redirect 
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import { store } from './redux/store';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { getMeTC, initializeAppTC } from './redux/actions';
import Spinner from './components/common/Spinner/Spinner';
import WithSuspense from './hoc/WithSuspense';
import style from './App.module.css';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')),
  ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')),
  Music = React.lazy(() => import('./components/Music/Music')),
  Settings = React.lazy(() => import('./components/Settings/Settings')),
  UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')),
  LoginPage = React.lazy(() => import('./components/Login/Login'));

const AppContainer = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter> 
  </Provider>
);

export class App extends Component {
  componentDidMount() {
    const { initializeAppTC } = this.props;
    initializeAppTC();
  }

  render() {
    const { initialized } = this.props;
    if (!initialized) return <Spinner />;

    return (
      <div className={style.appWrapper}>
        <HeaderContainer />
        <Navbar />
  
        <div className={style.appReference}>
          <Switch> 
            {/* Switch идет до первого url, который совпадет, остальные схожие игнорируются */}
            <Route exact path="/" render={() => <Redirect from="/" to="/profile" />} />

            <Route path="/dialogs" render={WithSuspense(DialogsContainer, Spinner)} />

            <Route path="/music" render={WithSuspense(Music, Spinner)} /> 

            <Route path="/settings" render={WithSuspense(Settings, Spinner)} /> 

            <Route path="/users" render={WithSuspense(UsersContainer, null)} /> 

            <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer, null)} />

            <Route path="/login" render={WithSuspense(LoginPage, Spinner)} /> 

            {/* <Route path="*" render={() => {
              return (
                <div>404 NOT FOUND</div>
              )
            }} />  */}
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({
  initialized: global.app.initialized
});

const AppWithRouter = compose(
  withRouter,
  connect(mapStateToProps, { getMeTC, initializeAppTC })
)(App);

export default AppContainer;