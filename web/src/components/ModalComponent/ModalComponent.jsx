import React from 'react'
import clsx from 'clsx'
import { useEffect } from 'react'

export const ModalComponent = ({
  otherClasses,
  show,
  handleClose,
  children,
}) => {
  const modalComponentClasses = clsx(
    'flex justify-center fixed top-0 left-0 bottom-0 right-0 transition duration-300 bg-[#00000080] overflow-auto',
    show ? 'opacity-1 z-50 visible' : ' opacity-0 invisible'
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClick, false)
    return () => {
      document.removeEventListener('keydown', handleEscapeClick, false)
    }
  }, [])

  const handleEscapeClick = (event) => {
    if (event.keyCode === 27) handleClose()
  }

  return (
    <div className={modalComponentClasses} data-testid="modal-component">
      <button
        aria-label="button"
        className={'absolute left-0 top-0 bottom-0 right-0 z-[-1] cursor-auto'}
        onClick={handleClose}
      />
      <div
        className={clsx('bg-white overflow-auto h-auto my-auto', otherClasses)}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalComponent
