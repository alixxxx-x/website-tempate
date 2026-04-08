import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-1">
                            <span className="text-xl font-bold text-white uppercase">Brand.Name</span>
                            <span className="text-primary text-2xl">.</span>
                        </Link>
                        <p className="leading-relaxed text-gray-400">
                            A short description of what your platform does and who it's built for.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold uppercase tracking-wider mb-6 text-xs">Explore</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                            <li><Link to="/features" className="hover:text-cyan-400 transition-colors">Features</Link></li>
                            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link to="/register" className="hover:text-cyan-400 transition-colors">Sign Up</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold uppercase tracking-wider mb-6 text-xs">Resources</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
                            <li><Link to="/support" className="hover:text-cyan-400 transition-colors">Support Center</Link></li>
                            <li><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Use</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold uppercase tracking-wider mb-6 text-xs">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Email: <a href="mailto:hello@yourdomain.com" className="hover:text-cyan-400 transition-colors">hello@yourdomain.com</a></li>
                            <li>Phone: <span>+1 (000) 000-0000</span></li>
                            <li>Address: <span>Your City, Country</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Brand.Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
