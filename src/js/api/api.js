import axios from "axios";

 class API {

 async updateShopifySection(id_section){
    const result = await axios.get(`?section_id=${id_section}`);
    return result.data;
  }


  async updateCart({id_variant, quantity}){
    try {
      const response = await axios.post('/cart/update.js', {
        updates:{
          [id_variant] : quantity
        }
      })   
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }


  async addCart({id_variant, quantity}){

    console.log({id_variant, quantity});
    try {
      const response = await axios.post('/cart/add.js', {
        "items": [
          {    
            "id": id_variant,   
            "quantity": quantity 
          }
          ]
      })   
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }


}


export default new API();