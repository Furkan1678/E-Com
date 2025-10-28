
const AuthContainer = ({children} : {children:React.ReactNode}) => {
  return (
    <div className='mt-25 min-h-fit h-full w-full flex items-center justify-center'>{children}</div>
  )
}

export default AuthContainer