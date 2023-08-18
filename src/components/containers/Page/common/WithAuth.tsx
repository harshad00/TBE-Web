// // utils/withAuth.tsx

// import { routes } from '@/constant';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { ReactNode } from 'react';

// interface WithAuthProps {
//   children: ReactNode;
// }

// const WithAuth = ({ children }: WithAuthProps) => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   // If not authenticated, redirect to the login page
//   if (status === 'loading') {
//     return <p>Loading...</p>;
//   }

//   if (!session) {
//     router.replace(routes.admin.base);
//     return null;
//   }

//   return <>{children}</>; // Pass the session to the children function
// };

// export default WithAuth;
export {};
