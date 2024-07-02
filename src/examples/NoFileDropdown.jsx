export default function NoFileDropdown({width = '100%', height = '700px' }){
    const src = "https://nofilebio.netlify.app"; // change to the deployed version of the bioglyph app with no File button
    return(
        <iframe src={src} width={width} height={height} style={{ border: 'none' }} />
    );
}