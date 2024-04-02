
import './App.css'
import Header from './components/Header/header';
import programmer from './assets/Programmer.png';

function App() {

  return (
    <>
      <div className='section-main'>
          <Header></Header>
          <div className='main-banner'>
            <div>
              <div><h1 className='main-banner-tittle'>ImagineCloud</h1></div>
              <div>
                "Tu Tiempo Importa, Nuestro Tecnología
                Simplifica: ¡Vive más, Preocúpate menos!"
              </div>
              <div>
                <button>Contactanos</button>
                <button>Conocenos</button>
              </div>
            </div>
            <div>  <img src={programmer} alt="imagine Cloud" /></div>

          </div>


      </div>

    </>
  )
}

export default App
