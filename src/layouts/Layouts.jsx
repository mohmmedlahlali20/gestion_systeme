import React from 'react'
import { Outlet } from "react-router-dom";
import {SidBar} from '../layouts';

export default function Layouts() {
  return (
    <div className="flex flex-col overflow-y-hidden">
            <main className="flex-grow flex items-center justify-center  ">
                <SidBar/>
                <div className="container mx-auto ">
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
  )
}
