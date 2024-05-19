import './global.css'
import Nav from './components/nav'
import Hero from './components/hero'
import Services from './components/services'
import CardLeft from './components/card-left'
import CardRight from './components/card-right'
import cardleftimg from './assets/cardLeft.png'
import cardrightimg from './assets/Card-right1.png'
import SwiperComponent from './components/swiper'
import Articles from './components/article'
import Footer from './components/footer'


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
                  <CardRight 
                  image={cardrightimg}
                  cardHeader='Download our mobile apps'
                  cardDescription='Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'
                  />
                    <SwiperComponent />
                      <Articles />
        </div>

        <Footer />
      </main>
    </>
  )
}

export default App
