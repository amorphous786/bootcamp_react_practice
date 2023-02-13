// import Friday2 from "./Friday2.js";
// import Friday2PracticeHome from "./Friday2PracticeHome.js";
// import Hello from  "./Hello.js" ;
// import Welcome from "./Welcome.js";
// import File from './File.js'
// import PracticeB1 from "./PracticeB1.js";
import AddBookForm from "./AddBookForm.js";
import UpdateForm from "./UpdateForm.js";
import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div >

      {/* <Hello/>
    <Welcome /> */}
          {/* <Friday2/> */}
          {/* <Friday2PracticeHome/> */}
          {/* <PracticeB1/> */}
          {/* <AddBookForm/> */}


          {/* <File/> */}
          <Router>
            <Routes>
              <Route path='/' element={<AddBookForm/>} exact></Route>
              <Route path='/update/:id' element={<UpdateForm/>} exact></Route>
            </Routes>
          </Router>
      </div>
  );
}

export default App;
