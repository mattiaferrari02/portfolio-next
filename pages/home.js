import Head from '../components/Head'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import * as skills from "../utilities/skills";
import Section from "../components/section";

export default function Home() {
    const birthday = new Date('2002-06-22');

    const calculateAge = (birthday) => {
      let difference = Date.now() - birthday.getTime();
      let date = new Date(difference);
      return Math.abs(date.getUTCFullYear() - 1970);
    };

    const age = calculateAge(birthday);

    //dummy data
    return (
      <div className="page flex flex-col min-h-screen">
        <Head
          keywords={
            "portfolio, mattia ferrari, mattia, ferrari, web-dev, next.js, MERN"
          }
          description="mattia ferrari portfolio home page"
          title="Mattia ferrari | Home Page"
        />

        <Navbar />
          <main>
        <section className="text-gray-300 md:flex px-2 md:px-10 lg:px-20 xl:px-30 mt-20 flex-grow">
          <article id="aboutme" className=" w-full ">
            
            <header className="text-gray-300 md:col-span-2  text-3xl w-full border-b-2 border-gray-300 my-4">
                  <h2><span role="img" aria-label="coffee">☕</span> About Me</h2>
                  <time dateTime="2021-03-18" ></time>
                </header>
            <main className="grid  grid-col-1 grid-rows-9   sm:grid-cols-2 sm:grid-rows-3   lg:grid-cols-2 lg:grid-rows-3  xl:grid-cols-3  xl:grid-rows-3 grid-flow-row gap-3 mb-10">
                
                <div className="card text-2xl text-gray-200 p-10 col-span-1 row-span-1 bg-gray-700 rounded-xl overflow-hidden overflow-ellipsis">
                    Informazioni Personali<br />
                    Nome: <span className="text-xl"><span role="img" aria-label="Man">👨‍💼</span>  Mattia Ferrari </span> <br />
                    Formazione: <span className="text-xl"><span role="img" aria-label="notebook">📒</span>  Blaise Pascal</span>   <br/>
                    Specializzazione: <span className="text-xl"><span role="img" aria-label="coding-man">👨‍💻</span>  Full stack web-dev </span>   <br/>
                    Età: <span className="text-xl"><span role="img" aria-label="compleanno">🎂</span>  {age} </span> <br/>
                    Hobby: <span className="text-xl"><span role="img" aria-label="computer">💻</span>  Coding e serie TV </span><br/>

                </div>

                <div className="card text-xl col-span-1 row-span-2  bg-gray-700 rounded-xl p-10 overflow-hidden overflow-ellipsis">
                <div className="text-3xl" >
                      <span role="img" aria-label="computer" >🌃</span>  Eccomi!
                    </div>
                    <p className="overflow-hidden overflow-ellipsis"> Hey! Sono Mattia Ferrari, questo è il mio Portfolio.
                  Ho 18 anni e vivo a Reggio Emilia, sono all'ultimo anno delle superiori e frequento l'indirizzo informatico
                    all'<Link href="https://pascal.edu.it"><span className="pointer text-red-500 hover:text-red-600">Istituto tecnico Blaise Pascal</span></Link>. <br />
                    <span>
                    Piani per il futuro? Fare l'università e trovare un lavoro nel mio campo di interesse. <br />
                    In questo Portfolio sono raccolte tutte le mie esperienze
                    di alternanza fatte con la scuola con l'aggiunta di qualche progetto che ho sviluppato per conto mio. <br />
                    Sono curioso, ho molta voglia di imparare e sono pronto ad affrontare le sfide che mi attendono.
                    </span>
                </p>

                </div>

              <div className="card col-span-1 row-span-1 bg-gray-700 rounded-xl  md:row-span-2">
                    <img className="object-cover object-center rounded-xl h-full w-full" src="images/faccia.png" />
                </div>

              <Link href="/"><div className="pointer card text-3xl col-span-1 row-span-1 bg-gray-700 p-10 rounded-xl">
                    
                <span role="img" aria-label="workinprogress">🚧</span>   Vai ai Progetti <span role="img" aria-label="workinprogress">➡</span>
                    <div className="block text-lg">
                      <p>In questa sezione troverai le informazioni riguardanti i progetti che ho fatto.</p>
                    </div>
                </div></Link>



              <div className="card text-3xl col-span-1 row-span-1 bg-gray-700 p-10 rounded-xl">
                    <div>
                      <span role="img" aria-label="computer">💻</span>  Software developer
                    </div>
                    <div className="block text-lg">
                      <p>Grazie alla scuola ho imparato a creare software nativi per dispositivi desktop, utilizzando per esempio C++ o Java. <br/>
                        Personalmente invece ho imparato ad utilizzare Python e Flutter.
                      </p>
                    </div>
                </div>
                
              <div className="card  text-3xl col-span-1 row-span-1 bg-gray-700 p-10 rounded-xl">
                    <div className="inline-block ">
                      <span role="img" aria-label="computer">💂‍♂️</span>Proper english user
                    </div>
                    
                    <div className="block text-lg">
                      <p>
                        For a programmer is essential to know just the basics of English. <br />
                        So I'm currently attending the B2 Cambridge certification.
                      </p>
                    </div>
                </div>
              <div className="card text-3xl col-span-1 row-span-1 bg-gray-700 p-10 rounded-xl ">
                    
                    <div className="inline-block">
                      🛬 Web developer
                    </div>
                    <div className="block text-lg">
                      <p>
                        Grazie alla scuola ho imparato ad utilizzare lo stack LAMP per la creazione di applicazioni web ma sfortunatamente non mi piace molto. <br />
                        Personalmente ho imparato ad utilizzare lo stack MERN e ci hanno anche insegnato ad utilizzare Python per la creazione di web app.
                      </p>
                    </div>
                </div>
                
                
            </main>
          </article>
        </section>
        <section className="text-gray-300 md:flex px-2 md:px-10 lg:px-20 xl:px-30 flex-grow">
          <article id="skills" className="w-full">
            <header className="text-gray-300 md:col-span-2  text-3xl w-full border-b-2 border-gray-300 mb-4">
              <h2><span role="img" aria-label="coffee">🚊</span> Cosa so fare</h2>
              <time dateTime="2021-03-18" ></time>
            </header>
            <main>
                <div className="no-select card text-3xl w-full bg-gray-700 p-10 rounded-xl ">
                  <Section title="Programmazione e Markup" skills={skills.languages} />
                </div>

                <div className="no-select card text-3xl w-full bg-gray-700 p-10 rounded-xl mt-3">
                  <Section title="Librerie Frameworks" skills={skills.frameworks}  />
                </div>

                <div className="no-select card text-3xl w-full bg-gray-700 p-10 rounded-xl mt-3">
                <Section title="Strumenti e Servizi" skills={skills.tools} />
                </div>
            </main>
          </article>
        </section>
        </main>
        <Footer />
      </div>
    );
}
