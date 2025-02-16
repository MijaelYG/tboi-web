import { useEffect } from "react";

interface Props {
  onLoaded: () => void;
}

const Items = ({onLoaded}: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onLoaded(); 
    }, 0);

    return () => clearTimeout(timeout);
  },[]) 

  return (
    <div  style={{backgroundColor: 'blue'}}>
      prueba
    </div>
  )
}

export default Items
