
import { Button } from "react-bootstrap";



import styles from "../styles/Home.module.css";
import {useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ProductSection from "../Components/Advance/ProductSection";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../utils/Store/reducers/productsReducer";

import Header from "../Components/Advance/Header";

export default function Home(props) {
  const dispatch = useDispatch();
  dispatch(addProduct(props.products));
  const [deal, setDeal] = useState(props.deals);
  const theme = useSelector((state) => state.profile.theme);
  const dealElement = useRef();

  let Banners = deal.Images.map?.((el, index) => (
    <div
      key={index}
      style={{ minWidth: "100%", minHeight: "100%", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: "3",
          color: "white",
          top: "2vw",
          left: "15%",
          fontSize: "2vw",
        }}
        className="d-flex flex-column align-item-start"
      >
        <h1 style={{ fontSize: "4vw" }} ref={dealElement}>
          Deal {index + 1}
        </h1>
        <p className="w-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          neque pariatur nobis iure commodi perspiciatis quam earum quidem
          deleniti
        </p>
        <Button style={{ fontSize: "1vw", width: "100px" }}>Check out</Button>
      </div>

      <Image
        alt="offer"
        priority
        placeholder="blur"
        blurDataURL={"/male-banner.jpg"}
        width="100%"
        height="40%"
        quality={100}
        layout="responsive"
        objectFit="contain"
        src={el}
      />
    </div>
  ));

  return (
    //Home page
    <div className={styles.main}>
      
      <div className={styles.main}>
        <header>
          {/* middle navigation bar */}
         <Header/>
        </header>
        <main className={`bg-${theme}`}>
          <div className={styles.banner}>
            <div className={styles.BannerSlider}>{Banners}</div>
          </div>
          <ProductSection />
        </main>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const [productsRes, dealRes] = await Promise.all([
    fetch("https://fakestoreapi.com/products"),
    fetch("https://active-fitness.vercel.app/api/getDeal"),
  ]);

  const [products, deals] = await Promise.all([
    productsRes.json(),
    dealRes.json(),
  ]);

  return { props: { products, deals } };
}
