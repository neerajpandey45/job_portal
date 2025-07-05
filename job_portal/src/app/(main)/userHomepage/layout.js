import UserLayout from "@/app/(main)/layoutClient";

export default function MainHome({ children }) {
  return (
    <>
  <UserLayout>{children}</UserLayout>
    </>
  );
}
