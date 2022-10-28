import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import themeList from '../../../assets/themes/themeList.json';

const fs = window.require('fs').promises;

type LocationStateProps = {
  selectedItem: string;
};

export default function Preview() {
  const navigate = useNavigate();
  const location = useLocation();

  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState<string>('');

  const [isInstalling, setIsInstalling] = useState(false);

  const themeCSSFileNames: string[] = [
    'editor-suggestions.css',
    'flow.css',
    'greenfoot.css',
    'java-colors.css',
    'moe.css',
    'terminal.css',
  ];

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

  const install = async () => {
    themeCSSFileNames.forEach(async (element) => {
      await fs.copyFile(
        `${
          process.env.NODE_ENV === 'production' ? './resources' : '.'
        }/assets/themes/${selectedItemName}/${element}`,
        `C:\\Program Files\\Greenfoot\\lib\\stylesheets\\${element}`
      );
    });
  };

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
      {!isInstalling ? (
        <>
          <p className="Preview-Description-Text">{description}</p>
          <img
            className="Preview-Image"
            src={imagePath}
            alt={selectedItemName}
          />
          <div className="Preview-Button-Container">
            <button
              className="Preview-Button-Install"
              type="button"
              onClick={() => {
                setIsInstalling(true);
                install()
                  .then(() => {
                    setTimeout(() => {
                      setIsInstalling(false);
                    }, 1500);
                    return null;
                  })
                  .catch(() => {});
              }}
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
        </>
      ) : (
        <p className="Preview-Description-Text">Installing and Applying...</p>
      )}
    </div>
  );
}
