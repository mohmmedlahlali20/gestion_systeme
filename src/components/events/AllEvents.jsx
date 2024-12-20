import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllEvents, DeleteEventByID } from "../../redux/Slice/event/event";
import CreateEvent from "./CreateEvent";
import UpdateEvent from "./UpdateEvent";

export default function AllEvents() {
  const dispatch = useDispatch();
    const { loading, error, events } = useSelector((state) => state.event);

  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const handleUpdate = (event) => {
    setCurrentEvent(event);
    setShowModal(true); 
  };

  const handleDelete = (id) => {
    dispatch(DeleteEventByID({ eventId: id }))
    dispatch(fetchAllEvents());
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Liste des Événements</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Ajouter
          </button>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Nom</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Lieu</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index + 1} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{event.Title}</td>
                  <td className="px-4 py-2">{event.Date}</td>
                  <td className="px-4 py-2">{event.location}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mx-1"
                      onClick={() => handleUpdate(event)}
                    >
                      Modifier
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 mx-1"
                      onClick={() => handleDelete(event._id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showModal && currentEvent && (
        <UpdateEvent
          eventId={currentEvent._id}
          eventDetails={currentEvent}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {showModal && !currentEvent && (
        <CreateEvent showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}
