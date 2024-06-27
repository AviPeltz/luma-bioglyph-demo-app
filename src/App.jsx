import './App.css'
import StaticSiteWrapper from './StaticSiteWrapper'

function App() {

  return (
    <>
      <div className="container">
        <h1>Luma And Bioglyph Demo</h1>
      </div>
      
      <div className="static-container">
        <StaticSiteWrapper src="https://staticbioglyph.netlify.app/" />
      </div>
    </>
  )
}

export default App
