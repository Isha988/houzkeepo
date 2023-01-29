import {FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-links-container'>
            <div>
                <h3>For Clients</h3>
                <ul>
                    <li><a href='#'>How to Hire</a></li>
                    <li><a href='#'>Talent Marketplace</a></li>
                    <li><a href='#'>Talent Scout</a></li>
                    <li><a href='#'>Hire an Agency</a></li>
                    <li><a href='#'>Enterprise</a></li>
                    <li><a href='#'>Payroll Services</a></li>
                    <li><a href='#'>Direct Contracts</a></li>
                    <li><a href='#'>Hire Worldwide</a></li>
                    <li><a href='#'>Hire in the USA</a></li>
                    <li><a href='#'>Project Catalog</a></li>
                </ul>
            </div>

            <div>
                <h3>For Talent</h3>
                <ul>
                    <li><a href='#'>How to Find Work</a></li>
                    <li><a href='#'>Direct Contracts</a></li>
                    <li><a href='#'>Find Freelance Jobs Worldwide</a></li>
                    <li><a href='#'>Find Freelance Jobs in the USA</a></li>
                </ul>
            </div>

            <div>
                <h3>Resources</h3>
                <ul>
                    <li><a href='#'>Help & Support</a></li>
                    <li><a href='#'>Success Stories</a></li>
                    <li><a href='#'>Upwork Reviews</a></li>
                    <li><a href='#'>Resources</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Community</a></li>
                    <li><a href='#'>Affiliate Program</a></li>
                    <li><a href='#'>Free Business tools</a></li>
                </ul>
            </div>

            <div>
                <h3>For Clients</h3>
                <ul>
                    <li><a href='#'>How to Hire</a></li>
                    <li><a href='#'>Talent Marketplace</a></li>
                    <li><a href='#'>Talent Scout</a></li>
                    <li><a href='#'>Hire an Agency</a></li>
                    <li><a href='#'>Enterprise</a></li>
                    <li><a href='#'>Payroll Services</a></li>
                    <li><a href='#'>Direct Contracts</a></li>
                    <li><a href='#'>Hire Worldwide</a></li>
                    <li><a href='#'>Hire in the USA</a></li>
                    <li><a href='#'>Project Catalog</a></li>
                </ul>
            </div>

            <div>
                <h3>Company</h3>
                <ul>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Leadership</a></li>
                    <li><a href='#'>Investor Relations</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Our Impact</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Trust, Safety & Security</a></li>
                    <li><a href='#'>Modern Slavery Statement</a></li>
                </ul>
            </div>
        </div>

        <div className='footer-social-icons'>
            <p>Follow Us</p>
            <a href='#'><FaFacebookF className='icons'/></a>
            <a href='#'><FaLinkedinIn className='icons'/></a>
            <a href='#'><FaTwitter className='icons'/></a>
            <a href='#'><FaYoutube className='icons'/></a>
            <a href='#'><FaInstagram className='icons'/></a>
        </div>

        <div className='footer-bottom'>
           <a href='#'><p>&#169; 2023 Freelancing</p></a> 
           <a href='#'><p>Terms of Services</p></a>
           <a href='#'><p>Privacy Policy</p></a>
           <a href='#'><p>CA Notice at Collection</p></a>
           <a href='#'><p>Cookie Settings</p></a>
           <a href='#'><p>Accessibility</p></a>
        </div>
    </div>
  )
}

export default Footer
