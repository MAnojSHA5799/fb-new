import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const appId = process.env.FB_APP_ID;
const appSecret = process.env.FB_APP_SECRET;
const redirectUri = "https://fb-new-six.vercel.app/auth/facebook/callback";

app.get("/auth/facebook", async (req, res) => {
  try {
    const { code } = req.query;

    const tokenURL =
      `https://graph.facebook.com/v24.0/oauth/access_token` +
      `?client_id=${appId}&redirect_uri=${redirectUri}` +
      `&client_secret=${appSecret}&code=${code}`;

    const tokenRes = await axios.get(tokenURL);
    const accessToken = tokenRes.data.access_token;

    const userRes = await axios.get(
      `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`
    );

    res.json({
      accessToken,
      ...userRes.data,
      picture: userRes.data.picture?.data?.url,
    });

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error fetching token" });
  }
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
