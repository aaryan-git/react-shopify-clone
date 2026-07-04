import React, { useEffect, useState } from 'react'

export default function Fetch({addToCart}) {
    const [data,setData]=useState([])

    useEffect(()=>{
        const fetchData =async ()=>{
            const res = await fetch("https://dummyjson.com/products")
            const apiData =await res.json()
            setData(apiData.products)
        }
        fetchData()
    },[])
  return (
    <div>
      <div className="container">
        <div className="row">
            {
                data.map((v)=>{
                    return(
                        <>
         <div className="card" style={{width: '18rem'}}>
  <img src={v.images[0]} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{v.titel}</h5>
    <p className="card-text">{v.description}</p>
    <div className="d-flex justify-content-evenly">
        <button className="btn btn-primary">{v.price}</button>
  <button onClick={addToCart} className="btn btn-primary">Add To Cart</button> 
    </div>
  </div>
</div>

                        </>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}
