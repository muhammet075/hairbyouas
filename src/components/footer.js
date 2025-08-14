import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Logo from "@/assets/logo/hairbyouas-logo.png";
import Altinweb from "@/assets/logo/altinweb-logo.svg";
import Instagram from "@/assets/icons/instagram2.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import knopklokReviewLogo from "@/assets/img/knipklok-logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <div>
            <section>
              <h3>Geïnteresseerd in een knipbeurt?</h3>
              <div>
                <Link href="https://knipklok.nl/kapperszaak/hair-by-ouas/afspraak" target="_blank">Maak afspraak</Link>
                <Link href="/prijzen">Prijzen</Link>
              </div>
            </section>
          </div>
        </div>
      </div>


      <div>
        <div>
        
        <ul>
          <li><Link href="/"><Image src={Logo} alt="Logo van Hair By Ouas"/></Link></li>
          <li><b>E-Mail:</b> <Link href="mailto:info@hairbyouas.nl">info@hairbyouas.nl</Link></li>
          <li><b>Telefoon:</b> 06 28 85 00 78</li>
          <li><b>KVK:</b> 94401985</li>
          <li><b>Adres:</b> Neptunuslaan 2A<br/> 1562XL Krommenie</li>
          <li>
            <ul>
              <li><Link href="https://www.instagram.com/hairbyouas/" target="_blank"><Image src={Instagram} alt="Instagram Logo"/></Link></li>
              {/* <li><Link href="https://www.facebook.com/hairbyouas/?locale=nl_NL" target="_blank"><Image src={Facebook} alt="Facebook Logo"/></Link></li> */}
              <li><Link href="https://www.tiktok.com/@hairbyouas?lang=nl-NL" target="_blank"><Image src={Tiktok} alt="TikTok Logo"/></Link></li>
              <li><Link href="https://api.whatsapp.com/send/?phone=31628850078" target="_blank"><Image src={WhatsApp} alt="WhatsApp Logo"/></Link></li>
            </ul>
          </li>
        </ul>

        <ul>
          <li><h2>Pagina's</h2></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/diensten">Diensten</Link></li>
          <li><Link href="/prijzen">Prijzen</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <ul>
          <li><h2>Locaties</h2></li>
          <li><Link href="/kapper-krommenie">Kapper in Krommenie</Link></li>
          <li><Link href="/kapper-wormerveer">Kapper in Wormerveer</Link></li>
          <li><Link href="/kapper-assendelft">Kapper in Assendelft</Link></li>
          <li><Link href="/kapper-zaandam">Kapper in Zaandam</Link></li>
          <li><Link href="/kapper-wormer">Kapper in Wormer</Link></li>
          <li><Link href="/kapper-zaandijk">Kapper in Zaandijk</Link></li>
        </ul>

        <ul>
          <li><h2>Handige Links</h2></li>
          <li><Link href="/privacybeleid">Privacybeleid</Link></li>
          <li><Link href="/cookiebeleid">Cookiebeleid</Link></li>
          <li><Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link></li>
          <li><Link target="_blank" href="/sitemap.xml">Sitemap</Link></li>
        </ul>

        </div>
      </div>


      <div>
        <div>
          <p>&copy; {new Date().getFullYear()} Copyright - Hair By Ouas</p>
          <span>Website ontwikkeling door <Link href="https://altinweb.nl/" target="_blank">Altinweb</Link> <Image src={Altinweb} alt="Logo van Altinweb"/></span>
        </div>
      </div>

      <Link target="_blank" href="https://knipklok.nl/kapperszaak/hair-by-ouas/afspraak"><Image src={knopklokReviewLogo} alt="Knipklok logo"/></Link>
      
    </footer>
  );
}

export default Footer;
