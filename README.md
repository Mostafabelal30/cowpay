### cowpay

## Installation

npm install --save cowpay

## Functions

###chargeRequestcc

chargeRequestcc(params,card_token, hash)

params example

{
            merchant_code: params.merchant_code,
            merchant_reference_id: params.merchant_reference_id,
            payment_method: params.payment_method,
            customer_merchant_profile_id: params.customer_merchant_profile_id,
            card_number: params.card_number,
            expiry_year: params.expiry_year,
            expiry_month: params.expiry_month,
            save_card:params.save_card,
            cvv: params.cvv,
            customer_name: params.customer_name,
            customer_mobile: params.customer_mobile,
            customer_email: params.customer_email,
            amount:params.amount ,
            currency_code: params.currency_code,
            charge_items:params.charge_items ,
            description: params.description,
            signature:sha256(params.merchant_code+params.merchant_reference_id+params.customer_merchant_profile_id+params.payment_method+params.amount+card_token+hash),
        }


###chargeRequest

chargeRequest(params,hash)

params

    {
            merchant_code: params.merchant_code,
            merchant_reference_id:params.merchant_reference_id,
            customer_merchant_profile_id:params.customer_merchant_profile_id,
            customer_name:params.customer_name,
            customer_mobile: params.customer_mobile,
            customer_email:params.customer_email,
            payment_method:params.payment_method,
            amount:params.amount,
            currency_code:params.currency_code,
            signature:sha256(params.merchant_code+params.merchant_reference_id+params.customer_merchant_profile_id+params.payment_method+params.amount+hash),
        }

###generateCardToken

generateCardToken(params)

params example 

{
    "merchant_code":"GIu45k8D5z",
    "customer_name":"example",
    "customer_mobile":"01234567891",
    "customer_email":"example@gmail.com",
    "card_number":"4005550000000001",
    "expiry_year":"21",
    "expiry_month":"05",
    "cvv":"123",
    "customer_merchant_profile_id":"777777"
}

###getPaymentStatus

getPaymentStatus(merchant_code, merchant_reference_id,hash)
  
###payWithccToken

payWithccToken(params,hash)

params contains this parameters

       {
            merchant_code: params.merchant_code,
            merchant_reference_id:params.merchant_reference_id,
            customer_merchant_profile_id:params.customer_merchant_profile_id,
            customer_name:params.customer_name,
            customer_mobile: params.customer_mobile,
            customer_email:params.customer_email,
            payment_method:params.payment_method,
            card_token:params.card_token,
            amount:params.amount,
            currency_code:params.currency_code,
            signature:sha256(params.merchant_code+params.merchant_reference_id+params.customer_merchant_profile_id+params.payment_method+params.amount+params.card_token+hash),
            }