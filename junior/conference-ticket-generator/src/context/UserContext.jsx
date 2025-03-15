import { createContext, useContext, useState } from 'react'

const userContext = createContext()

export const useUserContext = () => {
  const context = useContext(userContext)

  if (!context)
    throw new Error('useUserContext must be used within a UserProvider')

  return context
}

export function UserProvider({ children }) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [githubUser, setGithubUser] = useState('')
  const [preview, setPreview] = useState(null)
  const [previewError, setPreviewError] = useState(false)
  const [avatarImage, setAvatarImage] = useState(null)
  const [avatarUrl, setAvatarUrl] = useState('')

  return (
    <userContext.Provider
      value={{
        fullName,
        setFullName,
        email,
        setEmail,
        githubUser,
        setGithubUser,
        preview,
        setPreview,
        previewError,
        setPreviewError,
        avatarImage,
        setAvatarImage,
        avatarUrl,
        setAvatarUrl,
      }}
    >
      {children}
    </userContext.Provider>
  )
}
