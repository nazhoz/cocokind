import React from 'react'

const RequestBox = () => {
  return (
    <div className='mainreq-box'>
        <div className='req-box'>
        <div className='request-box'>
            <h4 className='req-text'>How’s your skin feeling today?</h4>
            <div className='req-radio-btn'>
            <input type="radio" name="non" id="" />
            <label htmlFor="">Balanced</label>
            <input type="radio" name="non" id="" />
            <label htmlFor="">Dry</label>
            <input type="radio" name="non" id="" />
            <label htmlFor="">Oily</label>
            <input type="radio" name="non" id="" />
            <label htmlFor="">Sensitive</label>
            </div>  
        </div>
        
        <div className='req-input'>
            <input className='input-field' type="text" placeholder="  Save 15% when you sign up for emails..." />
            <input className='input-btn' type="button" value="SUBMIT" />
        </div>

        <div className='req-help'>
            <div className='request-help'>
                <h2>help</h2>
                <span className='reqe'>shipping + deliveries faqs</span>
                <span className='reqe'>faq</span>
                <span className='reqe'>store locator</span>
            </div>
            <div className='request-help'>
                <h2>about</h2>
                <span className='reqe'>blog</span>
                <span className='reqe'>impact foundation</span>
                <span className='reqe'>traparency</span>
            </div>
            <div className='request-help'> 
                <h2>information</h2>
                <span className='reqe'>contact</span>
                <span className='reqe'>terms and condition</span>
                <span className='reqe'>privacy policy</span>
            </div>
        </div>

        <div className='req-media'>
            <img className='req-insta' src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/instagram-icon.svg" alt="" />
            <img className='req-insta'  src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/tiktok-icon.svg" alt="" />
            <img className='req-insta' src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/facebook-square-icon.svg" alt="" />
            <img className='req-insta' src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/youtube-icon.svg" alt="" />

        </div>
        <div className='req-end'>
        <h1 className='req-text1'>COCOKIND</h1>
        <span className='req-text2'>© 2023, cocokind  |  all pictures property of cocokind</span>
        </div>

        </div> 
    </div>
  )
}

export default RequestBox