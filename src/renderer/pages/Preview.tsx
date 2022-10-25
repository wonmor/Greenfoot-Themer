import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import themeList from '../../../assets/themeList.json';

type LocationStateProps = {
  selectedItem: string;
};

export default function Preview() {
  const navigate = useNavigate();
  const location = useLocation();

  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState<string>('');

  const myState: object | null | unknown | LocationStateProps = location.state;

  const themeListItems = JSON.parse(JSON.stringify(themeList));

  const hasProps = (
    state: object | null | unknown | LocationStateProps
  ): state is LocationStateProps => {
    // you use `as` here, but only so typescript doesn't yell at you while you access the property
    // specifically to test if it is there
    return (state as LocationStateProps).selectedItem !== undefined;
  };

  const routeChange = (path: string) => {
    navigate(path);
  };

  const selectedItemName = hasProps(myState) ? myState.selectedItem : 'No Name';

  useEffect(() => {
    for (let i = 0; i < themeListItems.length; i += 1) {
      if (themeListItems[i].name === selectedItemName) {
        setDescription(themeListItems[i].description);
        setImagePath(themeListItems[i].image);
        break;
      }
    }
  }, [selectedItemName, themeListItems]);

  return (
    <div className="Preview-Container">
      <h1>{selectedItemName}</h1>
      <p className="Preview-Description-Text">{description}</p>
      <img className="Preview-Image" src={imagePath} alt={selectedItemName} />
      <div className="Preview-Button-Container">
        <button
          className="Preview-Button-Install"
          type="button"
          onClick={() => routeChange('/Select')}
        >
          <span className="Glyph" role="img" aria-label="house">
            😘
          </span>
          Install
        </button>
        <button
          className="Preview-Button-Back"
          type="button"
          onClick={() => routeChange('/Select')}
        >
          <span className="Glyph" role="img" aria-label="house">
            👈
          </span>
          Back
        </button>
      </div>
    </div>
  );
}
