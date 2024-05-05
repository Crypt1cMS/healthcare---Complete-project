import './global.css'
import Nav from './components/nav'
import Hero from './components/hero'
import Services from './components/services'

function App() {

  return (
    <>
      <main>
        <div className="wrapper-main">

          <Nav />
          <Hero />
          <Services />

        </div>
      </main>
    </>
  )
}

export default App
