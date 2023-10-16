import React, { useState } from 'react'
import Photosarray from '../Component/Photosarray'
import Mapimg from './Mapimg'



const updateditems = [... new Set(Photosarray.map((el) => el.categories)), 'all'];

const Images = () => {

    const [Menu, setMenu] = useState(Photosarray);
    const [catItems, setcatItems] = useState(updateditems);

    const filteritems = (elem) => {

        if (elem === 'all') {
            return setMenu(Photosarray);
             
        }

        const update = Photosarray.filter((ele) => {
            return ele.categories === elem


        })
        setMenu(update)
    }

    return (
        <section>
            <div className='mt-5 text-center'>
                <h1 className='my-3 '>Welcome To Our Menu
                    <img src='./img/veg.png' height={30} className='img_div' alt="/" />
                </h1>
                <div className=' my-5 d-flex gap-5 justify-content-center' >

                    {
                        catItems.map((el , idx) => {
                            return <button key={idx} className='btn btn-outline-success' onClick={() => filteritems(el)}>{el}</button>
                            
                        })
                    }

                </div>
            </div>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gap-3  d-flex justify-content-center '>
                            {
                                Menu.map((el) => {
                                    return <Mapimg key={el.id} img={el.img} title={el.title} dis={el.dis} price={el.price} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Images
