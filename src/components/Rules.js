import croix from "../close.svg"
import regle from "../rules.svg"
import { useState } from "react"



export default function Rules(){
    const [Modal, setModal] = useState(false);

    
    return(
        <div className="flex justify-end mr-40">

            <button onClick={() => {setModal(true)}} className="border-4 p-2 rounded-2xl hover:bg-gray-200 text-white">RULES</button>


            <div className={Modal === false ? "bg-gray-600/50 h-full w-full absolute top-0 left-0 hidden" : "bg-gray-600/50 h-full w-full absolute top-0 left-0"}>
                <div className="content bg-white rounded-2xl p-10 w-fit absolute top-[30%] left-[40%]">

                    <div className="flex justify-between items-center text-donker font-extrabold text-4xl mb-10">
                        <h1>Rules</h1>
                        <img onClick={() => {setModal(false)}} src={croix} alt="" />
                    </div>
                    
                    <img src={regle} alt="" />

                </div>
            </div>

        </div>
    )
}