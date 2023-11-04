import "swiper/css";
import "./Blog.scss"
import React from 'react';
import 'swiper/css/navigation';
import img from "../../assets/img.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import Advantages from '../../components/Advantages/Advantages'

import { Navigation, Pagination } from 'swiper/modules';

function Blog() {
	return (
		<div className="blog">
			<div className="blog__about about-blog">
				<div className="about-blog__container">
					<h3 className="about-blog__title title">Создан для вас</h3>
					<Advantages />
				</div>
			</div>
			<div className="blog__gallery gallery-blog">
				<Swiper className="gallery-blog__swiper"
					navigation={{
						prevEl: '.slide-blog__arrow-prev',
						nextEl: '.slide-blog__arrow-next',
					}}
					pagination={{
						el: '.gallery-blog__dotts',
						clickable: true,
					}}
					breakpoints={{
						320: {
							spaceBetween: 10,
							slidesPerView: 1.05,
							centeredSlides: true,
						},
						400: {
							spaceBetween: 20,
							slidesPerView: 1.19,
							centeredSlides: true,
						},
						767: {
							spaceBetween: 20,
							slidesPerView: 1.07,
						},
						991: {
							spaceBetween: 20,
							slidesPerView: 1.07,
						},
						1200: {
							slidesPerView: 1.4,
						},
					}}
					// loop={true}
					spaceBetween={60}
					slidesPerView="1.4"
					modules={[Navigation, Pagination]}
				>
					<SwiperSlide className="gallery-blog__slide slide-blog">
						<div className="slide-blog__body">
							<div className="slide-blog__image"><img src={img.av01} alt="Image" /><div className="slide-blog__subname">Имя Фамилия<span>ООО “Компания”</span></div></div>
							<div className="slide-blog__content">
								<div className="slide-blog__top">
									<div className="slide-blog__name">Имя Фамилия<span>ООО “Компания”</span></div>
									<div className="slide-blog__arrows">
										<button type="button" className="slide-blog__arrow slide-blog__arrow-prev"></button>
										<button type="button" className="slide-blog__arrow slide-blog__arrow-next"></button>
									</div>
								</div>
								<div className="slide-blog__about">
									<h4 className="slide-blog__title">Заголовок отзыва</h4>
									<div className="slide-blog__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								<a href="" className="slide-blog__link link">Рекомендательное письмо</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="gallery-blog__slide slide-blog">
						<div className="slide-blog__body">
							<div className="slide-blog__image"><img src={img.av02} alt="Image" /><div className="slide-blog__subname">Имя Фамилия<span>ООО “Компания”</span></div></div>
							<div className="slide-blog__content">
								<div className="slide-blog__top">
									<div className="slide-blog__name">Имя Фамилия<span>ООО “Компания”</span></div>
									<div className="slide-blog__arrows">
										<button type="button" className="slide-blog__arrow arrow-rotate slide-blog__arrow-prev"></button>
										<button type="button" className="slide-blog__arrow slide-blog__arrow-next"></button>
									</div>
								</div>
								<div className="slide-blog__about">
									<h4 className="slide-blog__title">Заголовок отзыва</h4>
									<div className="slide-blog__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								<a href="" className="slide-blog__link link">Рекомендательное письмо</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="gallery-blog__slide slide-blog">
						<div className="slide-blog__body">
							<div className="slide-blog__image"><img src={img.av01} alt="Image" /><div className="slide-blog__subname">Имя Фамилия<span>ООО “Компания”</span></div></div>
							<div className="slide-blog__content">
								<div className="slide-blog__top">
									<div className="slide-blog__name">Имя Фамилия<span>ООО “Компания”</span></div>
									<div className="slide-blog__arrows">
										<button type="button" className="slide-blog__arrow arrow-rotate slide-blog__arrow-prev"></button>
										<button type="button" className="slide-blog__arrow slide-blog__arrow-next"></button>
									</div>
								</div>
								<div className="slide-blog__about">
									<h4 className="slide-blog__title">Заголовок отзыва</h4>
									<div className="slide-blog__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								<a href="" className="slide-blog__link link">Рекомендательное письмо</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="gallery-blog__slide slide-blog">
						<div className="slide-blog__body">
							<div className="slide-blog__image"><img src={img.av02} alt="Image" /><div className="slide-blog__subname">Имя Фамилия<span>ООО “Компания”</span></div></div>
							<div className="slide-blog__content">
								<div className="slide-blog__top">
									<div className="slide-blog__name">Имя Фамилия<span>ООО “Компания”</span></div>
									<div className="slide-blog__arrows">
										<button type="button" className="slide-blog__arrow arrow-rotate slide-blog__arrow-prev"></button>
										<button type="button" className="slide-blog__arrow slide-blog__arrow-next"></button>
									</div>
								</div>
								<div className="slide-blog__about">
									<h4 className="slide-blog__title">Заголовок отзыва</h4>
									<div className="slide-blog__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								<a href="" className="slide-blog__link link">Рекомендательное письмо</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="gallery-blog__slide slide-blog">
						<div className="slide-blog__body">
							<div className="slide-blog__image"><img src={img.av01} alt="Image" /><div className="slide-blog__subname">Имя Фамилия<span>ООО “Компания”</span></div></div>
							<div className="slide-blog__content">
								<div className="slide-blog__top">
									<div className="slide-blog__name">Имя Фамилия<span>ООО “Компания”</span></div>
									<div className="slide-blog__arrows">
										<button type="button" className="slide-blog__arrow arrow-rotate slide-blog__arrow-prev"></button>
										<button type="button" className="slide-blog__arrow arrow-rotate slide-blog__arrow-next"></button>
									</div>
								</div>
								<div className="slide-blog__about">
									<h4 className="slide-blog__title">Заголовок отзыва</h4>
									<div className="slide-blog__text">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								<a href="" className="slide-blog__link link">Рекомендательное письмо</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="gallery-blog__dotts"></div>
			</div>
		</div>
	)
}

export default Blog