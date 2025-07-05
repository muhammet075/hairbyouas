
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
                <div className="elfsight-app-ad5054db-2a97-46d0-8235-d11b39c458e6" data-elfsight-app-lazy></div>
            </div>
        </div>
    )
}
  
export default Instagram;

