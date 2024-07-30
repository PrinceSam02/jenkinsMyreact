import React from 'react'
import "./App.css"


function Home() {
  return (
    <div>
      

      {/* <img src='https://www.rudhigat.com/pub/media/magefan_blog/about-image.jpg'></img> */}
      <h1 class="h1">Craftastic Handicrafts</h1>
      <div class="text-block card">
        <h4 style={{ fontSize: "20px", textDecoration: "none" }}>This is an online Handicraft stores </h4>
        <p style={{ fontSize: "20px", textDecoration: "none", color: "gray" }}>View our Handicraft products here</p>
        <button><a class="but" href="/viewproduct" >GET STARTED</a>
        </button>
      </div>

    </div>

  )
}

export default Home
