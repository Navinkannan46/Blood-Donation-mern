import axios from "axios"

const CommonAPI = async (method, url, data, reqHeader) => {
    const reqConfig = {
        method,
        url,
        data,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }
    return await axios(reqConfig).then(res => {
        return res
    }).catch(err => {
        return err
    })
}
export default CommonAPI