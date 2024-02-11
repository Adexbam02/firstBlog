// import React from 'react'

// import { featureTop } from "../../data"

// eslint-disable-next-line react/prop-types
const Prop = ({title, small, img, featureTitle}) => {
  return (
    <div className="featureTop">
          <div className="featureTop-left">
            <img src={img} />

            <span>
              <h3>{title}</h3>
              <small>
                {small}
              </small>
            </span>
          </div>

          <div className="featureTop-right">
            
              {/*  eslint-disable-next-line react/prop-types */}
              {featureTitle.map(({ id, title, small }) => (
                <div key={id} className="">
                  <h4>{title}</h4>
                  <small>{small}</small>
                </div>
              ))}
          </div>
        </div>
  )
}

export default Prop