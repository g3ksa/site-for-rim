import { useState } from 'react';

import { AnimatedPage } from '../../components/AnimatedPage';
import dark_stats_1 from '../../img/stats/dark_theme/stats_1.png';
import dark_stats_2 from '../../img/stats/dark_theme/stats_2.png';
import dark_stats_3 from '../../img/stats/dark_theme/stats_3.png';
import dark_stats_4 from '../../img/stats/dark_theme/stats_4.png';
import dark_stats_5 from '../../img/stats/dark_theme/stats_5.png';
import light_stats_1 from '../../img/stats/light_theme/stats_1.png';
import light_stats_2 from '../../img/stats/light_theme/stats_2.png';
import light_stats_3 from '../../img/stats/light_theme/stats_3.png';
import light_stats_4 from '../../img/stats/light_theme/stats_4.png';
import light_stats_5 from '../../img/stats/light_theme/stats_5.png';

const darkImgs = {
	1: dark_stats_1,
	2: dark_stats_2,
	3: dark_stats_3,
	4: dark_stats_4,
	5: dark_stats_5
}

const lightImgs = {
	1: light_stats_1,
	2: light_stats_2,
	3: light_stats_3,
	4: light_stats_4,
	5: light_stats_5
}


const changeSrc = () => {
	if (document.querySelector('html').classList.contains('dark')){
		let statsImgs = document.querySelectorAll('.stats__item img');
		for (let i = 0; i < 5; i++){
			statsImgs[i].src = lightImgs[i+1];
			console.log('+')
		}
	}else {
		let statsImgs = document.querySelectorAll('.stats__item img');
		for (let i = 0; i < statsImgs.length; i++){
			statsImgs[i].src = darkImgs[i+1];
			console.log('_')
		}
	}
}

const Stats = () => {

	return(
		<div className="container">
			<div className="stats block">
				<div className="stats__title title">
					Объем средств российского банковского сектора, размещенных на кор.счетах ностро в кред.организациях за рубежом, на начало года(в млрд. руб.)
				</div>
				<div className="stats__item">
					<img src={!localStorage.theme ? dark_stats_1 : localStorage.getItem('theme') == 'dark' ? dark_stats_1 : light_stats_1}></img>
				</div>
			</div>
			<div className="stats block">
				<div className="stats__title title">
					Предоставленные кредиты, сделки обратного РЕПО, субординированные кредиты российского банковского сектора, размещенные в кредитных организациях за рубежом (в млрд. руб.)
				</div>
				<div className="stats__item">
					<img src={!localStorage.theme ? dark_stats_2 : localStorage.getItem('theme') == 'dark' ? dark_stats_2 : light_stats_2}></img>
				</div>
			</div>
			<div className="stats block">
				<div className="stats__title title">
					Удельный вес средств, размещенных в кредитных организациях в офшорах и привлечённых из них же, в совокупном объеме активов российского банковского сектора, на начало года
				</div>
				<div className="stats__item">
					<img src={!localStorage.theme ? dark_stats_3 : localStorage.getItem('theme') == 'dark' ? dark_stats_3 : light_stats_3}></img>
				</div>
			</div>
			<div className="stats block">
				<div className="stats__title title">
					Объем средств зарубежных банков, привлеченных рос.банк.сектором на кор.счета(в млрд. руб.)
				</div>
				<div className="stats__item">
					<img src={!localStorage.theme ? dark_stats_4 : localStorage.getItem('theme') == 'dark' ? dark_stats_4 : light_stats_4}></img>
				</div>
			</div>
			<div className="stats block">
				<div className="stats__title title">
				Привлеченные рос.банковским сектором кредиты и депозиты, а также сделки прямого РЕПО и субординированные кредиты (в млрд. руб.)
				</div>
				<div className="stats__item">
					<img src={!localStorage.theme ? dark_stats_5 : localStorage.getItem('theme') == 'dark' ? dark_stats_5 : light_stats_5}></img>
				</div>
			</div>
		</div>
	)
}

export {Stats, changeSrc};