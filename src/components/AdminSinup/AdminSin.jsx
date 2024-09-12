
import './AdminSin.css'
export default function AdminSin(){
  return (
    <div class="w-full max-w-md">
        <div class="bg-blue-300 text-center py-2 rounded mb-6">
            <h1 class="text-lg font-semibold">Event Management System</h1>
        </div>
        <form class="space-y-4">
            <div class="flex items-center">
                <label class="bg-blue-600 text-white py-2 px-4 rounded mr-2 w-1/3 text-center">Name</label>
                <input type="text" class="bg-blue-600 text-white py-2 px-4 rounded w-2/3 text-center" value="Vendor" readonly />
            </div>
            <div class="flex items-center">
                <label class="bg-blue-600 text-white py-2 px-4 rounded mr-2 w-1/3 text-center">Email</label>
                <input type="email" class="bg-blue-600 text-white py-2 px-4 rounded w-2/3 text-center" value="Vendor" readonly />
            </div>
            <div class="flex items-center">
                <label class="bg-blue-600 text-white py-2 px-4 rounded mr-2 w-1/3 text-center">Password</label>
                <input type="password" class="bg-blue-600 text-white py-2 px-4 rounded w-2/3 text-center" value="Vendor" readonly />
            </div>
            <div class="flex items-center">
                <label class="bg-blue-600 text-white py-2 px-4 rounded mr-2 w-1/3 text-center">Category</label>
                <select class="bg-blue-600 text-white py-2 px-4 rounded w-2/3 text-center">
                    <option>Drop Down</option>
                </select>
            </div>
            <div class="flex justify-center">
                <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded">Sign Up</button>
            </div>
        </form>
    </div>
  );
  }
   
  
