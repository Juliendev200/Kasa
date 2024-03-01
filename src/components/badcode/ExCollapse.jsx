import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AproposDatas from '../../datas/AproposDatas.json'
import Datas from '../../datas/Datas.json'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default function Collapse() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(close => !close);
    const location = useLocation();
    const { id } = useParams();
    console.log({ id })
    console.log(location.pathname)
    if (location.pathname === "/Apropos") {
        return (
            <div className='aproposwrapper'>
                {
                    AproposDatas.map((propos, i) => (
                        <div className="contentBx" key={i}>
                            <div className="label" > {propos.label} <FontAwesomeIcon icon={faChevronDown} className="label__arrow" /> </div>
                            <div className="content"> {propos.content} </div>
                        </div>
                    ))
                }
            </div>
        )
    }//
    // if (location.pathname = "/logement/:id") {
    //     return (

    //         < div className='detailwrapper' >
    //             {
    //                 Datas.map((detail, i,) => (<>
    //                     <div className="contentBx" key={i}>
    //                         <div className="label" > Description </div>
    //                         <div className="content"> {Datas[{ id }].description} </div>
    //                     </div>
    //                     <div className="contentBx" key={i}>
    //                         <div className="label" > Equipements </div>
    //                         <div className="content"> {Datas[{ id }].equipements} </div>
    //                     </div>
    //                 </>,
    //                     console.log(Datas),
    //                     console.log(detail),
    //                     console.log(i)
    //                 ))
    //             }
    //         </div >
    //     )
    // }//
}