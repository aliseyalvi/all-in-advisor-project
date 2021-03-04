import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

import './App.css';
import logo from './assets/imgs/all-in-blue-LOGO.png'
import videoThumbnail from './assets/imgs/video-thumbnail.png'
import moneyBagIcon from './assets/icons/money-bag.svg'
import stopWatchIcon from './assets/icons/stopwatch.svg'
import sandClockIcon from './assets/icons/sand-clock.svg'
import safetyIcon from './assets/icons/safety.svg'
import galleryIcon from './assets/imgs/gallery.png'
import CEOImg from './assets/imgs/Frank-J-Luciano.png'
import fbIcon from './assets/icons/facebook.svg'
import linkedInIcon from './assets/icons/linkedin.svg'
import twitterIcon from './assets/icons/TWITTER.svg'
import instaIcon from './assets/icons/INSTAGRAM.svg'
import questionmarkImg from './assets/imgs/question-mark.png'

export const App = () => {


  //render first page form here in jsx
  const renderFirstForm = () => {

    return (
      <MDBRow className='py-5 mx-0 my-3'>
        <MDBCol className='px-0 pl-lg-5 pr-lg-3 py-1' lg='6' >
          <div className='take-a-sec-container text-center text-lg-right'>
            <h1 className='take-a-sec-heading'>
              Take a second to answer a few<br />questionsto find out if you are<br />currently overpaying.
              </h1>
            <p>
              <span className='span-1'>For taking the time we will also send you a free PDF-</span><br />
              <span className='span-2'>“10 proven strategies to lower your<br />Business Taxes”</span>
            </p>
          </div>
        </MDBCol>
        <MDBCol className='px-2 pr-lg-5 d-flex justify-content-center align-items-center ' lg='6'>
          <MDBCard className='card-wrapper my-3 my-lg-1'>
            <MDBCardBody className='p-0'>
              <form className='form-card'>
                <div className='card-header'>
                  <p className="h4 text-center py-4">
                    PLEASE SUBMIT YOUR INFROMATION
                    </p>
                </div>
                <div className='form-body p-4'>
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light"
                  >
                    NAME
                    </label>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    placeholder='ex: john dawe'
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardEmailEx"
                    className="grey-text font-weight-light"
                  >
                    EMAIL
                    </label>
                  <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder='enter@mail.com'
                  />
                  <br />
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light my-3"
                  >
                    Have you ever had a Tax Plan created specifically for your Small Business?
                  </label>
                  <select className="browser-default custom-select select-dropdown">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <br />
                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light my-3"
                  >
                    Have you recently had a Tax Entity Selection study preformed on your Small Business?
                  </label>
                  <select className="browser-default custom-select select-dropdown">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <br />

                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light my-3"
                  >
                    Does your accountant proactively engage with you to find ways to maximize savings?
                    (Tax prep & calculating estimates do not qualify here)
                  </label>
                  <select className="browser-default custom-select select-dropdown">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <br />

                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light my-3"
                  >
                    Have you had a tax strategy analysis performed on your business?
                    (There are tons of legal strategies to save taxes that many accountants are not aware of)
                  </label>
                  <select className="browser-default custom-select select-dropdown">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <br />

                  <label
                    htmlFor="defaultFormCardNameEx"
                    className="grey-text font-weight-light my-3"
                  >
                    Do you feel that your accountant has done everything legally possible to maximize your tax saving?
                  </label>
                  <select className="browser-default custom-select select-dropdown">
                    <option>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                  <br />
                  {/* on button clic load second form */}
                  <button className='submit-btn my-4'>
                    Submit Are you overpaying?
                    </button>
                </div>

              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )
  }





  return (
    <div className="App">
      <header className="App-header py-3">
        <img src={logo} className='logo' />
      </header>

      {/*  Hero Section Starts */}
      <MDBContainer fluid >
        <MDBRow>
          <MDBCol className='p-0'>
            <div className='hero-section'>
              <h1 className='hero-heading'>
                You are Most Likely<br />Overpaying Your Taxes!
            </h1>
              <p className='hero-subtitle'>
                If you think your cash is better off with the government than your small business, then this service is NOT for you.<br />
                If you are sick and tired of your hard-earned income flying out the door, you ABSOLUTELY came to the right place.

            </p>
              <button className='discover-btn'>
                Discover Now
            </button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/*  Video Container */}
      <MDBContainer fluid >
        <MDBRow>
          <MDBCol className='p-0' >
            {/* <img src={videoThumbnail} className='videoThumbnail' /> */}
            <video width="100%" height="auto" controls loop poster={videoThumbnail} src='https://www.w3schools.com/html/mov_bbb.mp4' >

            </video>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* How it works container */}
      <MDBContainer fluid className='px-0 mx-0'>
        {/* How it works row */}
        <MDBRow className='px-0 mx-0 '>
          <MDBCol className='p-0' size='12'>
            <div className='how-it-work-container-bg'>
              <div className='how-it-work-container px-2 px-sm-2 px-md-4'>
                <button className='how-it-work-btn'>
                  How it work
                </button>
                <h1 className='how-it-work-heading my-3'>
                  How does Tax Planning with All-In Advisors<br />benefit your Small Business
                </h1>
              </div>
            </div>


          </MDBCol>
          <MDBCol className='p-0' size='12' style={{ marginTop: -50, }}>
            <MDBRow className='m-0 p-0 px-lg-3'>
              <MDBCol className='py-3 px-lg-2 px-xl-3 d-flex align-items-center justify-content-center' sm='6' md='6' lg='3'>
                <div className='services-card p-3 my-3' >
                  <h1 className='services-card-title mt-3'>
                    Creates Cash Flow
                  </h1>
                  <img src={moneyBagIcon} alt='Money Icon' className='services-card-img' />
                  <p className='services-card-details'>
                    Our service can instantly provide you with Cash Flow.  Cash flow is the life blood of any small business.
                  </p>
                </div>
              </MDBCol>
              <MDBCol className='py-3 px-lg-2 px-xl-3 d-flex align-items-center justify-content-center' sm='6' md='6' lg='3'>
                <div className='services-card p-3 my-3' >
                  <h1 className='services-card-title mt-3'>
                    Free Discovery Session
              </h1>
                  <img src={stopWatchIcon} alt='Stop Watch Icon' className='services-card-img' />
                  <p className='services-card-details'>
                    We provide a Free Discovery Session to estimate how much we think you can save.
                    It will only cost 30 minutes of your time to potentially change the course of your business forever.

              </p>
                </div>
              </MDBCol>
              <MDBCol className='py-3 px-lg-2 px-xl-3 d-flex align-items-center justify-content-center' sm='6' md='6' lg='3'>
                <div className='services-card p-3 my-3' >
                  <h1 className='services-card-title mt-3'>
                    Pays for Itself
                  </h1>
                  <img src={sandClockIcon} alt='Sand Clock Icon' className='services-card-img' />
                  <p className='services-card-details'>
                    The service more than PAYS FOR ITSELF! The tax plan savings will be multiples of your investment.
                  </p>
                </div>
              </MDBCol>
              <MDBCol className='py-3 px-lg-2 px-xl-3 d-flex align-items-center justify-content-center' sm='6' md='6' lg='3'>
                <div className='services-card p-3 my-3' >
                  <h1 className='services-card-title mt-3'>
                    money back Guarantee
              </h1>
                  <img src={safetyIcon} alt='Safety Icon' className='services-card-img' />
                  <p className='services-card-details'>
                    We offer a money back Satisfaction Guarantee We cannot guarantee your savings, but we guarantee that you will be satisfied with our work or your money back.

                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>

        </MDBRow>



      {/* Form Row Page 1 */}
        {
          renderFirstForm()
        }

      </MDBContainer>

      {/* Success story container */}
      <MDBContainer fluid className='success-story-container py-3' >
        <MDBRow>
          <MDBCol className='p-3 d-flex justify-content-center' sm='12' md='5' lg='4' xl='3'>
            <img src={galleryIcon} alt='gallery icon' className="img-fluid" />
          </MDBCol>

          <MDBCol className='p-3' sm='12' md='7' lg='8' xl='9'>
            <div>
              <h2 className='ceo-name-h2'>
                Mr. Dan S.
              </h2>
              <h1 className='ceo-name-h1'>
                Success Story
              </h1>

            </div>
            <p className='success-para text-justify'>
              Dan S. came to All-in Advisors over three year ago at the end of his rope with his small business.  He was doing very well
              but after paying taxes each year he felt his hard work was not paying off.  While engaging in our free discovery session we were
              able to bring to light the fact that Dan was not currently in a situation to maximize his tax savings.  Dan S. had fallen into the
              trap of seeing his accountant once or twice a year and assumed at tax time he was paying as little tax as possible.
              While explaining that taxes can only be truly minimized by proactively planning, we learned about Dan’s business and estimated
              we could save him roughly $40,000.<br />

              After completing the plan, All-In Advisors ended up saving Dan S. over $52,000 in taxes.  By taking a few minutes out of his day,
               Dan S. had a plan that easily paid for itself and provided him with increased cash flow for years to come.  Dan S. has since
               expanded to multiple locations and his and All-In Advisors’ relationship continues to grow.
            </p>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

      {/* CEO Container */}
      <MDBContainer fluid className='ceo-container py-3' >
        <MDBRow>
          <MDBCol className='p-1 p-md-3 d-flex justify-content-center' sm='12' md='6' lg='6'>
            <img src={CEOImg} alt='gallery icon' className="" style={{ width: '100%', maxWidth: '600px' }} />
          </MDBCol>

          <MDBCol className='p-3 d-flex justify-content-center align-items-center' sm='12' md='6' lg='6' >
            <div>
              <div className=''>
                <h1 className='ceo-name-h1'>
                  Frank J. Luciano<br />
                CPA, CTC, CFP
              </h1>
                <h2 className='ceo-name-h2'>
                  Founder of All-In Advisors
              </h2>
                <div style={{ width: '100px', backgroundColor: '#1C75BC', height: '2px' }} />
              </div>
              <p className='success-para text-justify py-4'>
                Frank started All-In Advisors because he hates seeing business owners pay taxes just as much as they hate paying them.
                He has spent over 14 years working with small businesses to maximize their tax savings and helping them use those savings to grow.
                His professional life is dedicated to constantly learning new ways to reduce taxes and to helping All-In Advisors change as many
                business owner’s lives as possible period.
            </p>
              <div>
                <a href='#' >
                  <img src={fbIcon} className='social-icon' />
                </a>
                <a href='#' className='mx-3'>
                  <img src={linkedInIcon} className='social-icon' />
                </a>
                <a href='#' >
                  <img src={twitterIcon} className='social-icon' />
                </a>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

      </MDBContainer>

      {/* Subscribe email container */}
      <MDBContainer fluid className='subscribe-container'>
        <MDBRow>
          <MDBCol className='d-flex flex-column justify-content-center align-items-center px-1 px-sm-3'>
            <h1 className='subscribe-h1 m-0'>
              Subscribe to our Newsletter<br />for Free Tips
              </h1>
            <div className='input-container my-5'>
              <input className='pl-2 pl-sm-4 pr-2' type='text' placeholder='enter@mail.com' />
              <button>
                Subscribe
              </button>
            </div>
            <div>
              <a href='#' className='mx-2' >
                <img src={fbIcon} className='social-icon' />
              </a>
              <a href='#' className='mx-2'>
                <img src={linkedInIcon} className='social-icon' />
              </a>
              <a href='#' className='mx-2' >
                <img src={twitterIcon} className='social-icon' />
              </a>
              <a href='#' className='mx-2' >
                <img src={instaIcon} className='social-icon' />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer fluid className='footer-container'>
        <MDBRow>
          <MDBCol className=''>
            <p className='copyright-para py-3'>
              © Copyright 2021 by all in advisors - all rights reserved
              </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


    </div>
  );
}

export default App;
