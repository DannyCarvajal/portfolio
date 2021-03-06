// COMPONENTS
import MainLogo from "components/global/MainLogo";
import ContactLinks from "components/global/ContactLinks";
// STYLES
import "./finalphrase.scss";
// IMAGES
import DannyDesktop from "assets/img/dannydesktop.webp";
import DannyMobile from "assets/img/dannymobile.webp";
const FinalPhrase = () => {
	return (
		<section className="finalPhrase">
			<MainLogo />
			<picture>
				<source media="(min-width:720px)" srcSet={DannyDesktop} />
				<source media="(min-width:200px)" srcSet={DannyMobile} />
				<img src={DannyDesktop} alt="Danny carvajal" />
			</picture>
			<blockquote>
				<p className="phrase">
					“If you are having fun you’re <br /> probably in the{" "}
					<span className="wordFound">right</span> way”
				</p>
				<cite className="name">Danny Carvajal</cite>
				<ContactLinks contacts={["linkedin", "github", "email"]} color="WHITE" />
			</blockquote>
		</section>
	);
};

export default FinalPhrase;
