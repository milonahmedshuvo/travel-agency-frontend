/* eslint-disable @next/next/no-img-element */
'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useGetMeQuery } from '@/redux/api/auth/authApi';
import { useUpdateCustomerMutation } from '@/redux/api/customer/customerApi';

type CustomerForm = {
  partnerOneName: string;
  partnerTwoName: string;
  relationShipStatus: 'MARRIED' | 'UNMARRIED' | 'DIVORCED';
  children: number;
  image?: FileList;
};

const defaultData: CustomerForm = {
  partnerOneName: 'milon ahmed shuvo',
  partnerTwoName: 'mario',
  relationShipStatus: 'MARRIED',
  children: 34,
};

export default function UpdateCustomerPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CustomerForm>({
    defaultValues: defaultData,
  });
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const {data} = useGetMeQuery("")
  const customerId = data?.data?.id
  const [updateCustomer] = useUpdateCustomerMutation()


  const handleImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setSelectedImage(null);
  };




  const onSubmit = async (data: CustomerForm) => {
    setLoading(true)
    const formData = new FormData();
    if (selectedImage) {
      formData.append('avatar', selectedImage);
    }

  const customerDatas = {
  customer: {
    partnerOneName: data.partnerOneName,
    partnerTwoName: data.partnerTwoName,
    relationShipStatus: data.relationShipStatus,
    children: data.children.toString(),
  }
};

formData.append("data", JSON.stringify(customerDatas));

   try{
    const result = await updateCustomer({id: customerId, data: formData})
    console.log('Success:', result);
       if(result?.data?.success){
        toast.success( result?.data?.message || "Customer updated successfully")
        reset(defaultData); 
        setImagePreview(null);
        setSelectedImage(null); 
        setLoading(false)
       }

   }catch(err){
      console.log("update error", err)
      toast.error("Something went wrong")
      setLoading(false)
   }
  };


  
  return (
    <div className="max-w-5xl mx-auto p-4 h-screen">
      <h1 className="text-2xl font-semibold mb-4">Update Customer</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className='flex items-center gap-6'> 

        <div className='w-full'>
          <label className="block ">Partner One Name</label>
          <input
            {...register('partnerOneName', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.partnerOneName && <p className="text-red-500">Required</p>}
        </div>

        <div className='w-full'>
          <label className="block ">Partner Two Name</label>
          <input
            {...register('partnerTwoName', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.partnerTwoName && <p className="text-red-500">Required</p>}
        </div>

        </div>


     <div className='flex items-center gap-6'> 

        <div className='w-full'>
          <label className="block ">Relationship Status</label>
          <select {...register('relationShipStatus')} className="w-full p-3 rounded border border-gray-300 mt-1 ">
            <option value="MARRIED">Married</option>
            <option value="UNMARRIED">Unmarried</option>
            <option value="DIVORCED">Divorced</option>
          </select>
        </div>

        <div className='w-full'>
          <label className="block ">Number of Children</label>
          <input
            type="number"
            {...register('children', { required: true, min: 0 })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.children && <p className="text-red-500">Required</p>}
        </div>
        </div>



        <div>
          <label className="block ">Upload Image</label>
         {
           !imagePreview &&  <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className=" w-full px-3 py-12 rounded border border-gray-300 mt-1 "
          />
         }
          {imagePreview && (
            <div className="relative mt-2 inline-block w-full  border border-gray-300 p-2 rounded">

               <div className='!w-[100px] flex justify-center items-center relative'>
                    <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded "
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs cursor-pointer "
              >
                ✕
              </button>
               </div>

            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-2 px-8 rounded-lg cursor-pointer"
        >
          {
            loading ? <span>Processing..</span> : <span>Update</span>
          }

        </button>
      </form>
    </div>
  );
}
