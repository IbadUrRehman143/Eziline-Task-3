import Header  from './components/Header/Header.jsx';
import HighLight from './components/HighLight/HighLight.jsx';
import Features from './components/Features/Features.jsx';
import Cards1 from './components/Cards/Cards1.jsx';
import NextSection from './components/NextSection/NextSection.jsx';
import AnotherSection from './components/AnotherSection/AnotherSection.jsx';
import ParagraphSection from './components/ParagraphSection/ParagraphSection.jsx';
import JoinSection from './components/Joinsection/JoinSection.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = ()=>{
    return(
        <div>
          <Header/>
          <HighLight/>
          <Features/>
          <Cards1/>
          <NextSection/>
          <AnotherSection/>
          <ParagraphSection/>
          <JoinSection/>
          <Form/>
          <Footer/>
        </div>
        
    )
  }
  
  
  export default App;