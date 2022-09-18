const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key = "1" className="col-sm-6">
          <h2>
            <a href={`/places/${index}`} >
            {place.name}
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} className="center" width="100%"/>
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
module.exports = index

//Photo by <a href="https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Tomasso</a> on <a href="https://unsplash.com/s/photos/restaurants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//  
//Photo by <a href="https://unsplash.com/@jack_prew?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jack Prew</a> on <a href="https://unsplash.com/s/photos/restaurants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//  plants
