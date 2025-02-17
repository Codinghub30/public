import { useState } from "react";
import axios from "axios";

export default function PaytmPayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [userDetails,setuserDetails]=useState({})
const[PaidAmount,setPaidAmount]=useState()
  const initiatePayment = async () => {

      const txnBaseAmount = userDetails?.baseAmount || 0;
      const txnFee = 1;
      const txnAmount = txnBaseAmount + txnFee;
  
      const custId = userDetails?.name
          ? `CUST_${userDetails.name.toUpperCase()}`
          : "CUST0012";
  
      // ✅ Generate Unique Order ID if not available
      const orderId = userDetails?.PGID || `ORD_${Date.now()}`;
  
      const requestBody = {
          MID: "MAKEMY09422872921500",
          ORDER_ID: orderId,  // Make sure ORDER_ID is set
          CUST_ID: custId,
          INDUSTRY_TYPE_ID: "Retail",
          CHANNEL_ID: "WEB",
          TXN_AMOUNT: txnAmount.toString(),
          WEBSITE: "DEFAULT",
          SERVICE: "SeniorCitizen",
          // id: leadId, 
          mobilenumber: userDetails.mobile
      };
  
      console.log("Sending Payment Payload:", requestBody);
  
      try {
          const response = await axios.post(
              "https://api.makemydocuments.in/api/PG/paytm/initiate",
              requestBody
          );
  
          console.log("Paytm Response:", response.data);
  
          if (response.data.paramList && response.data.CHECKSUMHASH) {
              const paramList = response.data.paramList;
              const paytmTxnUrl = "https://securegw.paytm.in/order/process";
  
              // Create a form dynamically
              const form = document.createElement("form");
              form.method = "POST";
              form.action = paytmTxnUrl;
  
              // Append all parameters as hidden inputs
              Object.keys(paramList).forEach((key) => {
                  const input = document.createElement("input");
                  input.type = "hidden";
                  input.name = key;
                  input.value = paramList[key];
                  form.appendChild(input);
              });
  
              // Append form to the body and submit
              document.body.appendChild(form);
              form.submit();
  
              setPaidAmount(txnAmount);
          } else {
              setError("Payment initiation failed.");
          }
      } catch (err) {
          console.error(
              "Payment API Error:", 
              err.response ? err.response.data : err.message
          );
          setError("Error initiating payment.");
      }
    }
  return (
    <div style={{ marginLeft: "0rem" }}>
      <h1>Paytm Payment</h1>
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay with Paytm"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
