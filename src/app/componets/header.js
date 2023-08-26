import React from 'react'
import Link from "next/link";

export default function Header() {
    return (
        <header className={"bg-gray-50"}>
            <div

                className={"xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-4 "}>
                <Link href={"/"}>
                <div className={"md:flex-none w-96 order-2 sm:order-1 flex justify-center py04 sm:py-0"}>
                    <input type={"text"}
                           className={"mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500"}
                           placeholder={"Search..."}/>
                </div>

                </Link>

                <Link href={'/'}>
                    <div className={"shrink w-80 sm:order-2"}>
                        <a className={"uppercase raleway font-bold text-3xl"}>Design</a>
                    </div>
                </Link>
                <Link href={"/  "}>
                <div className={"w-96 order-3 flex justify-center"}>

                        <div className={"flex  flex-gap-6"}>

                            <a>Facebook</a>


                            <a>Twitter</a>
                            <a>Threads</a>
                        </div>

                </div>
                </Link>
            </div>
        </header>
    )
}
