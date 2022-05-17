import Moon  from '../img/moon.svg'
import Sun from '../img/sun.svg'

const ChangeTheme = () => {
	return (
		<div className="change-theme__container" onClick={() => {
			const html = document.querySelector('html');
			if (html.classList.contains('light')){
				html.classList.remove('light');
				html.classList.add('dark');
				localStorage.setItem('theme', 'dark')
				document.querySelector('.change-theme__item img').src = Moon;
			} else {
				html.classList.remove('dark');
				html.classList.add('light');
				localStorage.setItem('theme', 'light')
				document.querySelector('.change-theme__item img').src = Sun;
			}
		}}>
			<div className="change-theme__item">
				<img src={localStorage.getItem('theme') == 'dark' ? Moon : Sun}></img>
			</div>
		</div>
	);
}
localStorage.getItem('theme') == 'dark' ? Moon : Sun
export { ChangeTheme };