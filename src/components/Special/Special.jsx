import { useContext } from "react";
import { AssetContext } from "../Grandpa/GrandPa";

const Special = ({asset}) => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <section>
               <h2>Special</h2> 
               <p>Has: {asset}</p>
               <p>Also has: {gift}</p>
            </section>
        </div>
    );
};

export default Special;