import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagehero from "@/components/pagehero";

export default function Algemenevoorwaarden() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Algemene Voorwaarden | Hair By Ouas</title>
          <meta name="description" content="Algemene voorwaarden van Hair By Ouas. Lees meer over onze voorwaarden voor diensten, betalingen, aansprakelijkheid en meer."/>
          <meta name="og:description" content="Algemene voorwaarden van Hair By Ouas. Lees meer over onze voorwaarden voor diensten, betalingen, aansprakelijkheid en meer."/>
          <meta name="keywords" content="algemene voorwaarden, Hair By Ouas, diensten, betalingen, aansprakelijkheid"/>
          <meta property="og:url" content="https://www.kapperdede.com/algemene-voorwaarden"/>
          <meta property="og:title" content="Algemene Voorwaarden | Hair By Ouas"/>
      </Head>

      <Pagehero pagetitle="Algemene Voorwaarden"/>


      <div className="pagelayout">
        <div>
            <div>
                <section>
                    <h2>1. Definities</h2>
                    <p>In deze voorwaarden wordt verstaan onder:</p>
                    <ul>
                        <li><strong>Opdrachtgever:</strong> de persoon die gebruik maakt van de kappersdiensten van Hair By Ouas.</li>
                        <li><strong>Opdrachtnemer:</strong> Hair By Ouas, de kapperszaak ingeschreven bij de Kamer van Koophandel onder nummer 94401985.</li>
                        <li><strong>Overeenkomst:</strong> de overeenkomst tussen de opdrachtgever en Hair By Ouas voor het uitvoeren van kappersdiensten.</li>
                    </ul>

                    <h2>2. Toepasselijkheid</h2>
                    <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, afspraken, behandelingen en leveringen van diensten door Hair By Ouas, tenzij schriftelijk anders is overeengekomen.</p>

                    <h2>3. Offertes en Aanbiedingen</h2>
                    <p>Alle offertes en aanbiedingen van Hair By Ouas zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Een offerte of aanbieding vervalt indien de dienst of het product waarop de offerte betrekking heeft in de tussentijd niet meer beschikbaar is.</p>

                    <h2>4. Prijzen en Betaling</h2>
                    <p>Betaling voor de kappersdiensten dient direct na de behandeling te worden voldaan. Dit kan contant, via pin of via andere overeengekomen betaalmethoden. De opgegeven prijzen zijn inclusief materialen, tenzij anders aangegeven, en exclusief btw en eventuele andere heffingen van overheidswege.</p>
                    
                    <h2>5. Uitvoering van de Overeenkomst</h2>
                    <p>Hair By Ouas zal de overeenkomst naar beste inzicht en vakmanschap uitvoeren. Indien het voor een goede uitvoering van de kappersdiensten noodzakelijk is, heeft Hair By Ouas het recht bepaalde werkzaamheden door andere, gekwalificeerde medewerkers of derden te laten uitvoeren.</p>

                    <h2>6. Wijziging van de Overeenkomst</h2>
                    <p>Indien tijdens de uitvoering van de overeenkomst blijkt dat het voor een behoorlijke uitvoering noodzakelijk is om de geplande behandeling te wijzigen of aan te vullen, zullen partijen tijdig en in onderling overleg de overeenkomst aanpassen. Dit kan bijvoorbeeld het geval zijn bij onvoorziene problemen met het haar of de gewenste stijl.</p>

                    <h2>7. Annulering</h2>
                    <p>Annulering van een afspraak dient ten minste 24 uur van tevoren te gebeuren. Bij annulering binnen 24 uur voor de geplande behandeling is de opdrachtgever 50% van het afgesproken bedrag verschuldigd. Bij een no-show (niet verschijnen zonder annulering) is de opdrachtgever het volledige bedrag verschuldigd.</p>

                    <h2>8. Aansprakelijkheid</h2>
                    <p>Hair By Ouas is slechts aansprakelijk voor directe schade die is ontstaan door opzet of grove schuld van Hair By Ouas. Dit geldt uitsluitend voor schade die direct gerelateerd is aan de behandeling, zoals schade door verkeerd knippen of het gebruik van ongepaste producten. Hair By Ouas is niet aansprakelijk voor indirecte schade, zoals gevolgschade of schade door bijvoorbeeld het niet goed onderhouden van het haar na de behandeling.</p>

                    <h2>9. Overmacht</h2>
                    <p>In geval van overmacht, zoals ziekte van de kapper of andere onvoorziene omstandigheden, is Hair By Ouas gerechtigd de overeenkomst te ontbinden of de afspraak te verzetten zonder dat de opdrachtgever aanspraak kan maken op enige schadevergoeding. Dit geldt ook in gevallen van extreme weersomstandigheden of andere onvoorziene situaties die de bedrijfsvoering belemmeren.</p>

                    <h2>10. Klachten</h2>
                    <p>Klachten over de verrichte kappersdiensten dienen door de opdrachtgever binnen 8 dagen na de behandeling schriftelijk te worden gemeld aan Hair By Ouas. De klacht dient een zo gedetailleerd mogelijke omschrijving van de tekortkoming te bevatten, zodat Hair By Ouas in staat is adequaat te reageren. Indien de klacht terecht is, zal Hair By Ouas de nodige stappen ondernemen om de situatie naar tevredenheid op te lossen.</p>

                    <h2>11. Toepasselijk Recht en Geschillen</h2>
                    <p>Op alle rechtsbetrekkingen waarbij Hair By Ouas partij is, is uitsluitend het Nederlands recht van toepassing. Geschillen zullen uitsluitend worden voorgelegd aan de bevoegde rechter in het arrondissement waar Hair By Ouas is gevestigd.</p>

                    <h2>12. Wijzigingen in de Algemene Voorwaarden</h2>
                    <p>Hair By Ouas behoudt zich het recht voor deze algemene voorwaarden te wijzigen of aan te vullen. Wijzigingen gelden ook ten aanzien van reeds gesloten overeenkomsten met inachtneming van een termijn van 30 dagen na schriftelijke kennisgeving van de wijziging.</p>
                </section>
            </div>
        </div>
      </div>
    </>
  );
}
