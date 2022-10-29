import { Auth } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

const Dash = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      {!session ? (
        <Auth supabaseClient={supabase} />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Dash;
