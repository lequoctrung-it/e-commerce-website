import {createUserDocumentFromAuth, signInWithGoolePopup} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoolePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  )
}

export default SignIn;