import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { Upload, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
           <Link href="/"> <h1 className="text-xl font-semibold text-white">
              Harmony Ai
            </h1></Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <Button variant="outline" className="text-white hover:text-white bg-black hover:bg-gray-700">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button variant="outline" className="text-white hover:text-white bg-black hover:bg-gray-700">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/generated">
                <Button variant="outline" className="text-white hover:text-white bg-black hover:bg-gray-700">
                  Generated
                </Button>
              </Link>
             
              <Link href="/uploads">
                <Button variant="outline" className="text-white hover:text-white bg-black hover:bg-gray-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Uploads
                </Button>
              </Link>
              <Link href="/user-profile">
                <Button variant="ghost" className="text-white hover:text-white bg-black hover:bg-gray-700">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <SignOutButton>
                <Button variant="outline" className="text-white hover:text-white bg-black hover:bg-gray-700">
                  Sign Out
                </Button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};