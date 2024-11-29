import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/Slice/users/user";
import { fetchAllEvents, addUserToEvent } from "../../redux/Slice/event/event";
import Swal from "sweetalert2";
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  InputLabel,
  FormControl,
  Modal,
  Box,
  Button,
} from "@mui/material";

export default function GetAllUsers() {
  const dispatch = useDispatch();
  const { loading: usersLoading, error: usersError, users } = useSelector(
    (state) => state.users
  );
  const { loading: eventsLoading, error: eventsError, events } = useSelector(
    (state) => state.event
  );
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(fetchAllEvents());
  }, [dispatch]);

  const handleUserSelection = (event) => {
    const { value } = event.target;
    setSelectedUsers(typeof value === "string" ? value.split(",") : value);
  };

  const handleAddUserToEvent = async () => {
    if (selectedUsers.length > 0 && selectedEvent) {
      try {
        await dispatch(
          addUserToEvent({ eventId: selectedEvent._id, usersData: selectedUsers })
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Utilisateurs ajoutés à l'événement",
          showConfirmButton: false,
          timer: 1500,
        });
        setOpenModal(false);
      } catch (error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Erreur lors de l'ajout des utilisateurs",
          showConfirmButton: true,
        });
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Veuillez sélectionner des utilisateurs et un événement",
        showConfirmButton: true,
      });
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const availableUsers = selectedEvent
    ? users.filter((user) => !selectedEvent.members.includes(user._id))
    : users;

  return (
    <div className="container mx-auto mt-6 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Liste des événements</h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full bg-teal-100 border border-gray-200">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="py-3 px-6 text-left">Événement</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id} className="border-b hover:bg-teal-50">
                <td className="py-4 px-6">{event.Title}</td>
                <td className="py-4 px-6">{event.Date}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleOpenModal(event)}
                    className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-blur-700 transition duration-300"
                  >
                    Ajouter des utilisateurs
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="select-users-modal"
        aria-describedby="modal-to-select-users-for-event"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
          className="bg-white rounded-lg shadow-xl"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Sélectionner des utilisateurs pour {selectedEvent?.Title}
          </h3>

          <FormControl fullWidth>
            <InputLabel>Choisir des utilisateurs</InputLabel>
            <Select
              multiple
              value={selectedUsers}
              onChange={handleUserSelection}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 224,
                    width: 250,
                  },
                },
              }}
              className="text-gray-800"
            >
              {availableUsers.map((user) => (
                <MenuItem key={user._id} value={user._id}>
                  <Checkbox checked={selectedUsers.indexOf(user._id) > -1} />
                  <ListItemText
                    primary={user.firstName + " (" + user.email + ")"}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="mt-6 flex justify-between">
            <Button
              onClick={handleModalClose}
              color="secondary"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Fermer
            </Button>
            <Button
              onClick={handleAddUserToEvent}
              color="primary"
              disabled={usersLoading || selectedUsers.length === 0}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Ajouter
            </Button>
          </div>
        </Box>
      </Modal>

      {(usersError || eventsError) && (
        <div className="text-red-500 mt-4 text-center">
          {usersError ? usersError : eventsError}
        </div>
      )}
    </div>
  );
}
