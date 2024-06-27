import { useState } from 'react';

export default function InputBioGlyphWidget({ src, width = '100%', height = '700px' }){

    return(
        <div>
            <h3>Enter markup string:</h3>
            <input placeholder="VH.a(14:4)_CH1.a(1:11)|VL.a(4:14)_CL.a(11:1)_H(9:3){2}_CH2.a(12:7)_CH3.a(13:6)|VL.a(10:5)_CL.a(2:8)_H(3:9){2}_CH2.a(7:12)_CH3.a(6:13)|VH.a(5:10)_CH1.a(8:2)"/>
            <button>Submit</button>
        </div>
    );
}