import { useState } from 'react';
import "../App.css";

export default function InputBioGlyphWidget({ src, width = '100%', height = '700px' }){
    const [markup, setMarkup] = useState('');

    function handleMarkupChange(e){
        setMarkup(e.target.value);
    }
    return(
        <div>
            <h4>Example Markup strings to test:</h4>
            <ul>
                <li>{"VH.a(1:3)_CH1.a(4:2)|VL.a(3:1)_CL.a(2:4)"}</li>
                <li>{"VL.a(2:1)_CL.a(4:3)_VH.a(1:2)_CH1.a(3:4)"}</li>
                <li>{"VH.a(14:4)_CH1.a(1:11)|VL.a(4:14)_CL.a(11:1)_H(9:3){2}_CH2.a(12:7)_CH3.a(13:6)|VL.a(10:5)_CL.a(2:8)_H(3:9){2}_CH2.a(7:12)_CH3.a(6:13)|VH.a(5:10)_CH1.a(8:2)"}</li>
                <li>{"VL.a(9:6)_CL.a(16:7)|VL.a(4:5)_VH.a(5:4)_VH.a(6:9)_CH1.a(7:16)_H(14:3){2}_CH2.a(12:15)_CH3.a(1:11)|VH.b(13:10)_CH1.b(2:8)_H(3:14){2}_CH2.b(15:12)_CH3.b(11:1)_M.b|VL.a(10:13)_CL.a(8:2)"}</li>
            </ul>
            <h3>Enter markup string:</h3>
            <p>{'url: ' + src + '?markup=' + markup}</p>
            <input placeholder="Add markup string from above"
                    value={markup}
                    onChange={handleMarkupChange}
                    className="input"/>
            <iframe src={src + '?markup=' + markup} width={width} height={height} style={{ border: 'none' }} />
        </div>
    );
}