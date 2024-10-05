import Twitter from "../images/Twitter.png"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Github from "../images/Github.png"

export default function Footer() {
    return(
        <div className="footer">
        <img  className="footer--image" src= {Twitter}alt="" />
        <img  className="footer--image"src= {Facebook} alt="" />
        <img  className="footer--image"src={Instagram} alt="" />
        <img className="footer--image" src={Github} alt="" />
        </div> 
    )
}