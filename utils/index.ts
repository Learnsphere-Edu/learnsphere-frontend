'use client'
// export const isAuthenticated = async () => {
//   const token = Cookies.get('authToken')
//   console.log('Token:', token) // Log the token value for debugging
//   return token && token.trim() !== '' // Check if the token is non-empty
// }

export const isAuthenticated =() => {
    const token = localStorage.getItem('accessToken')
    if(token){
        console.log('User is authenticated')
        return true
    }
    return false
}