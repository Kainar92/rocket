import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9e2ec8c7937e850b3392ab116db4a7f1906e561447c0cada5e02a33aa6cd5507"
  }
});
