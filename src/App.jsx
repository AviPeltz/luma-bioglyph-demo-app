import './App.css'
import StaticSiteWrapper from './StaticSiteWrapper'
import InputBioGlyphWidget from './InputBioGlyphWidget'

function App() {

  return (
    <>
      <div className="container">
        <h1>Luma And Bioglyph Demo</h1>
      </div>
      <div className='container'>
          <h3>bioglyph full page:</h3>
      </div>
      <div className="static-container">
        <StaticSiteWrapper src="https://edit.bioglyph.app/" />
      </div>
      <div className='container'>
          <h3>bioglyph embed:</h3>
      </div>
      <div className='static-container'>
        <InputBioGlyphWidget src="https://edit.bioglyph.app/"/>
      </div>
      
    </>
  )
}

export default App
