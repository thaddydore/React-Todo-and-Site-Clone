import React from 'react';
import footerpremium from './footerpremium.png';
import {FaWrench} from 'react-icons/fa';
import {TiChartArea} from 'react-icons/ti';
import {FaDownload} from 'react-icons/fa';


const Footer = () =>{
	return(
		<div className='footerDiv'>
			<div className='divOne'>
				<img src={footerpremium} className='imagetech'/>
				<div className='businessContinuity'>
				<a href='#'> <FaWrench className='icon1'/></a>
					<a href='#'><span>Business continuity policy</span></a>
				</div>
				<div className='quickGlossary'>
				<a href='#'> <FaWrench className='icon2'/></a>
					<a href='#'><span>Quick glossary: Vendor contract terminology.</span></a>
				</div>
				<div className='budgetReport'>
				<a href='#'> <TiChartArea className='icon3'/></a>
					<a href='#'><span>2020 IT budget research report: Security,<br/>
					cloud services, and digitalization are top <br/>budget priorities</span></a>
				</div>
				<div className='development'>
				<a href='#'> <FaDownload className='icon4'/></a>
					<a href='#'><span>Development lifecycle policy</span></a>
				</div>
			</div>
			<div className='divTwo'>
				<hr/>
				<p><strong>SERVICES</strong></p>
				<div className='flexMe'>
					<ul className='footerli'>
						<li><a href='#'>About Us</a></li>
						<li><a href='#'>Membership</a></li>
						<li><a href='#'>Newsletters</a></li>
						<li><a href='#'>RSS Feeds</a></li>
						<li><a href='#'>Site Map</a></li>
					</ul>
					<ul className='footerli'>
						<li><a href='#'>Site Help & Feedback</a></li>
						<li><a href='#'>FAQ</a></li>
						<li><a href='#'>Advertisement</a></li>
						<li><a href='#'>Reprint Policy</a></li>
						<li><a href='#'>TR Premium Terms of Service</a></li>
					</ul>
				</div>
			</div>
			<div className='divTwo'>
				<hr/>
				<p className='footerp'><strong>EXPLORE</strong></p>
				<div className='flexMe'>
					<ul className='footerli'>
						<li><a href='#'>Blogs</a></li>
						<li><a href='#'>Downloads</a></li>
						<li><a href='#'>TechRepublic Forums</a></li>
						<li><a href='#'>Meet the Team</a></li>
						<li><a href='#'>TechRepublic Academy</a></li>
					</ul>
					<ul className='footerli'>
						<li><a href='#'>TechRepublic Premium</a></li>
						<li><a href='#'>Resource Library</a></li>
						<li><a href='#'>Photos</a></li>
						<li><a href='#'>Videos</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Footer;