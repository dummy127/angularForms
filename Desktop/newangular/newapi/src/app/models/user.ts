export interface users{

    id:number;
    email:string
    username:string
    password:string
    name:{
        firstname:string
        lastname:string
    }
    phone:string
    address:{
        geolocation:{
            lat:string
            long:string
        }
        city:string
        street:string
        number:string
        zipcode:string
    }
}

export interface joke{

  id:number
  type:string
  setup:string
  punchline:string

}