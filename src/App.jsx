import { Route, Routes } from 'react-router'
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import { Navigate } from "react-router"
import { ContactContextProvider } from './Context/ContactContext'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'



export default function App() {
    return(
        <Routes>
            <Route element= {<ContactContextProvider/>}>
                    <Route
                        path="/"
                        element={<HomeScreen />} />
                    <Route
                        path="/contact/:contact_id"
                        element={<HomeScreen />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace/>} />
            </Route>
            <Route path= "*" element= {<NotFoundScreen/>}/>


        </Routes>

    )



} 