export default function BtnComp({ nombre, color }) {
    const misEstilos = {
      backgroundColor: color,
    };
  
    const handleClick = () => {
      alert(`Estas en la seccion de ${nombre}`);
    };
  
    return (
      <>
        <button onClick={handleClick} style={misEstilos}>
          {nombre}
        </button>
      </>
    );
  }
  