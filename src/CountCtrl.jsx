import { useContext } from 'react';
import Context from './context';

function CountCtrl()
{
    const {state:{count},action:{setCount}} = useContext(Context);

    return (
    <div>
        <hr/>
        <div>
            CountCtrl Count : {count}
        </div>
        <button onClick={()=>setCount(count+1)}>Count 증가</button>
        <hr/>
    </div>);
}

export default CountCtrl;