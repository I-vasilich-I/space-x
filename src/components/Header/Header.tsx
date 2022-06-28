import logo from '../../assets/images/logo_.png';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1 className="hidden">SpaceX</h1>
    <div className="wrapper wrapper__header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />  
      </div>
      <Navbar />
    </div>
  </header>
)

export default Header;