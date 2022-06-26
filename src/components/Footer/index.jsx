import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Thinh Nguyen
			<small className={Styles.byline}>Full-stack developer</small>
		</footer>
	);
}
export default Footer;
