import React from 'react'

const SellCard = ({image, cardTitle}) => {
  return (
    <div className="col-lg-3 col-md-6 col-10">
      <div class="card shadow-sm pt-3 px-2 neutralBackground border-0 rounded-4">
        <div class="card-body">
          <p>
            <span className='bg-dark px-3 py-3 rounded-3 card-hover'>
              <img src={image} alt="card-image"  width={30} height={30}/>
            </span>
          </p>
          <span class="card-title fw-bold py-2">{cardTitle}</span>
          <p class="card-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
      </div>
    </div>
  )
}

export default SellCard
