import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './style.css'
import mainImg from '../../assests/images/mainImg.png'
import HomeCard from '../../components/homePageCard/HomeCard'
import card1img from '../../assests/images/card1img.png'
import card2img from '../../assests/images/card2img.png'
import card3img from '../../assests/images/card3img.png'
import card4img from '../../assests/images/card4img.png'
import card5img from '../../assests/images/card5img.png'
import card6img from '../../assests/images/card6img.png'
import woman from '../../assests/images/woman.jpg'
import woman2 from '../../assests/images/woman2.jpg'
import rightArrow from '../../assests/images/rightArrow.png'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import FaqsCard from '../../components/faqs/FaqsCard'




function Home() {
 

  return (
         <> 
         <Navbar  />
        <div className='container'>
            <div className="topSection">
              <div className="leftSide">
                  <div className='leftSideContainer'>
                    <div className='topperTex'>
                        <div className="headerText"> Discover Your Signature Style:<br/> Find Your Perfect Salon <br/>Experience for Ultimate <br/>Beauty and Wellness.</div>
                        <div className='subText'>
                        Welcome to our chic online haven where beauty meets sophistication! Explore our salon web page for an 
                        exclusive journey into the world of premier beauty and wellness. From expert stylists to rejuvenating 
                        spa treatments, discover a personalized sanctuary tailored just for you. Uncover the latest trends, book 
                        your next appointment, and embark on a transformative experience that transcends ordinary beauty. Elevate 
                        your style, elevate your self – because you deserve nothing but the best. Your journey to radiance begins here!
                        </div>
                        < div><Button className='getStartedBtn ml-0'>
                            <div>Get Started</div> </Button>
                         </div>

                    </div>
                  </div>


                </div>

                
                <div className='rightSide'>
                    <div className='imgCantainer h-full m-0'><img src={mainImg} className='mainImg h-full w-full'/></div>
                </div>

            
          </div>


          <div className='section1'id='service'>

          <div className='secHederText  ' >Our Services</div>
          <div className='sec1Container '>
          <Link to="/hairservice" className="service-link">
              <HomeCard cardImag={card1img} cardText1={'Hair Services'} cardText2={'524'}/>
            </Link>
            <HomeCard cardImag={card2img} cardText1={'Nail Services'} cardText2={'254'}/>
            <HomeCard cardImag={card3img} cardText1={'Facials'} cardText2={'155'}/>
            <HomeCard cardImag={card4img} cardText1={'Waxing'} cardText2={'258'}/>
            <HomeCard cardImag={card5img} cardText1={'Body Massage'} cardText2={'239'}/>
            <HomeCard cardImag={card6img} cardText1={'Pre-bridal grooming'} cardText2={'354'}/>
             
            </div>
          </div>
          <div className='secHederText'>Articles</div>
          <div className='section2'>

          <div className='article'>
            <div className='articleContainer1'>

              <div>
                <div className='title1'>Trendsetting Tresses: Exploring Fresh Hair Styles for the Modern You</div>
                <div className='description1'>
                  Embark on a journey of self-expression and creativity as we delve into the captivating world of 
                  hairstyling in our latest article, "Trendsetting Tresses." Uncover the secrets behind the hottest 
                  new hair styles that are making waves in the fashion scene, offering a perfect blend of sophistication 
                  and bold individuality.
                </div>
              </div>

              <img src={woman} alt='woman'/>

            </div>

            <div>
              <div className='description2'>
                  From the timeless charm of the classic bob to the avant-garde allure of asymmetrical cuts, 
                our exploration goes beyond the ordinary to showcase diverse options for every personality and 
                style preference. Discover the transformative power of vibrant colors, intricate braids, and 
                textured layers, allowing you to express your unique identity through the canvas of your hair.  
              </div>

              <div className='description2'>
                  In this article, we not only celebrate the aesthetics of new hair trends but also provide practical 
                insights on how to achieve and maintain these styles. From tips on selecting the right color palette 
                for your skin tone to advice on the best products for maintaining healthy locks, "Trendsetting Tresses" 
                is your comprehensive guide to navigating the ever-evolving landscape of modern hair fashion.
              </div>
            
            
            </div>
          </div>

          <div className='articleCard'> 

            <img src={woman2} alt='woman2' className='articleImg'/>
            <div className='title2'>
              Trendsetting Tresses: Exploring Fresh Hair Styles for the Modern You
            </div>

            <div className='reading'>
              <div>Keep reading</div>
              
              <img src={rightArrow} alt='arrow' className='arrow'/>
              
            </div>
              
          </div>
        </div>
        <div className='secHederText'  id="faqs">FAQs</div>
        <div className='section3'>

        <div className='sec3Container'>
            <div className='sec3Top'>

              <div className='sec3Top1'>
              <FaqsCard
              title="What Payment Methods Do You Accept?"
              description3="We strive to make your experience seamless and convenient. We accept various payment methods to accommodate your preferences. For in-person transactions at our salon, we gladly accept cash, major credit cards, and debit cards. Additionally, to enhance your convenience, we offer online payment options. You can securely settle your payments through our user-friendly online portal, providing you with a hassle-free way to complete transactions from the comfort of your home. We prioritize the security of your financial information, and our online payment system is designed to ensure your privacy and peace of mind. If you have any specific questions about payment methods or need assistance, feel free to reach out to our friendly team. We look forward to providing you with exceptional service and a convenient payment experience."
            />
                 
               </div>

              <div className='sec3Top1'>
              <FaqsCard
              title="What Payment Methods Do You Accept?"
              description3="We strive to make your experience seamless and convenient. We accept various payment methods to accommodate your preferences. For in-person transactions at our salon, we gladly accept cash, major credit cards, and debit cards. Additionally, to enhance your convenience, we offer online payment options. You can securely settle your payments through our user-friendly online portal, providing you with a hassle-free way to complete transactions from the comfort of your home. We prioritize the security of your financial information, and our online payment system is designed to ensure your privacy and peace of mind. If you have any specific questions about payment methods or need assistance, feel free to reach out to our friendly team. We look forward to providing you with exceptional service and a convenient payment experience."
            />
              </div>

              </div>

              <div className='sec3Top'>

              <div className='sec3Top1'>
              <FaqsCard
              title="What Payment Methods Do You Accept?"
              description3="We strive to make your experience seamless and convenient. We accept various payment methods to accommodate your preferences. For in-person transactions at our salon, we gladly accept cash, major credit cards, and debit cards. Additionally, to enhance your convenience, we offer online payment options. You can securely settle your payments through our user-friendly online portal, providing you with a hassle-free way to complete transactions from the comfort of your home. We prioritize the security of your financial information, and our online payment system is designed to ensure your privacy and peace of mind. If you have any specific questions about payment methods or need assistance, feel free to reach out to our friendly team. We look forward to providing you with exceptional service and a convenient payment experience."
            />
                </div>

                <div className='sec3Top1'>
                <FaqsCard
              title="What Payment Methods Do You Accept?"
              description3="We strive to make your experience seamless and convenient. We accept various payment methods to accommodate your preferences. For in-person transactions at our salon, we gladly accept cash, major credit cards, and debit cards. Additionally, to enhance your convenience, we offer online payment options. You can securely settle your payments through our user-friendly online portal, providing you with a hassle-free way to complete transactions from the comfort of your home. We prioritize the security of your financial information, and our online payment system is designed to ensure your privacy and peace of mind. If you have any specific questions about payment methods or need assistance, feel free to reach out to our friendly team. We look forward to providing you with exceptional service and a convenient payment experience."
            />
                </div>

                <div className='sec3Top1'>
                <FaqsCard
              title="What Payment Methods Do You Accept?"
              description3="We strive to make your experience seamless and convenient. We accept various payment methods to accommodate your preferences. For in-person transactions at our salon, we gladly accept cash, major credit cards, and debit cards. Additionally, to enhance your convenience, we offer online payment options. You can securely settle your payments through our user-friendly online portal, providing you with a hassle-free way to complete transactions from the comfort of your home. We prioritize the security of your financial information, and our online payment system is designed to ensure your privacy and peace of mind. If you have any specific questions about payment methods or need assistance, feel free to reach out to our friendly team. We look forward to providing you with exceptional service and a convenient payment experience."
            />
                </div>

              </div>
      </div>

      </div>



                
        <div className='formSection'> 
            <div className='formContainer'>
              <div className='formTitle'>Send us a message</div>
              
              <div className='formPart1'>
                <div>
                  <div className='formLabel'>First Name</div>
                  <input className='inputBox'/>
                </div>

                <div>
                  <div className='formLabel'>Last Name</div>
                  <input className='inputBox'/>
                </div>
                
              </div>

              <div className='formPart2'>
                  <div className='formLabel'>Email Address</div>
                  <input className='inputBox2 mt-2 mb-2'/>
              </div>

              <div className='formPart2'>
                  <div className='formLabel'>Message</div>
                  <textarea className='inputBox3 mt-2'/>
              </div>

              <div className='formPart3'>
                <div className='sendBtn'>
                  <div>
                    Send
                  </div>
                </div>
              </div>
            </div>
        </div>





      <Footer />










          
        </div>
             
      
  </>
  )
}

export default Home;
