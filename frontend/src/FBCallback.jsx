import { useEffect, useState } from "react";
import axios from "axios";

export default function FBCallback() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getToken() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) return;

      const res = await axios.get(
        `http://localhost:4000/auth/facebook?code=${code}`
      );

      setProfile(res.data);
    }
    getToken();
  }, []);

  if (!profile) return <div>Loading…</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
      <img src={profile.picture} alt="" />
    </div>
  );
}
