import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getEventByUserId } from '../redux/Slice/event/event';
import Cookies from 'js-cookie';

export default function ShowAllEvents() {
  const { loading, error, events } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const user = Cookies.get('user');
  const userId = user ? JSON.parse(user)._id : null;
  const userFirstName = user ? JSON.parse(user).firstName : 'User';

  useEffect(() => {
    if (userId) {
      dispatch(getEventByUserId({ userId }));
    }
  }, [dispatch, userId]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="text-white text-xl font-semibold">Loading events...</div>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-teal-600 text-white px-6 py-4 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <div className="text-2xl font-semibold mb-4">Oops! Something went wrong</div>
        <div className="text-lg">No Events For You Please try again later, {userFirstName}.</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 m-5">
        <Typography variant="h3" className="text-teal-500 text-center mb-10">
          Upcoming Events
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events && events.length > 0 ? (
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
            <div className="text-center text-gray-400">No events found for you.</div>
          )}
        </div>
      </div>
    </div>
  );
}
