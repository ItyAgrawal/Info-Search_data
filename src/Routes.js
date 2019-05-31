import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import final from './pages/final';
import all_places from './pages/all_places';

export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
						<Scene key="final" component={final} title="final"/>
						<Scene key="all_places" component={all_places} title="all_places"/>
			    </Stack>
			 </Router>
			)
	}
}
