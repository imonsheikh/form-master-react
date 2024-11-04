import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h1>Uncle</h1>
            <section className="flex">
             <Cousin 
             name={'Rafsan'}
             asset={asset}
             ></Cousin>
             <Cousin name={'sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;