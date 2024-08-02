import BodyComponent from "./BodyComponent";
import { HeaderComponent } from "./Header";

const AppLayout = () => (
    <div className='main-container'>
         {HeaderComponent()}
         {<BodyComponent/>}
    </div>
)

export default AppLayout;