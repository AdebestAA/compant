import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import React from 'react'

const Body = ({jobs,value,setValue}) => {
    const {company,duties,dates,id,title,order} = jobs[value]

  return (
    <div className="each-company-div">
 
        <section key={id} className="each-company">
        <article className='btn-container'>
        {jobs.map((item,index)=>{
            return (
        <button onClick={()=> setValue(index)} key={item.id} className='btn'>
            {item.company}
        </button>
    )
})}
        </article>
        <article className='userInfo'>
<h4>{title}</h4>
<span>{company}</span>
<p>{dates}</p>
<div>
    {duties.map((duty,index)=>{

    return (
        <div key={index} className="duty-div">
<FaAnglesRight/>
<p>{duty}</p>
        </div>
    )
})}
</div>
        </article>
        </section>

    </div>
  )
}

export default Body
