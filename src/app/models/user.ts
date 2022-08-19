import { Address } from "./address";

export class User {

	  userId ?: string;


	  firstname ?: string;


	  lastname ?: string;


	  email ?: string;


	  phone ?: string;


	  admin ?: string;





  emailVerificationToken ?: string;


  emailVerificationStatus ?: string;


  addresses ?: 	 Array<Address> ;
}
