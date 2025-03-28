import './App.css'
import RoomPage from './screens/Room'
import LobbyScreen from './screens/Lobby'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LobbyScreen/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
    </Routes>
    </>
  )
}

export default App
