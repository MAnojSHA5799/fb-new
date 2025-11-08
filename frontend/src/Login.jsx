export default function Login() {
    const appId = "2008477996672023";
    const redirectUri = "http://localhost:3000/auth/facebook/callback";
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
  