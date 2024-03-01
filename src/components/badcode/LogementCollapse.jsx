import Accordion from "../componentelement/Accordion"
import Datas from "../../datas/Datas.json"



export default function LogementCollapse() {
    {
        return <div>
            (
            {
                Datas.map((propos, i) => (
                    <>
                        < Accordion label="Description" content={propos[0]} key={`${i}+"description"`} />
                        < Accordion label="Equipements" content={propos[0]} key={`${i}+"equipement"`} />
                    </>
                ))
            }
            )
        </div>
    }
}