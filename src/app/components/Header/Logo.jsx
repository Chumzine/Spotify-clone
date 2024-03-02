// import SpotifyWhite from '../assets/img/spotify-white.png'
// import SpotifyBlack from '../assets/img/spotify-black.png'
import { ReactComponent } from '../../assets/img/spotify-white.svg'  //named import/export for SVG
import SpotifyBlackSVG from '../../assets/img/spotify-black.svg'   //default import/export

export function Logo(props) {
    if (props.useWhite) {
        return (
            <a href='#/dashboard'>
                <ReactComponent />
            </a>
        )
} else {
    return (
        <a href='#/dashboard'>
            <img src={SpotifyBlackSVG} />
        </a>
    )
}
}