import toast from "react-hot-toast";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import "./navbar.css";
// redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/userslice";
import { RiLogoutCircleRLine, RiAccountCircleLine } from "react-icons/ri";

function Navbar() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user); // Assuming 'loading' is in the Redux state.
  
  const logOutProfile = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon!");
      dispatch(logout());
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="navbar bg-gradient-to-r from-white-500 to-red-800 dark:from-gray-900 dark:to-black w-full mx-auto border-b-2 shadow-lg rounded-lg">
      <div className="navbar-center dropdown dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar hover:bg-red-600 dark:hover:bg-gray-800 transition duration-300"
        >
          <div className="w-10 rounded-full border-2 border-white dark:border-gray-500">
            {user ? (
              <img
                alt="User avatar"
                src={user.photoURL}
                className="rounded-full"
              />
            ) : (
              <img
                alt="Default avatar"
                src="https://via.placeholder.com/150"
                className="rounded-full"
              />
            )}
          </div>
        </div>

        {/* Dropdown Menu */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-3 w-52 z-[2]"
        >
          {user ? (
            <>
              <li className="px-4 py-2">
                <span className="text-gray-700 dark:text-gray-300">
                  Hello, {user.displayName || 'User'}
                </span>
              </li>
              <li>
                <button
                  className="text-gray-700 dark:text-gray-300 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <RiAccountCircleLine className="text-xl" />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={logOutProfile}
                  className="text-red-500 dark:text-red-400 flex items-center space-x-2 hover:bg-red-100 dark:hover:bg-gray-700"
                >
                  <RiLogoutCircleRLine className="text-xl" />
                  <span>Logout</span>
                </button>
              </li>
            </>
          ) : (
            <li>
              <span className="text-gray-700 dark:text-gray-300">Loading...</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
