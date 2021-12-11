import react from "react";

class Home extends react.Component {
    render() {
        return(
        <div>
           <div id="preloader">
		<div className="scroll-static"></div>
	</div>

    <div className="main-wrapper">
		
		<div className="nav-bar">
			
			<div className="scroll-indicator"></div>
			<nav>
				<ul id="menu-list">
					<li className="nav-item"><a className="active nav-link" href="#body" data-text="Home">
						<span>01</span>Home
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#about" data-text="About">
						<span>02</span>About
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#services" data-text="Services">
						<span>03</span>Services
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#skills" data-text="Skills">
						<span>04</span>Skills
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#education" data-text="Education">
						<span>05</span>Education
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#experience" data-text="Experience">
						<span>06</span>Experience
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#works" data-text="Projects">
						<span>07</span>Projects
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#clients" data-text="Clients">
						<span>08</span>Clients
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#blogs" data-text="Blogs">
						<span>09</span>Blogs
					</a></li>
					<li className="nav-item"><a className="nav-link" href="#contact" data-text="Contact">
						<span>10</span>Contact
					</a></li>
				</ul>
			</nav>
			<div className="nav-footer">
				<p className="nav-copyright">&copy; Copyright<br/>All rights reserved</p>
			</div>
		</div>
		
		<div className="main-content">
		
			<header>
				<div className="container-fluid">
					<div className="row">
						<div className="col-7">
						
							<div className="logo">
								<a href="index.html">SANTOSH H W</a>
							</div>
						</div>
						<div className="col-5">
							<a href="" className="default-btn header-action-btn"><i className="ti-agenda"></i> Download CV</a>
							<div className="default-btn menu-btn">
								<i className="ti-menu"></i>
								<i className="ti-close"></i>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="home-wrapper">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-5 col-sm-5">
							<div className="hero-img wow fadeIn" data-wow-delay=".2s">
								<div className="shape"></div>
							
								<img className="img-fluid" src="assets/img/user.jpg" alt=""/>
							</div>
						</div>
						<div className="col-md-7 col-sm-7">
							<div className="hero-content">
								<h2 className="intro-name">
									<span className="wow slideInLeft">Hey, I am</span>
									<span className="wow slideInLeft" data-wow-delay=".2s">SANTOSH H W</span>
								</h2>
								<p>
									<span className="wow slideInLeft" data-wow-delay=".5s">Front-end Developer. Based in Dharwad (Karnataka, India)</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div id="about" className="wrapper about-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
						
							<h3 className="wrapper-heading">About Me</h3>

							<h4 className="about-sub-heading">My name is Santosh. I am a Front-end Developer and lives in Dharwad (Karnataka, India).</h4>
							<p className="about-text">Digital Experience Award winner offering extensive 9+ years of graphic design experience specializing mainly UI/UX design. Recognized by multiple managers as the best Designer among colleagues. Performance-driven, Knowledgeable, and detail-oriented design professional with significant ability to work and perform well in team environments.</p>
							<a href="assets\SANTOSH H W(Final).pdf" className="default-btn" target="_blank"><i className="ti-agenda"></i> Download CV</a>

						
																																																																					</div>
					</div>
				</div>
			</div>
		
			<div id="services" className="wrapper service-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
						
							<h3 className="wrapper-heading">Services</h3>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
						
							<div className="service-item">
								<span className="ti-ruler-pencil"></span>
								<h4>UI/UX Design</h4>
								<p>Optio perspiciatis sequi voluptatem busposs debitis dolori provident imus.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							
							<div className="service-item">
								<span className="ti-bar-chart-alt"></span>
								<h4>Branding</h4>
								<p>Provi perspiciatis sequi voluptatem busposs debitis dolori provident imus!</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							
							<div className="service-item">
								<span className="ti-hummer"></span>
								<h4>Testing</h4>
								<p>Optio perspiciatis sequi voluptatem busposs debitis dolori provident imus.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
						
							<div className="service-item">
								<span className="ti-thumb-up"></span>
								<h4>Support</h4>
								<p>Provi perspiciatis sequi voluptatem busposs debitis dolori provident imus!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
																																																																								
			<div id="education" className="wrapper education-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
						
							<h3 className="wrapper-heading">Education</h3>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="education-single">
								<h4 className="course-name">Diploma in Computer</h4>
								<p className="institute">University of Engineers</p>
								<p className="mute-text">Session : 2013-2014</p>
								<p className="mute-text">Passing Year : Dec 2018</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="education-single">
								<h4 className="course-name">LPD in Design</h4>
								<p className="institute">Designers University</p>
								<p className="mute-text">Session : 2013-2014</p>
								<p className="mute-text">Passing Year : Jan 2018</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="education-single">
								<h4 className="course-name">Bachelor's Degree</h4>
								<p className="institute">University of Bachelor's</p>
								<p className="mute-text">Session : 2013-2014</p>
								<p className="mute-text">Passing Year : Mar 2018</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="education-single">
								<h4 className="course-name">LPD in Design</h4>
								<p className="institute">Designers University</p>
								<p className="mute-text">Session : 2013-2014</p>
								<p className="mute-text">Passing Year : Oct 2018</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="education-single">
								<h4 className="course-name">Bachelor's Degree</h4>
								<p className="institute">University of Bachelor's</p>
								<p className="mute-text">Session : 2013-2014</p>
								<p className="mute-text">Passing Year : Nov 2018</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="education-single">
								<h4 className="course-name">Diploma in Computer</h4>
								<p className="institute">University of Engineers</p>
								<p className="mute-text">Session : 2013-2014</p>
								<p className="mute-text">Passing Year : Feb 2018</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div id="experience" className="wrapper experience-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							
							<h3 className="wrapper-heading">Experience</h3>
						</div>
						<div className="col-md-6">
							<div className="experience-single">
								<h4 className="company">Alex-Studio</h4>
								<p className="position-name">Front-end Developer</p>
								<p className="mute-text">October 2016 - Present</p>
								<p className="company-info">Amet corrupti possimus debitis nisi nam quae quod quidem magnam aliquam adipisci recusandae earum inventore totam delects voluptatem?</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="experience-single">
								<h4 className="company">Navida IT</h4>
								<p className="position-name">Senior Ui/Ux Designer</p>
								<p className="mute-text">January 2014 - September 2016</p>
								<p className="company-info">Quod corrupti possimus debitis nisi nam quae quod quidem magnam aliquam adipisci recusandae earum inventore totam delects voluptatem!</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="experience-single">
								<h4 className="company">Revulation-IT</h4>
								<p className="position-name">Front-end Developer</p>
								<p className="mute-text">October 2016 - Present</p>
								<p className="company-info">Amet corrupti possimus debitis nisi nam quae quod quidem magnam aliquam adipisci recusandae earum inventore totam delects voluptatem?</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="experience-single">
								<h4 className="company">Creative Labs</h4>
								<p className="position-name">Senior Ui/Ux Designer</p>
								<p className="mute-text">January 2014 - September 2016</p>
								<p className="company-info">Quod corrupti possimus debitis nisi nam quae quod quidem magnam aliquam adipisci recusandae earum inventore totam delects voluptatem!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div id="works" className="wrapper works-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							
							<h3 className="wrapper-heading">Recent Works</h3>
						</div>
						<div className="col-md-12">
						
							<div className="filter-buttons">
								<button className="active" data-filter="*">Everything</button>
								<button data-filter=".web">Web</button>
								<button data-filter=".uiux">UI/UX</button>
								<button data-filter=".branding">Branding</button>
							</div>
						</div>
					</div>
					<div className="row zoom-gallery">
						
						<div className="col-lg-4 col-md-6 col-sm-6 uiux">
							<div className="work-single-item">
								<a className="zoom-image" href="assets/img/work-01.jpg">
									<div className="tilt-wrap">
										<img className="img-fluid" src="assets/img/work-01.jpg" alt=""/>
										<h6>Gold Left Palm</h6>
									</div>
								</a>
							</div>
						</div>
					
						<div className="col-lg-4 col-md-6 col-sm-6 web">
							<div className="work-single-item">
								<a className="zoom-image" href="assets/img/work-02.jpg">
									<div className="tilt-wrap">
										<img className="img-fluid" src="assets/img/work-02.jpg" alt=""/>
										<h6>Shuvashini</h6>
									</div>
								</a>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-sm-6 branding">
							<div className="work-single-item">
								<a className="zoom-image" href="assets/img/work-03.jpg">
									<div className="tilt-wrap">
										<img className="img-fluid" src="assets/img/work-03.jpg" alt=""/>
										<h6>Duck in Gold</h6>
									</div>
								</a>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-sm-6 web">
							<div className="work-single-item">
								<a className="zoom-image" href="assets/img/work-04.jpg">
									<div className="tilt-wrap">
										<img className="img-fluid" src="assets/img/work-04.jpg" alt=""/>
										<h6>Black Body Paint</h6>
									</div>
								</a>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6 col-sm-6 branding">
							<div className="work-single-item">
								<a className="zoom-image" href="assets/img/work-05.jpg">
									<div className="tilt-wrap">
										<img className="img-fluid" src="assets/img/work-05.jpg" alt=""/>
										<h6>Work Harder</h6>
									</div>
								</a>
							</div>
						</div>
					
						<div className="col-lg-4 col-md-6 col-sm-6 uiux">
							<div className="work-single-item">
								<a className="zoom-image" href="assets/img/work-06.jpg">
									<div className="tilt-wrap">
										<img className="img-fluid" src="assets/img/work-06.jpg" alt=""/>
										<h6>Brown Water</h6>
									</div>
								</a>
							</div>
						</div>
					
						<div className="col-lg-12 text-center">
							<a href="/" className="default-btn all-work-btn">View All Works</a>
						</div>
					</div>
				</div>
			</div>
		
			<div id="clients" className="wrapper clients-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							
							<h3 className="wrapper-heading">Clients</h3>
						</div>
						<div className="col-md-12">
							<div className="owl-carousel clients-carousel">
								<div className="client-img" data-text="themeforest"><img src="assets/img/brand/brand_01.png" alt="Brand_01"/></div>
								<div className="client-img" data-text="videohive"><img src="assets/img/brand/brand_02.png" alt="Brand_02"/></div>
								<div className="client-img" data-text="codecanyon"><img src="assets/img/brand/brand_03.png" alt="Brand_03"/></div>
								<div className="client-img" data-text="augiojungle"><img src="assets/img/brand/brand_04.png" alt="Brand_04"/></div>
								<div className="client-img" data-text="graphicriver"><img src="assets/img/brand/brand_05.png" alt="Brand_05"/></div>
								<div className="client-img" data-text="photodune"><img src="assets/img/brand/brand_06.png" alt="Brand_06"/></div>
								<div className="client-img" data-text="3docean"><img src="assets/img/brand/brand_07.png" alt="Brand_07"/></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div id="blogs" className="wrapper blogs-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							
							<h3 className="wrapper-heading">Blogs</h3>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="blog-item">
								<a href="/">
									<div className="blog-img">
										<img className="img-fluid" src="assets/img/blog-img-01.jpg" alt=""/>
									</div>
									<div className="blog-info">
										<div className="tags">
											<span>#Design</span>
											<span>#UI</span>
										</div>
										<h4 className="blog-title">
											<span>Saepe fuga optio est mollitia architecto magni atque voluptate conama.</span>
										</h4>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="blog-item">
								<a href="/">
									<div className="blog-img">
										<img className="img-fluid" src="assets/img/blog-img-02.jpg" alt=""/>
									</div>
									<div className="blog-info">
										<div className="tags">
											<span>#UI</span>
											<span>#UX</span>
										</div>
										<h4 className="blog-title">
											<span>Alias fuga optio est mollitia architecto magni atque voluptate conama.</span>
										</h4>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="blog-item">
								<a href="/">
									<div className="blog-img">
										<img className="img-fluid" src="assets/img/blog-img-03.jpg" alt=""/>
									</div>
									<div className="blog-info">
										<div className="tags">
											<span>#Develop</span>
										</div>
										<h4 className="blog-title">
											<span>Quiape fuga optio est mollitia architecto magni atque voluptate conama!</span>
										</h4>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div id="contact" className="wrapper contact-wrapper">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-5 col-md-12">
							<div className="contact-details">
								<h4>Get in Touch</h4>
								<p>Excepturi nemo Labore veritatis error consequatur blanditiis quae id distinctio impedit culpa.</p>
							</div>
							<div className="contact-info">
								<p><span className="ti-email"></span>someone@email.com</p>
								<p><span className="ti-mobile"></span>+0 215 112 11</p>
								<p><span className="ti-home"></span>121 Street Hen, Suhen, NewYork</p>
							</div>
						</div>
						<div className="col-lg-7 col-md-12">
							<form id="contact-form" action="assets/css/mail.php">
                                <div className="row">
                                    <div className="col">
                                        <p className="form-message"></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5">
                                     
                                        <input className="input_field required" type="text" name="name" placeholder="Name"/>
                                      
                                        <input className="input_field required" type="email" name="email" placeholder="Email"/>
                                    </div>
                                    <div className="col-md-7">
                                       
                                        <textarea className="input_field required" name="message" placeholder="Tell Me About Your Query."></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        
                                        <button className="default-btn w-100" type="submit">Send Message</button >
                                    </div>
                                    
	                                <div className="col-12">
	                                    <br/><small><b>NOTE:</b> Don't worry about showing any contact form error in demo version,<br/> it works properly in downloadable version.</small>
	                                </div>
                                </div>
                            </form>
						</div> 
					</div>
				</div>
			</div>
			 
			<footer className="wrapper footer-wrapper">
				<div className="container-fluid">
					<div className="col-md-12 text-center">
						<div className="footer-social">
							<a href="/" target="_blank">Twitter</a>
							<a href="/" target="_blank">Instagram</a>
							<a href="/" target="_blank">Linkedin</a>
							<a href="/" target="_blank">Facebook</a>
							<a href="/" target="_blank">Dribbble</a>
						</div>   
						<p className="footer-copyright">© Copyright -<a href="https://themeforest.net/user/ixtheme" target="_blank">ixtheme </a>
                        </p>
					</div>
				</div>
			</footer>
		
			<a className="default-btn scroll-to-top" href="#body"><span className="ti-angle-up "></span></a>

		</div>
    </div>

        </div> 
        );
    }   
}  

export default Home;
