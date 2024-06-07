'use server'
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import {z} from 'zod';

const formSchema = z.object({
  id : z.string(),
  username : z.string({
    invalid_type_error : "Please enter a username."
  }).min(1,"Please enter a username."),
  password : z.string({
    invalid_type_error : "Please enter a password."
  }).min(5,"Password must of length atleast 5."),
  whatsapp : z.string({
    invalid_type_error : "Please enter a whatsapp number."
  }).length(10,"Please enter a valid whatsapp number.")
})


const RegisterUser = formSchema.omit({id : true});
const prisma = new PrismaClient();

export async function registerUser(prevState , formData){
  const validatedFields = RegisterUser.safeParse({
    username : formData.get('username'),
    password : formData.get('password'),
    whatsapp : formData.get('whatsapp')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Register User.',
    };
  }
  const {username, password, whatsapp} = validatedFields.data;
  // if(whatsapp.length() !== 10){
  //   return {
  //     errors : 1,
  //     message : 'Invalid Whatsapp Number. Failed to Register User.'
  //   }
  // }
  try{
  const newuser = await prisma.users.create({
    data : {
      username,
      password,
      whatsapp
    }
  })
} catch(error){
  return {
    errors:  {database: [error.message] },
    message : 'Database Error : Failed to register user.',
  };
}
  redirect('/');
}