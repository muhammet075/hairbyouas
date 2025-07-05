import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/hero.module.css";
import googleReviewLogo from "@/assets/img/google-review-logo.svg";
import knopklokReviewLogo from "@/assets/img/knipklok-review-logo.png";
import ster from "@/assets/icons/goudenster.svg";
import greenCheck from "@/assets/icons/greencheck.svg";
import afspraakico from "@/assets/icons/afspraak-ico.svg";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>

        <div>
            <section>
                <h1>Welkom bij<br/> Hair By Ouas</h1>
                <p>Hair By Ouas is al sinds 2003 dé specialist in herenknipbeurten in Krommenie en omstreken. Of je nu komt voor een strakke overloop fade of een klassiek kapsel, wij zorgen ervoor dat je er altijd scherp en fris uitziet!</p>

                <div>
                    <Link href="https://knipklok.nl/kapperszaak/hair-by-ouas" target="_blank">
                        <Image src={knopklokReviewLogo} alt="Knipklok Logo"/>
                        <span>
                            <p>4.8/5.0</p>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                        </span>
                    </Link>


                    <Link href="http://bit.ly/4lpisiU" target="_blank">
                        <Image src={googleReviewLogo} alt="Google Logo"/>
                        <span>
                            <p>4.7/5.0</p>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                            <Image src={ster} alt="Gouden ster"/>
                        </span>
                    </Link>
                </div>

            </section>

            <section>
                <h2>Hoe kunnen wij helpen?</h2>
                <ul>
                    <li><Link href="https://knipklok.nl/kapperszaak/hair-by-ouas/afspraak" target="_blank"><Image src={afspraakico} alt="Klikkende pijlx"/>Maak afspraak</Link></li>
                    <li><Link href="/prijzen">Prijzen</Link></li>
                </ul>

                <ul>
                    <li><Image src={greenCheck} alt="Check icoon"/> Knippen & föhnen</li>
                    <li><Image src={greenCheck} alt="Check icoon"/> Strakke overloop & fade</li>
                    <li><Image src={greenCheck} alt="Check icoon"/> Baard trimmen & milimeteren</li>
                </ul>
            </section>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
