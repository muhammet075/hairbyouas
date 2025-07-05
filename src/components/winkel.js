
import { useEffect, useState, useRef } from "react";
import styles from "../styles/winkel.module.css";
import Link from "next/link";
import Image from "next/image";
import winkelBuiten from "@/assets/img/winkelbuiten.png";
import winkelBinnen from "@/assets/img/winkelbinnen.jpeg";

function Winkel() {


    return(      
        <div className={styles.winkel}>  
            <div>
                <section>
                    <h2>De beste kapper in Krommenie</h2>
                    <p>Hair By Ouas bestaat sinds 2025 en is een vertrouwd adres in Krommenie wat vlakbij Assendelft, Wormerveer, Zaandam en omgeving is voor iedereen die op zoek is naar een professioneel kapsel. Van strakke overlopen en fades tot klassieke en tijdloze stijlen, wij bieden een breed scala aan knip- en stylingopties. Altijd met oog voor detail, vakmanschap en de hoogste kwaliteit.</p>
                    <Link href="/diensten">Bekijk onze diensten</Link>
                </section>

                <section>
                    <Image src={winkelBuiten} alt="Hair By Ouas winkel"/>
                </section>
            </div>
        </div>
    )
}
  
export default Winkel;

