import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './component/Register'
import Login from './component/Login'
import Donor from './pages/donor/Donor'
import Profile from './pages/profile/Profile'
import AllDonors from './pages/allDonors/AllDonors'
import AdminDashboard from './pages/admin/adminDashboard/AdminDashboard'
import AdminAllDonor from './pages/admin/allDonors/AdminAllDonor'
import AllUser from './pages/admin/allUser/AllUser'
import EditProfile from './pages/editProfile/EditProfile'
import DonorRequest from './pages/admin/DonorRequest/DonorRequest'
import Seeker from './pages/admin/Seeker/Seeker'
import EditData from './pages/admin/editDatas/EditData'
import AddUser from './pages/admin/addUser/AddUser'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/donor/register' element={<Donor />} />
        <Route path='/seeker/register' element={<Donor seeker={true}/>} />
        <Route path='/edit/profile' element={<EditProfile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/allDonor' element={<AllDonors />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/donors' element={<AdminAllDonor />} />
        <Route path='/admin/users' element={<AllUser />} />
        <Route path='/admin/request' element={<DonorRequest />} />
        <Route path='/admin/seeker' element={<Seeker />} />
        <Route path='/edit-datas/:id' element={<EditData />} />
        <Route path='/admin/add-user' element={<AddUser />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
