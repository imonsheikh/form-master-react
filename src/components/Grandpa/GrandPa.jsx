import React, { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
  const [money,setMoney]= useState(2000)
  const asset = "diamond";

  return (
    <div className="grandpa ">
      <h1>Grandpa</h1>
      <p>Net Money: {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="golden">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value.Value could be anything
 * 3. useContext to access value in the context api
 */
