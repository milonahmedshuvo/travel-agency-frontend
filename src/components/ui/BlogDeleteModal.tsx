"use client"

import { useBlogDeleteMutation } from "@/redux/api/blog/blogApi";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";



const BlogDeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams()
  const id = params.id
  const [blogDelete] = useBlogDeleteMutation();

  

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async () => {

    try {
      // Call your delete API here
      await blogDelete(id).unwrap();
      toast.success('Deleted successfully!')
      closeModal();
    //   Router.push('/dashboard/blogs')
    } catch (error) {
      toast.error("Delete failed:")  
      console.error("Delete failed:", error);
    }

  };

  return (
    <div className="">
      <button
        onClick={openModal}
        className="bg-red-500 text-white px-6 py-2 rounded cursor-pointer"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/55 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDeleteModal;
