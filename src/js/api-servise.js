export default class ApiService {
    constructor (){
        this.images = '';
        this.page = 1;
    }   

     async fetchImage() {
        const options = {
        key: `3ff086ca8fded08ba42938358b3327b4`,
      
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true
        };
        const BASE_URL = `https://api.themoviedb.org/3/trending/all/day`
        let  {key, image_type, orientation} = options;
       
         const response  = await axios.get(`${BASE_URL}?api_key=${key}`)
          const data = response.data; 
         
            this.page += 1;
        //      const countPage = (data.totalHits / (40 * (this.page - 1)) ) ;
        //     const endImages = `<p class="info-end">
        //     <b>"We're sorry, but you've reached the end of search results."</b>
        //   </p>`
        // //   const countPage = (data.totalHits / (40 * (this.page - 1)) ) ;

        //     if (countPage <=  1 && countPage > 0)  {
        //         refs.moreBtn.classList.add('is-hidden');                

        //         refs.imageGallery.insertAdjacentHTML("afterend", endImages);

               
        //     }
          
            return data;
         }; 
      
    forEnd() {
        if (document.querySelector(`.info-end`)) {
            
            document.querySelector(`.info-end`).remove();
        }
    }
     clearForm() {
        this.page = 1;
    }

    get searchQuery() {
        return this.images;
    }
    set searchQuery(newSearchQuery){
        this.images = newSearchQuery;
    }
    
};