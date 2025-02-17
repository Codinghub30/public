import React, { useState, useEffect } from "react";
import Image30 from "../../images/senior-image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import "../senior/seniorcitizen.css";
import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import howIcon from "../../images/how.svg";
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

const SeniorCitizen = () => {
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
  const [selectedOption, setSelectedOption] = useState("Senior Citizen");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [leadId, setLeadId] = useState();
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [gender, setGender] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const openPopup = () => {
    setShowPopup(true);
    navigate("/senior-citizen-card-form"); // Update the URL
  };

  // Function to close the popup and revert the URL
  const closePopup = () => {
    setShowPopup(false);
    navigate("/senior-citizen-card"); // Revert the URL
    setCurrentStep(1);
    setIsCompleted(false);
  };

  React.useEffect(() => {
    // Automatically show the popup if the URL matches /two-wheeler-insurance-info
    if (
      location.pathname === "/senior-citizen-card-form" ||
      location.pathname === "/senior-citizen-card/proceed-to-pay"
    ) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]);

  const [registrationNumber, setSeletedRegistrationNumber] = useState("");
  // const [bloodgroup, setBloodGroup] =useState('');
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const [bloodgroup, setBloodgroup] = useState("");
  const handlePinCode = (e) => setPincode(e.target.value);
  const handleBloodgroup = (e) => setBloodgroup(e.target.value);
  const handleDateOfBirth = (e) => setDob(e.target.value);
  // const handleSelectGender =(e) => setSelectedGender(e.target/value)
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);

  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };
  const [errors, setErrors] = useState({});
  const validateStep1 = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = "Name is required.";
    if (!dob) newErrors.dob = "Date of Birth is required.";
    else {
      const birthDate = new Date(dob);
      const age = new Date().getFullYear() - birthDate.getFullYear();
      if (age < 60) newErrors.dob = "You must be at least 60 years old.";
    }
    if (!bloodgroup) newErrors.bloodgroup = "Blood Group is required.";
    if (!selectedGender) newErrors.selectedGender = "Gender is required.";
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!villageTownCity) newErrors.villageTownCity = "Address is required.";
    if (!selectedState) newErrors.selectedState = "State is required.";
    if (!selectedDistrict) newErrors.selectedDistrict = "District is required.";
    if (!pincode) newErrors.pincode = "Pin Code is required.";
    return newErrors;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!mobileNumber) newErrors.mobileNumber = "Mobile Number is required.";
    if (!emailId) newErrors.emailId = "Email Id is required.";
    // Add more email validation if needed
    return newErrors;
  };

  // Navigate steps with validation
  const nextStep = () => {
    let validationErrors = {};
    if (currentStep === 1) {
      validationErrors = validateStep1();
    } else if (currentStep === 2) {
      validationErrors = validateStep2();
    } else if (currentStep === 3) {
      validationErrors = validateStep3();
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (currentStep < 3) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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
  const [otpSent, setOtpSent] = useState(false);
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

  const fetchUserDetails = async (formattedNumber) => {
    try {
      const response = await axios.post(
        "https://makemydocuments.nakshatranamahacreations.in/get-all.php",
        { mobilenumber: formattedNumber }
      );

      // Check if the response is successful and contains data
      if (response.status === 200 && response.data) {
        console.log("Fetched User Details:", response.data);

        // Reverse sort the user data if available
        const sortedData = response.data.data?.slice().reverse(); // Reverse the array

        if (sortedData && sortedData.length > 0) {
          const userDetails = sortedData[0]; // Access the first element after sorting
          // setUserData(userDetails); // Set user details
        } else {
          // alert("No user details found.");
        }
      } else {
        // alert("Failed to fetch user details.");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      // alert("An error occurred while fetching user details.");
    }
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "", // Clear error if the input is valid
      }));
    }
  };

  const handleBlur = () => {
    // Check if the pincode is exactly 6 digits on blur
    if (pincode.length !== 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "Pin Code must be exactly 6 digits.",
      }));
    }
  };

  const [userDetails, setUserDetails] = useState(null); // Holds user details
  const [orderid, setOrderID] = useState();
  const [paidAmount, setPaidAmount] = React.useState(1);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  console.log("userDetails", userDetails);

  const handleProceedToPay = async () => {
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
      ORDER_ID: orderId,
      CUST_ID: custId,
      INDUSTRY_TYPE_ID: "Retail",
      CHANNEL_ID: "WEB",
      TXN_AMOUNT: txnAmount.toString(),
      WEBSITE: "DEFAULT",
      SERVICE: "SeniorCitizen",
      id: leadId,
      mobilenumber: userDetails.mobile,
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
        const paytmTxnUrl =
          "https://secure.paytmpayments.com/theia/processTransaction";
        // https://secure.paytmpayments.com/theia/processTransaction

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
  };

  // const checkPaymentStatus = async (orderid) => {
  //   try {
  //     const statusResponse = await axios.get(
  //       `https://makemydocuments.nakshatranamahacreations.in/payment-status.php?orderid=${orderid}`
  //     );

  //     if (statusResponse.status === 200) {
  //       console.log("Payment Status Response:", statusResponse.data);

  //       if (statusResponse.data.status === "SUCCESS") {
  //         // Assuming `userDetails.mobile` contains the formatted number
  //         const formattedNumber = userDetails?.mobile || "";
  //         if (formattedNumber) {
  //           // await sendSuccessMessage(formattedNumber);
  //         } else {
  //           // console.error("Mobile number is missing or invalid.");
  //         }
  //       } else {
  //         // console.log("Payment status is not successful.");
  //       }
  //     } else {
  //       // console.error("Failed to fetch payment status. Status code:", statusResponse.status);
  //     }
  //   } catch (error) {
  //     // console.error("Error fetching payment status:", error);
  //   }
  // };

  //  useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }, []);

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

          navigate("/senior-citizen-card/proceed-to-pay");
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

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const [date, setDate] = useState(null); // Manage date state
  const [time, setTime] = useState(null); // Manage time state

  useEffect(() => {
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]); // Set the current date once when the component mounts
    }
    if (!time) {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); // Set the current time once when the component mounts
    }
  }, []);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };
  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",

      address: villageTownCity || "",
      district: selectedDistrict || "",
      date: date,
      dob: dob || "",
      paidAmount: "1",

      PGID: `ORD_${Date.now()}`,
      applying_for: "",
      gender: selectedGender || "",

      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      time:
        time && time !== "00:00:00"
          ? time
          : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      bloodgroup: bloodgroup || "",
      service: "SeniorCitizen",

      village: villageTownCity || "",
      state: selectedState || "",
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
          name: leadData.name || "",
          mobilenumber: leadData.mobilenumber || "",
          orderid: leadData.orderId || "",
          services: leadData.services || "N/A",
          paidAmount: leadData.paidAmount || "₹1",
          PGID: leadData.PGID,
        });
      } else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      // alert("An error occurred while saving your details. Please try again.");
    }
  };

  const faqs = [
    {
      question: "What is benefits of senior citizen card?",
      answer: (
        <ul style={{ listStyleType: "disc" }}>
          <li>Flight fare concession</li>
          <li>Railway fair concession</li>
          <li>Bus pass and bus fare concession (BMTC & KSRTC)</li>
          <li>Income tax exemption</li>
          <li>Senior citizen monthly pension</li>
        </ul>
      ),
    },
    {
      question: "What is the eligibility criteria of Senior Citizen Card?",
      answer: "The applicant must be at least 60 years of age.",
    },
    {
      question: "Do I need to visit any office to submit and documents?",
      answer:
        "No its completely online process you can send your documents through WhatsApp or E-mail.",
    },
    {
      question: "How will I get the senior citizen card?",
      answer:
        "Once its approved we will share you and soft copy via email or WhatsApp you can take color printout and laminate it.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          {" "}
          Senior Citizen Card Online|Senior Citizen Card Application |Apply Now
        </title>
        <meta
          name="description"
          content="Click here to apply for senior citizen card and get it the earliest, with expertise advice and guidance. Benefits: Flight/Railway/Bus pass and bus fare concession"
        />
        <meta
          name="keywords"
          content=" senior citizen card,Senior Citizen Card Online,senior citizen card in bangalore,senior citizen card near me,senior citizen card mysore,senior citizen card Karnataka,senior citizen card online application,senior citizen card online,how to get senior citizen card,how to apply for senior citizen card,apply for senior citizen card,senior citizen card application,apply for senior citizen card,documents required for senior citizen card,senior citizen card apply"
        />
        <meta
          name="author"
          content="https://makemydocuments.com/senior-citizen-card"
        />
        <meta name="rating" CONTENT="General" />
        <meta name="revisit-after" CONTENT="2 days" />
        <meta name="robots" content=" ALL, index, follow" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="Safe For All" />
        <meta name="language" content="English" />
        <meta http-equiv="window-target" content="_top" />
        <meta http-equiv="pics-label" content="for all ages" />
        <meta name="rating" content="general" />
        <meta content="All, FOLLOW" name="GOOGLEBOTS" />
        <meta content="All, FOLLOW" name="YAHOOBOTS" />
        <meta content="All, FOLLOW" name="MSNBOTS" />
        <meta content="All, FOLLOW" name="BINGBOTS" />
        <meta content="all" name="Googlebot-Image" />
        <meta content="all" name="Slurp" />
        <meta content="all" name="Scooter" />
        <meta content="ALL" name="WEBCRAWLERS" />
      </Helmet>
      <div style={{ overflow: "hidden" }}>
        <div
          className="container-senior"
          // style={{
          //   background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          //   minHeight: "30vh", // Reduced the height
          //   paddingTop: "20px",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "space-between",
          //   padding: "0 20px",
          //   marginTop: "-10%",
          // }}
          style={{
            height: "450px",
          }}
        >
          <div
            style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}
            className="senior-textcontent"
          >
            <p>
              "Expert Assistance for Quick and Convenient Senior{" "}
              <br className="d-block d-lg-none" />
              Citizen Card Services - Apply Now!
            </p>
          </div>
          <div>
            <img
              src={Image30}
              alt="Lease Agreement"
              style={{ maxWidth: "100%", height: "auto", margintop: "10%" }}
            />
          </div>
        </div>

        <div className="senior-text-container">
          <h2
            style={{ color: "#1A76D8", fontWeight: "600", marginLeft: "20px" }}
          >
            Note!
          </h2>
          <p style={{ textAlign: "left", padding: "2%", fontWeight: "500" }}>
            <span style={{ fontSize: "16px" }}>
              Service available only in karnataka.
            </span>
            <br />
            <br></br>
            <span style={{ fontSize: "16px" }}>
              Eligibility: The applicant must be at least 60 years of age.
            </span>
            <br />
            <br></br>
            <span style={{ fontSize: "16px" }}>
              The applicant must be a resident of Karnataka.
            </span>
            <br />
            <br></br>
            <span style={{ fontSize: "16px" }}>
              Once its approved we will share you and soft copy via email or
              WhatsApp
            </span>
            <br />
            <br></br>
            <span style={{ fontSize: "16px" }}>
              you can take color printout and use.
            </span>
            <br />
          </p>
        </div>

        <div
          className="content-section"
          style={{
            backgroundColor: "#fffff",
            padding: "30px 15px",
            borderRadius: "10px",
            margin: "-1% auto",
            marginRight: "72%",
          }}
        >
          <div className="row justify-content-center">
            {/* Main Column for Vertical Layout */}
            <div className="d-none d-lg-block col-12 col-md-8 position-relative">
              {/* First Section: Documents */}
              <div className="text-center mb-5">
                <div style={{ position: "relative" }}>
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid"
                  />
                  <img
                    src={documentsIcon}
                    alt="Documents Icon"
                    style={{
                      position: "absolute",
                      top: "61%",
                      left: "50%",
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
                  height: "50%",
                  // margin: '0 auto',
                  width: "4px",
                  marginTop: "-40%",
                  marginLeft: "50%",
                }}
              ></div>

              <div className="text-center mb-5" style={{ marginTop: "-23%" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid"
                  />
                  <img
                    src={howIcon}
                    alt="How It Works Icon"
                    style={{
                      position: "absolute",
                      top: "61%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  borderLeft: "3px solid #007BFF",
                  height: "65%",
                  // margin: '0 auto',
                  width: "4px",
                  marginTop: "-65%",
                  marginLeft: "50%",
                }}
              ></div>

              {/* Second Section: How It Works */}
              <div className="text-center mb-5" style={{ marginTop: "-31%" }}>
                <div style={{ position: "relative" }}>
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid"
                  />
                  <img
                    src={TimeIcon}
                    alt="How It Works Icon"
                    style={{
                      position: "absolute",
                      top: "61%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
              </div>

              {/* Blue Line */}
              <div
                style={{
                  borderLeft: "3px solid #007BFF",
                  height: "70%",
                  // margin: '0 auto',
                  marginLeft: "49.8%",
                  marginTop: "-48%",
                  width: "4px",
                }}
              ></div>

              {/* Third Section */}
              <div className="text-center mb-5">
                <div style={{ position: "relative", marginTop: "-31%" }}>
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid"
                  />
                  <img
                    src={Price}
                    alt="How It Works Icon"
                    style={{
                      position: "absolute",
                      top: "61%",
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
              className=""
              style={{
                marginTop: "-75%",
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
                Documents Required For Senior Citizen Card
              </h4>
              <ul
                style={{
                  display: "grid",
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  whiteSpace: "nowrap",
                  margin: "20px 0",
                }}
              >
                <li style={{ fontWeight: "" }}>Aadhaar card</li>
                <li style={{ fontWeight: "" }}>Blood Report</li>
                <li style={{ fontWeight: "" }}>Two Passport size photo</li>
              </ul>
            </div>
            <div style={{ marginLeft: "72%", marginTop: "10%" }}>
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
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  whiteSpace: "nowrap",
                  margin: "20px 0",
                }}
              >
                <li style={{ fontWeight: "" }}>Register Online</li>
                <li style={{ fontWeight: "" }}>Upload Documents</li>
                <li style={{ fontWeight: "" }}>Payment</li>
                <li style={{ fontWeight: "" }}>
                  Online Ekyc (Moble number should be linked with aadhar card)
                </li>
                <li style={{ fontWeight: "" }}>Get Delivered</li>
              </ul>
            </div>
            <div style={{ marginLeft: "72%", marginTop: "-2%" }}>
              <h4
                style={{
                  color: "#007BFF",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                Time Duration
              </h4>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  lineHeight: "1.8",
                  whiteSpace: "nowrap",
                }}
              >
                <li style={{ fontWeight: "", marginBottom: "10px" }}>
                  25-30 working days
                </li>
              </ul>
            </div>
            <div style={{ marginLeft: "72%", marginTop: "35%" }}>
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
                style={{
                  display: "grid",
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  whiteSpace: "nowrap",
                  margin: "20px 0",
                }}
              >
                <li style={{ fontWeight: "bold" }}>
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginRight: "10px",
                    }}
                  >
                    Rs.350
                  </span>
                  <span style={{ color: "#007BFF" }}>Rs.300</span>
                </li>
                <li style={{ fontWeight: "" }}>
                  If you decide to cancel your order after payment, <br />
                  please note that a cancellation fee of{" "}
                  <span style={{ fontWeight: "bold" }}>Rs. 50</span> will apply.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="senior-card-container d-block d-lg-none"
          style={{ marginTop: "-18%" }}
        >
          {/* Documents Section */}
          <div className="senior-card-section documents-section row-container">
            <div className="icon-container">
              <div className="circle-icon-container">
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="circle-img img-fluid"
                />
                <img
                  src={documentsIcon}
                  alt="Documents Icon"
                  className="icon-overlay"
                />
              </div>
            </div>
            <div className="content-container">
              <h4 className="section-title" style={{ textAlign: "left" }}>
                Documents Required For Senior <br /> Citizen Card
              </h4>
              <ul className="document-list" style={{ listStyleType: "disc" }}>
                <li>Aadhaar card</li>
                <li>Blood Report</li>
                <li>Two Passport size photo</li>
              </ul>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="senior-card-section how-it-works-section row-container">
            <div className="icon-container">
              <div className="circle-icon-container">
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="circle-img img-fluid"
                />
                <img
                  src={howIcon}
                  alt="How It Works Icon"
                  className="icon-overlay"
                />
              </div>
            </div>
            <div className="content-container">
              <h4 className="section-title" style={{ textAlign: "left" }}>
                How It Works
              </h4>
              <ul className="document-list" style={{ listStyleType: "disc" }}>
                <li>Register Online</li>
                <li>Upload Documents</li>
                <li>Payment</li>
                <li>
                  Online Ekyc (Mobile number should be linked with Aadhaar card)
                </li>
                <li>Get Delivered</li>
              </ul>
            </div>
          </div>

          {/* Time Duration Section */}
          <div className="senior-card-section time-duration-section row-container">
            <div className="icon-container">
              <div className="circle-icon-container">
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="circle-img img-fluid"
                />
                <img
                  src={TimeIcon}
                  alt="Time Duration Icon"
                  className="icon-overlay"
                />
              </div>
            </div>
            <div className="content-container">
              <h4 className="section-title" style={{ textAlign: "left" }}>
                Time Duration
              </h4>
              <ul className="document-list" style={{ listStyleType: "disc" }}>
                <li>25-30 working days</li>
              </ul>
            </div>
          </div>

          {/* Charges Section */}
          <div className="senior-card-section charges-section row-container">
            <div className="icon-container">
              <div className="circle-icon-container">
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="circle-img img-fluid"
                />
                <img src={Price} alt="Charges Icon" className="icon-overlay" />
              </div>
            </div>
            <div className="content-container">
              <h4 className="section-title" style={{ textAlign: "left" }}>
                Charges
              </h4>
              <ul className="document-list" style={{ listStyleType: "disc" }}>
                <li>
                  <span className="strikethrough">Rs.350</span>
                  <span className="discounted-price">Rs.300</span>
                </li>
                <li>
                  If you decide to cancel your order after payment, please note
                  that a cancellation fee of{" "}
                  <span className="bold-text">Rs. 50</span> will apply.
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
              style={{ borderRadius: "0px" }}
            >
              Continue
            </button>
          </div>

          {/* Modal Popup */}
          {showPopup && (
            <div
              className="popupstyle-senior"
              style={{
                position: "fixed",
                top: "100px",
                left: "0",
                width: "100%",
                height: "86%",
                // backgroundColor: "rgba(26, 118, 216, 0.9)",
                backgroundColor: "#126ece",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "9999",
              }}
            >
              <div
                className="popup-senior"
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
                    <div
                      className="stepper-senior"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "30px",
                      }}
                    >
                      {Array.from({ length: 3 }).map((_, index) => (
                        <React.Fragment key={index}>
                          <div
                            className="step-container"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              flex: 1,
                            }}
                          >
                            <button
                              className="button-senior-stepper"
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
                          {index < 2 && (
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
                        <div
                          className="application-step"
                          style={{ textAlign: "center" }}
                        >
                          <h4
                            className="application-heading"
                            style={{ color: "#1A76D8", fontWeight: "600" }}
                          >
                            Application
                          </h4>
                          <div
                            className="form-row"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              flexWrap: "wrap", // Ensures proper layout on smaller screens
                              marginBottom: "33px",
                            }}
                          >
                            {/* First Column */}
                            <div
                              className="form-column"
                              style={{
                                flex: 1,
                                marginRight: "10px",
                                textAlign: "left",
                              }}
                            >
                              {/* Name Input */}
                              <div
                                className="form-group"
                                style={{ marginBottom: "20px" }}
                              >
                                <label
                                  htmlFor="fullName"
                                  className="form-label"
                                  style={{
                                    display: "block",
                                    marginBottom: "10px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Name <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="text"
                                  id="fullName"
                                  className="form-input"
                                  value={fullName}
                                  onChange={(e) => setFullName(e.target.value)}
                                  style={{
                                    width: "100%",
                                    padding: "10px",
                                    fontSize: "16px",
                                    border: "2px solid #FCA505",
                                    borderRadius: "10px",
                                  }}
                                />
                                {errors.fullName && (
                                  <span
                                    className="form-error"
                                    style={{ color: "red" }}
                                  >
                                    {errors.fullName}
                                  </span>
                                )}
                              </div>

                              {/* Gender Selection */}
                              <div
                                className="form-group"
                                style={{ marginBottom: "20px" }}
                              >
                                <label
                                  className="form-label"
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: "#333",
                                  }}
                                >
                                  Gender <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  name="gender"
                                  className="form-select"
                                  onChange={handleGenderChange}
                                  style={{
                                    width: "100%",
                                    padding: "8px",
                                    marginTop: "5px",
                                    border: "2px solid #FCA505",
                                    borderRadius: "10px",
                                  }}
                                >
                                  <option value="">Select Gender</option>
                                  <option value="female">Female</option>
                                  <option value="male">Male</option>
                                  <option value="transgender">
                                    Transgender
                                  </option>
                                </select>
                                {errors.gender && (
                                  <span
                                    className="form-error"
                                    style={{ color: "red" }}
                                  >
                                    {errors.gender}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Second Column */}
                            <div
                              className="form-column"
                              style={{ flex: 1, textAlign: "left" }}
                            >
                              {/* Date of Birth */}
                              <div
                                className="form-group"
                                style={{ marginBottom: "20px" }}
                              >
                                <label
                                  className="form-label"
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: "#333",
                                  }}
                                >
                                  Date of Birth{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  type="date"
                                  className="form-input"
                                  value={dob}
                                  onChange={(e) => setDob(e.target.value)}
                                  style={{
                                    width: "100%",
                                    padding: "8px",
                                    marginTop: "5px",
                                    border: "2px solid #FCA505",
                                    borderRadius: "10px",
                                  }}
                                />
                                {errors.dob && (
                                  <span
                                    className="form-error"
                                    style={{ color: "red" }}
                                  >
                                    {errors.dob}
                                  </span>
                                )}
                              </div>

                              {/* Blood Group Selection */}
                              <div
                                className="form-group"
                                style={{ marginBottom: "20px" }}
                              >
                                <label
                                  className="form-label"
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: "#333",
                                  }}
                                >
                                  Blood Group{" "}
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <select
                                  className="form-select"
                                  value={bloodgroup}
                                  onChange={(e) =>
                                    setBloodgroup(e.target.value)
                                  }
                                  style={{
                                    width: "100%",
                                    padding: "8px",
                                    marginTop: "5px",
                                    border: "2px solid #FCA505",
                                    borderRadius: "10px",
                                  }}
                                >
                                  <option value="">Select Blood Group</option>
                                  <option value="A+">A+</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B-">B-</option>
                                  <option value="O+">O+</option>
                                  <option value="O-">O-</option>
                                  <option value="AB+">AB+</option>
                                  <option value="AB-">AB-</option>
                                </select>
                                {errors.bloodgroup && (
                                  <span
                                    className="form-error"
                                    style={{ color: "red" }}
                                  >
                                    {errors.bloodgroup}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <br />
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div style={{ textAlign: "center" }}>
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Present Residential Address{" "}
                            <span style={{ color: "red" }}>*</span>
                          </p>
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Address <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              value={villageTownCity}
                              onChange={(e) =>
                                setVillageTownCity(e.target.value)
                              }
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                              }}
                            />
                            {errors.villageTownCity && (
                              <span style={{ color: "red" }}>
                                {errors.villageTownCity}
                              </span>
                            )}
                          </div>

                          {/* State Selection */}

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

                          {selectedState && (
                            <div
                              style={{
                                marginBottom: "20px",
                                textAlign: "left",
                              }}
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
                                  border: "1px solid #ccc",
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
                          {/* Pin Code Input */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
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
                              onBlur={handleBlur}
                              id="pincode"
                              maxLength="6" // Restrict input length to 6 digits
                              placeholder="Enter Pin Code"
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                                fontSize: "16px",
                                border: `2px solid ${
                                  errors.pincode ? "red" : "#FCA505"
                                }`, // Red border if error
                                borderRadius: "10px",
                              }}
                            />
                            {errors.pincode && (
                              <span style={{ color: "red", fontSize: "14px" }}>
                                {errors.pincode}
                              </span>
                            )}
                          </div>
                          <br />
                        </div>
                      )}
                      {currentStep === 3 && (
                        <div style={{ textAlign: "center" }}>
                          {/* Step 3 Heading */}
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Contact Details
                            <span style={{ color: "red" }}>*</span>
                          </p>

                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              //  htmlFor="ownerName"
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
                              value={mobileNumber}
                              onChange={handleMobileNumberChange}
                              type="text"
                              id=""
                              placeholder=""
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                              }}
                            />
                          </div>

                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="emailid"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Email Id
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="emilid"
                              value={emailId}
                              onChange={handleEmailIdChange}
                              placeholder=""
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                              }}
                            />
                          </div>

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
                          <br />
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
                                marginTop: "2%",
                                height: "1%",
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
                      {currentStep < 3 ? (
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
                        //     setIsCompleted(true);
                        //   }}
                        //   style={{
                        //     padding: "10px 20px",
                        //     backgroundColor: "FCA505",
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
                            className="verify-button"
                            style={{ color: "#000", fontWeight: "bold" }}
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {location.pathname ===
                          "/senior-citizen-card/proceed-to-pay" && (
                          <>
                            <h2 style={styles.thankYouMessage}>
                              Thank You for Your Submission!
                            </h2>
                            <div style={styles.infoBox}>
                              <div style={styles.inputGroup}>
                                <label style={styles.label}>Name:</label>
                                <input
                                  type="text"
                                  value={userDetails?.name || "N/A"}
                                  readOnly
                                  style={styles.input}
                                />
                              </div>
                              <div style={styles.inputGroup}>
                                <label style={styles.label}>
                                  Mobile Number:
                                </label>
                                <input
                                  type="text"
                                  value={userDetails?.mobilenumber || "N/A"}
                                  readOnly
                                  style={styles.input}
                                />
                              </div>
                              <div style={styles.inputGroup}>
                                <label style={styles.label}>Order ID:</label>
                                <input
                                  type="text"
                                  value={userDetails?.orderid}
                                  readOnly
                                  style={styles.input}
                                />
                              </div>
                              <div style={styles.inputGroup}>
                                <label style={styles.label}>Services:</label>
                                <input
                                  type="text"
                                  value="SeniorCitizen"
                                  readOnly
                                  style={styles.input}
                                />
                              </div>
                              <div style={styles.inputGroup}>
                                <label style={styles.label}>
                                  Payment Amount:
                                </label>
                                <input
                                  type="text"
                                  value={paidAmount || "₹0"}
                                  readOnly
                                  style={styles.input}
                                />
                              </div>
                            </div>
                            <div className="proceed-button-container">
                              <button
                                onClick={handleProceedToPay}
                                className="proceed-button"
                                style={{ color: "#000", fontWeight: "bold" }}
                                disabled={isLoading}
                              >
                                {isLoading ? "Loading..." : "Proceed to Pay"}
                              </button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}

                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="d-none d-lg-block"
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
            margin: "14px auto",
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
            <p style={{ textAlign: "left" }}>
              Welcome to the one-stop destination for all your Senior Citizen
              Card needs. At Make My Senior Citizen Card, we are dedicated to
              making the process of obtaining your Senior Citizen Card as smooth
              and convenient as possible. Here's everything you need to know
              about the Senior Citizen Card and our services:
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Benefits: The Senior Citizen Card offers a
              host of benefits, including discounts on various services,
              priority access, healthcare subsidies, and more, enhancing the
              quality of life for senior citizens.
            </p>

            <p style={{ textAlign: "left" }}>
              How to Get a Senior Citizen Card: Our experienced team will assist
              you through every step of the Senior Citizen Card application
              process. From filling out forms to submitting your application,
              we've got you covered.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Application: We provide comprehensive support
              for new Senior Citizen Card applications, ensuring you have all
              the necessary documents and information to complete the process
              successfully.
            </p>

            <p style={{ textAlign: "left" }}>
              Eligibility for Senior Citizen Card: To obtain a Senior Citizen
              Card, you need to meet specific eligibility criteria, which
              typically include age and residency requirements.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Requirements: We will help you gather all the
              required documents, including proof of age, residency, and income,
              as per the eligibility criteria in your region.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Discounts: The Senior Citizen Card unlocks
              various discounts on services such as transportation, healthcare,
              and dining, allowing you to enjoy substantial savings.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Scheme: Each region may have its own Senior
              Citizen Card scheme, offering different benefits and
              opportunities. We'll guide you through the options available in
              your area.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Online: We facilitate online application
              processes, ensuring that you can apply for your Senior Citizen
              Card from the comfort of your home.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Documents: Our team will assist you in
              preparing and submitting the necessary documents to support your
              Senior Citizen Card application.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Process: We simplify the Senior Citizen Card
              application process, making it easy and stress-free for you.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card Application Form: We'll provide you with the
              necessary forms and guide you in completing them accurately.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen ID Card: The Senior Citizen Card is often referred
              to as the Senior Citizen ID card, and we are here to help you
              obtain it.
            </p>

            <p style={{ textAlign: "left" }}>
              Senior Citizen Card for Government Benefits: The Senior Citizen
              Card may open doors to various government benefits, and we'll
              ensure you have access to them.
            </p>

            <p style={{ textAlign: "left" }}>
              If you're in need of Senior Citizen Card services in Karnataka,
              your journey starts here with Make My Documents. Contact us today
              to learn more about our services and to schedule an appointment
              with one of our experienced agents. We look forward to assisting
              you in obtaining your Senior Citizen Card and unlocking a world of
              benefits and discounts.
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

export default SeniorCitizen;
