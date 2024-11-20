export default function ProductCard({
  products,
  cart,
  setCart,
  setShowPopup,
  setPopupMessage,
}) {
  const addtocart = (product) => {
    if (cart.some((item) => item.name === product.name)) {
      // Remove the item if it's already in the cart
      setCart(cart.filter((item) => item.name !== product.name));
      // Show the remove popup
      setPopupMessage("Item removed successfully!");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      // Add the item if it's not in the cart
      var final = [product, ...cart];
      setCart(final);
      // Show the add popup
      setPopupMessage("Item added successfully!");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="item space-y-2">
      <div class="bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
        <img
          src={products.url}
          alt={products.name}
          class="w-full h-full object-cover"
        />
        <button
          class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0"
          onClick={() => addtocart(products)}
        >
          {cart.some((item) => item.name === products.name)
            ? "Remove from Cart"
            : "Add To Cart"}
        </button>
      </div>
      <p class="text-xl">{products.name}</p>
      <strong>${products.price}</strong>
    </div>
  );
}
