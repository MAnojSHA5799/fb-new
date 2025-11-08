export default function Login() {
    const appId = "2489693924757448";
    const redirectUri = "https://fb-new-six.vercel.app/auth/facebook/callback";
    const scope = "email,public_profile";
  
    const loginWithFacebook = () => {
      const fbURL =
        `https://www.facebook.com/v24.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}`;
      window.location.href = fbURL;
    };
  
    return (
      <div>
        <button onClick={loginWithFacebook}>Login With Facebook</button>
      </div>
    );
  }
  
