import React from 'react'
import "./Main.scss"
import img from "../../assets/img.js"

function Main() {
	return (
		<div className="main">
			<div className="main__top top-main">
				<div className="top-main__container">
					<div className="top-main__about">
						<h3 className="top-main__title title"><span>Анализируйте</span> <br /> соц. сети <br /> в одном сервисе</h3>
						<p className="top-main__text text">Создан для развития ваших соц. сетей создан для развития ваших соц. сетей</p>
						<a href="" className="top-main__button btn-blue"><img src={img.bird} alt="Icon" /><span></span>Попробовать бесплатно</a>
					</div>
					<div className="top-main__image"><img src={img.main} alt="Image" /></div>
				</div>
			</div>
			<div className="main__bot bot-main">
				<div className="bot-main__container">
					<div className="bot-main__logo"><img src={img.mainLogo} alt="Image" /></div>
					<div className="bot-main__logo"><img src={img.mainLogo} alt="Image" /></div>
					<div className="bot-main__logo"><img src={img.mainLogo} alt="Image" /></div>
					<div className="bot-main__logo"><img src={img.mainLogo} alt="Image" /></div>
					<div className="bot-main__logo"><img src={img.mainLogo} alt="Image" /></div>
					<div className="bot-main__logo"><img src={img.mainLogo} alt="Image" /></div>
				</div>
			</div>
		</div>
	)
}

export default Main