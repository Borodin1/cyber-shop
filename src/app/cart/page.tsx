/* eslint-disable react/jsx-key */
import styles from './Cart.module.scss'
import CartItems from "~/components/CartItems";
import { arr } from "./arr";
import CartSum from '~/components/CartSum'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cart | Cyber Shop",
};;

export default function CartPage() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartTitle}>
        <h2>Shopping Cart</h2>
        </div>
      <div className={styles.cartContent}>
        <div>
      {arr.map((items)=>
      <CartItems items={items}/>
      )}
      </div>
      <CartSum/>
      </div>
    </div>
  );
}
