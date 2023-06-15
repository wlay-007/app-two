import Link from "next/link";

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">About us</h1>
      <ul className="flex gap-2 text-2xl">
        <Link href="/about/contacts">Contacts</Link>
        <Link href="/about/team">Team</Link>
      </ul>
      {children}
    </div>
  );
}
