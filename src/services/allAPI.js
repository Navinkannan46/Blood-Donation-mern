import CommonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async (data) => {
    return await CommonAPI('POST', `${SERVERURL}/register`, data, {})
}
export const loginAPI = async (data) => {
    return await CommonAPI('POST', `${SERVERURL}/login`, data, {})
}
export const allUserDonorAPI = async (searchKey = {}, reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/allDonor?state=${searchKey.state}&city=${searchKey.city}&blood=${searchKey.bloodgroup}`, {}, reqHeader)
}
export const donorRegisterAPI = async (data, reqHeader) => {
    return await CommonAPI('POST', `${SERVERURL}/donor/register`, data, reqHeader)
}
export const seekerRegisterAPI = async (data, reqHeader) => {
    return await CommonAPI('POST', `${SERVERURL}/seeker/register`, data, reqHeader)
}
export const getProfileAPI = async (reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/donor/profile`, {}, reqHeader)
}
export const updateProfileAPI = async (data,reqHeader) => {
    return await CommonAPI('PUT', `${SERVERURL}/donor/profile/update`, data, reqHeader)
}
export const getAllUserAPI = async (searchKey, reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/allUser?name=${searchKey}`, {}, reqHeader)
}
export const requestStatusAPI = async (id, status, reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/request/${id}/update?status=${status}`, {}, reqHeader)
}

export const approveDonorAPI = async (searchKey, reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/admin/allDonor?state=${searchKey.state}&city=${searchKey.city}&blood=${searchKey.bloodgroup}`, {}, reqHeader)
}
export const deleteDonorAPI = async (id, reqHeader) => {
    return await CommonAPI('DELETE', `${SERVERURL}/delete/${id}/donor`, {}, reqHeader)
}
export const deleteUserAPI = async (id, reqHeader) => {
    return await CommonAPI('DELETE', `${SERVERURL}/delete /${id}/user`, {}, reqHeader)
}

export const getAllSeekerAPI = async (searchKey, reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/allSeeker?state=${searchKey.state}&city=${searchKey.city}&blood=${searchKey.bloodgroup}`, {}, reqHeader)
}
export const deleteSeekerAPI = async (id, reqHeader) => {
    return await CommonAPI('DELETE', `${SERVERURL}/delete/${id}/seeker`, {}, reqHeader)
}
export const getDonorData = async (id, reqHeader) => {
    return await CommonAPI('GET', `${SERVERURL}/get/${id}/donor`, {}, reqHeader)
}
export const adminUpdateDonorData = async (id, data, reqHeader) => {
    return await CommonAPI('PUT', `${SERVERURL}/admin-update/${id}/donor`, data, reqHeader)
}
