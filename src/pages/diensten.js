import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Pagehero from "@/components/pagehero";
import Instagram from "@/components/instagram";
import styles from "@/styles/diensten.module.css";
import diensten1 from "@/assets/img/diensten1.png"

export default function Diensten() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Diensten | Hair By Ouas</title>
          <meta name="description" content="Ontdek de diensten van Hair By Ouas, van knippen tot styling en haarbehandelingen. Alles voor jouw haarbehoeften." />
          <meta name="og:description" content="Bekijk de verschillende diensten die Hair By Ouas aanbiedt, van knippen en kleuren tot styling en haarbehandelingen." />
          <meta name="keywords" content="diensten, Hair By Ouas, knippen, kleuren, haarstyling, haarbehandelingen, kapsalon" />
          <meta property="og:url" content="https://www.kapperdede.com/diensten" />
          <meta property="og:title" content="Diensten | Hair By Ouas" />
      </Head>

      <Pagehero pagetitle="Diensten"/>

      <div className={styles.diensten}>
        <div>

          <div>
            <section>
              <h2>Heren Knippen</h2>
              
              <h3>Knippen / Drogen</h3>
              <p>Bij Hair By Ouas in Krommenie bieden we een complete herenkapselservice, van knippen tot drogen. Of je nu op zoek bent naar een frisse snit of gewoon wat extra styling, ons ervaren team zorgt ervoor dat je kapsel perfect bij jouw stijl en gezichtsvorm past. We gebruiken hoogwaardige producten die zorgen voor een langdurig resultaat, zodat je er de hele dag verzorgd uitziet.</p>
              
              <h3>Knippen / Opscheren</h3>
              <p>Voor een strakke en moderne uitstraling is het opscheren van de zijkanten en nek een perfecte keuze. Hair By Ouas in Krommenie is gespecialiseerd in het creëren van scherpe lijnen en een mooi contrast tussen de haardos en de opgeschoren delen. We zorgen ervoor dat het resultaat niet alleen netjes is, maar ook precies past bij jouw persoonlijke stijl. Perfect voor een stoere, verzorgde look.</p>
              
              <h3>Knippen / Milimeteren</h3>
              <p>Met de milimetertechniek creëren we een strakke, kort geschoren look die makkelijk te onderhouden is. Of je nu kiest voor een volledig korte look of een subtielere overgang, wij zorgen voor een professionele afwerking. Milimeteren is ideaal voor mannen die op zoek zijn naar een schone, frisse uitstraling die er altijd goed uitziet, zonder dat je dagelijks veel tijd hoeft te besteden aan je haar.</p>
              
              <h3>Knippen / Fade</h3>
              <p>De fade is een populaire techniek waarbij het haar geleidelijk korter wordt naar de nek toe. Bij Hair By Ouas in Krommenie bieden we verschillende varianten van de fade, zoals de low fade, medium fade en high fade. Deze techniek zorgt voor een strakke en moderne uitstraling die de aandacht vestigt op de bovenkant van je kapsel, terwijl de zijkanten en nek netjes worden afgewerkt.</p>
              
              <h3>Baard Trimmen</h3>
              <p>Naast het knippen van haar biedt Hair By Ouas in Krommenie ook professionele baardverzorging. Of je nu een volledige baard hebt die je wilt trimmen of een subtiele baardlijn wilt creëren, wij zorgen voor een strakke afwerking. We helpen je de juiste baardstijl te kiezen die past bij je gezichtsvorm, en zorgen voor een verzorgde look die de hele dag blijft zitten.</p>
              
              <h3>65+ Knippen</h3>
              <p>Bij Hair By Ouas begrijpen we dat de behoeften van mannen boven de 65 jaar anders zijn. Daarom bieden wij een speciale knipservice voor senioren die niet alleen comfortabel is, maar ook stijlvol. Of je nu kiest voor een klassiek kort kapsel of een subtiele modernisering van je look, ons ervaren team zorgt ervoor dat je haar er verzorgd uitziet zonder dat je teveel tijd hoeft te besteden aan onderhoud.</p>

              <h3>Kinderen t/m 12 jaar Knippen en Scheren</h3>
              <p>Bij Hair By Ouas in Krommenie bieden we ook een speciale knip- en scheerservice voor kinderen t/m 12 jaar. Wij begrijpen dat kinderen vaak meer energie hebben en misschien niet zo lang stil willen zitten, daarom zorgen wij voor een snelle en comfortabele knipsessie. Van een trendy kapsel tot het scheren van een stoere fade of overloop, wij creëren een look die bij je kind past en hem of haar een zelfverzekerd gevoel geeft. Veiligheid en plezier staan bij ons voorop, zodat je kind altijd met een glimlach de deur uitloopt.</p>
            </section>
            <section>
              <Image src={diensten1} alt="Knippen en drogen"/>
            </section>
          </div>

        </div>
      </div>

      <Instagram/>

    </>
  );
}
