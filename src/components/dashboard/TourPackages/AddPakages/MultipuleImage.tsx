// 'use client'

// import { useState, ChangeEvent } from 'react'



// export default function MultiFileUpload() {
//   const [files, setFiles] = useState<File[]>([])
//   const [message, setMessage] = useState('')



//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const selectedFiles = e.target.files
//     if (!selectedFiles) return

//     const fileArray = Array.from(selectedFiles)
//     setFiles(prev => [...prev, ...fileArray])
//   }







//   const handleSubmit = async () => {
//     const formData = new FormData()
//     files.forEach(file => formData.append('images', file))

//     const res = await uploadImages(formData)
//     if (res.success) {
//       setMessage('Upload successful!')
//       setFiles([]) // reset after success
//     }
//   }



//   console.log('file', files)

//   return (
//     <div className="space-y-4">
//       <input
//         type="file"
//         multiple
//         accept="image/*"
//         onChange={handleFileChange}
//       />

//       <ul>
//         {files.map((file, index) => (
//           <li key={index}>
//             {file.name} — {(file.size / 1024).toFixed(1)} KB
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={handleSubmit}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Upload
//       </button>

       

//       {message && <p className="text-green-600">{message}</p>}
//     </div>
//   )
// }
