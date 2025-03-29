import { toast } from 'react-toastify'

const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false
  })
}

const showErrorToast = (message: string) => {
  toast.error(message, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false
  })
}

const showInfoToast = (message: string) => {
  toast.info(message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
  })
}

export { showErrorToast, showInfoToast, showSuccessToast }
