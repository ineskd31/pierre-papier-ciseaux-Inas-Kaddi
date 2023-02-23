import pierre from "../rock.svg"
import papier from "../paper.svg"
import schaar from "../scissors.svg"



export default function Game(){
    return(
        <div className="flex flex-col gap-20 items-center m-24 bg-triangle bg-center bg-no-repeat mt-40">

            <div className="flex gap-24">
                <img className=" border-[15px] border-blauw rounded-full p-10 bg-gri" src={papier} alt="" />
                <img className="border-[15px] border-geel rounded-full p-10 bg-gri" src={schaar} alt="" />
            </div>

            <div>
                <img className="border-[15px] border-roos rounded-full p-10 bg-gri" src={pierre} alt="" />
            </div>

        </div>
    )
}