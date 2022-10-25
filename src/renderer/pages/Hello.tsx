import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

import Footer from './Footer';

export default function Hello() {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <>
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

        <a
          href="https://github.com/wonmor/Greenfoot-Themer"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span className="Glyph" role="img" aria-label="heart">
              ❤️
            </span>
            Credits
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}
