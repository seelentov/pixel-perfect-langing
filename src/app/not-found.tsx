import { NotFound } from "@/components/NotFound/NotFound";
import { CSSProperties } from "react";

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  width: '100%'
}

export default function NotFoundPage() {
  return (

    <NotFound />

  );
}
