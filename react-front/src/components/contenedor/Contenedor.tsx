import "./contenedor.css"

import { Button } from "../button/Button";

const parent = () => {};

export const Contenedor = () => {
    return (
        <div className="contenedor">
          <Button id = "b1" label="Cuenta" parentMethod={parent}></Button>
          <Button id = "b2" label="Carreras" parentMethod={parent}></Button>
          <Button id = "b3" label="Materias" parentMethod={parent}></Button>
          <Button id = "b4" label="Grupos" parentMethod={parent}></Button>
          <Button id = "b5" label="Organización" parentMethod={parent}></Button>
          <Button id = "b6" label="Consultas" parentMethod={parent}></Button>
        </div>
    )
}