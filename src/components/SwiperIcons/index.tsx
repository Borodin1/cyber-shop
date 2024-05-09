"use client";
import styles from "./SwiperIcons.module.scss";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { arr } from "./arr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import MobileSwiper from "./MibileSwiper";
import Link from "next/link";

export default function SwiperIcons() {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null)
  const navigationNextRef = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <div className={styles.swiper}>
        <div className={styles.container}>
          <div className={styles.button}>
            <h2>Browse By Category</h2>
            <div className={styles.div}>
              <FaChevronLeft className={styles.arrow} onClick={() => navigationPrevRef.current?.click()} />
              <FaChevronRight className={styles.arrow} onClick={() => navigationNextRef.current?.click()} />
            </div>
          </div>
          <Swiper
            className={styles.Swiper}
            slidesPerView={6}
            modules={[Navigation]}
            navigation={{
              nextEl: navigationNextRef?.current,
              prevEl: navigationPrevRef?.current
            }}>
            {arr.map(({ icon, title, link }, i) => (
              <SwiperSlide className={styles["swiper-slide"]} key={i}>
                <Link href={link} key={i} className={styles["swiper-icon"]}>
                  {icon}
                  {title}
                </Link>
              </SwiperSlide>
            ))}
            <div hidden>
              <div ref={navigationPrevRef}></div>
              <div ref={navigationNextRef}></div>
            </div>
          </Swiper>
        </div>
      </div>
      <MobileSwiper />
    </>
  );
}
