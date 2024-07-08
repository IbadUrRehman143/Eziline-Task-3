import Header from "./components/Header/Header.jsx";
import HighLight from "./components/HighLight/HighLight.jsx";
import HeadingText from "./components/HeadingText/HeadingText.jsx";
import CardImg from "./components/HeadingText/CardImg.jsx";
import Cards1 from "./components/Cards/Cards1.jsx";
import NextSection from "./components/NextSection/NextSection.jsx";
import AnotherSection from './components/AnotherSection/AnotherSection.jsx';
import ParagraphSection from './components/ParagraphSection/ParagraphSection.jsx';
import JoinSection from './components/Joinsection/JoinSection.jsx';
import Form from './components/Form/Form.jsx';
import Footer from './components/Footer/Footer.jsx';
import Person1 from "./assets/person_1.jpg";
import Person2 from "./assets/person_2.jpg";
import Person3 from "./assets/person_3.jpg";
import "./assets/global.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HighLight />
        <section className="section-bg">
          <HeadingText heading="Features" />
          <CardImg />
          <CardImg />
          <CardImg />
        </section>

        <section>
          <HeadingText heading="Choose the plan that’s right for your business" />
          <div className="cardflex">
            <Cards1
              heading="STARTER"
              price="$22.99"
              para="This is a monthly recurring payment."
            />
            <Cards1
              heading="BUSINESS"
              price="$69.99"
              para="This is a monthly recurring payment."
            />
            <Cards1
              heading="PREMIUM"
              price="$224.99"
              para="This is a monthly recurring payment."
            />
          </div>
        </section>

        <section className="section-bg2">
          <HeadingText heading="That's Why 100,000+ Love Frame" />
          <div className="flexing">
          <NextSection
          image={Person1}
            star="★ ★ ★ ★ ★"
            paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided
             to leave for the far World of Grammar."
             name="— Garry Alexander"
          />
          <NextSection
          image={Person2}
            star="★ ★ ★ ★ ★"
            paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided
             to leave for the far World of Grammar."
             name="— James Robertson"
          />
          <NextSection
          image={Person3}
            star="★ ★ ★ ★ ★"
            paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided
             to leave for the far World of Grammar."
             name="— Ben Goodrich"
          />
          </div>
          <div className="flexing">
          <NextSection
          image={Person1}
            star="★ ★ ★ ★ ★"
            paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided
             to leave for the far World of Grammar."
             name="— Keep Hug"
          />
          <NextSection
          image={Person2}
            star="★ ★ ★ ★ ★"
            paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided
             to leave for the far World of Grammar."
             name="— Garry Alexander"
          />
          <NextSection
          image={Person3}
            star="★ ★ ★ ★ ★"
            paragraph="Even the all-powerful Pointing has no control about the blind texts it is an almost 
            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided
             to leave for the far World of Grammar."
             name="— Robertson"
          />
          </div>
        </section>
      </main>
      <AnotherSection/>
      <section>
        <div className="para1">
      <ParagraphSection 
      heading="What is Instant?"
      paragraph1="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum 
      decided to leave for the far World of Grammar."/>
      <ParagraphSection 
      heading="Is this available to my country?"
      paragraph1="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum 
      decided to leave for the far World of Grammar."/>
      </div>
      <div className="para2">
      <ParagraphSection 
      heading="How do I use the new features of Frame App?"
      paragraph1="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum 
      decided to leave for the far World of Grammar."/>
      <ParagraphSection 
      heading="I have technical problem who do I email?"
      paragraph1="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum 
      decided to leave for the far World of Grammar."/>
      </div>
      </section>
      <JoinSection/>
      <Form/>
      <Footer />
    </>
  );
};

export default App;
