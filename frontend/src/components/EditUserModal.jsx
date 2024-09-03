import React from "react";
import { useFetchAllUsers } from "../apis/useUsers";
import { useFetchHomeByAddress } from "../apis/useFetchHomeByAddress";
import { useAssignUsersToHome } from "../apis/assignUsersToHome";
import LoadingState from "./LoadingState";

export const EditUserModal = ({ address, closeModal }) => {
  const [checkedUsers, setCheckedUsers] = React.useState([]);
  const { data: users, isLoading: isUsersLoading } = useFetchAllUsers();
  const { data: homesofUser, isLoading: isHomeLoading } =
    useFetchHomeByAddress(address);

  const { mutate, isPending: isSaving, isError } = useAssignUsersToHome();

  const onClose = () => {
    setCheckedUsers([]);
    closeModal();
  };

  const handleSubmit = () => {
    mutate(
      {
        street_address: address,
        userIds: checkedUsers,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  React.useEffect(() => {
    const initialChecked = homesofUser?.map((user) => user.username);
    setCheckedUsers(initialChecked ?? []);
  }, [homesofUser]);

  // Handle checkbox change
  const handleCheckboxChange = (username) => {
    setCheckedUsers((prevState) =>
      prevState.includes(username)
        ? prevState.filter((user) => user !== username)
        : [...prevState, username]
    );
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-50 flex justify-center items-center h-screen overflow-y-auto overflow-x-hidden backdrop-filter backdrop-blur-sm
      	 shadow-lg transition-all duration-500"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div
            className="relative bg-white rounded-lg shadow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4">
              <p className="text-black font-bold">
                Modify Users for: {address}
              </p>
            </div>
            {/* Modal body */}
            {isHomeLoading || isUsersLoading ? (
              <div className="p-10">
                <LoadingState />
              </div>
            ) : (
              <div className="p-4 pt-0">
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    {users.map((user) => (
                      <div className="flex gap-2" key={user.email}>
                        <input
                          type="checkbox"
                          checked={checkedUsers.includes(user.username)}
                          onChange={() => handleCheckboxChange(user.username)}
                        />
                        <p
                          className={`${
                            checkedUsers.includes(user.username)
                              ? "font-bold"
                              : ""
                          }`}
                        >
                          {user.username}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row justify-end gap-2">
                    <button
                      onClick={onClose}
                      className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                    >
                      {isSaving ? "Saving" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
