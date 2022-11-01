import {app} from '../lib/firebase';
import {getAuth, RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import Link from 'next/link';

export default function Login() {
  const auth = getAuth(app);
  window.recaptchaVerifier = new RecaptchaVerifier(
    'sign-in-button',
    {
      size: 'invisible',
      callback: response => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response);
      },
    },
    auth
  );
  const isLoggedIn = false;

  const phoneNumber = '';
  const appVerifier = window.recaptchaVerifier;

  const signInWithPhone = async () => {
    await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
      })
      .catch(error => {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  };

  return (
    <div>
      {isLoggedIn && (
        <Link href="/">
          <button>RSVP</button>
        </Link>
      )}

      {!isLoggedIn && (
        <>
          <div>login input</div>
          <form onSubmit={signInWithPhone}>
            <input
              type="text"
              name="phone"
              placeholder="Phonenumber"
              value={phoneNumber}
            />
            <button className="btn-google" type="submit">
              Enter
            </button>
          </form>
        </>
      )}
    </div>
  );
}
