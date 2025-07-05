import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/openingstijden.module.css";
import openIco from "@/assets/icons/open.svg";
import geslotenIco from "@/assets/icons/gesloten.svg";

function Openingstijden() {
  return (
    <div className={styles.openingstijden}>
      <div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.340740417917!2d4.752285201059947!3d52.50300509383361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fbc0a54a6705%3A0x353cc1314e7c2595!2sKapper%20dede!5e0!3m2!1snl!2snl!4v1731365693063!5m2!1snl!2snl" loading="lazy" ></iframe>
        
        <section>
          <h2>Openingstijden</h2>
          <ul>
            <li><span><Image src={openIco} alt="Open icoon"/>Maandag</span> <span>12:00 - 18:00</span></li>
            <li><span><Image src={openIco} alt="Open icoon"/>Dinsdag</span> <span>09:00 - 18:00</span></li>
            <li><span><Image src={openIco} alt="Open icoon"/>Woensdag</span> <span>09:00 - 18:00</span></li>
            <li><span><Image src={openIco} alt="Open icoon"/>Donderdag</span> <span>09:00 - 20:00</span></li>
            <li><span><Image src={openIco} alt="Open icoon"/>Vrijdag</span> <span>09:00 - 18:00</span></li>
            <li><span><Image src={openIco} alt="Open icoon"/>Zaterdag</span> <span>09:00 - 18:00</span></li>
            <li><span><Image src={geslotenIco} alt="Gesloten icoon"/>Zondag</span> <span>Gesloten</span></li>
          </ul>
          <Link href="https://knipklok.nl/kapperszaak/hair-by-ouas/afspraak" target="_blank">Maak een afspraak</Link>
        </section>

      </div>
    </div>
  );
}

export default Openingstijden;
