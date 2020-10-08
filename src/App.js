import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from"react-router-dom";

const Menu = ()=>{
	return(
	<nav className="header__menu mobile-menu">
		<ul>
			<li className="nav-link"><NavLink to="index">Главная</NavLink></li>
			<li className="nav-link"><NavLink to="shop">Каталог</NavLink></li>
			<li className="nav-link"><NavLink to="recipe">Рецепты</NavLink></li>
			<li className="nav-link"><NavLink to="contact">Контакты</NavLink></li>
		</ul>
	</nav>
	
	);
}
const Home = ()=>{
	return(
	<h1>Главная</h1>
	);
}
const Shop = ()=>{
	return(
	<h1>Каталог</h1>
	);
}
const Recipe = ()=>{
	return(
	<h1>Рецепты</h1>
	);
}
const Сontacts = ()=>{
	return(
	<h1>Контакты</h1>
	);
}

function App() {
  return (
	   
<>
		<div id="preloder">
			<div className="loader"></div>
		</div>
		
			<div className="offcanvas-menu-overlay"></div>
			<div className="offcanvas-menu-wrapper">
			<div className="offcanvas__cart">
				<div className="offcanvas__cart__links">
					<a href="#" className="search-switch"><img src="img/icon/search.png" alt=""></img></a>
					<a href="#"><img src="img/icon/heart.png" alt=""></img></a>
				</div>
				<div className="offcanvas__cart__item">
					<a href="#"><img src="img/icon/cart.png" alt=""></img> <span>0</span></a>
					<div className="cart__price">Cart: <span>$0.00</span></div>
				</div>
			</div>
			<div className="offcanvas__logo">
				<a href="./index.html"><img src="img/logo.png" alt=""></img></a>
			</div>
			<div id="mobile-menu-wrap"></div>
			<div className="offcanvas__option">
				<ul>
					<li><a href="#">Войти</a> <span className="arrow_carrot-down"></span></li>
				</ul>
			</div>
		</div>
		
		
		<header className="header">
			<div className="header__top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="header__top__inner">
								<div className="header__top__left">
									<ul>
										<li><a href="#">Войти</a> <span className="arrow_carrot-down"></span></li>
									</ul>
								</div>
								<div className="header__logo">
									<a href="./index.html"><img src="img/logo.png" alt=""></img></a>
								</div>
								<div className="header__top__right">
									<div className="header__top__right__links">
										<a href="#" className="search-switch"><img src="img/icon/search.png" alt=""></img></a>
										<a href="#"><img src="img/icon/heart.png" alt=""></img></a>
									</div>
									<div className="header__top__right__cart">
										<a href="#"><img src="img/icon/cart.png" alt=""></img> <span>0</span></a>
										<div className="cart__price">Cart: <span>$0.00</span></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="canvas__open"><i class="fa fa-bars"></i></div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<BrowserRouter>
						<div className="col-lg-12">
							<Menu/>
						</div>
						<div>
							<Route path ={"/index"} component={Home}/>
							<Route path ={"/shop"} component={Shop}/>
							<Route path ={"/recipe"} component={Recipe}/>
							<Route path ={"/contact"} component={Сontacts}/>
						</div>
					</BrowserRouter>
				</div>
			</div>
		</header>
		
		
		<section className="hero">
			<div className="hero__slider owl-carousel owl-theme">
				<div className="hero__item set-bg" >
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-lg-8">
								<div className="hero__text">
								<img src ="img/hero/hero-1.jpg"></img>
									<h2>Making your life sweeter one bite at a time!</h2>
									<a href="#" class="primary-btn">Наши пирожки</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-lg-8">
								<div className="hero__text">
									<h2>Making your life sweeter one bite at a time!</h2>
									<a href="#" className="primary-btn">Our cakes</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section className="about spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="about__text">
							<div className="section-title">
								<span>About Cake shop</span>
								<h2>Cakes and bakes from the house of Queens!</h2>
							</div>
							<p>The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are
							Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="about__bar">
							<div className="about__bar__item">
								<p>Cake design</p>
								<div id="bar1" className="barfiller">
									<div className="tipWrap"><span className="tip"></span></div>
									<span className="fill" data-percentage="95"></span>
								</div>
							</div>
							<div className="about__bar__item">
								<p>Cake Class</p>
								<div id="bar2" class="barfiller">
									<div className="tipWrap"><span className="tip"></span></div>
									<span className="fill" data-percentage="80"></span>
								</div>
							</div>
							<div className="about__bar__item">
								<p>Рецепты</p>
								<div id="bar3" className="barfiller">
									<div className="tipWrap"><span className="tip"></span></div>
									<span className="fill" data-percentage="90"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<div className="categories">
			<div className="container">
				<div className="row">
					<div className="categories__slider owl-carousel">
						<div className="categories__item">
							<div className="categories__item__icon">
								<span className="flaticon-029-cupcake-3"></span>
								<h5>Капкейки</h5>
							</div>
						</div>
						<div className="categories__item">
							<div className="categories__item__icon">
								<span className="flaticon-034-chocolate-roll"></span>
								<h5>Шоколад</h5>
							</div>
						</div>
						<div className="categories__item">
							<div className="categories__item__icon">
								<span className="flaticon-005-pancake"></span>
								<h5>Красный бархат</h5>
							</div>
						</div>
						<div className="categories__item">
							<div className="categories__item__icon">
								<span className="flaticon-030-cupcake-2"></span>
								<h5>Бисквиты</h5>
							</div>
						</div>
						<div className="categories__item">
							<div className="categories__item__icon">
								<span className="flaticon-006-macarons"></span>
								<h5>Пончики</h5>
							</div>
						</div>
						<div className="categories__item">
							<div className="categories__item__icon">
								<span className="flaticon-006-macarons"></span>
								<h5>Cupcake</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<section className="product spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-1.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Dozen Cupcakes</a></h6>
								<div className="product__item__price">$32.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-2.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Cookies and Cream</a></h6>
								<div className="product__item__price">$30.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-3.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Gluten Free Mini Dozen</a></h6>
								<div className="product__item__price">$31.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-4.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Cookie Dough</a></h6>
								<div className="product__item__price">$25.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-5.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Vanilla Salted Caramel</a></h6>
								<div className="product__item__price">$05.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-6.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">German Chocolate</a></h6>
								<div className="product__item__price">$14.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-7.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Dulce De Leche</a></h6>
								<div className="product__item__price">$32.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="product__item">
							<div className="product__item__pic set-bg" data-setbg="img/shop/product-8.jpg">
								<div className="product__label">
									<span>Cupcake</span>
								</div>
							</div>
							<div className="product__item__text">
								<h6><a href="#">Mississippi Mud</a></h6>
								<div className="product__item__price">$08.00</div>
								<div className="cart_add">
									<a href="#">Add to cart</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section class="class spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="class__form">
							<div className="section-title">
								<span>Class cakes</span>
								<h2>Made from your <br />own hands</h2>
							</div>
							<form action="#">
								<input type="text" placeholder="Name"></input>
								<input type="text" placeholder="Phone"></input>
								<select>
									<option value="">Studying Class</option>
									<option value="">Writting Class</option>
									<option value="">Reading Class</option>
								</select>
								<input type="text" placeholder="Type your requirements"></input>
								<button type="submit" class="site-btn">registration</button>
							</form>
						</div>
					</div>
				</div>
				<div className="class__video set-bg" data-setbg="img/class-video.jpg">
					<a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
					class="play-btn video-popup"><i class="fa fa-play"></i></a>
				</div>
			</div>
		</section>
		
		
		<section className="team spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-7 col-sm-7">
						<div className="section-title">
							<span>Our team</span>
							<h2>Sweet Baker </h2>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-5">
						<div className="team__btn">
							<a href="#" class="primary-btn">Join Us</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="team__item set-bg" data-setbg="img/team/team-1.jpg">
							<div className="team__item__text">
								<h6>Randy Butler</h6>
								<span>Decorater</span>
								<div className="team__item__social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-instagram"></i></a>
									<a href="#"><i class="fa fa-youtube-play"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="team__item set-bg" data-setbg="img/team/team-2.jpg">
							<div className="team__item__text">
								<h6>Randy Butler</h6>
								<span>Decorater</span>
								<div className="team__item__social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-instagram"></i></a>
									<a href="#"><i class="fa fa-youtube-play"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="team__item set-bg" data-setbg="img/team/team-3.jpg">
							<div className="team__item__text">
								<h6>Randy Butler</h6>
								<span>Decorater</span>
								<div className="team__item__social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-instagram"></i></a>
									<a href="#"><i class="fa fa-youtube-play"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="team__item set-bg" data-setbg="img/team/team-4.jpg">
							<div className="team__item__text">
								<h6>Randy Butler</h6>
								<span>Decorater</span>
								<div className="team__item__social">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-instagram"></i></a>
									<a href="#"><i class="fa fa-youtube-play"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section className="testimonial spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<div className="section-title">
							<span>Testimonial</span>
							<h2>Our client say</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="testimonial__slider owl-carousel">
						<div className="col-lg-6">
							<div className="testimonial__item">
								<div className="testimonial__author">
									<div className="testimonial__author__pic">
										<img src="img/testimonial/ta-1.jpg" alt=""></img>
									</div>
									<div className="testimonial__author__text">
										<h5>Kerry D.Silva</h5>
										<span>New york</span>
									</div>
								</div>
								<div className="rating">
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star-half_alt"></span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="testimonial__item">
								<div className="testimonial__author">
									<div className="testimonial__author__pic">
										<img src="img/testimonial/ta-2.jpg" alt=""></img>
									</div>
									<div className="testimonial__author__text">
										<h5>Kerry D.Silva</h5>
										<span>New york</span>
									</div>
								</div>
								<div className="rating">
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star-half_alt"></span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="testimonial__item">
								<div className="testimonial__author">
									<div className="testimonial__author__pic">
										<img src="img/testimonial/ta-1.jpg" alt=""></img>
									</div>
									<div className="testimonial__author__text">
										<h5>Ophelia Nunez</h5>
										<span>London</span>
									</div>
								</div>
								<div className="rating">
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star-half_alt"></span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="testimonial__item">
								<div className="testimonial__author">
									<div className="testimonial__author__pic">
										<img src="img/testimonial/ta-2.jpg" alt=""></img>
									</div>
									<div className="testimonial__author__text">
										<h5>Kerry D.Silva</h5>
										<span>New york</span>
									</div>
								</div>
								<div className="rating">
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star-half_alt"></span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="testimonial__item">
								<div className="testimonial__author">
									<div className="testimonial__author__pic">
										<img src="img/testimonial/ta-1.jpg" alt=""></img>
									</div>
									<div className="testimonial__author__text">
										<h5>Ophelia Nunez</h5>
										<span>London</span>
									</div>
								</div>
								<div className="rating">
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star-half_alt"></span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="testimonial__item">
								<div className="testimonial__author">
									<div className="testimonial__author__pic">
										<img src="img/testimonial/ta-2.jpg" alt=""></img>
									</div>
									<div className="testimonial__author__text">
										<h5>Kerry D.Silva</h5>
										<span>New york</span>
									</div>
								</div>
								<div className="rating">
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star"></span>
									<span className="icon_star-half_alt"></span>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								ut labore et dolore magna aliqua viverra lacus vel facilisis.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<section className="instagram spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 p-0">
						<div className="instagram__text">
							<div className="section-title">
								<span>Follow us on instagram</span>
								<h2>Sweet moments are saved as memories.</h2>
							</div>
							<h5><i class="fa fa-instagram"></i> @sweetcake</h5>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4 col-6">
								<div className="instagram__pic">
									<img src="img/instagram/instagram-1.jpg" alt=""></img>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-6">
								<div className="instagram__pic middle__pic">
									<img src="img/instagram/instagram-2.jpg" alt=""></img>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-6">
								<div className="instagram__pic">
									<img src="img/instagram/instagram-3.jpg" alt=""></img>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-6">
								<div className="instagram__pic">
									<img src="img/instagram/instagram-4.jpg" alt=""></img>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-6">
								<div className="instagram__pic middle__pic">
									<img src="img/instagram/instagram-5.jpg" alt=""></img>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-6">
								<div className="instagram__pic">
									<img src="img/instagram/instagram-3.jpg" alt=""></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		
		<footer className="footer set-bg" data-setbg="img/footer-bg.jpg">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="footer__widget">
							<h6>WORKING HOURS</h6>
							<ul>
								<li>Monday - Friday: 08:00 am – 08:30 pm</li>
								<li>Saturday: 10:00 am – 16:30 pm</li>
								<li>Sunday: 10:00 am – 16:30 pm</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="footer__about">
							<div className="footer__logo">
								<a href="#"><img src="img/footer-logo.png" alt=""></img></a>
							</div>
							<p>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore dolore magna aliqua.</p>
							<div className="footer__social">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-instagram"></i></a>
								<a href="#"><i class="fa fa-youtube-play"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="footer__newslatter">
							<h6>Subscribe</h6>
							<p>Get latest updates and offers.</p>
							<form action="#">
								<input type="text" placeholder="Email"></input>
								<button type="submit"><i class="fa fa-send-o"></i></button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<p className="copyright__text text-white">
							  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
							</p>
					  </div>
					  <div className="col-lg-5">
						<div className="copyright__widget">
							<ul>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Site Map</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	
	<div className="search-model">
		<div className="h-100 d-flex align-items-center justify-content-center">
			<div className="search-close-switch">+</div>
			<form className="search-model-form">
				<input type="text" id="search-input" placeholder="Search here....."></input>
			</form>
		</div>
	</div>
</>
	
  );
}

export default App;
