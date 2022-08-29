import CardPresentaciones from './CardPresentaciones'

function Presentaciones() {
  return (
    <div className="container-presentaciones">
        <h2>NUESTRAS PRESENTACIONES</h2>
            <div className="cards-presentaciones">
                <CardPresentaciones bailes={"Somos de Ucraniana y Vesna"} lugar={"Teatro Picadelli"} fecha={"26 de julio del 2022"} />
                <CardPresentaciones bailes={"Somos de Ucrania,Vesna y Hopak"} lugar={"Asociación Ucrania de Cultura Prosvita filial Berisso"} fecha={"27 de agosto del 2022"} />
            </div>
        <h2>PROXIMAS PRESENTACIONES</h2>
            <div className="cards-presentaciones">
                <CardPresentaciones bailes={"Somos de Ucrania,Vesna y Hopak"} lugar={"Misiones"} fecha={"27 de octubre del 2022"} />
            </div>
    </div>
  );
}

export default Presentaciones;