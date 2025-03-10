import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className='fixed inset-0 flex items-end md:items-center justify-center z-50'>
      <div className='absolute inset-0' onClick={onClose}></div>

      <div className='relative bg-white p-6 rounded-t-2xl md:rounded-2xl shadow-lg border w-full sm:w-[70%] md:w-[50%] lg:w-[40%] h-[85vh] sm:h-auto overflow-auto'>
        {children}
      </div>
    </div>,
    modalRoot
  )
}

export { Modal }
