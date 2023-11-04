import "swiper/css";
import React from 'react'
import 'swiper/css/pagination';
import img from "../../assets/img.js"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


function Slider() {
	return (
		<Swiper className="media__swiper" pagination={true} modules={[Pagination]} spaceBetween={20} centeredSlides={true} slidesPerView="1.15" autoHeight={false}>
			<SwiperSlide className="media__slide">
				<div className="media__block block-media">
					<div className="block-media__image"><img src={img.media01} alt="Image" /></div>
					<div className="block-media__content">
						<h4 className="block-media__title">Анализ</h4>
						<p className="block-media__text text">Быстрый анализ трендов в девяти соц. сетях. Вы не упустите ни одного.</p>
						<a href="" className="block-media__link link">Подробнее</a>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="media__slide">
				<div className="media__block block-media">
					<div className="block-media__image"><img src={img.media03} alt="Image" /></div>
					<div className="block-media__content">
						<h4 className="block-media__title">Периоды</h4>
						<p className="block-media__text text">Следите за пабликами за любой удобный периодвремени.</p>
						<a href="" className="block-media__link link">Подробнее</a>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="media__slide">
				<div className="media__block block-media">
					<div className="block-media__image"><img src={img.media02} alt="Image" /></div>
					<div className="block-media__content">
						<h4 className="block-media__title">Проекты</h4>
						<p className="block-media__text text">Следите за проектами с самым большим покрытием социальных сетей.</p>
						<a href="" className="block-media__link link">Подробнее</a>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="media__slide">
				<div className="media__block block-media">
					<div className="block-media__image"><img src={img.media04} alt="Image" /></div>
					<div className="block-media__content">
						<h4 className="block-media__title">Аудитория</h4>
						<p className="block-media__text text">Более глубокий анализ целевой аудитории по полу, возрасту, геолокации.</p>
						<a href="" className="block-media__link link">Подробнее</a>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
export default Slider;