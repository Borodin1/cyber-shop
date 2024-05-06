"use client";
import styles from "./SwiperIcons.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { arr } from "./arr";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SwiperIcons() {
  return (
    <div className={styles.swiper}>
      <div className={styles.button}>
        <button>
          <FaChevronLeft className={styles.arrow} />
        </button>
        <button>
          <FaChevronRight className={styles.arrow} />
        </button>
      </div>
      <Swiper slidesPerView={6} spaceBetween={30} loop={true}>
        {arr.map((icon, i) => (
          <>
            <SwiperSlide className={styles["swiper-slide"]} key={i}>
              <div key={i} className={styles["swiper-icon"]}>
                <Image src={icon.icon} alt={icon.title} />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}
