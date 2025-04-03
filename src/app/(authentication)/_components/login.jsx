'use client';
import { useState } from "react";
import { signInAction } from "@/app/action/signInAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    try {

      await signInAction(data);
    } catch (error) {
      setError("Failed to sign in. Please try again.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white">
      {/* email */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <Mail size={20} /> Email
        </Label>
        <Input
          type="email"
          placeholder="Please type your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
        />
      </div>

      {/* password */}
      <div>
        <Label
          htmlFor="password"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>
        <Input
          type="password"
          placeholder="Please type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* sign in button */}
      <Button
        type="submit"
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold"
      >
        Login
      </Button>
    </form>
  );
}
