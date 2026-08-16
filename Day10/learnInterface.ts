export interface RBI{ // Strict abstraction
    // reporate,kycMandatory,
    repoRate():void;//{body of the method}
    kycMandatory():void;
    upiPayment():void;
    
}
//new RBI()--> can be done  
// all interface considered as the incomplete actions
// is there is any use of creating the object for the interface?
// without implementation methods
