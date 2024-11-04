import { useContext } from "react";
import { MoneyContext } from "../Grandpa/GrandPa";

const Brother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>From GrandPa: {money}</p>
        </div>
    );
};

export default Brother;