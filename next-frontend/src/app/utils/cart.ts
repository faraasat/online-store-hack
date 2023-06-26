import { ICart, ICartReq } from "../types";

class Cart<T extends ICartReq> {
  constructor() {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  getCart(): Array<T> {
    return JSON.parse(localStorage.getItem("cart")!) as Array<T>;
  }

  updateCart(item: T): void {
    const myCart = this.getCart();

    let updateFlag: boolean = false;

    const newCart = myCart.map((myc: T) => {
      if (myc._id === item._id && myc.size === item.size) {
        updateFlag = true;
        return { ...myc, quantity: myc.quantity + 1 };
      } else {
        return myc;
      }
    });

    if (!updateFlag) newCart.push(item);

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  removeFromCart(_id: string): void {
    const myCart = this.getCart();

    const newCart = myCart.filter((myc: T) => myc._id === _id);

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  incrementQuantity(_id: string) {
    const myCart = this.getCart();

    const newCart = myCart.map((myc: T) => {
      if (myc._id === _id) {
        return { ...myc, quantity: myc.quantity + 1 };
      } else {
        return myc;
      }
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  decrementQuantity(_id: string) {
    const myCart = this.getCart();

    const newCart = myCart.map((myc: T) => {
      if (myc._id === _id) {
        return { ...myc, quantity: myc.quantity - 1 };
      } else {
        return myc;
      }
    });

    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  changeQuantity(_id: string, by: number) {
    if (by < 0) return;

    const myCart = this.getCart();

    let newCart;

    if (by === 0) {
      this.removeFromCart(_id);
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
