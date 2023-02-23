import pierre from "../rock.svg"
import papier from "../paper.svg"
import schaar from "../scissors.svg"



export default function Home({setHome, setChoix}){

    

    return(
        <div className="flex flex-col gap-20 items-center m-24 bg-triangle bg-center bg-no-repeat mt-40">

            <div className="flex gap-24">
                <img onClick={() => {setHome(false); setChoix("papier")}} className=" border-[15px] border-blauw rounded-full p-10 bg-gri hover:bg-blue-200" src={papier} alt="" />

                <img onClick={() => {setHome(false); setChoix("schaar")}} className="border-[15px] border-geel rounded-full p-10 bg-gri hover:bg-yellow-200" src={schaar} alt="" />
            </div>

            <div>
                <img onClick={() => {setHome(false); setChoix("pierre")}} className="border-[15px] border-roos rounded-full p-10 bg-gri hover:bg-red-200" src={pierre} alt="" />
            </div>

        </div>
    )
}