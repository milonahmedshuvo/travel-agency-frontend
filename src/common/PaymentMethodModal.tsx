/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';

const PaymentMethodModal = ({ isOpen, onClose, onSubmit }: any) => {
  const [initialPaymentMethod, setInitialPaymentMethod] = useState('STRIPE');
  const [finalPaymentMethod, setFinalPaymentMethod] = useState('STRIPE');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ initialPaymentMethod, finalPaymentMethod });
    onClose();
  };




  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Select Payment Methods</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Initial Fist Payment Method (20%)
          </label>
          <select
            value={initialPaymentMethod}
            onChange={(e) => setInitialPaymentMethod(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="STRIPE">Stripe</option>
            <option value="PAYPAL">PayPal</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Final Secound Payment Method (80%)
          </label>
          <select
            value={finalPaymentMethod}
            onChange={(e) => setFinalPaymentMethod(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="STRIPE">Stripe</option>
            <option value="PAYPAL">PayPal</option>
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodModal;
