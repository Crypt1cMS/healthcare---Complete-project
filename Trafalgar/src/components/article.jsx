import './article.css'
import '../global.css'
import Article1 from '../assets/article1.png'
import Article2 from '../assets/article2.png'
import Article3 from '../assets/article3.png'
import bgIlustration from '../assets/bg-ilustration 3.png'
import dotlines from '../assets/dot-line.png'

function Articles() {

    return (
        <>
            <section className='articles-main-container'>

                <div className="article-header">
                    <h2>Check out our latest article</h2>
                    <hr />
                </div>

                <img id='bg-ilustration-3' src={bgIlustration} alt="" />
                <img id='dotlines' src={dotlines} alt="" />

                <div className="article-wrapper">

                    <article className='article-container'>

                        <img src={Article1} alt="Article cover image" draggable="false"/>

                            <div className="article-text">
                                <h4>Disease detection, check up in the laboratory</h4>
                                <p>In this case, the role of the health laboratory is very important to do a disease detection...</p>
                                    <span>
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                    </span>
                            </div>

                    </article>

                    <article className='article-container'>

                        <img src={Article2} alt="Article cover image" draggable="false"/>

                            <div className="article-text">
                                <h4>Herbal medicines that are safe for consumption</h4>
                                <p>Herbal medicine is very widely used at this time because of its very good for your health...</p>
                                    <span>
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                    </span>
                            </div>

                    </article>

                    <article className='article-container'>

                        <img src={Article3} alt="Article cover image" draggable="false"/>
                    
                            <div className="article-text">
                                <h4>Natural care for healthy facial skin</h4>
                                <p>A healthy lifestyle should start from now and also for your skin health. There are some...</p>
                                    <span>
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                    </span>
                            </div>

                    </article>

                </div>

            </section>
        </>
    )
}

export default Articles