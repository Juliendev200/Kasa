import { useParams } from "react-router-dom"
import Datas from "../datas/Datas.json"
// import Accordion from "../components/componentelement/Accordion"
import LogementAccordion from "../components/LogementAccordion"
import Title from "../components/Title"
import Carrousel from "../components/Carrousel"
import Host from "../components/Host"
import Rate from "../components/Rate"
import Tags from "../components/Tags"
import Logementerror from "./Logementerror";

export default function Fichelogement() {
    const { id } = useParams()
    const mylocation = Datas.filter(data =>
        data.id === `${id}`
    )

    if (mylocation.length !== 0) return (console.log(mylocation),
        <>
            {
                mylocation.map((location, index) =>
                    <div className="logement" key={index} >
                        <Carrousel location={location} />
                        <div className="descriptionwrapper">
                            <div className="description1">
                                <Title localisation={location.location} title={location.title} />
                                <Tags taged={location.tags} />
                            </div>
                            <div className="description2">
                                <Host hostname={location.host.name} hostpicture={location.host.picture} />
                                <Rate starnumber={location.rating} />
                            </div>

                        </div>
                        <LogementAccordion location={location} />
                    </div>
                )
            }
        </>)
    else return (<Logementerror />
    )

}
