import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SiteRoutes from './SiteRoutes';
import { useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) ?? null)

  }, [])

  const handleLogin = () => {
    const User = { id: 1, name: "rumeysa" }; // Değişiklik burada
    setUser(User);
    localStorage.setItem('user', JSON.stringify(User));
    navigate('/');
  };

  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} handleLogOut={handleLogOut} /> {/* Navbar'a user ve handleLogOut prop'larını ekledim */}
      <div className="container">
        <div className='row-sm-12'>
          <SiteRoutes handleLogin={handleLogin} user={user} />
        </div>
      </div>
    </>
  );
}

export default App;
