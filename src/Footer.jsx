import './App.css'

function Footer (){
    return<footer className='footer'>
            <h1>PLAI</h1>
            <div>
                <h3>Socials</h3>
                <ul className="social">
                    <li><a className="icon fa-brands fa-linkedin-in" href="#"></a></li>
                    <li><a className="icon fa-brands fa-facebook" href="#"></a></li>
                    <li><a className="icon fa-brands fa-twitter" href="#"></a></li>
                    <li><a className="icon fa-brands fa-medium" href="#"></a></li>
                    <li><a className="icon fa-brands fa-youtube" href="#"></a></li>
                    
                </ul>
            </div>
            <div>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li><a href="">Interested in parterships?</a></li>
                    <li><a href="">info@plai.co</a> </li>
                </ul>
            </div>
            <div>   
                <ul>
                    <li><a href="#">Privacy and Agreement</a></li>
                    <li><a href="#">Therms and Conditions</a></li>
                 </ul>
            </div>
        </footer>	
}

export default Footer;