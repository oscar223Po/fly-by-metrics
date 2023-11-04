import "swiper/css";
import React from 'react'
import 'swiper/css/pagination';
import img from "../../../assets/img.js"
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Month() {
	return (
		<>
			<div className="price">
				<div className="price__body price__body--white">
					<div className="price__top">Гостевой<span>Бесплатно</span></div>
					<div className="price__items items-price">
						<div className="items-price__item"><span>Кол-во аккаунтов в социальных медиа</span><div className="items-price__num">3</div></div>
						<div className="items-price__item"><span>Кол-во пользователей</span><div className="items-price__num">1</div></div>
						<div className="items-price__item"><span>Ретроспектива (в месяцах, с момента добавления в систему)</span><div className="items-price__num">1</div></div>
						<div className="items-price__item"><span>Детальная статистика</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Статистика чужих сообществ</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Перечень доступных для анализа социальных медиа</span><div className="items-price__ico"><a href=""><img src={img.vkb} alt="Icon" /></a><a href=""><img src={img.okb} alt="Icon" /></a><a href=""><img src={img.tgb} alt="Icon" /></a></div></div>
						<div className="items-price__item"><span>Доступ к API</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Мониторинг комментариев, сообщений и упоминаний</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Кол-во доступных ссылок в тарифе, в месяц</span><div className="items-price__num">1 000</div></div>
						<div className="items-price__item"><span>Доп. пользователи</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Доп. ссылки для тарифа</span><div className="items-price__num">1 000 за 150₽</div></div>
					</div>
					<div className="price__button">
						<button type="button" className="btn-blue">Выбрать</button>
					</div>
				</div>
				<div className="price__body price__body--blue">
					<div className="price__top">Бизнес<span>3 000₽ в мес.</span></div>
					<div className="price__items items-price">
						<div className="items-price__item"><span>Кол-во аккаунтов в социальных медиа</span><div className="items-price__num">10</div></div>
						<div className="items-price__item"><span>Кол-во пользователей</span><div className="items-price__num">1</div></div>
						<div className="items-price__item"><span>Ретроспектива (в месяцах, с момента добавления в систему)</span><div className="items-price__num">6</div></div>
						<div className="items-price__item"><span>Детальная статистика</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Статистика чужих сообществ</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Перечень доступных для анализа социальных медиа</span><div className="items-price__num">Все</div></div>
						<div className="items-price__item"><span>Доступ к API</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Мониторинг комментариев, сообщений и упоминаний</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Кол-во доступных ссылок в тарифе, в месяц</span><div className="items-price__num">100 000</div></div>
						<div className="items-price__item"><span>Доп. пользователи</span><div className="items-price__num">500₽ за 1 шт.</div></div>
						<div className="items-price__item"><span>Доп. ссылки для тарифа</span><div className="items-price__num">-</div></div>
					</div>
					<div className="price__button">
						<button type="button" className="btn-white">Выбрать</button>
					</div>
				</div>
				<div className="price__body price__body--dark">
					<div className="price__top">Агентство<span>35 000₽ в мес.</span></div>
					<div className="price__items items-price">
						<div className="items-price__item"><span>Кол-во аккаунтов в социальных медиа</span><div className="items-price__num">300</div></div>
						<div className="items-price__item"><span>Кол-во пользователей</span><div className="items-price__num">10</div></div>
						<div className="items-price__item"><span>Ретроспектива (в месяцах, с момента добавления в систему)</span><div className="items-price__num">∞</div></div>
						<div className="items-price__item"><span>Детальная статистика</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Статистика чужих сообществ</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Перечень доступных для анализа социальных медиа</span><div className="items-price__num">Все</div></div>
						<div className="items-price__item"><span>Доступ к API</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Мониторинг комментариев, сообщений и упоминаний</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
						<div className="items-price__item"><span>Кол-во доступных ссылок в тарифе, в месяц</span><div className="items-price__num">100 000</div></div>
						<div className="items-price__item"><span>Доп. пользователи</span><div className="items-price__num">500₽ за 1 шт.</div></div>
						<div className="items-price__item"><span>Доп. ссылки для тарифа</span><div className="items-price__num">-</div></div>
					</div>
					<div className="price__button">
						<button type="button" className="btn-blue">Выбрать</button>
					</div>
				</div>
			</div>
			<Swiper className="tarif"
				// pagination={true} 
				modules={[Pagination]}
				spaceBetween={20}
				centeredSlides={true}
				slidesPerView="1.5"
				pagination={{
					el: '.tarif__dotts',
					clickable: true,
				}}
				breakpoints={{
					320: {
						spaceBetween: 10,
						slidesPerView: 1.1,
					},
					479: {
						spaceBetween: 20,
						slidesPerView: 1.3,
					},
					767: {
						spaceBetween: 20,
						slidesPerView: 1.5,
					},
				}}
			>
				<SwiperSlide className="tarif__slide">
					<div className="price__body price__body--white">
						<div className="price__top">Гостевой<span>Бесплатно</span></div>
						<div className="price__items items-price">
							<div className="items-price__item"><span>Кол-во аккаунтов в социальных медиа</span><div className="items-price__num">3</div></div>
							<div className="items-price__item"><span>Кол-во пользователей</span><div className="items-price__num">1</div></div>
							<div className="items-price__item"><span>Ретроспектива (в месяцах, с момента добавления в систему)</span><div className="items-price__num">1</div></div>
							<div className="items-price__item"><span>Детальная статистика</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Статистика чужих сообществ</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Перечень доступных для анализа социальных медиа</span><div className="items-price__ico"><a href=""><img src={img.vkb} alt="Icon" /></a><a href=""><img src={img.okb} alt="Icon" /></a><a href=""><img src={img.tgb} alt="Icon" /></a></div></div>
							<div className="items-price__item"><span>Доступ к API</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Мониторинг комментариев, сообщений и упоминаний</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Кол-во доступных ссылок в тарифе, в месяц</span><div className="items-price__num">1 000</div></div>
							<div className="items-price__item"><span>Доп. пользователи</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Доп. ссылки для тарифа</span><div className="items-price__num">1 000 за 150₽</div></div>
						</div>
						<div className="price__button">
							<button type="button" className="btn-blue">Выбрать</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="price__slide">
					<div className="price__body price__body--blue">
						<div className="price__top">Бизнес<span>3 000₽ в мес.</span></div>
						<div className="price__items items-price">
							<div className="items-price__item"><span>Кол-во аккаунтов в социальных медиа</span><div className="items-price__num">10</div></div>
							<div className="items-price__item"><span>Кол-во пользователей</span><div className="items-price__num">1</div></div>
							<div className="items-price__item"><span>Ретроспектива (в месяцах, с момента добавления в систему)</span><div className="items-price__num">6</div></div>
							<div className="items-price__item"><span>Детальная статистика</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Статистика чужих сообществ</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Перечень доступных для анализа социальных медиа</span><div className="items-price__num">Все</div></div>
							<div className="items-price__item"><span>Доступ к API</span><div className="items-price__img"><img src={img.cnl} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Мониторинг комментариев, сообщений и упоминаний</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Кол-во доступных ссылок в тарифе, в месяц</span><div className="items-price__num">100 000</div></div>
							<div className="items-price__item"><span>Доп. пользователи</span><div className="items-price__num">500₽ за 1 шт.</div></div>
							<div className="items-price__item"><span>Доп. ссылки для тарифа</span><div className="items-price__num">-</div></div>
						</div>
						<div className="price__button">
							<button type="button" className="btn-white">Выбрать</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="price__slide">
					<div className="price__body price__body--dark">
						<div className="price__top">Агентство<span>35 000₽ в мес.</span></div>
						<div className="price__items items-price">
							<div className="items-price__item"><span>Кол-во аккаунтов в социальных медиа</span><div className="items-price__num">300</div></div>
							<div className="items-price__item"><span>Кол-во пользователей</span><div className="items-price__num">10</div></div>
							<div className="items-price__item"><span>Ретроспектива (в месяцах, с момента добавления в систему)</span><div className="items-price__num">∞</div></div>
							<div className="items-price__item"><span>Детальная статистика</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Статистика чужих сообществ</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Перечень доступных для анализа социальных медиа</span><div className="items-price__num">Все</div></div>
							<div className="items-price__item"><span>Доступ к API</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Мониторинг комментариев, сообщений и упоминаний</span><div className="items-price__img"><img src={img.cor} alt="Icon" /></div></div>
							<div className="items-price__item"><span>Кол-во доступных ссылок в тарифе, в месяц</span><div className="items-price__num">100 000</div></div>
							<div className="items-price__item"><span>Доп. пользователи</span><div className="items-price__num">500₽ за 1 шт.</div></div>
							<div className="items-price__item"><span>Доп. ссылки для тарифа</span><div className="items-price__num">-</div></div>
						</div>
						<div className="price__button">
							<button type="button" className="btn-blue">Выбрать</button>
						</div>
					</div>
				</SwiperSlide>
				<div className="tarif__dotts"></div>
			</Swiper>
		</>
	)
}

export default Month