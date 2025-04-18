import { useSelector,useDispatch } from "react-redux";
import { setisEdit,deleteUser } from "../redux/userSlice";

export default function UserList(){
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Users</h2>
                <ul className="space-y-2">
                    {users.map(user => (
                    <li
                        key={user.id}
                        className="flex justify-between items-center p-2 bg-gray-100 rounded"
                    >
                        <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                        <div className="flex gap-2">
                        <button
                            className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                            onClick={() => dispatch(setisEdit(user))}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                            onClick={() => dispatch(deleteUser(user.id))}
                        >
                            Delete
                        </button>
                        </div>
                    </li>
                    ))}
                </ul>
        </div>
    );
}