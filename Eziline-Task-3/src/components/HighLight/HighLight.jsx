import React from 'react'
import "./HighLight.css"
import Bulb from "../../assets/bulb.png"
import Wallet from "../../assets/wallet.png"
import Phone from "../../assets/phone.png"
const HighLight = () => {
  return (
    <div className='HighLight'>
      <div className='section1'>
        <img src={Phone} alt="" />
        <h1>Mobile Optimization</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <button><a href="#">Learn More</a></button>
      </div>
      <div className='section2'>
        <img src={Wallet} alt="" />
        <h1>Mobile Optimization</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <button><a href="#">Learn More</a></button>
      </div>
      <div className='section3'>
        <img src={Bulb} alt="" />
        <h1>Mobile Optimization</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <button><a href="#">Learn More</a></button>
      </div>
    </div>
  )
}

export default HighLight
