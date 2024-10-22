"use client";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Cpu, Layout, Smile, PhoneCall, Github, User2, X } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full flex items-center justify-between p-6 bg-white shadow">
        <div className="text-2xl font-bold">
          <span className="text-3xl font-bold">Quanta AI</span>
        </div>
        <div className="ml-auto">
          {isSignedIn ? (
            <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
          ) : (
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <h1 className="text-5xl font-bold mt-4 mb-5">
          AI Content <span className="text-primary">Generator</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Revolutionize your content creation with our AI-powered app,
          delivering engaging and high-quality text in seconds.
        </p>
        {isSignedIn ? (
          <Button className="mb-8" onClick={() => router.push("/dashboard")}>
            Let's Dive In
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button className="mb-8">Get Started</Button>
          </SignInButton>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Cpu />}
            title="25+ Templates"
            description="Responsive, and mobile-first project on the web"
          />
          <FeatureCard
            icon={<Layout />}
            title="Customizable"
            description="Components are easily customized and extendable"
          />
          <FeatureCard
            icon={<Smile />}
            title="Free to Use"
            description="Every component and plugin is well documented"
          />
          <FeatureCard
            icon={<PhoneCall />}
            title="24/7 Support"
            description="Contact us 24 hours a day, 7 days a week"
          />
        </div>
      </main>

      <footer className="bg-gray-100 text-black mt-2">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-3 gap-6 ">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold mb-2">Who We Are?</span>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Dedicated to empowering businesses with cutting-edge solutions,
              our team combines innovation and expertise to deliver exceptional
              digital experiences. We specialize in scalable, efficient, and
              user-centric technology that drives growth and success.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/madhurpathak/"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-black"
                target="blank"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/Madhur_Pathak07"
                aria-label="X"
                className="text-gray-700 hover:text-black"   target="blank"
              >
                <X className="h-6 w-6" />
              </a>
              <a
                href="https://madhurpathak.netlify.app/"
                aria-label="Portfolio"
                className="text-gray-700 hover:text-black"

                
                    target="blank"

              >
                <User2 className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Madhur1707"
                aria-label="Github"
                className="text-gray-700 hover:text-black"   target="blank"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500">
          © 2024 Quanta | Gen-AI . All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center mt-0 mb-0 md:mt-4 md:mb-2">
      <div className="flex items-center mb-3 space-x-2">
        <div className="text-primary">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
