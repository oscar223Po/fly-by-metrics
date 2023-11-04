import React from 'react'
import "./Header.scss"
import img from "../../assets/img.js"

function Header() {
	return (
		<div className="header">
			<a href="" className="header__logo"><img src={img.logo} alt="Logo" /></a>
			<ul className="header__list">
				<li className="header__item"><a href="" className="header__link">Продукты</a></li>
				<li className="header__item"><a href="" className="header__link">Кому подойдет</a></li>
				<li className="header__item"><a href="" className="header__link">Отзывы</a></li>
				<li className="header__item"><a href="" className="header__link">Тарифы</a></li>
			</ul>
			<div className="header__actions">
				<button type="button" className="header__button btn-blue">Демо</button>
				<button type="button" className="header__button btn-gray">Вход</button>
				<button type="button" className="header__button"><img src={img.user} alt="Icon" /></button>
			</div>
		</div>
	)
}

export default Header