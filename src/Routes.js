import { Route } from "react-router-dom";
import Cart from './Cart';

const Routes = () => {
    return(
        <div>
            <Route exact path='/cart'>
                <Cart/>
            </Route>
        </div>
    )
}

export default Routes;