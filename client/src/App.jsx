import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import SignUpPage from './pages/SignUpPage';
import { UserContextProvider } from './UserContext';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import BookingsPage from './pages/BookingsPage';
import BookingPage from './pages/BookingPage';

function App() {

  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/account' element={<ProfilePage />} />
            <Route path='/account/places' element={<PlacesPage />} />
            <Route path='/account/places/new' element={<PlacesFormPage />} />
            <Route path='/account/places/:id' element={<PlacesFormPage />} />
            <Route path='/place/:id' element={<PlacePage />} />
            <Route path='/account/bookings' element={<BookingsPage />} />
            <Route path='/account/bookings/:id' element={<BookingPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
