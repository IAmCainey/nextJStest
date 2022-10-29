import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import Image from "next/image";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [bio, setBio] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url, bio`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setBio(data.bio);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url, bio }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        bio,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container max-w-4xl m-auto mt-10 flex gap-10">
      <div className="w-1/2">
        <h1>Dashboard</h1>
        <p>
          Welcome back <b>{username}</b>, have a look around questions can be
          asked via socials.
        </p>

        <p className="py-20">
          <Image
            className="rounded-lg shadow-lg"
            src={avatar_url || ""}
            alt={username}
            width={200}
            height={100}
          />
        </p>
      </div>
      <div className="flex flex-col p-10 bg-slate-800 w-1/2">
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="website"
            value={website || ""}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="avatar_url">Avatar</label>
          <input
            id="avatar_url"
            type="website"
            value={avatar_url || ""}
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio || ""}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>

        <div className="buttonGroup mt-10">
          <button
            onClick={() =>
              updateProfile({ username, website, avatar_url, bio })
            }
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
          <button
            className="bg-red-600 hover:bg-red-500"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
