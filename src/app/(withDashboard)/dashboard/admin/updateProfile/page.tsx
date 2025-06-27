/* eslint-disable @next/next/no-img-element */
'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Header from '@/components/dashboard/Header/Header';
import { useUpdateAdminMutation } from '@/redux/api/customer/customerApi';
import { useGetMeQuery } from '@/redux/api/auth/authApi';
import toast from 'react-hot-toast';

type AdminForm = {
  fullName: string;
  username: string;
  email: string;
  location:string;
  contactNo: string
  image?: FileList;
};

const defaultData: AdminForm = {
  fullName: 'milon ahmed shuvo',
  username: 'mary',
  email : 'm@gmail.com',
  location: 'location',
  contactNo: "contactNo",
};

export default function UpdateAdminPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AdminForm>({
    defaultValues: defaultData,
  });
  const [updateAdmin] = useUpdateAdminMutation()
  const {data} = useGetMeQuery("")
  const adminId = data?.data?.id
  const [loading, setLoading] = useState(false)  

  console.log(data?.data)

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);


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

  const onSubmit =async (data: AdminForm) => {
    setLoading(true)
    const formData = new FormData();

    if (selectedImage) {
      formData.append('avatar', selectedImage);
    }
    // console.log(data)
     const adminData = {
      admin: {
        fullName: data?.fullName,
        location: data?.location
      },
      username: data?.username,
      email: data?.email,
      contactNo: data?.contactNo,
      role: "ADMIN",
    };

  formData.append("data", JSON.stringify(adminData));

   try{
    const result = await updateAdmin({id: adminId, data: formData})
       console.log('Success:', result);
       if(result?.data?.success){
        toast.success( result?.data?.message || "Admin updated successfully")
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
     <div>
     <Header/>    
     <div className="px-4 md:px-7 h-screen mt-10">
     <h1 className="text-2xl font-semibold mb-4">Update Admin</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div className='flex items-center gap-6'> 

        <div className='w-full'>
          <label className="block ">Full Name</label>
          <input
            {...register('fullName', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.fullName && <p className="text-red-500">Required</p>}
        </div>

        <div className='w-full'>
          <label className="block ">User Name</label>
          <input
            {...register('username', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.username && <p className="text-red-500">Required</p>}
        </div>

        </div>


     <div className='flex items-center gap-6'> 

        <div className='w-full'>
          <label className="block ">Email</label>
          <input 
            {...register('email', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.email && <p className="text-red-500">Required</p>}
        </div>

        <div className='w-full'>
          <label className="block ">Location</label>
          <input
            {...register('location', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.location && <p className="text-red-500">Required</p>}
        </div>

        </div>

        <div className='w-full'>
          <label className="block ">Contact No</label>
          <input
            {...register('contactNo', { required: true })}
            className="w-full p-3 rounded border border-gray-300 mt-1 "
          />
          {errors.contactNo && <p className="text-red-500">Required</p>}
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
     </div>
  );
}
