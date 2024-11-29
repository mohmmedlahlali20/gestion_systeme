import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaVideo } from 'react-icons/fa'
import { Button, Typography } from '@mui/material'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen flex flex-col justify-between text-white">
     
      <header 
        className="w-full p-10 text-center shadow-lg"
        style={{
          backgroundImage: '' ,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Typography variant="h2" className="font-extrabold tracking-wide text-white mb-2">
          Event Management at its Best
        </Typography>
        <br/>
        <Typography variant="h5" className="text-gray-200 max-w-lg mx-auto mb-8">
          Manage your events, venues, and media seamlessly with our platform.
        </Typography>

        <div className="flex justify-center space-x-4">
          <Button variant="contained" color="teal" size="large" className="shadow-2xl m-5">
            Get Started
          </Button>
          <Button variant="outlined" color="teal" size="large" className="m-5">
            Login
          </Button>
          <Button variant="outlined" color="teal" size="large" className="m-5">
            Register
          </Button>
        </div>
      </header>

      <main className="flex flex-col items-center p-10 space-y-12 max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h3" className="font-semibold text-teal-500 mb-4">
            Simplify Event Management
          </Typography>
          <Typography variant="body1" className="text-gray-300 mb-8">
            Our platform makes managing every aspect of your events simple and intuitive. From scheduling to media, everything is integrated for you.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-teal-800 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out text-center">
            <FaCalendarAlt className="text-teal-400 text-5xl mb-6" />
            <Typography variant="h6" className="font-semibold text-white mb-2">
              Event Scheduling
            </Typography>
            <Typography variant="body2" className="text-gray-200">
              Schedule and manage your events effortlessly with our powerful tools.
            </Typography>
          </div>

          <div className="bg-teal-800 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out text-center">
            <FaMapMarkerAlt className="text-teal-400 text-5xl mb-6" />
            <Typography variant="h6" className="font-semibold text-white mb-2">
              Venue Management
            </Typography>
            <Typography variant="body2" className="text-gray-200">
              Easily find and manage the perfect venues for your events.
            </Typography>
          </div>

          <div className="bg-teal-800 p-8 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out text-center">
            <FaVideo className="text-teal-400 text-5xl mb-6" />
            <Typography variant="h6" className="font-semibold text-white mb-2">
              Media Integration
            </Typography>
            <Typography variant="body2" className="text-gray-200">
              Seamlessly integrate images and videos into your events for a richer experience.
            </Typography>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-6 text-center">
        <Typography variant="body2" className="text-gray-500">
          &copy; 2024 Event Manager. All rights reserved.
        </Typography>
      </footer>
    </div>
  )
}
