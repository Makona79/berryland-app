import React from "react";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__content _container">
				<div className="footer__body">
					<div className="footer__column">
						<h4 className="footer__title">Для клиентов</h4>
						<a href="#" className="footer__link footer__item">
							Доставка и города
						</a>
						<a href="#" className="footer__link footer__item">
							Доставка и города
						</a>
					</div>
					<div className="footer__column">
						<h4 className="footer__title">О продукции</h4>
						<a href="#" className="footer__link footer__item">
							Фото продукции
						</a>
						<a href="#" className="footer__link footer__item">
							Вопросы и ответы
						</a>
					</div>
					<div className="footer__column">
						<h4 className="footer__title">Контакты</h4>
						<a
							href="mailto:info@berryland.co.il"
							className="footer__link footer__item"
						>
							info@berryland.co.il
						</a>
						<a href="tel:0559116577" className="footer__link footer__item">
							055-9116577
						</a>
					</div>
					<div className="footer__column">
						<h4 className="footer__title">Часы работы</h4>
						<p className="footer__item">вс – чт 10:00 – 18:00</p>
						<p className="footer__item">пт 10:00 – 13:00</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
