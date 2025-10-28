"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"

import AuthContainer from "../containers/AuthContainer"
import Button from "../general/Button"
import Heading from "../general/Heading"
import Input from "../general/Input"
import { FaGoogle } from "react-icons/fa";
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"
import {signIn} from "next-auth/react"
import { useRouter } from "next/router"

const RegisterClient = () => {
   
const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post('/api/register',data).then(()=>{
      toast.success('Kullanıcı Oluşturuldu.')
      signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false
      }).then((callback)=>{
        if(callback?.ok) {
          router.push('/cart/')
          location.reload();
          toast.success('Login İşlemi Başarılı')
        }
           if(callback?.error) {
         
          toast.success(callback.error)
        }
      })
    })
  }


  return (
    <AuthContainer>
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
            <Heading text="Register" center/>
            <Input placeholder="Ad" type="text" id="name" register={register} errors={errors} required/>
            <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required/>
            <Input placeholder="Parola" type="password" id="password" register={register} errors={errors} required/>
            <Button text="Üye Ol"  onClick={handleSubmit(onSubmit)}/>
             <div className="text-center my-2 text-sm text-red-500">Daha Önceden Kayıt olduysan <Link className="underline" href="/login">Buraya Tıkla</Link></div>
            <div className="text-center my-2 font-bold text-lg">OR</div>
            <Button text="Google İle Üye Ol" icon={FaGoogle} outline onClick={()=> {}}/>
        </div>
    </AuthContainer>
  )
}

export default RegisterClient