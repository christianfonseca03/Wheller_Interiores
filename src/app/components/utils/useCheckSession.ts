import { useUser } from "@clerk/nextjs";

export const useCheckSession = () => {
  const { user } = useUser();
  if (user) {
    return true;
  } else {
    return false;
  }
};
