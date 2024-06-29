import { Head } from "@inertiajs/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
export default function Login() {
    return <>
        <Head title="Login" />
        <div className='w-full h-screen lg:flex'>
            <div className="basis-[30%] bg-blue-500 flex flex-col justify-center items-center h-screen">
                <h1 className="font-extrabold text-5xl text-white">Grafite</h1>
                <h1 className="font-bold text-xl text-white mb-5">Write, plan, organize, play</h1>
                <div className="w-[90%] bg-white rounded-md shadow lg:p-5 p-3">
                    <h1 className="text-2xl font-bold text-blue-700">Login</h1>
                    <form action="" className="mt-5" autoComplete="off" autoCorrect="off">
                        <div className="">
                            <Input type="email" label="Email" />
                        </div>
                        <div className="mt-5">
                            <Input type="password" label="Password" />
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button color="primary" className="font-bold">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="basis-[70%] lg:flex hidden items-center justify-center">
                <img src="/assets/hero1.svg" alt="hero" className="w-[50%]" />
            </div>
        </div>
    </>
}