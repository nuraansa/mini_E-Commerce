import axios from 'axios'
function applyToken(token) {
  if(token){
    axios.withDefaults.headers = {
      Authorization: `${token}`
    }
  }
}
export default{
  applyToken
}