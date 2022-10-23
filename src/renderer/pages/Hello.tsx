import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import Footer from './Footer';

const Hello = () => {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div className="Hello">
        <img width="150" alt="logo" src={logo} />
      </div>
      <h1>Welcome to Greenfoot Themer</h1>
      <div className="Hello">
        <button type="button" onClick={() => routeChange('/select')}>
          <span className="Glyph" role="img" aria-label="books">
            📚
          </span>
          Select Themes
        </button>

        <button type="button" onClick={() => routeChange('/select')}>
          <span className="Glyph" role="img" aria-label="heart">
            ❤️
          </span>
          Credits
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Hello;
