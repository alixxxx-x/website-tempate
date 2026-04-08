import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ForgotPassword() {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) { setError("Please enter your email."); return; }
        setError("");
        setLoading(true);
        try {
            await api.post("/auth/forgot-password/", { email });
            setStep(1);
        } catch {
            setError("No account found with this email.");
        } finally {
            setLoading(false);
        }
    };

    const handleCodeSubmit = async (e) => {
        e.preventDefault();
        if (!code.trim()) { setError("Please enter the 6-digit code."); return; }
        setError("");
        setLoading(true);
        try {
            await api.post("/auth/verify-reset-code/", { email, code });
            setStep(2);
        } catch {
            setError("Invalid or expired code.");
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (newPassword.length < 8) { setError("Password must be at least 8 characters."); return; }
        setError("");
        setLoading(true);
        try {
            await api.post("/auth/reset-password/", { email, code, new_password: newPassword });
            setStep(3);
        } catch {
            setError("Failed to reset password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const containerClasses = "min-h-screen flex items-center justify-center bg-background px-4";
    const cardClasses = "w-full max-w-sm space-y-8";

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>

                {/* Logo & Header */}
                <div className="text-center">
                    <Link to="/" className="text-2xl font-black tracking-tighter text-foreground">
                        Brand<span className="text-primary">.Name</span>
                    </Link>
                    <h2 className="text-xl font-bold mt-6 tracking-tight">
                        {step === 0 && "Reset Password"}
                        {step === 1 && "Security Code"}
                        {step === 2 && "New Password"}
                        {step === 3 && "All Done!"}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 px-6">
                        {step === 0 && "Enter your email address and we'll send you a recovery code."}
                        {step === 1 && `We sent a 6-digit code to ${email}`}
                        {step === 2 && "Choose a new strong password for your account."}
                        {step === 3 && "Your password has been successfully updated."}
                    </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                    {error && <p className="text-sm text-destructive text-center mb-6 bg-destructive/10 py-2 rounded-lg">{error}</p>}

                    {/* Step 0: Email */}
                    {step === 0 && (
                        <form onSubmit={handleEmailSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                            </div>
                            <Button type="submit" disabled={loading} className="w-full h-11">
                                {loading ? "Sending..." : "Continue"}
                            </Button>
                        </form>
                    )}

                    {/* Step 1: Code */}
                    {step === 1 && (
                        <form onSubmit={handleCodeSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="code">Verify Code</Label>
                                <Input id="code" type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="000000" className="text-center tracking-widest font-mono text-lg" />
                            </div>
                            <Button type="submit" disabled={loading} className="w-full h-11">
                                {loading ? "Verifying..." : "Verify Code"}
                            </Button>
                        </form>
                    )}

                    {/* Step 2: New Password */}
                    {step === 2 && (
                        <form onSubmit={handlePasswordSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <div className="relative">
                                    <Input id="new-password" type={showPw ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="••••••••" className="pr-10" />
                                    <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                        {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>
                            <Button type="submit" disabled={loading} className="w-full h-11">
                                {loading ? "Saving..." : "Reset Password"}
                            </Button>
                        </form>
                    )}

                    {/* Step 3: Success */}
                    {step === 3 && (
                        <div className="text-center space-y-6">
                            <div className="flex justify-center">
                                <CheckCircle className="text-green-500 w-16 h-16" />
                            </div>
                            <Button asChild className="w-full h-11">
                                <Link to="/login">Back to Sign In</Link>
                            </Button>
                        </div>
                    )}
                </div>

                {step < 3 && (
                    <p className="text-center text-sm text-muted-foreground">
                        Wait, I remember it!{" "}
                        <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
                    </p>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
