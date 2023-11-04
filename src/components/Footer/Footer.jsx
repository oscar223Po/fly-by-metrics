import "./Footer.scss"
import React from 'react'
import img from "../../assets/img.js"

function Footer() {
	return (
		<div className="footer">
			<div className="footer__main main-footer">
				<a href="" className="main-footer__logo"><img src={img.logo} alt="Logo" /></a>
				<ul className="main-footer__list">
					<li className="main-footer__item"><a href="" className="main-footer__link">Продукты</a></li>
					<li className="main-footer__item"><a href="" className="main-footer__link">Кому подойдет</a></li>
					<li className="main-footer__item"><a href="" className="main-footer__link">Отзывы</a></li>
					<li className="main-footer__item"><a href="" className="main-footer__link">Тарифы</a></li>
				</ul>
				<div className="main-footer__buttons">
					<button type="button" className="main-footer__button btn-blue">Вход</button>
					<button type="button" className="main-footer__button btn-blue">Демо</button>
					<button type="button" className="main-footer__button btn-gray">Вход</button>
				</div>
			</div>
			<div className="footer__copy copy-footer">
				<div className="copy-footer__main"><a href="mailto:info@info.com">info@info.com</a><span>2023 (с) Все права защищены</span></div>
				<div className="copy-footer__socials">
					<a href="" className="copy-footer__social"><img src={img.vk} alt="Icon" /></a>
					<a href="" className="copy-footer__social"><img src={img.ok} alt="Icon" /></a>
					<a href="" className="copy-footer__social"><img src={img.tg} alt="Icon" /></a>
				</div>
			</div>
		</div>
	)
}

export default Footer