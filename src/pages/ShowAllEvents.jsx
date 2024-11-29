import React, { useEffect } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getEventByUserId } from '../redux/Slice/event/event'
import Cookies from 'js-cookie'  

export default function ShowAllEvents() {
  const { loading, error, events } = useSelector((state) => state.event)
  const dispatch = useDispatch()

  
  const user = Cookies.get('user')
 
  const userId = user ? JSON.parse(user)._id : null 

  useEffect(() => {
    if (userId) {
      dispatch(getEventByUserId({ userId }))
    }
  }, [dispatch, userId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 m-5">
        <Typography variant="h3" className="text-teal-500 text-center mb-10">
          Upcoming Events
        </Typography>

        <div className="grid grid-cols-1 m-5 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.length > 0 ? (
            events.map((event) => (
              <Card
                key={event._id} 
                className="bg-gray-800 text-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <CardContent>
                  <Typography variant="h6" className="font-semibold text-teal-500 mb-2">
                    {event.Title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-300 mb-2">
                    {event.Description}
                  </Typography>
                  <div className="flex items-center space-x-2 mb-4">
                    <FaCalendarAlt className="text-teal-400" />
                    <Typography variant="body2" className="text-gray-400">
                      {event.Date}
                    </Typography>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-teal-400" />
                    <Typography variant="body2" className="text-gray-400">
                      {event.location}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div>No events found</div>
          )}
        </div>
      </div>
    </div>
  )
}
