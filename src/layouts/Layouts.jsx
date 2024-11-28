import React from 'react'
import { Outlet } from "react-router-dom";
import { SidBar } from '../layouts';

export default function Layouts() {
    return (
        <div className="flex h-screen">
            <SidBar />
            <div className="flex-grow ml-64 bg-gray-100 overflow-y-auto">
                <div className="container mx-auto px-4 py-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
