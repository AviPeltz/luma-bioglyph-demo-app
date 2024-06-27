
export default function NoFileButtonBioGlyphWidget({width = '100%', height = '700px' }){
    const src = "https://edit.bioglyph.app/"; // change to the deployed version of the bioglyph app with no File button
    return(
        <div>
            <iframe src={src} width={width} height={height} style={{ border: 'none' }} />
        </div>
    );
}