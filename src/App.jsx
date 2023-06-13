import Bottombar from "./components/ButtonBar"
import Container from "./components/Container"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
function App() {

  return (
    
       <div >
<Header/>
<Container>
  <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative ">
<Sidebar/>

<Bottombar/>
  </div>
  
</Container>
       </div>
  )
}

export default App
