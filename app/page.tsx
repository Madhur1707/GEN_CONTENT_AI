"use client";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full flex items-center justify-between p-6 bg-white shadow">
        <div className="text-2xl font-bold">LOGO</div>
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
          AI Content <span className="text-blue-600">Generator</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Revolutionize your content creation with our AI-powered app,
          delivering engaging and high-quality text in seconds.
        </p>
        {isSignedIn ? (
          <Button className="mb-8" onClick={() => router.push("/dashboard")}>
            Dashboard
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button className="mb-8">Get Started</Button>
          </SignInButton>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FeatureCard
            title="25+ Templates"
            description="Responsive, and mobile-first project on the web"
          />
          <FeatureCard
            title="Customizable"
            description="Components are easily customized and extendable"
          />
          <FeatureCard
            title="Free to Use"
            description="Every component and plugin is well documented"
          />
          <FeatureCard
            title="24/7 Support"
            description="Contact us 24 hours a day, 7 days a week"
          />
        </div>
      </main>

      <footer className="p-4 bg-gray-100 text-center">
        © 2024 Your Company Name
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
