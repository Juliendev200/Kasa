import Accordion from "./componentelement/Accordion"

const LogementAccordion = ({ location }) => {
    const equipments = location.equipments
    return (
        <div className="logement-accordion" >
            <Accordion
                label="Description"
                content={location.description} />
            <Accordion
                label="Equipements"
                content={equipments.map((equipment, index) => (<p key={index}>{equipment}</p>))
                } />
        </div >
    );
}

export default LogementAccordion;