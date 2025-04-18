import UserForm from "./UserForm";
import UserList from "./UserList";

export default function Dashboard(){
    return(
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <UserForm />
            <UserList />
        </div>
    )
}