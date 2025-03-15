import { useDropzone } from 'react-dropzone'
import IconUpload from '/images/icon-upload.svg'
import IconInfo from '/images/icon-info.svg'
import { useUserContext } from '../context/UserContext'
const MAX_SIZE = 500 * 1014 // 500 kb

const DragAndDrop = () => {
  const { preview, setPreview, setPreviewError, setAvatarImage, previewError } =
    useUserContext()

  // acceptedFiles and rejectedFiles (files[])
  const onDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles.length > 0) {
      const { errors } = rejectedFiles[0]
      errors.forEach((error) => {
        if (error.code === 'file-too-large') {
          setPreviewError(true)
        }
      })
    } else {
      const file = acceptedFiles[0]
      const reader = new FileReader()
      setAvatarImage(file)
      reader.onloadend = () => {
        setPreview(reader.result)
        setPreviewError(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: MAX_SIZE,
    accept: {
      'image/*': ['.jpeg', '.png'],
    },
    multiple: false,
  })

  return (
    <>
      <label htmlFor='avatar' className='text-left w-full'>
        Upload Avatar
      </label>
      <div
        {...getRootProps()}
        role='button'
        onKeyDown={(e) =>
          e.key === 'Enter' && document.getElementById('avatar').click()
        }
        className='flex flex-col items-center justify-center w-full border-2 border-dashed border-neutral-700 rounded-xl h-32 bg-neutral-700-opacity-low'
      >
        <input {...getInputProps()} id='avatar' required />
        {preview ? (
          <div className='flex flex-col justify-center items-center gap-5'>
            <img
              src={preview}
              alt='Avatar Preview'
              className='max-w-full max-h-16 rounded-xl border-slate-500 border-3'
            />
            <div className='flex gap-4'>
              <button
                className='text-xs bg-neutral-700-opacity-low py-1 px-2 rounded-md text-gray-400 hover:underline cursor-pointer'
                type='button'
                onClick={() => setPreview(null)}
              >
                Remove Image
              </button>
              <button
                className='text-xs bg-neutral-700-opacity-low py-1 px-2 rounded-md text-gray-400 hover:underline cursor-pointer'
                onClick={() => document.getElementById('avatar').click()}
              >
                Change Image
              </button>
            </div>
          </div>
        ) : (
          <>
            <img
              className='mb-4 p-2 rounded-xl bg-neutral-700-opacity-low'
              height={50}
              width={50}
              src={IconUpload}
              alt='Icon Upload D&D'
            />
            <p className='text-lg text-neutral-300 tracking-wide'>
              Drag and drop or click to upload
            </p>
          </>
        )}
      </div>
      {previewError ? (
        <div className='text-[12px] flex justify-start w-full gap-1 mb-2'>
          <p className='text-red-600 opacity-50'>
            File too large. Please upload a photo under 500KB.
          </p>
        </div>
      ) : (
        <div className='text-[12px] flex justify-start w-full gap-1 mb-2'>
          <img src={IconInfo} alt='Icon Info' />
          <p className='text-neutral-500'>
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        </div>
      )}
    </>
  )
}

export default DragAndDrop
