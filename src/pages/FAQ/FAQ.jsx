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
   </div>
   
   </>
  )
}

export default FAQ
