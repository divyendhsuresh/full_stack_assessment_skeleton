import { useFetchAllUsers } from "../apis/useUsers";

export default function DropDown({ setUserName, userName }) {
  const { data, isLoading, isError } = useFetchAllUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <div className="flex items-center gap-2 mb-4">
      <label className="text-gray-700 text-center">Select user:</label>
      <select
        onChange={(e) => setUserName(e.target.value)}
        value={userName || ""}
        className="justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 cursor-pointer"
      >
        <option value="">None</option>
        {data.map((user) => (
          <option value={user.username} key={user.email}>
            {user.username}
          </option>
        ))}
      </select>
    </div>
  );
}
