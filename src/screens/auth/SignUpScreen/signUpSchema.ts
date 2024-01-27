import {z} from 'zod';

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim

export const signupSchema = z.object({
  username: z.string().regex(usernameRegex, 'Username inválido').toLowerCase(),
  fullName: z.string().min(5, 'Preencha seu nome completo'). max(50, 'Limite de 50 caracteres').transform(value => {
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter no minimo 8 caracteres'),
})

export type SignUpSchema = z.infer<typeof signupSchema>