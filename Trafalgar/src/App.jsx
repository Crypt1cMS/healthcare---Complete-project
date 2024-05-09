import './global.css'
import Nav from './components/nav'
import Hero from './components/hero'
import Services from './components/services'
import CardLeft from './components/card-left'
import cardleftimg from './assets/cardLeft.png'

function App() {

  return (
    <>
      <main>
        <div className="wrapper-main">

          <Nav />
            <Hero />
              <Services />

                <CardLeft
                image={cardleftimg} 
                cardHeader='Leading healthcare providers'
                cardDescription='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, its not just work. We take pride in the solutions we deliver.'
                />

        </div>
      </main>
    </>
  )
}

export default App
