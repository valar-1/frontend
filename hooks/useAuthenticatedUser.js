// hooks/useAuthenticatedUser.js
import { useSession } from 'next-auth/react';

export const useAuthenticatedUser = () => {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const isAuthenticated = !!session?.user;
  const userAddress = session?.user?.id ?? null;

  return {
    isLoading,
    isAuthenticated,
    userAddress,
  };
};
