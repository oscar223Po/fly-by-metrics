import React from 'react'
import "./Media.scss"
import img from "../../assets/img.js"
import Slider from '../../components/Slider/Slider.jsx'


export default function Media() {
	return (
		<div className="media">
			<div className="media__container">
				<div className="media__top">
					<h3 className="media__title title">Создан для развития ваших соц. сетей</h3>
					<h5 className="media__subtitle">и протестирован профессионалами рынка</h5>
				</div>
				<div className="media__body">
					<div className="media__blocks">
						<div className="media__block block-media">
							<div className="block-media__image"><img src={img.media01} alt="Image" /></div>
							<div className="block-media__content">
								<h4 className="block-media__title">Анализ</h4>
								<p className="block-media__text text">Быстрый анализ трендов в девяти соц. сетях. Вы не упустите ни одного.</p>
								<a href="" className="block-media__link link">Подробнее</a>
							</div>
						</div>
						<div className="media__block block-media">
							<div className="block-media__image"><img src={img.media03} alt="Image" /></div>
							<div className="block-media__content">
								<h4 className="block-media__title">Периоды</h4>
								<p className="block-media__text text">Следите за пабликами за любой удобный периодвремени.</p>
								<a href="" className="block-media__link link">Подробнее</a>
							</div>
						</div>
					</div>
					<div className="media__blocks">
						<div className="media__block block-media">
							<div className="block-media__image"><img src={img.media02} alt="Image" /></div>
							<div className="block-media__content">
								<h4 className="block-media__title">Проекты</h4>
								<p className="block-media__text text">Следите за проектами с самым большим покрытием социальных сетей.</p>
								<a href="" className="block-media__link link">Подробнее</a>
							</div>
						</div>
						<div className="media__block block-media">
							<div className="block-media__image"><img src={img.media04} alt="Image" /></div>
							<div className="block-media__content">
								<h4 className="block-media__title">Аудитория</h4>
								<p className="block-media__text text">Более глубокий анализ целевой аудитории по полу, возрасту, геолокации.</p>
								<a href="" className="block-media__link link">Подробнее</a>
							</div>
						</div>
					</div>
				</div>
				<div className="media__gallery"><Slider/></div>
			</div>
		</div>
	)
}
