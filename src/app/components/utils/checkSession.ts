import { useUser } from "@clerk/nextjs";

export const checkSession = () => {
  const { user } = useUser();
  if (user) {
    return true;
  } else {
    return false;
  }
};
