import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function NotFound() {
  return (
    <MainLayout page="notFound" className="not-found container">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">
        <Button variant="dark">Go back home</Button>
      </Link>
    </MainLayout>
  );
}
