import { useState } from 'react'
import React from 'react'
import "./Rate.scss"
import Month from './Month/Month';
import Year from './Year/Year';

function Rate() {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	}
	return (
		<div className="rate">
			<div className="rate__container">
				<div className="rate__top top-rate">
					<div className="top-rate__remnant"></div>
					<h4 className="top-rate__title title">Тарифы</h4>
					<nav className="top-rate__navigation">
						<button type="button" 
						className={toggleState === 1 ? "top-rate__button _btn-active" : "top-rate__button"}
						onClick={() => toggleTab(1)}
						>Месяц
						</button>
						<span>/</span>
						<button type="button"
						className={toggleState === 2 ? "top-rate__button _btn-active" : "top-rate__button"}
						onClick={() => toggleTab(2)}
						>Год</button>
					</nav>
				</div>
				<div className="rate__tabs tabs-rate">
					<div className={toggleState === 1 ? "tabs-rate__body _tab-active" : "tabs-rate__body"}><Month/></div>
					<div className={toggleState === 2 ? "tabs-rate__body _tab-active" : "tabs-rate__body"}><Year/></div>
				</div>
			</div>
		</div>
	)
}

export default Rate