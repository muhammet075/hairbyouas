
import { useEffect, useState, useRef } from "react";
import styles from "../styles/instagram.module.css";
import Link from "next/link";
import Image from "next/image";
import instaIco from "@/assets/icons/instagram.svg";

function Instagram() {


    return(      
        <div className={styles.instagram}>  
            <div>
                <section>
                    <h2>Volg ons op Instagram</h2>
                    <Link href="https://www.instagram.com/hairbyouas" target="_blank"><Image src={instaIco} alt="Instagram logo"/></Link>
                </section>
                <div class="elfsight-app-dc25df88-353d-49f6-a7ee-0a68473939be" data-elfsight-app-lazy></div>
            </div>
        </div>
    )
}
  
export default Instagram;

