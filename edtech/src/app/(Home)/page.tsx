"use client";
import Image from "next/image";
import Homepage from "@/components/Landingpage/Home";
import { useAuthStore } from "@/store/useauthStore";
import { useEffect } from "react";

export default function Home() {
  const { checkAuthStatus } = useAuthStore();

  useEffect(() => {
    checkAuthStatus(); // Check authentication status on app load
  }, [checkAuthStatus]);
  return (
   <Homepage />
  );
}
