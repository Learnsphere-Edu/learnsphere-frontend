export type Info = {
    id: number
    title: string
    content: string
    infoBg: string
    textColor: string
    titleColor: string
    
}
export interface UserDataProps {
  email: string
  username: string
  password: string
  password_confirm: string
  date_of_birth: string
  country: string
  first_name: string
  last_name: string
  phone_number: string
  state: string
}