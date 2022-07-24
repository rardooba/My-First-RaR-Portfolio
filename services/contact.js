import axios from 'axios'

async function create(obj) {
  return await axios
    .post(process.env.NEXT_PUBLIC_SEND_EMAIL, obj)
    .then(res => res.data)
}

export default create
