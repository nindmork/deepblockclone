import "./styles/style.css";
import "./homestyle/homeStyle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { DeliveryTeam } from "./data";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>
        {/** Session 1*/}
        <div className="section1">
          {isMobile ? (
            <>
              <p className="main-title">Customer</p>
              <p className="main-title">Engagement</p>
              <p className="main-title">Platform</p>
            </>
          ) : (
            <p className="main-title">Customer Engagement Platform</p>
          )}
          <div>
            <span>&nbsp;</span>
          </div>
          <p className="main-desscript">
            Engage the right targets with the right information at the right
            time on our robust, high through put,
            <br />
            high concurrency platform tried and trusted by industry leading
            brands
          </p>
          <button className="b1">Contact Us</button>
        </div>
        {/** session 2 */}
        <div className="section2">
          <div className="elementor-shape-top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className="elementor-column-gap-no">
            <div>
              <div className="elementor-element-populated">
                <div>
                  <div>
                    <h2 className="elementor-heading-title">Trusted by </h2>
                  </div>
                </div>

                <div className="elementor-widget-image-carousel">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={10}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    breakpoints={{
                      576: { slidesPerView: 3, spaceBetween: 10 },
                      768: { slidesPerView: 5, spaceBetween: 20 },
                      1024: { slidesPerView: 10, spaceBetween: 30 }, // ปรับให้มีค่าที่มากกว่า 0
                    }}
                    autoplay={true}
                  >
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/10/Minor-Food-60-1.jpg"
                        alt="Minor Food-60"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/10/The-Pizza-Company-60-1.png"
                        alt="The Pizza Company-60"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/09/Logo_Brand_coffee-e1632291845636.png"
                        alt="Logo_Brand_coffee"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/09/Logo_Brand_CitiMart-e1632292035993.png"
                        alt="Logo_Brand_CitiMart"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/09/Logo_Brand_CRG-e1632290166763.png"
                        alt="Logo_Brand_CRG"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/10/logoFP-1.svg"
                        alt="logoFP"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/10/logojoomzaphut.svg"
                        alt="logo+joomzaphut"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/03/logo-09-spcae.png"
                        alt="logo-09-spcae"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/03/logo-11-pocha.png"
                        alt="logo-11-pocha"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/03/logo-12-snp.png"
                        alt="logo-12-snp"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src="https://www.deepblok.io/wp-content/uploads/2021/10/BBQ_LOGO-1-1.svg"
                        alt="BBQ_LOGO (1)"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** session 3 */}
        <div className="elementor-element-1a7c103">
          <div className="elementor-column-gap-no">
            <div className="elementor-element-11bed73">
              <div className="elementor-element-populated">
                <div
                  className="elementor-element-c45e2eb elementor-widget elementor-widget-heading"
                  data-id="c45e2eb"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="">
                    <h2 className="elementor-heading-title ">Delivery Team</h2>
                  </div>
                </div>
                <div className="elementor-element-de7f85e">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title2">
                      <p>
                        Our delivery team will work closely with you to ensure
                        that our platform can work hand-in-hand <br />
                        with your legacy systems even when meeting with complex
                        challenges.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                
                
                <div  className="elementor-element-28087e6">
                  <div className="elementor-container">

                  {DeliveryTeam.map((data, index) => (
                    <div key={index} className="elementor-col-33">
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-c8668fc elementor-widget elementor-widget-ucaddon_hover_text_reveal_content_box"
                          data-id="c8668fc"
                        >
                          <div className="elementor-widget-container">
                            <div
                              className="uc_long_content_box"
                              id="uc_hover_text_reveal_content_box_elementor11863"
                            >
                              <div className="uc_long_content_box_holder">
                                <div className="uc_long_content_box_box">
                                  <div className="uc_image_box">
                                    <img src={data.image} alt={data.title}></img>
                                  </div>
                                  <div className="uc_overlay"></div>
                                  <div className="uc_box_content">
                                    <div className="uc_title">
                                    <b>{data.title}</b>
                                    </div>
                                    <div className="uc_hidden_content">
                                      <div className="uc_description">{data.description}</div>
                                      <a href="#" className="uc_btn">{data.buttomtext}</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
 
                  </div>
                </div>
                {/* sesion 4*/}
              </div>
            </div>
          </div>
        </div>
        {/** session 4 */}
        <section className="elementor-element-1b59c1ba">
          <div className="elementor-background-overlay"></div>
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-132af34">
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-1d7bb01 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="1d7bb01"
                  data-element_type="section"
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1bab2f08"
                      data-id="1bab2f08"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element-bb69cd3"
                          data-id="bb69cd3"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">
                              Growing Trust by
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-element-3413aae"
                  data-id="3413aae"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8ee5f8c"
                      data-id="8ee5f8c"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-2fc9f92 elementor-widget elementor-widget-counter"
                          data-id="2fc9f92"
                          data-element_type="widget"
                          data-widget_type="counter.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-counter">
                              <div className="elementor-counter-number-wrapper">
                                <span className="elementor-counter-number-prefix"></span>
                                <span
                                  className="elementor-counter-number"
                                  data-duration=""
                                  data-to-value="30"
                                  data-from-value="0"
                                >
                                  0
                                </span>
                                <span className="elementor-counter-number-suffix">
                                  +
                                </span>
                              </div>
                              <div className="elementor-counter-title">
                                (Brands)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f762243"
                      data-id="f762243"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-7794548 elementor-widget elementor-widget-counter"
                          data-id="7794548"
                          data-element_type="widget"
                          data-widget_type="counter.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-counter">
                              <div className="elementor-counter-number-wrapper">
                                <span className="elementor-counter-number-prefix"></span>
                                <span
                                  className="elementor-counter-number"
                                  data-duration=""
                                  data-to-value="10"
                                  data-from-value="0"
                                >
                                  0
                                </span>
                                <span className="elementor-counter-number-suffix">
                                  M+
                                </span>
                              </div>
                              <div className="elementor-counter-title">
                                (Loyalty Customers)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ae19be9"
                      data-id="ae19be9"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-7fd57a8 elementor-widget elementor-widget-counter"
                          data-id="7fd57a8"
                          data-element_type="widget"
                          data-widget_type="counter.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-counter">
                              <div className="elementor-counter-number-wrapper">
                                <span className="elementor-counter-number-prefix"></span>
                                <span
                                  className="elementor-counter-number"
                                  data-duration=""
                                  data-to-value="3"
                                  data-from-value="0"
                                >
                                  0
                                </span>
                                <span>B+ THB/year</span>
                              </div>
                              <div className="elementor-counter-title">
                                (Engagement Transactions)
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/** */}
        {/** session 5 */}
        <section
          className="elementor-element-6f523f2"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-element-d61509a"
              data-id="d61509a"
              data-element_type="column"
              data-settings='{"background_background":"gradient"}'
            >
            {
              isMobile ? (
                <>
                  
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                  <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb61977"
                      data-id="bb61977"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-506cafc elementor-widget elementor-widget-image"
                          data-id="506cafc"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                width="450"
                                height="510"
                                src="https://www.deepblok.io/wp-content/uploads/2021/03/Loyalty-Program-Solution.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Loyalty Program Management
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                Build relationships that matters.  Learn
                                customer behaviors along their engagement
                                journeys to drive even more purchase, frequency
                                and value via the most comprehensive and robust
                                loyalty program developed and serviced by local
                                team you can trust.    
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0b64ec1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="0b64ec1"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Multi-point currencies <br />
                                  (point, stamps, or seasonal rewards)
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Multi-tier memberships{" "}
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Flexible loyalty promotion rules
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Personalized privileges and rewards{" "}
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Omni touchpoints Integration: <br /> web,
                                  in-store, LINE, mobile app etc.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b074cec elementor-widget elementor-widget-button"
                          data-id="b074cec"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <button>See More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </section>

                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb61977"
                      data-id="bb61977"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-506cafc elementor-widget elementor-widget-image"
                          data-id="506cafc"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                width="450"
                                height="510"
                                src="https://www.deepblok.io/wp-content/uploads/2021/03/Gift-card-solution.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Gift Card Management
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                Building a stronger relationship through gift
                                cards. Gift cards reduce cash handling costs and
                                serve the increasing demand for cashless
                                transactions. It also allows for your value
                                customers to recommend your business to others
                                and help grow your customer base even faster.
                                Plus, the prepaid revenue is an advance cash
                                flow to your business.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0b64ec1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="0b64ec1"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="#407bff" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Reloadable or Non-Reloadable
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="#407bff" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Virtual or Physical cards
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="#407bff" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Security and fraud rules
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b074cec elementor-widget elementor-widget-button"
                          data-id="b074cec"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <button>See More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                  <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb61977"
                      data-id="bb61977"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-506cafc elementor-widget elementor-widget-image"
                          data-id="506cafc"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                width="450"
                                height="510"
                                src="https://www.deepblok.io/wp-content/uploads/2021/03/Privilege-Management-Solution.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Coupon & Campaign Management
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                Whether it is to engage, reengage or even for
                                recruiting new customers, our platform helps you
                                manage and monitor your marketing campaigns with
                                ease and precision.   
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0b64ec1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="0b64ec1"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Coupon code management
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Manual and auto targeting campaigns
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Flexible loyalty Personalize content delivery
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b074cec elementor-widget elementor-widget-button"
                          data-id="b074cec"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <button>See More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </section>

                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Data Gold
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                At DeepBlok, we treat data as gold.  We
                                accumulate data to assist your marketing
                                decisions.  We store data securely so it cannot
                                be tampered with.  And, we provide tools to
                                ensure strict transparency and privacy so you
                                can handle data with peace of mind.  
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
                </>
              ) : (
                <>
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    
                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Loyalty Program Management
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                Build relationships that matters.  Learn
                                customer behaviors along their engagement
                                journeys to drive even more purchase, frequency
                                and value via the most comprehensive and robust
                                loyalty program developed and serviced by local
                                team you can trust.    
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0b64ec1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="0b64ec1"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Multi-point currencies <br />
                                  (point, stamps, or seasonal rewards)
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Multi-tier memberships{" "}
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Flexible loyalty promotion rules
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Personalized privileges and rewards{" "}
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Omni touchpoints Integration: <br /> web,
                                  in-store, LINE, mobile app etc.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b074cec elementor-widget elementor-widget-button"
                          data-id="b074cec"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <button>See More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb61977"
                      data-id="bb61977"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-506cafc elementor-widget elementor-widget-image"
                          data-id="506cafc"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                width="450"
                                height="510"
                                src="https://www.deepblok.io/wp-content/uploads/2021/03/Loyalty-Program-Solution.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb61977"
                      data-id="bb61977"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-506cafc elementor-widget elementor-widget-image"
                          data-id="506cafc"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                width="450"
                                height="510"
                                src="https://www.deepblok.io/wp-content/uploads/2021/03/Gift-card-solution.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Gift Card Management
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                Building a stronger relationship through gift
                                cards. Gift cards reduce cash handling costs and
                                serve the increasing demand for cashless
                                transactions. It also allows for your value
                                customers to recommend your business to others
                                and help grow your customer base even faster.
                                Plus, the prepaid revenue is an advance cash
                                flow to your business.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0b64ec1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="0b64ec1"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="#407bff" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Reloadable or Non-Reloadable
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="#407bff" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Virtual or Physical cards
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="#407bff" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Security and fraud rules
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b074cec elementor-widget elementor-widget-button"
                          data-id="b074cec"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <button>See More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Coupon & Campaign Management
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                Whether it is to engage, reengage or even for
                                recruiting new customers, our platform helps you
                                manage and monitor your marketing campaigns with
                                ease and precision.   
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-0b64ec1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                          data-id="0b64ec1"
                          data-element_type="widget"
                          data-widget_type="icon-list.default"
                        >
                          <div className="elementor-widget-container">
                            <ul className="elementor-icon-list-items">
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Coupon code management
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Manual and auto targeting campaigns
                                </span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <span>
                                  <FaCircle color="orange" />
                                </span>
                                <span className="elementor-icon-list-text">
                                  Flexible loyalty Personalize content delivery
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-b074cec elementor-widget elementor-widget-button"
                          data-id="b074cec"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <button>See More</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb61977"
                      data-id="bb61977"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-506cafc elementor-widget elementor-widget-image"
                          data-id="506cafc"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <img
                                decoding="async"
                                width="450"
                                height="510"
                                src="https://www.deepblok.io/wp-content/uploads/2021/03/Privilege-Management-Solution.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="elementor-element-4bc8bb8"
                  data-id="4bc8bb8"
                  data-element_type="section"
                >
                  <div className="elementor-container">
                    <div
                      className="elementor-element-4845b1a"
                      data-id="4845b1a"
                      data-element_type="column"
                    >
                      <div className="elementor-element-populated">
                        <div
                          className="elementor-element-8c106e2 elementor-widget elementor-widget-heading"
                          data-id="8c106e2"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title">
                              Data Gold
                            </h2>
                          </div>
                        </div>
                        <div
                          className="elementor-element-61e0763"
                          data-id="61e0763"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor">
                              <p>
                                At DeepBlok, we treat data as gold.  We
                                accumulate data to assist your marketing
                                decisions.  We store data securely so it cannot
                                be tampered with.  And, we provide tools to
                                ensure strict transparency and privacy so you
                                can handle data with peace of mind.  
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              </>
              )
            }


            </div>
          </div>
        </section>
        {/** */}
        {/* Session 6 */}
        <section className="elementor-element-0b19c9d">
          <div className="elementor-container">
            <div className="elementor-element-e8daf08">
              <div className="elementor-element-populated">
                <section className=" elementor-element-376fada">

                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-471be33"
                      data-id="471be33"
                      data-element_type="column"
                    >

                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-11a1590 elementor-widget elementor-widget-image"
                          data-id="11a1590"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <a href="core-drivers/index.html#driven">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="340"
                                  height="120"
                                  src="https://www.deepblok.io/wp-content/uploads/2021/04/Group-616.png"
                                  className="attachment-large size-large"
                                  alt=""
                                 
                                  sizes="(max-width: 340px) 100vw, 340px"
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-18a3bc9 elementor-widget elementor-widget-text-editor"
                          data-id="18a3bc9"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              Collect &#038; analyze customers data, <br />
                              understand customers insight &#038; create
                              personalized promotion to Increase ROI &#038;
                              customer engagement{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-cc64177 elementor-widget elementor-widget-button"
                          data-id="cc64177"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                href="core-drivers/index.html#driven"
                                className="elementor-button-link elementor-button elementor-size-sm"
                                role="button"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon elementor-align-icon-right">
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-long-arrow-alt-right"
                                    ></i>
                                  </span>
                                  <span className="elementor-button-text">
                                    See More
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-65ee236"
                      data-id="65ee236"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-f70d281 elementor-widget elementor-widget-image"
                          data-id="f70d281"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <a href="core-drivers/index.html#privacy">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="340"
                                  height="120"
                                  src="https://www.deepblok.io/wp-content/uploads/2021/04/Group-614.png"
                                  className="attachment-large size-large"
                                  alt=""
                                 
                                  sizes="(max-width: 340px) 100vw, 340px"
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-07900e0 elementor-widget elementor-widget-text-editor"
                          data-id="07900e0"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              DeepBlok’s solutions are designed to capture and
                              collect customer data when allowed in a
                              transparent and trusted way following
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-07ecc94 elementor-widget elementor-widget-button"
                          data-id="07ecc94"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                href="core-drivers/index.html#privacy"
                                className="elementor-button-link elementor-button elementor-size-sm"
                                role="button"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon elementor-align-icon-right">
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-long-arrow-alt-right"
                                    ></i>
                                  </span>
                                  <span className="elementor-button-text">
                                    See More
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-547d89b"
                      data-id="547d89b"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-92aacd4 elementor-widget elementor-widget-image"
                          data-id="92aacd4"
                          data-element_type="widget"
                          data-widget_type="image.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-image">
                              <a href="core-drivers/index.html#security">
                                <img
                                  loading="lazy"
                                  decoding="async"
                                  width="340"
                                  height="120"
                                  src="https://www.deepblok.io/wp-content/uploads/2021/04/Group-615.png"
                                  className="attachment-large size-large"
                                  alt=""
                                 
                                  sizes="(max-width: 340px) 100vw, 340px"
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-2eb5f3f elementor-widget elementor-widget-text-editor"
                          data-id="2eb5f3f"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-text-editor elementor-clearfix">
                              DeepBLOK is committed to helping our customers
                              comply with PDPA through our robust privacy and
                              security protections
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-53e60da elementor-widget elementor-widget-button"
                          data-id="53e60da"
                          data-element_type="widget"
                          data-widget_type="button.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a
                                href="core-drivers/index.html#security"
                                className="elementor-button-link elementor-button elementor-size-sm"
                                role="button"
                              >
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon elementor-align-icon-right">
                                    <i
                                      aria-hidden="true"
                                      className="fas fa-long-arrow-alt-right"
                                    ></i>
                                  </span>
                                  <span className="elementor-button-text">
                                    See More
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                  
                </section>
              </div>
            </div>
          </div>
        </section>
        {/** */}

        {/** session 7 */}
        <section className="elementor-element-30d8b8d">
          <div className="elementor-element-10ef6be">
            <div className="elementor-element-populated">
              <div className="elementor-element-ad94269">
                <h2 className="elementor-heading-title elementor-size-default">
                  Platform as a service. Full-service support.
                </h2>
              </div>
              <div className="elementor-element-74eb3b6">
                <h2 className="elementor-heading-title elementor-size-default">
                  Satisfaction Guaranteed
                </h2>
              </div>
              <div className="elementor-element-4b8cb8f">
                <h2 className="elementor-heading-title elementor-size-default">
                  our sales team.
                  <br />
                  So we can create a plan together.
                </h2>
              </div>
              <div className="elementor-button-wrapper">
                <a
                  href="contact-us/index.html"
                  className="elementor-button-link elementor-button elementor-size-sm"
                  role="button"
                >
                  <button>Get a demo</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/** */}
      </div>
    </>
  );
};

export default Home;
