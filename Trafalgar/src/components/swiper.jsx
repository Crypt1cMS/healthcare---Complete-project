import '../global.css'
import './swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Sliderimg1 from '../assets/Slider1.png'
import Sliderimg2 from '../assets/Slider2.webp'
import Sliderimg3 from '../assets/Slider3.webp'
import Sliderimg4 from '../assets/slider4.webp'
import Dotlines from '../assets/dot-line.png'

function SwiperComponent() {
    
    return (
        <>
            <section className='swiper-main-container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >

                    <SwiperSlide >
                        <div className="swiper-container">
                            <h2>What our customers are saying</h2>
                            <hr />

                            <div className="swiper-content">

                                <div className="swiper-profile">
                                    <img src={Sliderimg1} alt="Profile picture" />
                                    
                                    <div className="profile-text">
                                        <h3>Edward Newgate</h3>
                                        <p>Founder Circle</p>
                                    </div>

                                </div>

                                <div className="swiper-statement">
                                    <p>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.”</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-container">
                            <h2>What our customers are saying</h2>
                            <hr />

                            <div className="swiper-content">

                                <div className="swiper-profile">
                                    <img src={Sliderimg2} alt="Profile picture" />
                                    
                                    <div className="profile-text">
                                        <h3>Alexander Bennett</h3>
                                        <p>Project Manager</p>
                                    </div>

                                </div>

                                <div className="swiper-statement">
                                    <p>“I couldnt be more satisfied with the care I received at Trafalgar. From the moment I walked in, the staff was incredibly attentive and professional. Dr. Johnson took the time to explain my treatment.”</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-container">
                            <h2>What our customers are saying</h2>
                            <hr />

                            <div className="swiper-content">

                                <div className="swiper-profile">
                                    <img src={Sliderimg3} alt="Profile picture" />
                                    
                                    <div className="profile-text">
                                        <h3>James Turner</h3>
                                        <p>Customer Relationship Manager</p>
                                    </div>

                                </div>

                                <div className="swiper-statement">
                                    <p>“Trafalgar exceeded my expectations in every way. The facility is clean and modern, and the entire team is dedicated to patient comfort and care. Everyone is approachable!”</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-container">
                            <h2>What our customers are saying</h2>
                            <hr />

                            <div className="swiper-content">

                                <div className="swiper-profile">
                                    <img src={Sliderimg4} alt="Profile picture" />
                                    
                                    <div className="profile-text">
                                        <h3>Emily Parker</h3>
                                        <p>Product Development Manager</p>
                                    </div>

                                </div>

                                <div className="swiper-statement">
                                    <p>“Having been a patient at Trafalgar for several years, I can confidently say they offer top-notch healthcare services. Dr. Bennetts expertise and approachable.”</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <img id='dots1' src={Dotlines} alt="" />
                <img id='dots2' src={Dotlines} alt="" />
            </section>
        </>
    )
}

export default SwiperComponent