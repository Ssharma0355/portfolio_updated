import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  // Get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getUTCHours() + 1); // Convert to UTC+1
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/Ssharma0355"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Sachin Sharma
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} UTC+1</p>
          </span>
        </span>
        <div className="flex space-x-4">
          <Link
            href="mailto:ssharma0355@gmail.com"
            passHref
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            <Button variant={"outline"}>
              <MailIcon className="h-4 w-4 md:mr-2" />
              <span className="hidden md:flex">ssharma0355@gmail.com</span>
            </Button>
          </Link>
          <div className="flex hidden flex-row items-center space-x-2 md:flex">
            <Link
              href="https://github.com/Ssharma0355"
              target="_blank"
              passHref
            >
              <FaGithub className="h-6 w-6 text-muted-foreground transition hover:text-primary" />
            </Link>
            <Link href="https://x.com/Sachin_SDE" target="_blank" passHref>
              <FaTwitter className="h-6 w-6 text-muted-foreground transition hover:text-primary" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sachin-sharma-2k23/"
              target="_blank"
              passHref
            >
              <FaLinkedin className="h-6 w-6 text-muted-foreground transition hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
