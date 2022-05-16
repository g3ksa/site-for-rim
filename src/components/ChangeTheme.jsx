import Moon  from '../img/moon.png'
import Sun from '../img/sun.png'

const ChangeTheme = () => {
	return (
		<div className="change-theme__container" onClick={() => {
			const html = document.querySelector('html');
			if (html.classList.contains('light')){
				html.classList.remove('light');
				html.classList.add('dark');
				localStorage.setItem('theme', 'dark')
			} else {
				html.classList.remove('dark');
				html.classList.add('light');
				localStorage.setItem('theme', 'light')
			}
		}}>
			<div className="change-theme__item">
				<img src={Moon}></img>
			</div>
		</div>
	);
}

export { ChangeTheme };