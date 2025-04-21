import React from 'react'
import './Home.css'
import landingImg from '../../assets/landingImg.jpeg'
import aboutImg from '../../assets/about-img.webp'
import missionImg from '../../assets/mission-img.jpg'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
  const navigate = useNavigate()

  const handleDonorResgister = () => {
    const token = sessionStorage.getItem("token")
    console.log("h", token);
    if (token) {
      navigate('/donor/register')
    } else {
      navigate('/')
    }
  }
  const handleSeekerResgister = () => {
    const token = sessionStorage.getItem("token")
    console.log("h", token);
    if (token) {
      navigate('/seeker/register')
    } else {
      navigate('/')
    }
  }
  return (
    <div className='home-main'>
      <Navbar />
      <div className='home'>
        <div className="landing">
          <div className="landing-img">
            <img src={landingImg} alt="" />
          </div>
          <div className="content">
            <p className='para1'>Let's Donate</p>
            <h1 >Your Blood Donation <br /> Matters. Give Today!</h1>
            <p className='para2'>All types of blood are needed to help patients.</p>
            <div className='home-btns'>
              <button onClick={handleDonorResgister} className='home-btn'>Become a Donor</button>
              <button onClick={handleSeekerResgister} className='home-btn'>Become a Seeker</button>
            </div>
          </div>
        </div>
      </div>
      <div className="about" id='about'>
        <div className="about-grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-content">
            <h2>Who We Are</h2>
            <h3>Give the Gift of Life</h3>
            <p> we strive to bridge the gap between blood donors and those in urgent need. Every donation has the power to save lives, offering hope to patients battling medical emergencies, surgeries, and chronic illnesses. By fostering a compassionate community, we aim to ensure that no life is lost due to a lack of blood. Join us in this mission and make a difference—one drop at a time.</p>
          </div>
        </div>
      </div>
      <div className="help">
        <div className='inside-help'>
          <h2>Ways to Help</h2>
          <div className="help-grid">
            <div>
              <p>Donate Blood Yourself</p>
              <p>Organize or Volunteer at a Blood Donation Camp</p>
              <p>Spread Awareness</p>
            </div>
            <div>
              <p>Join or Create a Blood Donor Network</p>
              <p>Assist Patients in Finding Blood</p>
              <p>Encourage Corporate or College Donations</p>
            </div>

          </div>
        </div>
      </div>
      <div className="mission">
        <div className='box1'>
          <h2>Give Blood, Save Lives</h2>
          <p>Your mission is to contribute to the life-saving cause of blood donation by spreading awareness, encouraging participation, and ensuring a steady supply of blood for those in need. Blood is a vital resource that cannot be manufactured, and countless lives depend on the generosity of donors.
            By donating blood, you help patients undergoing surgeries, accident victims, individuals with blood disorders, and those in critical medical conditions. Every donation can save up to three lives, making a direct impact on your community.
            This mission is not just about donating—it’s about inspiring others, educating people on its importance, and making the process easier and more accessible. Whether through personal donations, organizing blood drives, or building technology to connect donors with recipients, your contribution can create a lasting difference.
            Take action today—one donation, one life saved.</p>
        </div>
        <div className="mission-img">
          <img src={missionImg} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home