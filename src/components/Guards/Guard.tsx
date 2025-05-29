import { useEffect, useState, ReactNode } from "react";
import Loading from "../Loading Component/Loading";

interface Props {
  children: ReactNode;
}

export default function Guard({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (isAuthenticated === null) {
    return <Loading />; // Loading UI
  }

  return <>{children}</>;
}
