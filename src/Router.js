import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import WhatsApp from './pages/WhatsApp/WhatsApp';
const Router = (props) => (

    <BrowserRouter>
       <Switch>
       <Route path="/" exact component={Homepage} />
       <Route path="/whatsapp" exact component={WhatsApp} />

       </Switch>
    </BrowserRouter>

)

export default Router