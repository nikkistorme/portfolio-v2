'use client';

import Link from "next/link";

export default function SkipToMainLink(): JSX.Element {
  const skipToMain = () => {
    const main = document.getElementById('main');
    main?.focus();
  }

  return (
    <Link
      className="absolute -left-96 focus:left-2/4 p-4 bg-gray-900 text-white z-50 opacity-0 focus:opacity-100 focus:-translate-x-2/4"
      href="#main"
      onClick={skipToMain}
    >
      Skip to main content
    </Link>
  )
}