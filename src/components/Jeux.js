import pierre from "../rock.svg"
import papier from "../paper.svg"
import schaar from "../scissors.svg"
import { useState, useEffect } from "react";



export default function Jeux({ setHome, choix, setScore, score }) {

    const [timer, setTimer] = useState(3);

    const [Robot, setRobot] = useState();

    const [Sup, setSup] = useState(true);

    const [Resultat, setResultat] = useState("");

    const condition = () => {
        if (choix === "papier" && Robot === 0) {
            setResultat("It's A Draw")
        }
        else if (choix === "schaar" && Robot === 0){
            setResultat("You Win") 
            setScore(score +1)
        }
        else if (choix === "pierre" && Robot === 0){
            setResultat("You Lose")
            setScore(score -1)
        }
        else if (choix === "papier" && Robot === 1){
            setResultat("You Lose")
            setScore(score -1)
        }
        else if (choix === "schaar" && Robot === 1){
            setResultat("It's A Draw")
        }
        else if (choix === "pierre" && Robot === 1){
            setResultat("You Win")
            setScore(score +1)
        }
        else if (choix === "papier" && Robot === 2){
            setResultat("You Win")
            setScore(score +1)
        }
        else if (choix === "schaar" && Robot === 2){
            setResultat("You Lose")
            setScore(score -1)
        }
        else if (choix === "pierre" && Robot === 2){
            setResultat("It's A Draw")
        }
    }
    useEffect(() => {

        condition()

    }, [Robot])


    useEffect(() => {
        

        let id = setTimeout(() => {
            setTimer(timer - 1)
        }, 1000);

        if (timer <= 0) {
            clearTimeout(id)
            setRobot(Math.floor(Math.random() * 3))
            setSup(false)
        }

    }, [timer]);



    return (
        <div className="flex gap-40 justify-center mt-20 h-[600px]">

            <div className="text-white text-4xl flex flex-col items-center gap-20">
                <h1>Your Pick</h1>

                <div>
                    {choix === "papier" ? <img className="border-[15px] border-blauw rounded-full p-10 bg-gri hover:bg-blue-200" src={papier} alt="" /> : null}

                    {choix === "schaar" ? <img className="border-[15px] border-geel rounded-full p-10 bg-gri hover:bg-yellow-200" src={schaar} alt="" /> : null}

                    {choix === "pierre" ? <img className="border-[15px] border-roos rounded-full p-10 bg-gri hover:bg-red-200" src={pierre} alt="" /> : null}
                </div>
            </div>

            <div className="flex flex-col items-center gap-5 mt-32 font-bold">

                <h1 className="text-5xl text-white"> {Resultat} </h1>

                <button onClick={() => { setHome(true) }} className="bg-white rounded-lg p-2 pl-10 pr-10 hover:text-red-600">Play Again</button>
            </div>

            <div className="text-white text-4xl flex flex-col items-center gap-20">
                <h1>Robot Pick</h1>

                <div className={Sup === true ? "flex items-center justify-center bg-slate-400 w-44 h-44 rounded-full text-6xl" : "bg-slate-400 w-44 h-44 rounded-full text-6xl hidden"}>
                    {timer}
                </div>

                {Robot === 0 ? <img className="border-[15px] border-blauw rounded-full p-10 bg-gri hover:bg-blue-200" src={papier} alt="" /> : null}

                {Robot === 1 ? <img className="border-[15px] border-geel rounded-full p-10 bg-gri hover:bg-yellow-200" src={schaar} alt="" /> : null}

                {Robot === 2 ? <img className="border-[15px] border-roos rounded-full p-10 bg-gri hover:bg-red-200" src={pierre} alt="" /> : null}


            </div>
        </div>
    )
}