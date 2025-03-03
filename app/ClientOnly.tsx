// ClientOnly.tsx
"use client"; // This marks the file as client-side only

import { useEffect, useState } from "react";

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return <>{children}</>;
};

export default ClientOnly;
