import { useEffect } from "react";

interface Props {
  onLoaded: () => void;
}

const Items = ({ onLoaded }: Props) => {
  useEffect(() => {
    onLoaded();
  }, []);

  return <div style={{ backgroundColor: "blue" }}>prueba</div>;
};

export default Items;
