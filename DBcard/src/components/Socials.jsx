import Email from "../images/Mail.png"
import LinkedIn from "../images/linkedin.png"

export default function Socials(){
    return(
        <div className="socials">
            <h2 className="socials--heading">Laura Smith</h2>
            <h3 className="socials--job"> Frontend Developer</h3>
            <p className="socials--email">laurasmith.website</p>
            <div className="socials--buttons">
            <button> <img src={Email} alt="email icon" /> Email</button>
            <button className="linkedin"> <img src={LinkedIn} alt="linkedin icon" /> LinkedIn</button>
            </div>
            

        </div>
    )
}