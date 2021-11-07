import Admin from "./Admin/Admin";
import Client from "./Client/Client";

function App(){
    const isUser=true;
    const isAdmin=true;
    return(
        <div>
            <Client/>
            {isAdmin&&<Admin/>}
        </div>
    )
}

export default App;