import { useNavigate } from 'react-router-dom';

export default function Preview() {
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <h1>Preview</h1>
      <button type="button" onClick={() => routeChange('/Select')}>
        <span className="Glyph" role="img" aria-label="house">
          ⬅️
        </span>
        Back
      </button>
    </>
  );
}
