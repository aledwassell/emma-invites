import Link from 'next/link';
import Login from '../componentes/Login';
import Loader from '../componentes/Loader';

export default function EnterPage({}) {
  return (
    <main>
      <h1>Emma's Birthday RSVP</h1>
      <Loader show />
      <Login />
    </main>
  );
}
