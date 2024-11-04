import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/GrandPa";


const Aunty = () => {
  const [money,setMoney]= useContext(MoneyContext)
    return (
        <div>
          <h1>Aunty</h1>
          <section className="flex">
            <Cousin name={'Mamshad'}></Cousin>
            <Cousin name={'Rubiaya'}></Cousin>
          </section>
          <p>Money: {money}</p>
          <button onClick={() => setMoney(money+2000)}>Add 2000 tk</button>
        </div>
    );
};

export default Aunty;