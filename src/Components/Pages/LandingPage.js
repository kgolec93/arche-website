import React from 'react'
import Logo from '../logo.js'

export const LandingPage = () => {
    return (
        <div className="tilesContainer">
          {/* MAP 1 */}
          <div className="tileItem">A</div>
          <div className="tileItem">B</div>
          <div className="tileItem">C</div>
          <div className="tileItem">D</div>
          <div className="tileItem">E</div>
          {/* END OF MAP 1  */}
          <div className="tileItem" id="logoContainer"><Logo /></div>
          {/* MAP 2 */}
          <div className="tileItem">G</div>
          <div className="tileItem">H</div>
          <div className="tileItem">I</div>
          <div className="tileItem">J</div>
          <div className="tileItem">K</div>
          {/* END OF MAP 2  */}

        </div>
    )
}
