import { useState } from "react";
import { Link } from "wouter";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4">{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p className="text-sm text-muted-foreground font-light">
            {isLogin ? "Enter your details to access your account." : "Join our community of craft enthusiasts."}
          </p>
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 transition-colors font-light" placeholder="E.g. Ananya Sharma" />
            </div>
          )}
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Email Address</label>
            <input type="email" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 transition-colors font-light" placeholder="ananya@example.com" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">Password</label>
            <input type="password" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 transition-colors font-light" placeholder="••••••••" />
          </div>

          <button className="w-full py-5 bg-foreground text-background uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary transition-colors mt-8">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs uppercase tracking-widest border-b border-foreground pb-1 font-bold hover:text-primary hover:border-primary transition-colors"
          >
            {isLogin ? "New here? Create an account" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
