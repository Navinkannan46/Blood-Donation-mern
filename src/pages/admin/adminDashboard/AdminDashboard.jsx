import React, { useEffect, useState } from 'react'
import "./AdminDashboard.css"
import Sidebar from '../sidebar/Sidebar'
import { allUserDonorAPI, approveDonorAPI, getAllSeekerAPI, getAllUserAPI } from '../../../services/allAPI'
import AdminNavbar from '../navbar/AdminNavbar'
const AdminDashboard = () => {
    const [datas, setDatas] = useState({
        request: 0, user: 0, seeker: 0, donor: 0
    })
    const [searchKey, setSearchKey] = useState({
        state: "", city: "", bloodgroup: ""
    })
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        allData()
    }, [])

    const allData = async () => {
        const token = sessionStorage.getItem("token")

        if (!token) {
            alert("No Token Exists")
            return
        }
        const reqHeader = { "Authorization": `Bearer ${token}` }
        try {
            const result1 = await getAllUserAPI(searchKey, reqHeader)
            const result2 = await getAllSeekerAPI(searchKey, reqHeader)
            const result3 = await approveDonorAPI(searchKey, reqHeader)
            let result4 = await allUserDonorAPI(searchKey, reqHeader)
            if (result4.status == 200) {
                result4 = result4.data.filter(i => i.status == "Pending")
                
            }
            setDatas(prev => ({
                ...prev,
                user: result1?.data?.length || 0,
                seeker: result2?.data?.length || 0,
                donor: result3?.data?.length || 0,
                request: result4?.length || 0,
            }));
        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div className="flex-dashboard">
            {
                isOpen &&
                <Sidebar />
            }
            <div className="hero">
                <AdminNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="flex-admin">
                    <div className="box">
                        <h2>Requests</h2>
                        <p>{datas?.request}</p>
                    </div>
                    <div className="box">
                        <h2>All Donor</h2>
                        <p>{datas?.donor}</p>
                    </div>
                    <div className="box">
                        <h2>All Seeker</h2>
                        <p>{datas?.seeker}</p>
                    </div>
                    <div className="box">
                        <h2>All User</h2>
                        <p>{datas?.user}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard