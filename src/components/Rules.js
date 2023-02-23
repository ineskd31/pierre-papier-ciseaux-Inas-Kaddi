import croix from "../close.svg"
import regle from "../rules.svg"




export default function Rules(){


    
    return(
        <div className="flex justify-end mr-40">

            <button onClick={} className="border-4 p-2 rounded-2xl hover:bg-gray-200 text-white">RULES</button>

            <div className="modal">
                <div className="content bg-white rounded-2xl p-10">
                    <div className="flex justify-between items-center text-donker font-extrabold text-4xl mb-10">
                        <h1>Rules</h1>
                        <img onClick={} src={croix} alt="" />
                    </div>
                    
                    <img src={regle} alt="" />
                </div>
            </div>

        </div>
    )
}