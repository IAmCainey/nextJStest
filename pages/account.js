import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const Dash = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container max-w-4xl m-auto items-center">
      <div className="bg-slate-800">
        {!session ? (
          <Auth supabaseClient={supabase} />
        ) : (
          <Account session={session} />
        )}
      </div>
    </div>
  );
};

export default Dash;
