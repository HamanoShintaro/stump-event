"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ user: null, session: null, loading: true, logout: async () => {} });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 初期のセッション情報を取得
    const getInitialSession = async () => {
      console.log("--- AuthContext: getInitialSession started ---");
      try {
        const { data } = await supabase.auth.getSession();
        console.log("--- AuthContext: getInitialSession success ---", { hasSession: !!data.session });
        setSession(data.session);
        setUser(data.session?.user ?? null);
      } catch (error) {
        console.error("--- AuthContext: Error getting initial session ---", error);
      } finally {
        setLoading(false);
        console.log("--- AuthContext: getInitialSession completed, loading=false ---");
      }
    };

    getInitialSession();

    // 認証状態の変更を監視（ログイン・ログアウト時）
    console.log("--- AuthContext: Setting up onAuthStateChange listener ---");
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("--- AuthContext: onAuthStateChange triggered ---", { event: _event, hasSession: !!session });
      try {
        setSession(session);
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("--- AuthContext: Error in onAuthStateChange ---", error);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
