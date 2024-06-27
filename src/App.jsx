import './App.css'
import StaticSiteWrapper from './examples/StaticSiteWrapper'
import InputBioGlyphWidget from './examples/InputBioGlyphWidget'
import SvgOutput from './examples/SvgOutput'

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
      <div>
        
      </div>

      <div className='container'>
          <h3>bioglyph embed:</h3>
      </div>
      <div className='static-container'>
        <InputBioGlyphWidget src="https://edit.bioglyph.app/"/>
      </div>
      <div className='container'>
          <h3>bioglyph no file button:</h3>
          <p>deploy a version with a deleted file button</p>
      </div>
      <div className='container'>
          <h3>bioglyph markup output onChange:</h3>
          <p>send a message for a markup string and set up an eventListener for the  markup message</p>
      </div>
      <div className='container'>
          <h3>bioglyph svg output onChange:</h3>
          <p>send a message for a svg toDataURL and set up an eventListener for the toDataURL message</p>
      </div>
      <div className='static-container'>
        <SvgOutput src="https://edit.bioglyph.app/"/>
      </div>

    </>
  )
}

export default App
