// app/actions/upload.ts
'use server'

export async function uploadImages(formData: FormData) {
  const files = formData.getAll('images') as File[]

  console.log(`Received ${files.length} files`)

  console.log('fileeeeeeeeeee', files)



  
  for (const file of files) {
    if (file instanceof File && file.size > 0) {
      console.log(`File: ${file.name} — ${file.size} bytes`)
      // Handle file upload (e.g., Cloudinary, S3, or temporary storage)
    }
  }

  return { success: true }
}
