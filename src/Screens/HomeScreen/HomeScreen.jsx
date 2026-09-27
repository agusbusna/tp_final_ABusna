import "./HomeScreen.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import NoChatSelected from "../../Components/NoChatSelected/NoChatSelected"
import NavRail from "../../Components/NavRail/NavRail"



export default function HomeScreen() {
    return (
        
        <div className='home-screen'>
            <div className="home-screen-body">
                <div className="nav-rail">
                    <NavRail/>
                </div>
                <div className="chat-layout-wrapper">
                    <div className='home-screen-sidebar'>
                        <Sidebar/>
                    </div>
                    <div className='home-screen-chat'>
                        <NoChatSelected/>
                    </div>
                </div>
            </div>
        </div>
    )
}
