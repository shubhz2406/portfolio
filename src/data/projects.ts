import { IProject } from "./types"
import wallet from "@/assets/projectImages/wallet.png"
import blog from "@/assets/projectImages/blog.png"
import editor from "@/assets/projectImages/editor.png"


const projects: Array<IProject> = [
  {
    title: "Digital Wallet",
    description: "Full-stack wallet application supporting real-time bank transactions. Frontend and Backend - Next.js, Database - PostgreSQL",
    thumbnail: wallet,
    githubLink: "https://github.com/shubhz2406/digital-wallet",
    demoLink:"https://github.com/shubhz2406/digital-wallet"
  },
  {
    title: "RealTime Code Editor",
    description: "Online code editor enabling real time code synchronization across multiple users. Frontend - React, Backend - Nodejs, Websocket - Socket.io",
    thumbnail: editor,
    githubLink: "https://github.com/shubhz2406/real-time-code-editor",
    demoLink:"https://real-time-code-editor-lake-two.vercel.app/"
  },
  {
    title: "Blogging Application",
    description: "Blogging platform for creating, publishing, and reading articles with secure user accounts. Techstack involved are React, TypeScript, Cloudflare Workers, Prisma ORM, PostgreSQL, JWT",
    thumbnail: blog,
    githubLink: "https://github.com/shubhz2406/blogging-platform",
    demoLink:"https://blogging-platform-mauve-nine.vercel.app/signup"
  }
]

export default projects