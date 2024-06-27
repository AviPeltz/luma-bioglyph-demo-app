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
        <InputBioGlyphWidget src="https://edit.bioglyph.app/?markup=VH.a(9:12)_CH1.a(11:14)|VL.a(12:9)_CL.a(14:11)_H(2:5){2}_CH2.a(7:3)_CH3.a(13:1)|VL.a(8:10)_CL.a(6:4)_H(5:2){2}_CH2.a(3:7)_CH3.a(1:13)|VH.a(10:8)_CH1.a(4:6)"/>
      </div>
      
    </>
  )
}

export default App
