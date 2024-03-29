import logo from "../logo.svg"
import { useState } from "react"




export default function Score({score}){


    return(
        <div className="flex justify-between ml-[30%] mr-[30%] mt-10 border-4 rounded-xl p-4">
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="bg-gray-200 flex flex-col items-center justify-center w-36 rounded-xl">

                <p>Score</p>

                <p className=" text-4xl">{score}</p>

            </div>
        </div>
    )
}