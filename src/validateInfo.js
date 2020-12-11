export default function validateInfo(values) {
    let errors = {};


    //validation for Salutation
    // if(!values.salutation.trim()){
    //     errors.salutation='Salutation Required';
    // }

   

    if(!values.salutation){
        errors.salutation='*Field Should not be Empty';
    }

    if(!values.firstname){
        errors.firstname='*Please Enter Your First Name';
    }else if (!/^[a-zA-Z ]*$/.test(values.firstname)){
        errors.firstname='*Please Enter Alphabetic Characters only'
    }

    if(!values.lastname){
        errors.lastname='*Please Enter Your Last Name';
    }else if (!/^[a-zA-Z ]*$/.test(values.lastname)){
        errors.lastname='*Please Enter Alphabetic Characters only'
    }

    if(!values.birthdate){
        errors.birthdate='*Please Enter Your DOB';
    }

    if (!values.email) {
        errors.email = '*Please enter your Email Id';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '*Please enter valid Email Id';
      }

      if(!values.quote){
        errors.quote='*Please Enter the Quote';
    }else if (!/^[1000]*$/.test(values.quote)){
        errors.quote='*quote Shold not exceed 1000';
    }

    if(!values.ssn){
        errors.ssn='*Please Enter SSN Number';
    }else if (!/^[1000]*$/.test(values.ssn)){
        errors.ssn='*';
    }

    if(!values.source){
        errors.source='*Please Ensure Your Source OF Income';
    }else if (!/^[1000]*$/.test(values.source)){
        errors.source='*';
    }
     

return errors;
}


