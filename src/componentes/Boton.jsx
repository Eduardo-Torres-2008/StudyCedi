function Boton ({funcion, children}){
    return (
        <button on onClick={funcion}>{children}</button>

    );
}

export default Boton; 