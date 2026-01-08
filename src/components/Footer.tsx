import { Heart } from "lucide-react";
import { PROFILE } from "../constants";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
