import { useState } from "react";
import Bottombar from "./components/ButtonBar";
import Container from "./components/Container";
import Emaillist from "./components/Email";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  const [openEmail, setOpenEmail] = useState(null)
  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative ">
          <Sidebar />
          <Emaillist setOpenEmail={setOpenEmail}/>
          {JSON.stringify(openEmail)}
          <Bottombar />
        </div>
      </Container>
    </div>
  );
}

export default App;
