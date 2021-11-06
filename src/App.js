import Admin from "./Admin/Admin";
import Client from "./Client/Client";

function App(){
    const isUser=false;
    const isAdmin=true;
    return(
        <div>
            {isUser&&<Client/>}
            {isAdmin&&<Admin/>}
        </div>
    )
}

export default App;