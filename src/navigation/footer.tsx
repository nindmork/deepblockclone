import { Outlet } from "react-router-dom";
import "../styles/style.css";
import "../navigation/footerStyle.css";
const Footer = () => {
  return (
	
    <>
	<div className="footer-width-fixer">
		<section className="elementor-element-2834b1d">
		<div className="elementor-container">
			<div className="elementor-widget-container">
				<h2 className="elementor-heading-title">
					Menu
				</h2>
				<ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <a href="index.html">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Home
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="services/index.html">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Services
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="core-drivers/index.html">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Core drivers
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="restaurant/index.html">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Our works
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="about-us/index.html">
                              {" "}
                              <span className="elementor-icon-list-text">
                                About us
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="contact-us/index.html">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Contact us
                              </span>
                            </a>
                          </li>
                        </ul>
            </div>
			<div className="elementor-widget-container">
				<h2 className="elementor-heading-title">
					Contact
				</h2>
				<p>
					DeepBlok Co., Ltd. (Head Office)
					<br />
					No.26/2 Soi Atthakanprasit,
					<br />
					Thungmahamek Sub-district,
					<span>Sathorn District, Bangkok 10120 </span>
				</p>
				<ul className="elementor-icon-list-items2">
                          <li className="elementor-icon-list-item">
						  	<a >
                            <span className="elementor-icon-list-text">
                              Tax ID: 0105561196692
                            </span>
							</a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="tel:+6622591403" target="_blank">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Tel: 66 2114 7456
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="tel:+6626641363" target="_blank">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Fax: 66 2664 1363
                              </span>
                            </a>
                          </li>
                          <li className="elementor-icon-list-item">
                            <a href="mailto:service@t2pco.com" target="_blank">
                              {" "}
                              <span className="elementor-icon-list-text">
                                Email: service@t2pco.com
                              </span>
                            </a>
                          </li>
                        </ul>
            </div>
			<div className="elementor-widget-container">
				<img
					src="https://www.deepblok.io/wp-content/uploads/2021/03/logo.png"
				/>
				<p >
				As a trusted partner to the world’s leading businesses
				in Retail, Restaurant, Banking industry and more for
				loyalty program and gift card solution.
			</p>
            </div>
			
		</div>
		</section>
    </div>

      <Outlet />
    </>
  );
};
export default Footer;
