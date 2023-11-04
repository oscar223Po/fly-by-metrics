import React from 'react';
import "./Advantages.scss";
import img from "../../assets/img.js";

function Advantages() {
	return (
		<div className="advantage">
			<div className="advantage__item">
				<div className="advantage__image"><img src={img.ag01} alt="Icon" /></div>
				<h4 className="advantage__title">Владельцы <br /> бизнеса</h4>
				<p className="advantage__text">Держите руку на пульсе своих соц. сетей</p>
			</div>
			<div className="advantage__item">
				<div className="advantage__image"><img src={img.ag02} alt="Icon" /></div>
				<h4 className="advantage__title">Маркетологам</h4>
				<p className="advantage__text">Анализируйте паблики и находите эффективные способы коммуникаций</p>
			</div>
			<div className="advantage__item">
				<div className="advantage__image"><img src={img.ag03} alt="Icon" /></div>
				<h4 className="advantage__title">СММ <br /> специалистам</h4>
				<p className="advantage__text">Исследуйте тренды и аудиторию. Следитеза реакциями в проектах.</p>
			</div>
			<div className="advantage__item">
				<div className="advantage__image"><img src={img.ag04} alt="Icon" /></div>
				<h4 className="advantage__title">И другим</h4>
				<p className="advantage__text">Обширный функционалсервиса поможет раскрытьвесь потенциал ваших социальных сетей</p>
			</div>
		</div>
	)
}

export default Advantages;