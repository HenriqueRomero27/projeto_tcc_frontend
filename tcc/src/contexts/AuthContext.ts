// import { createContext, ReactNode, useState, useEffect } from 'react';
// import { destroyCookie, setCookie, parseCookies } from "nookies";
// import { useRouter } from 'next/router'; // Usar useRouter ao invés de Router diretamente
// import { api } from "../services/login/ApiClient";
// import { toast } from "react-toastify";

// type AuthContextData = {
//   user: UserProps | null; // Permitir null para lidar com inicialização
//   isAuthenticated: boolean;
//   signIn: (credentials: SignInProps) => Promise<void>;
//   signOut: () => void;
//   signUp: (credentials: SignUpProps) => Promise<void>;
// }

// type UserProps = {
//   id: string;
//   name: string;
//   email: string;
// }

// type SignInProps = {
//   email: string;
//   password: string;
// }

// type SignUpProps = {
//   name: string;
//   email: string;
//   password: string;
// }

// type AuthProviderProps = {
//   children: ReactNode;
// }

// export const AuthContext = createContext({} as AuthContextData);

// export function signOut() {
//   try {
//     destroyCookie(undefined, '@nextauth.token');
//     // Usar useRouter para navegação
//     const router = useRouter();
//     router.push('/');
//   } catch {
//     console.log("Erro ao deslogar");
//   }
// }

// export function AuthProvider({ children }: AuthProviderProps) {
//   const router = useRouter(); // Substituímos o Router por useRouter
//   const [user, setUser] = useState<UserProps | null>(null); // User pode ser null inicialmente
//   const [loading, setLoading] = useState(true); // Controla o carregamento

//   const isAuthenticated = !!user;

//   useEffect(() => {
//     const { '@nextauth.token': token } = parseCookies();

//     if (token) {
//       api.get('/me')
//         .then(response => {
//           const { id, name, email } = response.data;

//           setUser({
//             id,
//             name,
//             email
//           });
//         })
//         .catch(() => {
//           signOut();
//         })
//         .finally(() => setLoading(false)); // Finalizar o loading
//     } else {
//       setLoading(false); // Mesmo sem token, finaliza o loading
//     }
//   }, []);

//   async function signIn({ email, password }: SignInProps) {
//     try {
//       const response = await api.post('/session', {
//         email,
//         password
//       });

//       const { id, name, token } = response.data;

//       setCookie(undefined, "@nextauth.token", token, {
//         maxAge: 60 * 60 * 24 * 30, // Expirar em um mês
//         path: "/"
//       });

//       setUser({
//         id,
//         name,
//         email
//       });

//       api.defaults.headers['Authorization'] = `Bearer ${token}`;
//       toast.success("LOGADO COM SUCESSO");
//       router.push('/dashboard');
//     } catch (err) {
//       toast.error("ERRO AO ACESSAR");
//       console.log("ERRO AO ACESSAR, ", err);
//     }
//   }

//   async function signUp({ name, email, password }: SignUpProps) {
//     try {
//       const response = await api.post('/users', {
//         name,
//         email,
//         password
//       });

//       toast.success("CADASTRADO COM SUCESSO");
//       router.push('/');
//     } catch (err) {
//       toast.error("ERRO AO CADASTRAR");
//       console.log("ERRO AO CADASTRAR", err);
//     }
//   }
  
//   return (
//     // <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
//     //   {children}
//     // </AuthContext.Provider>
//   );
// }
