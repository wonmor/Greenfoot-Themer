import { useNavigate } from 'react-router-dom';
import themeList from '../../../assets/themeList.json';

const Select = () => {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  const themeListData = JSON.parse(themeList);

  return (
    <div>
      <h1>Wardrobe</h1>
      <div className="Wardrobe-Container">
        <p>Hello world!</p>
      </div>

      <button type="button" onClick={() => routeChange('/')}>
        <span className="Glyph" role="img" aria-label="house">
          🏠
        </span>
        Home
      </button>
    </div>
  );
};

export default Select;
