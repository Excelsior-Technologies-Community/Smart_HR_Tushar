import React from 'react'
import './faq.css'

const FAQ = () => {
  return (
   <>
   <div className='faqMain'>
    <div className='faqText text-center'>
        <p>FAQ</p>
        <h2>Frequently Asked Questions</h2>
      </div>
       <div className=" faqQuestions" id="accordionExample">
      
      {/* Item 1 */}
      <div className="accordion-item item1">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <span>01</span>What is Regular License?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>In simple terms, Regular License means your end product is distributed for free</p>
          </div>
        </div>
      </div>

      {/* Item 2 */}
      <div className="accordion-item item2">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
          <span>02</span> What is Extended License?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Extended License allows building a single end product that you can use or transfer to a client where end users of the product can be charged for. For example; A subscription or a fixed price SaaS application.</p>
          </div>
        </div>
      </div>

      {/* Item 3 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
           <span>03</span>What will you get?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>All HTML files, All React files, CSS Files, SCSS Files, JS Files, Documentation, Reliable Technical Support System, Lifetime Template Updates, Template Documentation</p>
          </div>
        </div>
      </div>

    </div>
    <div className='contact d-flex justify-content-evenly align-items-center'>
      <div className='contactText'>
        <h4>Looking For A Custom Design?</h4>
        <p>We are happy to customise your products based on your needs, send us a note!!!</p>
      </div>
      <div className='contactEmail'>
        <div className='mailOuter'>
          <input type="email" name="email" id="email" placeholder='Enter Your email here...' />
          <button>

          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#ff5b26" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
</svg>
          </button>
        </div>
      </div>

    </div>
   </div>
   
   </>
  )
}

export default FAQ
