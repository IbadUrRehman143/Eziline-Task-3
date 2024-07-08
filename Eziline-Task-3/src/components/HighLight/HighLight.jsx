import React from 'react'
import "./HighLight.css"
import Bulb from "../../assets/bulb.png"
import Wallet from "../../assets/wallet.png"
import Phone from "../../assets/phone.png"
import { FaGreaterThan } from 'react-icons/fa'
const HighLight = () => {
  return (
    <section className="highlight-wrapper">
      <div className='highlight'>
        <div className='highlight-card'>
          <img src={Phone} alt="" />
          <h1>Mobile Optimization</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className='incor-tag'>
          <a href="#">Learn More</a><FaGreaterThan />
          </div>
        </div>
        <div className='highlight-card'>
          <img src={Wallet} alt="" />
          <h1>Increase Revenue</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className='incor-tag'>
          <a href="#">Learn More</a><FaGreaterThan />
          </div>
        </div>
        <div className='highlight-card'>
          <img src={Bulb} alt="" />
          <h1>Smart Idea</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <div className='incor-tag'>
          <a href="#">Learn More</a><FaGreaterThan />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighLight
