import React from 'react'



const Mapimg = (props) => {
    return (
        <div className="card mb-3 p-0 main_div" style={{ maxWidth: 384 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.img} className="img-fluid rounded-start" alt="name" />
                </div>
                <div className="col-md-8  text-center">
                    <div className="card-body">
                        <h5 className="card-title head_div">{props.title}  </h5>
                        <p className="card-text dis_div">{props.dis}</p>
                        
                            <span className="card-text price_div"><div className="text-body-secondary ">Price Is <strong className='text-danger'>{props.price}</strong> </div></span>
                            <button className='btn btn-success'>Order Now</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mapimg


