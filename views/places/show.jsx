const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div>
                <h1>Rating</h1>
                <p>currently unrated</p>
            </div>
            <div>
                <h1>Description</h1>
                <p>no Ddescriptions yet</p>
            </div>
          </main>
          <div>
            <h1>Comments</h1>
            <p>no comments yet</p>
          </div>
        </Def>
    )
}

module.exports = show
