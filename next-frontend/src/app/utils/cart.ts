"use client";

import { ICart, ICartReq } from "../types";

class Cart<T extends ICartReq> {
  getCart(): Array<T> {
    const lc = localStorage.getItem("cart");
    if (lc) {
      return JSON.parse(lc) as Array<T>;
    } else {
      return [];
    }
  }

  updateCart(item: T): void {
    const myCart = this.getCart();
    let updateFlag: boolean = false;

    const newCart = myCart.map((myc: T) => {
      if (myc._id === item._id && myc.sized === item.sized) {
        updateFlag = true;
        return { ...myc, quantity: myc.quantity ? myc.quantity + 1 : 1 };
      } else {
        return myc;
      }
    });

    if (!updateFlag) newCart.push({ ...item, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  removeFromCart(_id: string, sized: string): void {
    const myCart = this.getCart();

    let newCart: T[] = [];

    myCart.forEach((myc) => {
      if (!(myc._id === _id && myc.sized === sized)) newCart.push(myc);
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  incrementQuantity(_id: string, sized: string) {
    const myCart = this.getCart();

    const newCart = myCart.map((myc: T) => {
      if (myc._id === _id && myc.sized === sized) {
        return { ...myc, quantity: myc.quantity + 1 };
      } else {
        return myc;
      }
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  decrementQuantity(_id: string, sized: string) {
    const myCart = this.getCart();

    let isRem = false;

    const newCart = myCart.map((myc: T) => {
      if (myc._id === _id && myc.sized === sized) {
        if (myc.quantity === 1) {
          isRem = true;
          this.removeFromCart(_id, sized);
        } else {
          return { ...myc, quantity: myc.quantity - 1 };
        }
      } else {
        return myc;
      }
    });

    if (!isRem) localStorage.setItem("cart", JSON.stringify(newCart));
  }

  changeQuantity(_id: string, by: number, sized: string) {
    if (by < 0) return;

    const myCart = this.getCart();

    let newCart;

    if (by === 0) {
      this.removeFromCart(_id, sized);
    } else {
      myCart.map((myc: T) => {
        if (myc._id === _id) {
          return { ...myc, quantity: myc.quantity + by };
        } else {
          return myc;
        }
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}

const cart = new Cart<ICart>();

export { cart, Cart };
