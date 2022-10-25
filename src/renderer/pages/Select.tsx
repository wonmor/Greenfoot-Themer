import { useNavigate } from 'react-router-dom';

import themeList from '../../../assets/themeList.json';

export default function Select() {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  const themeListItems = JSON.parse(JSON.stringify(themeList));

  return (
    <>
      <h1>Wardrobe</h1>
      <div className="Wardrobe-Container">
        {themeListItems.map(
          (theme: { image: string | undefined; name: string | undefined }) => (
            <div className="Wardrobe-Item" key={theme.name}>
              <button
                type="button"
                className="Wardrobe-Image-Container"
                onClick={() => {
                  routeChange('/Preview');
                }}
              >
                <img
                  className="Wardrobe-Item-Image"
                  src={theme.image}
                  alt={theme.name}
                />
              </button>
              <div className="Wardrobe-Item-Name">{theme.name}</div>
            </div>
          )
        )}
      </div>

      <button type="button" onClick={() => routeChange('/')}>
        <span className="Glyph" role="img" aria-label="house">
          🏠
        </span>
        Home
      </button>
    </>
  );
}
