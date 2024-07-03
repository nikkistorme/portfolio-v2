import Link from "next/link";
import Header from "./Header/Header";

type layoutProps = {
  children: React.ReactNode,
};

const skipToMain = () => {
  const main = document.getElementById('main');
  main?.focus();
}

export default function Layout({ children }: layoutProps): JSX.Element {
  return (
    <>
      <Link className='skip_to_main' href="#main" onClick={skipToMain}>Skip to main content</Link>
      <Header />
      <main tabIndex={-1} id='main'>{children}</main>
    </>
  )
}