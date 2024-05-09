/* eslint-disable react/jsx-key */
import CartItems from "~/components/CartItems";
import { arr } from "./arr";

export default function CartPage() {
  return (
    <div>
      <div>Shopping Cart</div>
      {arr.map((items)=><CartItems items={items}/>
      )}
    </div>
  );
}
