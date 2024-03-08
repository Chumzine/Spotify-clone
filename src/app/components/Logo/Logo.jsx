import SpotifyWhite from '../../assets/img/spotify-white.png'
import SpotifyBlack from '../../assets/img/spotify-black.png'
// import { ReactComponent as SpotifyWhiteSVG } from '../../assets/img/spotify-white.svg'  //named import/export for SVG
// import SpotifyBlackSVG from '../../assets/img/spotify-black.svg'   //default import/export
import style from './style.module.css'

export function Logo(props) {
    const myImage = props.useWhite ? SpotifyWhite : SpotifyBlack;
    return (
        <a href='#/dashboard' className={style.logo}>
            <img src={myImage} alt='spotifylogo'/>
        </a>
    )
} 
        



// export function Logo(props) {
//     if (props.useWhite) {
//         return (
//             <a href='#/dashboard'>
//                 <ReactComponent />
//             </a>
//         )
// } else {
//     return (
//         <a href='#/dashboard'>
//             <img src={SpotifyBlackSVG} alt='spotifyblacklogo'/>
//         </a>
//     )
// }
// }