"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "./page.module.css";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState("");
  const [loadingAction, setLoadingAction] = useState(false);
  
  const { user } = useAuth();
  const router = useRouter();

  // 既にログインしている場合はマイページへリダイレクト
  useEffect(() => {
    if (user) {
      const urlParams = new URLSearchParams(window.location.search);
      const redirectPath = urlParams.get('redirect') || '/mypage';
      router.push(redirectPath);
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    setErrorMsg("");
    setLoadingAction(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}${new URLSearchParams(window.location.search).get('redirect') || '/mypage'}`
        }
      });
      if (error) throw error;
      // Note: OAuthの場合、別ページにリダイレクトされるためここの後続処理は基本走りません
    } catch (error: any) {
      console.error(error);
      setErrorMsg("Googleログインに失敗しました。時間をおいて再度お試しください。");
      setLoadingAction(false);
    }
  };

  return (
    <div className="container">
      <header>
        <Link href="/" className="nav-logo">
          <img src="/logo-square.png" alt="勝手にスタンプラリー" style={{ height: "56px", width: "56px", display: "block", objectFit: "contain" }} />
        </Link>
      </header>
      
      <main className={styles.main}>
        <div className={"glass-card " + styles.formContainer}>
          <h1 className={styles.title}>ログイン</h1>
          <p className={styles.subtitle}>
            Googleアカウントを利用して、ワンタップでログイン・新規登録が可能です。
          </p>
          
          <div className={styles.form}>
            {errorMsg && <div className={styles.errorBox}>{errorMsg}</div>}
            
            <button 
              onClick={handleGoogleSignIn} 
              className={styles.googleBtn} 
              disabled={loadingAction}
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className={styles.googleIcon} 
              />
              {loadingAction ? "処理中..." : "Googleでログイン / 登録"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
