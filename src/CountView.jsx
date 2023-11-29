import { useContext } from 'react';
import Context from './context';

function CountView()
{
    const {state} = useContext(Context);

    return (
    <div>
        CountView Count : {state.count}
    </div>
    );
}

export default CountView;