import axios from "axios";


export default {

  // Gets all 
  getCryptos: function() {
    console.log("testing apis")
    return axios.get("/api/cryptos");
    
  },
  // Gets the crypto with the given id
  getCrypto: function(id) {
    console.log("testing api again")
    return axios.get("/api/cryptos/" + id);
  },
  // Deletes the crypto with the given id
  deleteCrypto: function(id) {
    return axios.delete("/api/cryptos/" + id);
  },
  // Saves a crypto to the database
  saveCrypto: function(cryptoData) {
    return axios.post("/api/cryptos", cryptoData);
  },
  searchCrypto: function(amount) {
    return axios.get("/api/cryptos/search/" + amount);
  },
  //need to figuer out how to trigger this
  updateCrypto: function(id, updatedCrypto) {
    console.log(updatedCrypto, "7777")
    return axios.put("/api/cryptos/" + id, updatedCrypto);
  },
};




