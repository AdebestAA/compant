import { useState } from "react"


const ImageSlider = ({images}) => {
//   let [width,setWidth] = useState(0)
let width = 0
    return (
    <article>

<button> L </button>
      {images.map(img => {
const {url,name,id} = img
width += 220

        return (
            <section className="each-image" key={id} >
            <img src={url} alt={name} />
            <p>{name}</p>
            </section>
        
        )
      })
      }
<button onClick={()=>{
}}> R </button>
    </article>
  )
}

export default ImageSlider
