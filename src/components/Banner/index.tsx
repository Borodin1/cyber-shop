"use client";
import styles from "./Banner.module.scss";

import Image from "next/image";
import { arr } from "./arr";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from 'react';

export default function Banner() {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMobileScreen(window.innerWidth <= 768);
  
        const handleResize = () => {
          setIsMobileScreen(window.innerWidth <= 768);
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);
      
  if (isMobileScreen) {
    return (
      <div>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true    }
          className={styles.mobileBanner}>
          {arr.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={styles.mobileBannerSlide}
                style={{ backgroundColor: item.bg }}>
                <div className={styles.mobileBannerImage}>
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={300}
                    height={200}
                  />
                </div>
                <div className={styles.mobileBannerInfo}>
                  <h2 style={{ color: item?.textC }}>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <button style={{ color: item?.textC, borderColor: item?.textC }}>
                  <Link href="/catalog">Shop Now</Link>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  } else {
    return (
      <div className={styles.mainBanner}>
        {arr.map((item, i) => (
          <div
            key={i}
            className={styles.banner}
            style={{ backgroundColor: item.bg }}>
            <div>
              <Image src={item.logo} alt={item.title} />
            </div>

            <div className={styles.info}>
              <h2 style={{ color: item?.textC }}>{item.title}</h2>
              <p>{item.description}</p>
            </div>

            <button style={{ color: item?.textC, borderColor: item?.textC }}>
              <Link href="/catalog">Shop Now</Link>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
