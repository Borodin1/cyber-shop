import styles from "./CartItems.module.scss";

import Image, { StaticImageData } from "next/image";

interface ICartItem {
  id: string;
  img: StaticImageData;
  name: string;
  price: number;
  quantity: number;
}

export default function CartItems({ items }: { items: ICartItem }) {
  return (
    <div className={styles.cartItems}>
      <div className={styles.cartImage}>
        <Image src={items.img} alt={items.id} />
      </div>

      <div className={styles.cartElements}>
        <div className={styles.cartInfo}>
          <h2>{items.name}</h2>
          <p>{items.id}</p>
        </div>

    <div className={styles.cartAddition}>
        <div className={styles.cartCount}>
          <button>-</button>
          <span>{items.quantity}</span>
          <button>+</button>
        </div>
        <div className={styles.cartPrice}>
          <h3>${items.price}</h3>
        </div>
        <button>-</button>
        </div>
      </div>
    </div>
  );
}
