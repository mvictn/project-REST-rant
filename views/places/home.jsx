const React = require('react')
const Def = require('../default')

function home(){
    return(
      <Def>
        <main>
          <h1>HOME</h1>
          <div>
              <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" width ="50%"/>
            <div>
              Photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/food-free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
          <a href="/places">
            <button className="btn btn-primary">Places Page</button>
          </a>
        </main>
      </Def>
    )
}

module.exports = home