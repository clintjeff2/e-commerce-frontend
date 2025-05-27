import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Store from './pages/Store';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/store/:id" element={<Store />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
// http://localhost:5173/store/6830512cf72b27ea9e226bac
// http://localhost:5173/store/681dda7b582326baf0ca7955
// http://localhost:5173/store/681ddaf8582326baf0ca7957

