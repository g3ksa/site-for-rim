import React from 'react';
import {Routes, Route, Link } from 'react-router-dom'; 

import { Header } from './components/Header';
import { MainBlock } from './pages/mainpage/MainBlock';
import { Sources } from './pages/sources/Sources';
import { Stats } from './pages/stats/Stats';
import { Team } from './pages/team/Team';
import { Layout } from './components/Layout';
import { Admin } from './components/Admin';
import { NotAdmin } from './components/NotAdmin';
import { Login } from './components/Login';
import { Tasks } from './pages/tasks/Tasks';
import { Flag } from './components/Flag';

const AdminYes = () => {
	return (
		<>
			<Admin/>
			<Link to="/login" className="btn">Login</Link>
		</>
	);
}

const isAdmin = () => {
	return navigator.userAgent == 'admin' ? <AdminYes/> : <NotAdmin/>;
}


const App = () => {
	return(
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={isAdmin()} />
					<Route path="sources" element={<Sources />} />
					<Route path="stats" element={<Stats />} />
					<Route path="team" element={<Team />} />
					<Route path="tasks" element={<Tasks />} />
					<Route path="login" element={<Login />} />
					<Route path="flag" element={<MainBlock />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
