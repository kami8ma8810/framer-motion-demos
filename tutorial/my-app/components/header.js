import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <li>
          <Link href='/fadein'>fadein</Link>
        </li>
      </nav>
    </header>
  );
}
