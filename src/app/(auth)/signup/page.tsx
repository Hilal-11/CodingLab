import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { IconBrandGoogleFilled  , IconBrandGithubFilled   } from "@tabler/icons-react"
import Link from "next/link"

const  Signup = async () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full px-2">
      <div className="w-auto h-auto p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg">
        <form>
            <h1 className="text-4xl font-bold text-center">Signup</h1>
            <p className="text-sm text-center text-muted-foreground pb-8 py-2">Create an account to get started</p>
            <div className="flex gap-1 w-full">
                <div className="w-1/2">
                    <Label className="text-sm font-medium pb-1" htmlFor="first-name">First Name</Label>
                    <Input id="first-name" name="first-name" type="text" required placeholder="John" />
                </div>
                <div className="w-1/2">
                    <Label className="text-sm font-medium pb-1" htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" name="last-name" type="text" required placeholder="Doe"/>
                </div>
            </div>
            
            <div className="mt-4">
                <Label className="text-sm font-medium pb-1" htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="johndoe@example.com" />
            </div>
            <div className="mt-4">
                <Label className="text-sm font-medium pb-1" htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required placeholder="••••••••" />
            </div>

            <div className="mt-6">
                <Button className="w-full py-2 rounded-md cursor-pointer" type="submit">Register</Button>
            </div>
            <div className="mt-3 flex gap-1 w-full">
                <Button className="bg-tranaparent text-neutral-800 hover:text-white py-2 rounded-md cursor-pointer w-1/2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" type="submit"><span><IconBrandGoogleFilled  /></span>Google</Button>
                <Button className="bg-tranaparent text-neutral-800 hover:text-white py-2 rounded-md cursor-pointer w-1/2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" type="submit"><span><IconBrandGithubFilled  /></span>GitHub</Button>
            </div>
            
            <div className="mt-4 text-center text-sm">
                <p>Already have an account? <Link href="/login" className="text-neutral-500">Login</Link></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
