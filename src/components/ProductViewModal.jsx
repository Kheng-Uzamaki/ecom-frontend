import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Divider } from '@mui/material';
import Status from './Status';
import { MdClose, MdDone } from 'react-icons/md';

function ProductViewModal({ open, setOpen, product, isAvailable }) {
  const { productName, image, description, quantity, price, discount, specialPrice } = product || {};

  const close = () => setOpen(false);

  return (
    <Dialog open={open} as="div" className="relative z-10" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-xl bg-white shadow-xl p-6 transition-transform transform duration-300">
          {/* Product Image */}
          {image && (
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img src={image} alt={productName} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Product Details */}
          <DialogTitle as="h3" className="mt-4 text-lg font-bold text-gray-800">
            {productName}
          </DialogTitle>

          {/* Price & Availability */}
          <div className="mt-4 flex items-center justify-between">
            {/* Pricing Section */}
            <div>
              {specialPrice ? (
                <div>
                  <span className="text-gray-400 line-through text-sm">${Number(price).toFixed(2)}</span>
                  <span className="text-red-600 font-bold text-xl ml-2">${Number(specialPrice).toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-gray-900 font-bold text-xl">${Number(price).toFixed(2)}</span>
              )}
            </div>

            {/* Stock Status */}
            <Status
              text={isAvailable ? 'In Stock' : 'Out of Stock'}
              icon={isAvailable ? MdDone : MdClose}
              bg={isAvailable ? 'bg-teal-200' : 'bg-rose-200'}
              color={isAvailable ? 'text-teal-900' : 'text-rose-700'}
            />
          </div>

          {/* Divider */}
          <Divider className="pt-4" />

          {/* Description */}
          <p className="mt-4 text-sm text-gray-600">{description}</p>

          {/* Close Button */}
          <div className="mt-6 flex justify-end">
            <Button
              onClick={close}
              className="text-sm px-4 py-2 rounded-md bg-gray-500 font-medium text-white hover:bg-gray-700 transition-all cursor-pointer"
            >
              Close
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ProductViewModal;
