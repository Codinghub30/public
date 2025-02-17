import React, { useState, useEffect } from "react";
import Image30 from "../../images/rentalimage.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/how.svg";
import howIcon from "../../images/Time.svg";
import { ArrowLeft } from "lucide-react";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import "../rental/rental.css"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state: "Karnataka",
    districts: [
      "Bagalkot",
      "Ballari (Bellary)",
      "Belagavi (Belgaum)",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru (Chikmagalur)",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi (Gulbarga)",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru (Mysore)",
      "Raichur",
      "Ramanagara",
      "Shivamogga (Shimoga)",
      "Tumakuru (Tumkur)",
      "Udupi",
      " Uttara Kannada (Karwar)",
      " Vijayapura (Bijapur)",
      "Yadgir",
    ],
  },
];

const Rental = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [shiftingaddress, setShiftingAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [tenantName, setTenantName] = useState("");
  // const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [shippingaddress, shippingAddress] = useState(null);
  const [shiftingdate, setShiftingDate] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  // const closePopup = () => {
  //   setShowPopup(false);
  //   setCurrentStep(1);
  //   setIsCompleted(false);
  // };
   const openPopup = () => {
      setShowPopup(true);
      navigate("/rental-agreement-form"); // Update the URL
    };
  
    // Function to close the popup and revert the URL
    const closePopup = () => {
      setShowPopup(false);
      navigate("/rental-agreement"); // Revert the URL
      setCurrentStep(1);
      setIsCompleted(false);
    };
  
    React.useEffect(() => {
      // Automatically show the popup if the URL matches /two-wheeler-insurance-info
      if (location.pathname === "/rental-agreement-form" || location.pathname === "/rental-agreement/proceed-to-pay") {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }, [location.pathname]);


  const [tenantaddress, setTeanantAddress] = useState("");
  const [monthlyrent, setMonthlyRent] = useState("");
  const [registrationNumber, setSeletedRegistrationNumber] = useState("");
  const [ownerDistrict, setOwnerDistrict] = useState("");
  const [ownerPincode, setOwnerPincode] = useState("");
  const [tenantDistrict, setTenantDistrict] = useState("");
  const [tenantPincode, setTenantPincode] = useState("");
  const handleOwnerDistrictChange = (e) => setOwnerDistrict(e.target.value);
  const handleOwnerPincodeChange = (e) => {
    const value = e.target.value;

    // Validate if the value is a number and has exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOwnerPincode(value);
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleTenantDistrictChange = (e) => setTenantDistrict(e.target.value);
  const handleTenantPincodeChange = (e) => {
    const value = e.target.value;

    // Validate if the value is a number and has exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setTenantPincode(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleMonthlyRent = (e) => setMonthlyRent(e.target.value);
  const handleShiftingAddress = (e) => setShiftingAddress(e.target.value);
  const handleShiftingdate = (e) => setShiftingDate(e.target.value);
  const handleTenantAddress = (e) => setTeanantAddress(e.target.value);
  const handleOwnerName = (e) => setOwnerName(e.target.value);
  const handleTenantName = (e) => setTenantName(e.target.value);
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const handleOwnerAddress = (e) => setOwnerAddress(e.target.value);
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };
  const [isLoading, setIsLoading] = useState(false);
  const [agreementOption, setAgreementOption] = useState("");
  const [identityOption, setIdentityOption] = useState(""); // State for radio buttons
  const [stampPaper, setStampPaper] = useState("");
  const [waterCharges, setWaterCharges] = useState(""); // Radio button
  const [paintingCharges, setPaintingCharges] = useState(""); // Dropdown
  const [accommodation, setAccommodation] = useState(""); // Text input
  const [appliancesFittings, setAppliancesFittings] = useState(""); // Textarea
  const handleWaterChargesChange = (e) => setWaterCharges(e.target.value);
  const handlePaintingChargesChange = (e) => setPaintingCharges(e.target.value);
  const handleAccommodationChange = (e) => setAccommodation(e.target.value);
  const handleAppliancesFittingsChange = (e) =>
    setAppliancesFittings(e.target.value);
  const handleAgreementChange = (e) => {
    setAgreementOption(e.target.value);
    console.log("Selected Agreement Option:", e.target.value); // Debugging log
  };

  const handleIdentityChange = (e) => {
    setIdentityOption(e.target.value);
    console.log("Selected Identity Option:", e.target.value); // Debugging log
  };

  //  useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }, []); 

  const handleStampPaperChange = (e) => {
    setStampPaper(e.target.value);
    console.log("Selected Stamp Paper:", e.target.value); // Debugging log
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Validate if the value is a number and has exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        const agreementOption = document.querySelector(
          'input[name="agreementOption"]:checked'
        );
        if (!agreementOption) {
          setError("Please select an agreement option.");
          return false;
        }
        break;
      case 2:
        const identityOption = document.querySelector(
          'input[name="identityOption"]:checked'
        );
        const stampPaper = document.getElementById("stampPaper").value;
        if (!identityOption) {
          setError("Please select your identity.");
          return false;
        }
        if (!stampPaper) {
          setError("Please select a required stamp paper.");
          return false;
        }
        break;
      case 3:
        if (!ownername) {
          setError("Owner's name and age are required.");
          return false;
        }
        if (!ownerAddress) {
          setError("Owner's address is required.");
          return false;
        }
        if (!selectedState) {
          setError("Please select a state.");
          return false;
        }
        if (!ownerDistrict) {
          setError("Please select a district.");
          return false;
        }
        if (!ownerPincode) {
          setError("Please enter a pin code.");
          return false;
        }
        break;
      case 4:
        if (!tenantName) {
          setError("Tenant's name and age are required.");
          return false;
        }
        if (!tenantaddress) {
          setError("Tenant's address is required.");
          return false;
        }
        if (!selectedState) {
          setError("Please select a state.");
          return false;
        }
        if (!tenantDistrict) {
          setError("Please select a district.");
          return false;
        }
        if (!tenantPincode) {
          setError("Please enter a pin code.");
          return false;
        }
        break;
      case 5:
        if (!shiftingdate) {
          setError("Shifting date is required.");
          return false;
        }
        if (!shiftingaddress) {
          setError("Shifting address is required.");
          return false;
        }
        break;
      case 6:
        // Add validation for step 6 if needed
        break;
      case 7:
        if (!shippingaddress) {
          setError("Shipping address is required.");
          return false;
        }
        if (!mobileNumber) {
          setError("Mobile number is required.");
          return false;
        }
        if (!selectedState) {
          setError("State is required.");
          return false;
        }
        if (!selectedDistrict) {
          setError("District is required.");
          return false;
        }
        if (!pincode) {
          setError("Pin code is required.");
          return false;
        }
        break;

      default:
        break;
    }
    setError(""); // Clear error if validation passes
    return true; // Validation passed
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < 7) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };


  useEffect(() => {
    const handleBackButton = (event) => {
      // Prevent default back navigation
      event.preventDefault();

      // Call prevStep only if the currentStep is greater than 1
      if (currentStep > 1) {
        prevStep();
      }
    };

    // Add listener for popstate
    window.addEventListener("popstate", handleBackButton);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [currentStep]); 

  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };




  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Move focus to the previous input
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };
  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  const [otpSent, setOtpSent] = useState(false); // To track if OTP has been sent

  const handleSendOtp = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      formattedNumber = `+91${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);

      const response = await axios.post(
        "https://api.makemydocuments.in/api/sendOTP",
        {
          mobilenumber: formattedNumber,
        }
      );

      if (response.status === 200) {
        console.log("API Response:", response.data);
        if (response.data.status === "success") {
          // Remove the alert and just set the state
          setOtpSent(true);
          setResendCountdown(30); // Reset countdown to 30 seconds
        } else {
          alert(response.data.message || "Error sending OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  React.useEffect(() => {
    if (resendCountdown > 0 && otpSent) {
      const timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (resendCountdown === 0) {
      setOtpSent(false); // Reset otpSent when countdown reaches zero
    }
  }, [resendCountdown, otpSent]);




 const [userDetails, setUserDetails] = useState(null);
  const [orderid, setOrderID] = useState();

  // Handle Proceed to Pay API call
  const [paidAmount, setPaidAmount] = React.useState(1); 
    const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const [leadId,setLeadId]=useState();
  const handleProceedToPay = async () => {
    const txnBaseAmount = userDetails?.baseAmount || 0;
    const txnFee = 1;
    const txnAmount = txnBaseAmount + txnFee;
  
    const custId = userDetails?.name
      ? `CUST_${userDetails.name.toUpperCase()}`
      : "CUST001";
  
    const requestBody = {
      MID: "MAKEMY09422872921500",
      ORDER_ID: userDetails?.orderid,
      CUST_ID: custId,
      INDUSTRY_TYPE_ID: "Retail",
      CHANNEL_ID: "WEB",
      TXN_AMOUNT: txnAmount.toString(),
      WEBSITE: "DEFAULT",
      SERVICE: "Rental Agreement",
      id: leadId, // Ensure leadId is defined elsewhere in your component or function scope
    };
  
    try {
      setIsLoading(true); 
      const response = await axios.post(
        "https://makemydocuments.nakshatranamahacreations.in/paytm-pg/pgRedirect.php",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        console.log("Payment API Response:", response.data);
  
        // Render the payment page content in the same tab
        document.open();
        document.write(response.data);
        document.close();
  
        // Save paid amount for reference
        setPaidAmount(txnAmount);
  
        // Wait for payment completion and fetch status
        checkPaymentStatus(leadId); // Call function to check payment status
      } else {
        // alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Error making payment request:", error);
      // alert("An error occurred while processing the payment.");
    }
    finally {
      setIsLoading(false); 
    }
  };
  

  const checkPaymentStatus = async (orderid) => {
    try {
      const statusResponse = await axios.get(
        `https://makemydocuments.nakshatranamahacreations.in/payment-status.php?orderid=${orderid}`
      );
  
      if (statusResponse.status === 200) {
        console.log("Payment Status Response:", statusResponse.data);
  
       
        if (statusResponse.data.status === "SUCCESS") {
          const formattedNumber = userDetails?.mobileNumber; // Ensure you have the mobile number available
        // sendMessage(formattedNumber);
        } else {
          // alert("Payment failed or is pending.");
        }
      } else {
        // alert("Unable to fetch payment status. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      // alert("An error occurred while fetching the payment status.");
    }
  };
  

  const [isResending, setIsResending] = useState(false);
  const handleResend = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^91\d{10}$/.test(formattedNumber)) {
        formattedNumber = `+91${formattedNumber}`;
      }
  
      console.log("Formatted Mobile Number for Resend:", formattedNumber);
  
      const config = {
        url: "https://api.makemydocuments.in/api/sendOTP",
        method: "post",
        data: {
          mobilenumber: formattedNumber,
        },
      };
      const response = await axios(config);
  
      if (response.status === 200 && response.data.status === "success") {
        console.log("Resend OTP Response:", response.data);
        setResendCountdown(30); 
        startCountdown(); 
       
      } else {
    
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    } finally {
      setIsResending(false); 
    }
  };
  

  const startCountdown = () => {
    let countdownValue = resendCountdown;
    const interval = setInterval(() => {
      if (countdownValue > 0) {
        countdownValue -= 1;
        setResendCountdown(countdownValue);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  

  const handleVerify = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
  
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
  
      formattedNumber = `+91${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);
  
      const enteredOtp = otp.join("").trim();
      if (!enteredOtp || enteredOtp.length !== 4) {
        alert("Please enter a valid 4-digit OTP.");
        return;
      }
  
      const response = await axios.post(
        "https://api.makemydocuments.in/api/verifyOTP",
        { mobilenumber: formattedNumber, otp: enteredOtp }
      );
  
      if (response.status === 200) {
        console.log("OTP Verification Response:", response.data);
        if (response.data.status === "success") {
          // alert("OTP Verified Successfully!");
          setShowOtpSection(false);
  
          // Finish submission first
          finishSubmission();
          navigate("/rental-agreement/proceed-to-pay");
          // await sendMessage(formattedNumber);
          // Fetch user details after finishing submission
          // await fetchUserDetails(formattedNumber);
        } else {
          alert(response.data.message || "Error verifying OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again.");
    }
  };


  // const sendMessage = async (formattedNumber) => {
  //   try {
  //     const name = fullName || "User"; // Assuming `fullName` is available in your state
  //     const url = `https://makemydocuments.nakshatranamahacreations.in/message-insurance.php?mobile=${formattedNumber}&name=${encodeURIComponent(
  //       name
  //     )}`;

  //     const response = await axios.get(url);

  //     if (response.status === 200) {
  //       console.log("Message sent successfully:", response.data);
  //     } else {
  //       console.error("Error sending message:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error while sending message:", error);
  //     alert("An error occurred while sending the message. Please try again.");
  //   }
  // };

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };

  const [date, setDate] = useState(null); 
    const [time, setTime] = useState(null);
   
    useEffect(() => {
      if (!date) {
        setDate(new Date().toISOString().split("T")[0]); 
      }
      if (!time) {
        setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); 
      }
    }, []); 
  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid || "",
      name: ownername || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      waterCharges: waterCharges || "",
      paintingCharges: paintingCharges || "",
      accommodation: accommodation || "",
      appliancesFittings: appliancesFittings || "",
      applying_for: agreementOption || "",
      services: selectedOption || "",
      identityOption: identityOption || "",
      stampPaper: stampPaper || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date,
      registrationNumber : registrationNumber || "",
      shippingaddress : shippingaddress || "", 
      shiftingdate: shiftingdate || "",
      shiftingaddress: shiftingaddress || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "1",
      tenantName: tenantName || "",
      tenantaddress: tenantaddress || "",
      monthlyrent: monthlyrent || "",
      // qualification: "",
      ownername: ownername || "",
      ownerAddress: ownerAddress || "",
      applyingfor: "",
      ownerDistrict: ownerDistrict || "",
      ownerPincode :ownerPincode || "",
      tenantDistrict: tenantDistrict ||"",
      tenantPincode : tenantPincode || "",
      shiftingdate: shiftingdate || "",
      shiftingaddress:  shiftingaddress || "",
      gender: selectedGender || "",
      // fathername: fatherName || "",
      // mothername: motherName || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "Rental Agreement",
     
      village: villageTownCity || "",
      state : selectedState || "",
      // "pancard-district": selectedDistrict || "",
    };

    console.log("Data being sent to API:", data);

    try {
      const response = await axios.post(
        "https://api.makemydocuments.in/api/lead/createLead",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("API Response:", response.data);
     

        if (response.data.status === "success") {
          const leadData = response.data.lead;
    
          setLeadId(leadData._id); // Correctly setting the lead ID
          setUserDetails({
            ownername: leadData.ownername || "",
            mobilenumber: leadData.mobilenumber || "",
            orderid: leadData.orderId || "",
            services: leadData.services || "N/A",
            paidAmount: leadData.paidAmount || "₹1",
          });
      }  else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      // alert("An error occurred while saving your details. Please try again.");
    }
  };
  const faqs = [
    {
      question: "Benefits of Rental Agreement?",
      answer: (
        <ul style={{ listStyleType: "disc" }}>
          <li>Minimizes the conflicts between a tenant and the owner</li>
          <li>Rental/lease agreement acts as an address proof</li>
          <li>Acts as a proof for Bank loans</li>
          <li>Helps in investment & loan</li>
          <li>Vehicle registration</li>
        </ul>
      ),
    },
    {
      question: "Difference between comprehensive and third-party liability?",
      answer:
        "Comprehensive insurance covers both third-party liabilities and damage to your own vehicle, while third-party liability only covers damage caused to others.",
    },
    {
      question: "What is the different between rental/lease agreement?",
      answer:
        "Leasing is defined as a contract between lessor and lessee whereby the lessor buys the asset and lets the lessee use the asset for a particular period. Renting is to allow the other party to occupy or use the asset for a short time, in return for a fixed payment.",
    },
    {
      question: "what is stamp paper?",
      answer:
        "Stamp papers which are used for execution of documents are called as Non-Judicial Stamp Papers. ... Stamp Duty paid in respect of Non-Judicial Stamp Paper is paid under The Indian Stamp Act, 1899 and Stamp Duty paid in respect of Judicial Stamp Paper is paid under the Court Fees Act, 1870",
    },
    {
      question: "Do I need to visit any office to get Rental agreement?",
      answer:
        "No its completely online process once you registered in our website we create draft and it will be print on stamp paper, and it get dispatched to address.",
    },
    {
      question: "How will I get my Rental agreement?",
      answer: "It will get dispatched through courier.",
    },
    {
      question: "What is the value of stamp paper for Rental agreement?",
      answer:
        "The Rental/Lease agreement must be printed on a Non-Judicial Stamp Paper with a value of Rs.100/- or more.",
    },
    {
      question: "What is validity of Rental agreement?",
      answer:
        "In the usual practice, a landlord and a tenant make a rent agreement for a period of 11 months, with an option for a periodic renewal.",
    },
    {
      question: "what is Notarized Rental agreement?",
      answer:
        "A notarized agreement is a document that has been marked with a notary stamp, which indicates that the signature on the document is legal. A notary officers is the witness when you sign and then places the stamp near your signature.",
    },
    {
      question: "Is agreement required to be notarised?",
      answer:
        "A contract typically does not have to be notarized. A notary public  provides an acknowledgment that the signature appearing on the document is that of the person whose signature it purports to be. There is a requirement that some documents be notarized, such as a real property deed.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title> Rental Agreement Online|Draft In 60 Minutes|Delivery Within 24 Hours</title>
<meta name="description" content="Now get your Rental agreement online, Rental Agreement simple online process.Register online, Drafting, Review Drafting, Payment, Doorstep Delivery"/>
<meta name="keywords" content="rental agreement, rental agreement online, how to create rental agreement,rental agreement near me, rental agreement bangalore, online rental agreement, online rent agreement near me, rent agreement, notarized rent agreement online, house rental agreement, online house rental agreement,
home rental agreement, rent agreement near me, rent agreement bangalore,rent agreement online bangalore, rental agreement karnataka, online agreement services."/>
<meta name="author" content="https://makemydocuments.com/rental-agreement"/>
<meta name="rating" CONTENT="General"/>
<meta name="revisit-after" CONTENT="2 days"/>
<meta name="robots" content=" ALL, index, follow"/>
<meta name="distribution" content="Global" />
<meta name="rating" content="Safe For All" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta name="rating" content="general"/>
<meta content="All, FOLLOW" name="GOOGLEBOTS"/>
<meta content="All, FOLLOW" name="YAHOOBOTS"/>
<meta content="All, FOLLOW" name="MSNBOTS"/>
<meta content="All, FOLLOW" name="BINGBOTS"/>
<meta content="all" name="Googlebot-Image"/>
<meta content="all" name="Slurp"/>
<meta content="all" name="Scooter"/>
<meta content="ALL" name="WEBCRAWLERS"/>

    </Helmet>
    <div style={{overflow:'hidden'}}>
      <div className="container-rental"
        style={{
          background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          minHeight: "60vh",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3%",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }} className="rental-text-container">
          <p>Find Peace of Mind with our Comprehensive Rental Agreement  <br className="d-block d-lg-none"/>
          Services - Simplifying the Rental Agreement Process!</p>
        </div>
        <div>
          <img
            src={Image30}
            alt="Rental Agreement"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div style={{ padding: "10px", textAlign: "left", marginLeft: "8%" }}>
        <h2
          style={{ color: "#1A76D8", fontWeight: "bold", marginLeft: "20px" }}
        >
          What We Do!
        </h2>
        <p style={{ textAlign: "left", padding: "2%", fontWeight: "600" }}>
          <span style={{}}>Make My Documents Online Agreements Service.</span>
          <br />
          <span style={{}}>Service available only in Karnataka.</span>
          <br />
          <span style={{}}>
            Draft will be shared to your mail id within 60min.
          </span>
        </p>
      </div>

      <div
        className="content-section"
        style={{
          backgroundColor: "#fffff",
          padding: "30px 15px",
          borderRadius: "10px",
          margin: "-4% auto",
          marginRight: "72%",
        }}
      >
        <div className="row justify-content-center ">
          {/* Main Column for Vertical Layout */}
          <div className="col-12 col-md-8 position-relative d-none d-lg-block">
            {/* First Section: Documents */}
            <div className="text-center mb-5">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "31%" }}
                />
                <img
                  src={documentsIcon}
                  alt="Documents Icon"
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    width: "18%",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                borderLeft: "3px solid #007BFF",
                height: "100%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-32%",
                marginLeft: "50%",
              }}
            ></div>

            {/* Second Section: How It Works */}
            <div className="text-center mb-5" style={{marginTop:'-50%'}}>
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "31%" }}
                />
                <img
                  src={howIcon}
                  alt="How It Works Icon"
                  style={{
                    position: "absolute",
                    top: "65%",
                    left: "50%",
                    width: "18%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>

            {/* Blue Line */}
            <div
              style={{
                borderLeft: "3px solid #007BFF",
                height: "79%",
                // margin: '0 auto',
                marginLeft: "49.8%",
                marginTop: "-52%",
                width: "4px",
              }}
            ></div>

            {/* Third Section */}
            <div className="text-center mb-5">
              <div style={{ position: "relative" ,marginTop:'-30%' }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "31%" }}
                />
                <img
                  src={Price}
                  alt="How It Works Icon"
                  style={{
                    position: "absolute",
                    top: "67%",
                    width: "18%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <div
            className="document-how mb-5"
            style={{
              marginTop: "-52%",
              marginLeft: "70%",
            }}
          >
            <h4
              style={{
                color: "#007BFF",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              How It Works
            </h4>
            <ul
              style={{
                display: "grid",
                // gridTemplateColumns: 'repeat(3, 1fr)',
                paddingLeft: "20px",
                whiteSpace: "nowrap",
                margin: "20px 0",
                listStyleType: "disc",
              }}
            >
              <li className="how-item">Register Online</li>
              <li className="how-item">Drafting</li>
              <li className="how-item">Review Drafting</li>
              <li className="how-item">Payment</li>
              <li className="how-item">Doorstep Delivery</li>
            </ul>
          </div>
          <div className="timeduration" style={{ marginLeft: "70%", marginTop: "10%" }}>
            <h4
              style={{
                color: "#007BFF",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              Time Duration
            </h4>
            <ul className="timeduration-ul"
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                lineHeight: "1.8",
                whiteSpace: "nowrap",
              }}
            >
              <li className="time-item" style={{ marginBottom: "10px" }}>1-2 working days</li>
            </ul>
          </div>
          <div className="charges" style={{ marginLeft: "70%", marginTop: "32%" , whitespace: "nowrap"}}>
            <h4
              style={{
                color: "#007BFF",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              Charges
            </h4>
            <ul
  className="charges"
  style={{
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.8",
    whiteSpace: "nowrap", // Default for desktop
  }}
>
  <li className="charge-item" style={{ marginBottom: "10px" }}>Rs 300</li>
  <li className="charge-item" style={{ marginBottom: "10px" }}>
    Rs 50 as booking/consulting charge.
    <br className="mobile-break" />
    Need to pay while submitting online form
  </li>
  <li
    className="charge-item"
    style={{
      fontWeight: "bold",
      marginBottom: "10px",
    }}
  >
    Note: Additional charges for stamp paper
  </li>
</ul>


          </div>
        </div>
      </div>
      <div className="mobile-content-container d-block d-lg-none">
  {/* Row 1: How It Works */}
  <div className="mobile-row">
    <div className="mobile-icon-container">
      <div style={{ position: "relative" }}>
        <img
          src={circleIcon}
          alt="Circle Background"
          className="mobile-circle-icon"
        />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="mobile-documents-icon"
        />
      </div>
    </div>
    <div className="mobile-content">
    <h4 className="mobile-title">How It Works</h4>
      <ul className="mobile-list" style={{marginLeft:'-34%', listStyleType: "disc",}}>
        <li className="mobile-item">Register Online</li>
        <li className="mobile-item">Drafting</li>
        <li className="mobile-item">Review Drafting</li>
        <li className="mobile-item">Payment</li>
        <li className="mobile-item">Doorstep Delivery</li>
      </ul>
   
    </div>
  </div>

  {/* Row 2: Time Duration */}
  <div className="mobile-row">
    <div className="mobile-icon-container">
      <div style={{ position: "relative" }}>
        <img
          src={circleIcon}
          alt="Circle Background"
          className="mobile-circle-icon"
        />
        <img
          src={howIcon}
          alt="How Icon"
          className="mobile-how-icon"
        />
      </div>
    </div>
    <div className="mobile-content">
    <h4 className="mobile-title">Time Duration</h4>
      <ul className="mobile-list" style={{marginLeft:'-34%', listStyleType: "disc",}}>
        <li className="mobile-item">1-2 working days</li>
      </ul>
  
    </div>
  </div>

  {/* Row 3: Charges */}
  <div className="mobile-row">
    <div className="mobile-icon-container">
      <div style={{ position: "relative" }}>
        <img
          src={circleIcon}
          alt="Circle Background"
          className="mobile-circle-icon"
        />
        <img
          src={Price}
          alt="Price Icon"
          className="mobile-price-icon"
        />
      </div>
    </div>
    <div className="mobile-content">
    <h4 className="mobile-title">Charges</h4>
      <ul className="mobile-list" style={{marginLeft:'-21%', listStyleType: "disc",}}>
        <li className="mobile-item">Rs 300</li>
        <li className="mobile-item">
          Rs 50 as booking/consulting charge.
          Need to pay while submitting the online form
        </li>
        <li className="mobile-item mobile-note">
          Note: Additional charges for stamp paper
        </li>
      </ul>
  
    </div>
  </div>
</div>



      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "4%" }}>
          <button
            style={{
              backgroundColor: "#FCA505",
              color: "#000000",
              padding: "12px 50px",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "40%",
              marginTop: "-30%",
            }}
            onClick={openPopup}
          >
            CONTINUE
          </button>
        </div> */}
        <div className="continue-button-container">
  <button
    className="continue-button"
    onClick={openPopup}
    style={{borderRadius:'0px'}}
  >
    Continue
  </button>
</div>

        {/* Modal Popup */}
        {showPopup && (
          <div  className="popupstyle-rental"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              backgroundColor: "#126ece",
              // backgroundColor:'#fff',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div className="popup-rental"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   borderRadius: "28px",
              //   width: "70%",
              //   maxHeight: "90%", // Maximum height of the popup
              //   overflowY: "auto", // Enable scrolling if content overflows
              //   textAlign: "center",
              //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              // }}
            >
              {/* Stepper */}

              {!isCompleted ? (
                <>
                  <div className="stepper-rental"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    {Array.from({ length: 7 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="step-container"
                       
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        >
                          <button
                           className="button-rental-stepper"
                            onClick={() => setCurrentStep(index + 1)} // Make step clickable
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor:
                                currentStep >= index + 1 ? "#4285F4" : "#ccc",
                              color: "white",
                              borderRadius: "50%",
                              lineHeight: "50px",
                              fontWeight: "bold",
                              border: "none",
                              cursor: "pointer",
                              outline: "none",
                            }}
                          >
                            {index + 1}
                          </button>
                          {/* Optional Step Labels */}
                          {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step {index + 1}</span> */}
                        </div>

                        {/* Add Connection Divider Between Steps */}
                        {index < 6 && (
                          <div
                            style={{
                              height: "2px",
                              flex: 1,
                              backgroundColor:
                                currentStep > index + 1 ? "#4285F4" : "#ccc",
                              alignSelf: "center",
                            }}
                            className="step-divider"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    {currentStep === 1 && (
                   <div className="agreement-container">
                   <h4 className="agreement-title d-none d-lg-block">Rental Agreement</h4>
                 
                   <h5 className="agreement-subtitle">
                     I Want to get
                     <span className="required-asterisk">*</span>
                   </h5>
                 
                   {/* Radio Buttons */}
                   <div className="agreement-options">
                     <label className="agreement-option">
                       <input
                         type="radio"
                         name="agreementOption"
                         value="flatHouseRentalAgreement"
                         onChange={handleAgreementChange}
                         className="radio-input"
                       />
                       Flat/House Rental Agreement
                     </label>
                     <label className="agreement-option">
                       <input
                         type="radio"
                         name="agreementOption"
                         value="commercialOfficeShopRentalAgreement"
                         onChange={handleAgreementChange}
                         className="radio-input"
                       />
                       Commercial Office/Shop Rental Agreement
                     </label>
                   </div>
                 
                   {error && <div className="error-message">{error}</div>}
                 </div>
                 
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        {/* <h5
                          style={{
                            color: "#007BFF",
                            fontWeight: "bold",
                            marginLeft: "-79%",
                            fontSize: "20px",
                          }}
                        >
                          I Am
                          <span style={{ color: "red" }}>*</span>
                        </h5> */}

                        {/* Identity Option Radio Buttons */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "4%",
                            width: "fit-content",
                            gap: "20px",
                          }}
                        >
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="identityOption"
                              value="owner"
                              onChange={handleIdentityChange} // Update state on change
                              style={{ marginRight: "10px" }}
                            />
                            Owner
                          </label>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="identityOption"
                              value="tenant"
                              onChange={handleIdentityChange} // Update state on change
                              style={{ marginRight: "10px" }}
                            />
                            Tenant
                          </label>
                        </div>

                        {/* Required Stamp Paper Dropdown */}
                        <div
                          style={{
                            marginBottom: "33px",
                            textAlign: "left",
                            marginTop: "60px",
                          }}
                        >
                          <label
                            htmlFor="stampPaper"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Required Stamp Paper
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="stampPaper"
                            value={stampPaper}
                            onChange={handleStampPaperChange} // Update state on change
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Choose</option>
                            <option value="100Rs">100Rs</option>
                            <option value="200Rs">200Rs</option>
                            <option value="500Rs">500Rs</option>
                            <option value="400Rs">400Rs</option>
                            <option value="300Rs">300Rs</option>
                          </select>

                        </div>

                        {/* Error Message */}
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}
                        <br/>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Owner's Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Owner's Name & Age */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Owner's Name & Age
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="ownerName"
                            value={ownername}
                            onChange={handleOwnerName}
                            placeholder="Enter Owner's Name & Age"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                          {error && !ownername && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </div>

                        {/* Owner's Father's Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerFatherName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Owner's Father's Name
                          </label>
                          <input
                            type="text"
                            id="ownerFatherName"
                            placeholder="Enter Owner's Father's Name"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Owner's Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Owner's Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="ownerAddress"
                            value={ownerAddress}
                            onChange={handleOwnerAddress}
                            placeholder="Enter Owner's Address"
                            style={{
                              width: "100%",
                              height: "90px", // Increased height for address
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                          {error && !ownerAddress && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </div>

                        {/* State Selection */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerState"
                            style={{ fontSize: "16px" }}
                          >
                            State<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="ownerState"
                            value={selectedState}
                            onChange={handleStateChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>
                          {error && !selectedState && (
                            <span style={{ color: "red" }}>
                              State is required
                            </span>
                          )}
                        </div>

                        {/* Owner District */}
                        {selectedState && (
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="ownerDistrict"
                              style={{ fontSize: "16px" }}
                            >
                              District<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="ownerDistrict"
                              value={ownerDistrict}
                              onChange={handleOwnerDistrictChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "4px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                            {error && !ownerDistrict && (
                              <span style={{ color: "red" }}>
                                District is required
                              </span>
                            )}
                          </div>
                        )}

                        {/* Owner Pin Code */}
                        <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label htmlFor="ownerPincode" style={{ fontSize: "16px" }}>
        Pin Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        value={ownerPincode}
        onChange={handleOwnerPincodeChange}
        id="ownerPincode"
        maxLength="6" // Limit input to 6 characters
        style={{
          width: "100%",
          height: "45px",
          fontSize: "16px",
          border: "2px solid #FCA505",
          borderRadius: "4px",
        }}
      />
 
      {error && ownerPincode.length !== 6 && (
        <span style={{ color: "red" }}>Pin Code must be 6 digits</span>
      )}
    </div>
    <br/>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Tenant Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Tenant Name & Age */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="TenantName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Tenant Name & Age
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="tenantName"
                            value={tenantName}
                            onChange={handleTenantName}
                            placeholder="Enter Tenant Name & Age"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Tenant Father's Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="TenantFatherName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Tenant Father's Name
                          </label>
                          <input
                            type="text"
                            id="TenantFatherName"
                            placeholder="Enter Tenant's Father's Name"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Tenant Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="TenantAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Tenant Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="TenantAddress"
                            value={tenantaddress}
                            onChange={handleTenantAddress}
                            placeholder="Enter Tenant Address"
                            style={{
                              width: "100%",
                              height: "90px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="tenantState"
                            style={{ fontSize: "16px" }}
                          >
                            State<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="tenantState"
                            value={selectedState}
                            onChange={handleStateChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>
                          {error && !selectedState && (
                            <span style={{ color: "red" }}>
                              State is required
                            </span>
                          )}
                        </div>

                        {/* Tenant District */}
                        {selectedState && (
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="tenantDistrict"
                              style={{ fontSize: "16px" }}
                            >
                              District<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="tenantDistrict"
                              value={tenantDistrict}
                              onChange={handleTenantDistrictChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "4px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                            {error && !tenantDistrict && (
                              <span style={{ color: "red" }}>
                                District is required
                              </span>
                            )}
                          </div>
                        )}

                        {/* Tenant Pin Code */}
                        <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label htmlFor="tenantPincode" style={{ fontSize: "16px" }}>
        Pin Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        value={tenantPincode}
        onChange={handleTenantPincodeChange}
        id="tenantPincode"
        maxLength="6" // Limit input to 6 characters
        style={{
          width: "100%",
          height: "45px",
          fontSize: "16px",
          border: "2px solid #FCA505",
          borderRadius: "4px",
        }}
      />
      {error && !tenantPincode && (
        <span style={{ color: "red" }}>Pin Code is required</span>
      )}
      {error && tenantPincode.length !== 6 && (
        <span style={{ color: "red" }}>Pin Code must be 6 digits</span>
      )}
    </div>
    <br/>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Other Info<span style={{ color: "red" }}>*</span>
                        </p>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ShifterDate"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shifted Date
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="ShifterDate"
                            value={shiftingdate}
                            onChange={handleShiftingdate}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Owner's Father's Name */}

                        {/* Owner's Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ShiftingAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shifting Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="TenantAddress"
                            value={shiftingaddress}
                            onChange={handleShiftingAddress}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "90px", // Increased height for address
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="SecurityDeposit"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Security Deposit
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="TenantFatherName"
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="MonthlyRent"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Monthly Rent
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id=""
                            value={monthlyrent}
                            onChange={handleMonthlyRent}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}
                        <br/>
                      </div>
                    )}
                    {currentStep === 6 && (
                      <div style={{ marginBottom: "20px", textAlign: "left" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <label
                            style={{ fontSize: "20px", fontWeight: "600" }}
                          >
                            Advance Paid Through{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              marginLeft: "4%",
                              width: "fit-content",
                              gap: "20px",
                              marginTop: "2%",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="advancePaidThrough"
                                value="cash"
                                style={{ marginRight: "10px" }}
                              />
                              Cash
                            </label>
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="advancePaidThrough"
                                value="cheque"
                                style={{ marginRight: "10px" }}
                              />
                              Cheque
                            </label>
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="advancePaidThrough"
                                value="netBanking"
                                style={{ marginRight: "10px" }}
                              />
                              Net Banking
                            </label>
                          </div>
                        </div>

                        <div style={{ textAlign: "left" }}>
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Water Charges{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              marginLeft: "4%",
                              width: "fit-content",
                              gap: "9px",
                              marginTop: "20px",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="waterCharges"
                                value="included"
                                onChange={handleWaterChargesChange}
                                style={{ marginRight: "10px" }}
                              />
                              Included in Rent
                            </label>
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="waterCharges"
                                value="excluded"
                                onChange={handleWaterChargesChange}
                                style={{ marginRight: "10px" }}
                              />
                              Excluded
                            </label>
                          </div>
                        </div>

                        <div
                          style={{
                            marginBottom: "40px",
                            textAlign: "left",
                            marginTop: "26px",
                          }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Painting Charges{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                              fontSize: "16px",
                            }}
                            defaultValue=""
                            value={paintingCharges}
                            onChange={handlePaintingChargesChange}
                          >
                            <option value="" disabled>
                              Choose
                            </option>
                            <option value="applicable">Applicable</option>
                            <option value="notApplicable">
                              Not Applicable
                            </option>
                          </select>
                        </div>

                        <div
                          style={{ marginBottom: "40px", textAlign: "left" }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Accommodation{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter accommodation details"
                            value={accommodation}
                            onChange={handleAccommodationChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        <div
                          style={{
                            marginBottom: "40px",
                            textAlign: "left",
                            marginTop: "-4px",
                          }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Appliances/Fittings Details{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            placeholder="Enter appliances and fitting details"
                            value={appliancesFittings}
                            onChange={handleAppliancesFittingsChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                              minHeight: "100px",
                            }}
                          />
                        </div>
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}
                        <br/>
                      </div>
                      
                    )}

                    {currentStep === 7 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 7 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Contact Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Shipping Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shipping Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="ownerAddress"
                            value={shippingaddress}
                            onChange={(e) => shippingAddress(e.target.value)}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "90px", // Increased height for address
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* State */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="state"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            State<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* District */}
                        {selectedState && (
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="district"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              District<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="district"
                              value={selectedDistrict}
                              onChange={handleDistrictChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "4px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Pin Code */}
                        <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="pincode"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Pin Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        value={pincode}
        onChange={handlePincodeChange}
        id="pincode"
        maxLength="6" // Limit input to 6 characters
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #FCA505",
          borderRadius: "10px",
        }}
      />
      {error && !pincode && (
        <span style={{ color: "red" }}>Pin Code is required</span>
      )}
      {error && pincode.length !== 6 && (
        <span style={{ color: "red" }}>Pin Code must be 6 digits</span>
      )}
    </div>

                        {/* Mobile Number */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="mobilenumber"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Mobile Number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="ownerName"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Email ID */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerFatherName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Email ID
                          </label>
                          <input
                            type="text"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            id="email"
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Error Message */}
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}

                        {/* Terms and Conditions */}
                        <p
                          style={{
                            marginTop: "20px",
                            fontSize: "14px",
                            textAlign: "left",
                          }}
                        >
                          By clicking submit, you agree to our{" "}
                          <a
                            href="/terms-conditions"
                            style={{
                              color: "#007BFF",
                              textDecoration: "underline",
                            }}
                          >
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy-policy"
                            style={{
                              color: "#007BFF",
                              textDecoration: "underline",
                            }}
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <br/>
                      </div>
                      
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    {currentStep > 1 && (
                     <>
                     {/* Desktop Button */}
                     {!isMobile && (
                       <button
                         onClick={prevStep}
                         className="desktop-back-btn"
                         style={{
                           padding: "10px 20px",
                           backgroundColor: "#FCA505",
                           color: "#000000",
                           border: "none",
                           borderRadius: "5px",
                           cursor: "pointer",
                           marginTop:'2%',
                           height:'1%'
                         }}
                       >
                         Back
                       </button>
                     )}
                     
                     {/* Mobile Button */}
                     {isMobile && (
                       <button
                         onClick={prevStep}
                         className="mobile-back-btn"
                         style={{
                           padding: "10px",
                           backgroundColor: "#FCA505",
                           color: "#000000",
                           border: "none",
                           borderRadius: "50%",
                           cursor: "pointer",
                           width: "40px",
                           height: "40px",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           position: "absolute",
                           top: "10px", // Adjust for positioning
                           left: "10px",
                         }}
                       >
                         <ArrowLeft size={20} />
                       </button>
                     )}
                     </>
                    )}

                    {currentStep < 7 ? (
                      // <button
                      //   onClick={nextStep}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "#FCA505",
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   Next
                      // </button>
                      <div className="next-button-container">
                        <br/>
  <button className="next-button" onClick={nextStep}>
    Next
  </button>
</div>

                    ) : (
                      // <button
                      //   onClick={() => {
                      //     if (!mobileNumber) {
                      //       setError("Mobile number is required.");
                      //       return;
                      //     }
                      //     handleSendOtp();  
                      //     setShowOtpSection(true);  
                      //     setError(""); 
                      //     setIsCompleted(true)
                      //   }}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "#FCA505",
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   SUBMIT
                      // </button>
                      <div className="submit-button-container">
  <button
    className="submit-button"
    onClick={() => {
      if (!mobileNumber) {
        setError("Mobile number is required.");
        return;
      }
      handleSendOtp();
      setShowOtpSection(true);
      setError("");
      setIsCompleted(true);
    }}
  >
    Submit
  </button>
</div>

                    )}
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  {showOtpSection ? (
                    <div>
                      <h4 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        OTP sent on{" "}
                        {mobileNumber
                          ? mobileNumber.replace(/.(?=.{4})/g, "*")
                          : ""}
                      </h4>
                      <div style={{ margin: "20px 0" }}>
                        <label
                          style={{ fontWeight: "500", marginBottom: "10px" }}
                        >
                          Enter OTP <span style={{ color: "red" }}>*</span>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              type="text"
                              maxLength="1"
                              value={digit}
                              onChange={(e) =>
                                handleChange(e.target.value, index)
                              }
                              onKeyDown={(e) => handleBackspace(e, index)}
                              style={{
                                width: "50px",
                                height: "50px",
                                textAlign: "center",
                                fontSize: "18px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <p style={{ fontSize: "14px", color: "#888" }}>
                          {resendCountdown > 0 ? (
                            <>Not Received? Resend in {resendCountdown}s</>
                          ) : (
                            <a
                              href="#"
                              onClick={handleResend}
                              style={{
                                textDecoration: "none",
                                color: isResending ? "#ccc" : "#007BFF",
                                pointerEvents: isResending ? "none" : "auto",
                              }}
                            >
                              Resend OTP
                            </a>
                          )}
                        </p>
                        
                      </div>

                      <div className="verify-button-container">
  <button
    onClick={() => {
      handleVerify().then((isVerified) => {
        if (isVerified) {
          finishSubmission();
        } else {
          setError("OTP verification failed.");
        }
      });
    }}
    style={{color:'#000', fontWeight:'bold'}}
    className="verify-button"
  >
    VERIFY
  </button>
</div>
                    </div>
                  ) : (
                    <>
                    {paymentSuccess ? ( // Conditionally render success message
                      <div>
                        <h2 style={styles.successMessage}>Payment Successful!</h2>
                        <h3 style={styles.thankYouMessage}>Thank You for Your Submission!</h3>
                      </div>
                    ) : (
                      <>
                 {location.pathname === "/rental-agreement/proceed-to-pay" && (
                      <div>
                        <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
                        <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Owner Name & Mobile Number */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Owner Name", value: userDetails?.ownername || "N/A" },
      { label: "Mobile Number", value: userDetails?.mobilenumber || "N/A" },
    ].map((item, index) => (
      <div key={index} style={{ flex: "1 1 45%", minWidth: "200px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
          {item.label}
        </label>
        <input type="text" value={item.value} readOnly 
               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
      </div>
    ))}
  </div>

  {/* Order ID & Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
    {[
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value:  "Rental Agreement" }, // Allows dynamic service selection
    ].map((item, index) => (
      <div key={index} style={{ flex: "1 1 45%", minWidth: "200px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
          {item.label}
        </label>
        <input type="text" value={item.value} readOnly 
               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
      </div>
    ))}
  </div>

  {/* Amount (Booking Fee) */}
  <div style={{ marginTop: "10px" }}>
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
      Amount (Booking Fee)
    </label>
    <input type="text" value={paidAmount || "₹0"} readOnly 
           style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    <p style={{ fontSize: "12px", marginTop: "5px" }}>
      You can pay the balance amount post documents verification by our consultant.
    </p>
  </div>
</div>

                       
                        <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    className="proceed-button"
    disabled={isLoading} // Disable button while loading
    style={{color:'#000', fontWeight:'bold'}}
  >
    {isLoading ? "Loading..." : "Proceed to Pay"}
  </button>
</div>

      {/* Spinner */}
      {isLoading && (
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner}></div>
        </div>
      )}
                      </div>
                      )}

                      </>
                    )}
                  </>
                  )}
                </div>
              )}

              {/* Close Button */}
              <button
              className="d-none d-lg-block"
                onClick={closePopup}
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "8%",
                  background: "#000000",
                  border: "1px solid #FCA505",
                  fontSize: "20px",
                  padding: "8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
        )}
      </div>

      <div
        className="faq-section"
        style={{
          margin: "10px auto",
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
          width: "80%",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#007BFF",
            marginBottom: "20px",
          }}
        >
          FAQs
        </h4>
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          Need help? Contact us for any queries related to us
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              style={{ marginBottom: "10px" }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid #007BFF",
                  borderRadius: "5px",
                  background: "#F9F9F9",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginLeft: "10px",
                  }}
                >
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    background: "#F3F3F3",
                    borderRadius: "5px",
                    color: "#333",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <br></br>
        <>
        <p style={{ textAlign: "left",  fontFamily: "Poppins, sans-serif", }}>
  Welcome to Make My Documents, your one-stop destination for all your
  rental agreement needs. We understand that renting a property can be
  a complex process, which is why we offer a hassle-free solution to
  help you secure your rental agreement quickly and easily.
</p>

<p style={{ textAlign: "left" ,  fontFamily: "Poppins, sans-serif",}}>
  Our team of legal experts has extensive experience in drafting
  rental agreements that meet all legal requirements. We provide
  comprehensive rental agreement services, including new rental
  agreements, rental agreement renewals, and rental agreement
  amendments. We also offer customized rental agreement solutions
  tailored to your unique needs.
</p>



          <p style={{ textAlign: "left",  fontFamily: "Poppins, sans-serif", }}>
            At Make My Documents, we take pride in providing exceptional
            customer service. We understand that your time is valuable, which is
            why we offer a seamless online rental agreement application process.
          </p>

          <p style={{ textAlign: "left", fontFamily: "Poppins, sans-serif", }}>
            Our online rental agreement form allows you to apply from the
            comfort of your own home, and our team will guide you through every
            step of the process. Our rental agreement services include all the
            necessary legal clauses and terms to protect both the landlord and
            the tenant. We also provide guidance on security deposits, rent
            payment schedules, and any other special requirements you may have.
          </p>

          <p style={{ textAlign: "left", fontFamily: "Poppins, sans-serif", }}>
            Our rental agreement services are competitively priced, so you won't
            have to break the bank to secure your rental agreement. Plus, our
            fast turnaround times mean that you can have your rental agreement
            in hand as soon as possible.
          </p>

          <p style={{ textAlign: "left", fontFamily: "Poppins, sans-serif", }}>
            Whether you need a rental agreement for your house, room, or
            commercial property, Make My Documents has got you covered. We offer
            e-registration of rental agreements, lease agreements, and notarized
            rental agreements to suit your specific requirements. Our services
            also include guidance on stamp duty for rental agreements, rent
            agreement validity, rental agreement cancellation, and rental
            agreement renewal.
          </p>

          <p style={{ textAlign: "left", fontFamily: "Poppins, sans-serif", }}>
            If you're in need of a rental agreement, look no further than Make
            My Documents. Contact us today to learn more about our rental
            agreement services and to schedule an appointment with one of our
            legal experts. We look forward to helping you secure your rental
            agreement and enjoy a hassle-free renting experience.
          </p>

          <p style={{ textAlign: "left", fontFamily: "Poppins, sans-serif", }}>
            We also ensure that our rental agreement services are compliant with
            the latest legal and regulatory requirements, giving you peace of
            mind. Our easy-to-use online platform and step-by-step support make
            the entire process smooth and efficient. At Make My Documents, we
            are committed to delivering reliable, transparent, and
            customer-focused solutions to cater to your rental agreement needs.
            With our expertise and dedication, you can trust us to simplify your
            rental agreement process, saving you time and effort.
          </p>
        </>
      </div>
    </div>
    </>
  );
};

const styles = {
  paymentSummary: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  thankYouMessage: {
    textAlign: "center",
    color: "#007BFF",
    marginBottom: "20px",
  },
  infoBox: {
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  label: {
    flex: "1",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    flex: "2",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    marginLeft: "10px",
    width: "45%",
  },
  proceedButton: {
    backgroundColor: "#fca505",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
  
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #ccc",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },


};


export default Rental;
