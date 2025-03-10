import './App.css'
import StaticSiteWrapper from './examples/StaticSiteWrapper'
import InputBioGlyphWidget from './examples/InputBioGlyphWidget'
import SvgOutput from './examples/SvgOutput'
import NoFileDropdown from './examples/NoFileDropdown'


function App() {

  return (
    <>
      <div className='container'>
        <h1>Luma And Bioglyph Demo</h1>
      </div>

      {/* Bioglyph Widget Section*/}
      <div className='container'>
        <h3>bioglyph full page:</h3>
      </div>
      <div className='static-container'>
        <StaticSiteWrapper src="https://edit.bioglyph.app/" />
      </div>


      {/* Bioglyph markup input section*/}
      <div className='container'>
        <h3>bioglyph markup input:</h3>
        <div className='static-container'>
          <InputBioGlyphWidget src="https://edit.bioglyph.app/"/>
        </div>
      </div>

      {/* Bioglyph no file button section*/}
      <div className='container'>
          <h3>bioglyph no file button:</h3>
          <p>deploy a version with a deleted file button</p>
          <div className='static-container' style={{width: '90%'}}>
            <NoFileDropdown/>
          </div>
      </div>

      {/* Bioglyph markup output section*/}
      <div className='container'>
          <h3>bioglyph markup output onChange:</h3>
          <p>send a message for a markup string and set up an eventListener for the  markup message</p>
      </div>

      {/* Bioglyph svg output section*/}
      <div className='container'>
          <h3>bioglyph svg output onChange: - still working on this</h3>
          <p>send a message for a svg toDataURL and set up an eventListener for the toDataURL message</p>
      </div>
      <div className='static-container'>
        <SvgOutput src="https://edit.bioglyph.app/"/>
      </div>
    </>
  )
}

export default App
