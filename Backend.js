import * as axios from 'axios';
import { sha256 } from 'js-sha256';
axios.defaults.baseURL = 'https://cowpay.me/api/fawry/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

export default class Hotels {

    chargeRequestcc(params,card_token, hash) {
        
        return axios.post('charge-request-cc', {
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

        },{

        },{   
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
        }})
            .then(response => {
                console.log(response)
                return response.data

                
            })
            .catch(error => {
                console.log(error.response.data)
                return error.response.data

            })
    }

    chargeRequest(params,hash) {
        
        return axios.post('charge-request', 
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
        },{   
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
                }})
            .then(response => {
                console.log("asd",response);
                return response.data
            })
            .catch(error => {
                console.log(error.response);
                return error.response.data
            })
    } 
    

    generateCardToken(params) {
        return axios.post('generate-card-token', 
        params,{   
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }})
            .then(response => {
                console.log(response);
                return response.data
            })
            .catch(error => {
                console.log(error.response);
                return error.response.data
            })
    }

    getPaymentStatus(merchant_code, merchant_reference_id,hash) {
        return axios.get('get-payment-status',{
            params:{
                    merchant_code: merchant_code,
                    merchant_reference_id: merchant_reference_id,
                    signature:sha256(merchant_code+merchant_reference_id+hash)
        }
            })
            .then(response => {
                console.log(response);
                return response.data
            },)
            .catch(error => {
                console.log(error.response);
                alert(error.response.data.message)
                return error.response.data

            })
    }

    payWithccToken(params,hash) {
        return axios.post('charge-request', 
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
            },{   
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }})
            .then(response => {
                console.log(response);
                return response.data
            })
            .catch(error => {
                console.log(error.response.data)
                return error.response.data
            })
        }
}