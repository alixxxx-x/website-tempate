import { useState } from "react";
import api from "@/api/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import { useNavigate, Link } from "react-router-dom";
<<<<<<< HEAD
import ForgotPasswordModal from "./ForgotPassword";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, Layout } from "lucide-react";
=======
import illustrationImg from "@/assets/login-illustration.png";
import logoGif from "@/assets/logo.gif";
import bgTexture from "@/assets/backgroundLogin.jpg";
import ForgotPasswordModal from "./ForgotPassword";

/* ─── Eye Icon ─── */
const EyeIcon = ({ open }) =>
    open ? (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ) : (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
            <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
    );

/* ─── Stars ─── */
const Stars = () => (
    <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
            <svg key={i} width="16" height="16" fill="#FBBF24" viewBox="0 0 24 24">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
        ))}
    </div>
);
>>>>>>> 3ba8e2ef36140f5053ddc7a8f7cb06cad2b0b153

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showForgotModal, setShowForgotModal] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let EmptyErrors = {};
<<<<<<< HEAD
        if (!username.trim()) EmptyErrors.username = "Email is required";
        if (!password) EmptyErrors.password = "Password is required";
=======
        if (!username.trim()) EmptyErrors.username = "Please fill out this field.";
        if (!password) EmptyErrors.password = "Please fill out this field.";
>>>>>>> 3ba8e2ef36140f5053ddc7a8f7cb06cad2b0b153

        if (Object.keys(EmptyErrors).length > 0) {
            setErrors(EmptyErrors);
            return;
        }

        setErrors({});
        setLoading(true);
        try {
            const res = await api.post("/auth/login/", { username, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch (error) {
<<<<<<< HEAD
            alert("Login failed. Please check your credentials.");
=======
            alert("Login failed");
>>>>>>> 3ba8e2ef36140f5053ddc7a8f7cb06cad2b0b153
        } finally {
            setLoading(false);
        }
    };

    return (
<<<<<<< HEAD
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
            {/* ─── Logo ─── */}
            <div className="mb-8 flex flex-col items-center gap-2">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                        <Layout className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        Template
                    </span>
                </Link>
            </div>

            {/* ─── Standard Shadcn Card ─── */}
            <Card className="w-full max-w-md border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none bg-white dark:bg-zinc-900 rounded-xl overflow-hidden">
                <CardHeader className="space-y-1.5 pt-8 pb-6 px-8 text-center sm:text-left border-b border-zinc-100 dark:border-zinc-800/50">
                    <CardTitle className="text-2xl font-semibold tracking-tight">Welcome back</CardTitle>
                    <CardDescription className="text-zinc-500 dark:text-zinc-400">
                        Enter your email and password to sign in
                    </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8 pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value); setErrors(prev => ({ ...prev, username: null })) }}
                                    className="pl-10 h-11 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg"
                                />
                            </div>
                            {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username}</p>}
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                                <button
                                    type="button"
                                    onClick={() => setShowForgotModal(true)}
                                    className="text-xs font-medium text-primary hover:text-primary/80 hover:underline underline-offset-4"
                                >
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="password"
                                    type={showPw ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: null })) }}
                                    className="pl-10 pr-10 h-11 border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all rounded-lg"
=======
        <div className="flex h-screen overflow-hidden font-['Inter',system-ui,sans-serif]">

            {/* ════════════ LEFT PANEL ════════════ */}
            <div className="relative flex-1 basis-1/2 min-w-0 overflow-hidden ">

                {/*  Base gradient */}
                <div
                    className="absolute inset-0 z-0"
                    style={{ background: "linear-gradient(155deg, #080086 0%, #7C3AED 50%, #A855F7 100%)" }}
                />

                {/*  Texture image */}
                <div
                    className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: `url(${bgTexture})` }}
                />

                {/*  Gradient overlay */}
                <div
                    className="absolute inset-0 z-[2] opacity-20"
                    style={{ background: "linear-gradient(155deg, #080086 0%, #7C3AED 50%, #A855F7 100%)" }}
                />

                {/* Decorative glow ellipse */}
                <div
                    className="absolute z-[2] pointer-events-none rounded-full"
                    style={{
                        width: "360px",
                        height: "784px",
                        right: "-80px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "#D469FF",
                        opacity: 0.8,
                        filter: "blur(120px)",
                    }}
                />


                {/* Decorative blue ellipse (from Figma) */}
                <div className="absolute z-[2] pointer-events-none rounded-full w-[500px] h-[400px] left-1/2 bottom-[10%] -translate-x-[30%] bg-[#dbc8ffff] opacity-60 blur-[50px]" />

                {/* Content */}
                <div className="relative z-[3] flex flex-col h-full px-10 py-8 text-white">

                    {/* Logo */}
                    <div className="flex items-center gap-2 shrink-0">
                        <img src={logoGif} alt="stage.io" className="w-[77px] h-[77px] rounded-lg" />
                        <span className="text-[30px] font-semibold tracking-tight text-[#F1F1F1] font-['Poppins',sans-serif]">
                            Inter<span className="text-purple-300">.Ship</span>
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="mt-4 shrink-0">
                        <h1 className="text-[26px] font-semibold leading-tight tracking-tight text-white font-['Poppins',sans-serif]">
                            Connecting Students<br />
                            and Companies for Smarter<br />
                            Internships
                        </h1>
                        <p className="mt-2 ml-20 text-[16px] text-white font-normal font-['Port_Lligat_Slab',serif]">
                            University–Enterprise Internship Management Platform
                        </p>
                    </div>

                    {/* Illustration */}
                    <div className="flex-1 flex items-center justify-end min-h-0 py-2  ">
                        <img
                            src={illustrationImg}
                            alt="Collaboration"
                            className="max-w-[90%] max-h-full object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Testimonial */}
                    <div className="shrink-0 relative p-[1px] rounded-3xl max-w-[480px] mx-auto" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))' }}>
                        <div className="bg-white/[0.08] backdrop-blur-2xl rounded-3xl px-7 py-6 flex flex-col gap-3 relative overflow-hidden">
                            {/* Decorative glow */}
                            <div className="absolute -top-8 -right-8 w-28 h-28 bg-purple-300/15 rounded-full blur-2xl pointer-events-none" />

                            <div className="flex items-center justify-between">
                                <Stars />
                                {/* Quote mark */}
                                <span className="text-3xl font-serif text-white/15 leading-none select-none">❝</span>
                            </div>

                            <p className="text-[0.88rem] leading-relaxed text-white/90 tracking-wide">
                                <strong className="text-white font-semibold">Inter.Ship</strong> simplifies internship matching between
                                students and companies while automating administrative validation
                                and document generation.
                            </p>

                            <div className="flex items-center gap-3 pt-1 border-t border-white/10">
                                <div className="w-1 h-4 rounded-full bg-purple-400/50" />
                                <p className="text-[0.8rem] italic text-purple-200/60 tracking-wide">
                                    One platform. Three spaces. Seamless coordination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ════════════ RIGHT PANEL ════════════ */}
            <div className="flex-none basis-1/2 flex items-center justify-center bg-[#edecf6] p-8">

                <div className="bg-white rounded-3xl px-9 py-9 w-full  h-[600px] max-w-[450px] shadow-[0_4px_30px_rgba(124,58,237,0.07),0_1px_3px_rgba(0,0,0,0.04)] animate-[slideUp_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]">

                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src={logoGif} alt="stage.io" className="w-8 h-8 rounded-md" />
                        <span className="text-lg font-bold tracking-tight text-purple-600">
                            Inter<span className="text-purple-400">.Ship</span>
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-center text-xl font-bold text-indigo-950 mb-6 ">
                        Welcome Back!
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4" id="login-form" noValidate>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="login-email" className="text-xs font-semibold text-indigo-900">
                                Email
                            </label>
                            <input
                                id="login-email"
                                type="email"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value); setErrors(prev => ({ ...prev, username: null })) }}
                                placeholder="Email"
                                autoComplete="email"
                                className={`w-full px-3.5 py-2.5 border-[1.5px] rounded-xl text-sm font-[inherit] text-indigo-950 bg-indigo-50/30 outline-none transition-all placeholder:text-indigo-300 focus:ring-[3px] focus:bg-white ${errors.username ? 'border-red-400 focus:border-red-500 focus:ring-red-400/20' : 'border-indigo-100 focus:border-purple-600 focus:ring-purple-600/10'}`}
                            />
                            {errors.username && <span className="text-red-500 text-xs mt-0.5 ml-1 flex items-center gap-1"><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.username}</span>}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="login-password" className="text-xs font-semibold text-indigo-900">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="login-password"
                                    type={showPw ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: null })) }}
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    className={`w-full px-3.5 py-2.5 pr-10 border-[1.5px] rounded-xl text-sm font-[inherit] text-indigo-950 bg-indigo-50/30 outline-none transition-all placeholder:text-indigo-300 focus:ring-[3px] focus:bg-white ${errors.password ? 'border-red-400 focus:border-red-500 focus:ring-red-400/20' : 'border-indigo-100 focus:border-purple-600 focus:ring-purple-600/10'}`}
>>>>>>> 3ba8e2ef36140f5053ddc7a8f7cb06cad2b0b153
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPw(!showPw)}
<<<<<<< HEAD
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                                >
                                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg shadow-sm transition-colors mt-2"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    Signing in...
                                </div>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="bg-zinc-50 dark:bg-zinc-800/30 p-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/50">
                    <div className="w-full text-center">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-primary font-semibold hover:underline underline-offset-4">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </CardFooter>
            </Card>

            {/* ─── Simple Footer ─── */}
            <div className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
                © 2026 Template Platform. All rights reserved.
=======
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-indigo-300 hover:text-purple-600 transition-colors p-0 flex items-center"
                                    aria-label="Toggle password visibility"
                                    tabIndex={-1}
                                >
                                    <EyeIcon open={showPw} />
                                </button>
                            </div>
                            {errors.password && <span className="text-red-500 text-xs mt-0.5 ml-1 flex items-center gap-1"><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> {errors.password}</span>}
                            <div className="text-right mt-0.5">
                                <button
                                    type="button"
                                    onClick={() => setShowForgotModal(true)}
                                    className="text-xs font-medium text-purple-600 bg-transparent border-none cursor-pointer p-0 hover:text-purple-800 hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            id="login-submit-btn"
                            disabled={loading}
                            className="mt-1 w-full py-3 border-none rounded-xl text-sm font-semibold text-white cursor-pointer flex items-center justify-center min-h-[44px] transition-all hover:translate-y-[-1px] hover:shadow-[0_6px_22px_rgba(124,58,237,0.35)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)" }}
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-[2.5px] border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                "Sign In"
                            )}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-1">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-xs text-gray-400 whitespace-nowrap">or continue with</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        {/* OAuth Buttons ( google and github ) */}
                        <div className="flex gap-3">
                            <button
                                type="button"
                                id="login-google-btn"
                                className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[1.5px] border-gray-200 rounded-xl bg-white text-sm font-medium text-gray-700 cursor-pointer transition-all hover:border-purple-300 hover:bg-purple-50/40 hover:shadow-sm active:scale-[0.98]"
                                onClick={() => window.location.href = '/auth/google/'}
                            >
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-[18px] h-[18px]" />
                                Google
                            </button>

                            <button
                                type="button"
                                id="login-github-btn"
                                className="flex-1 flex items-center justify-center gap-2 py-2.5 border-[1.5px] border-gray-200 rounded-xl bg-white text-sm font-medium text-gray-700 cursor-pointer transition-all hover:border-purple-300 hover:bg-purple-50/40 hover:shadow-sm active:scale-[0.98]"
                                onClick={() => window.location.href = '/auth/github/'}
                            >
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-[18px] h-[18px]" />
                                GitHub
                            </button>
                        </div>

                        {/* signup link */}
                        <p className="text-center text-sm text-gray-500 mt-2">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="text-indigo-950 font-bold no-underline hover:text-purple-600 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
>>>>>>> 3ba8e2ef36140f5053ddc7a8f7cb06cad2b0b153
            </div>

            {/* Forgot Password Modal */}
            <ForgotPasswordModal isOpen={showForgotModal} onClose={() => setShowForgotModal(false)} />
<<<<<<< HEAD
=======

            {/* Keyframes */}
            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            <ForgotPasswordModal isOpen={showForgotModal} onClose={() => setShowForgotModal(false)} />
>>>>>>> 3ba8e2ef36140f5053ddc7a8f7cb06cad2b0b153
        </div>
    );
}

export default Login;
