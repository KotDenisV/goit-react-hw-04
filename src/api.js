import axios from "axios";

const requestImage = async (query, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: query,
          page,
          per_page: 12,
          client_id: "yp0qqG1aUtOWCHddGzSiyiPKlLSMQikoo_jpK367IU4",          
        },
    });  
  return response.data;  
};

export default requestImage;

