import React, { useState, useEffect } from "react";
import Image30 from "../../images/passport_image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import "../passport/passport.css"
import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import howIcon from "../../images/how.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state:"Arunachal Pradesh",
    districts:[

"Anjaw",
"Changlang",
"Dibang Valley",
"East Kameng",
"East Siang",
"Kamle",
"Kra Daadi",
"Kurung Kumey",
"Leparada",
"Lohit",
"Longding", 
"Lower Dibang Valley",
"Lower Siang",
"Lower Subansiri",
"Namsai",
"Pakke Kessang",
"Papum Pare ",
"Shi Yomi",
"Siang",
"Tawang", 
"Tirap", 
"Upper Siang", 
"Upper Subansiri",
"West Kameng", 
"West Siang"]
  },
  {
    state: "Andhra Pradesh",
    districts: ["Alluri Sitharama Raju","Anakapalli","Ananthapuramu","Annamayya" ,"Bapatla" , "Chittoor" , "Dr. B.R. Ambedkar Konaseema","East Godavari", "Eluru" ,"Guntur", "Kakinada", "Krishna", "Kurnool","Nandyal", "Ntr", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam","Tirupati","Visakhapatnam","Vizianagaram", "West Godavari","Y.S.R."],
  },
  {
    state: "Arunachal Pradesh",
    districts: ["Anjaw",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Itanagar Capital Complex",
    "Kamle",
    "Kra Daadi",
    "Kurung Kumey",
    "Lepa Rada",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Siang",
    "Lower Subansiri",
    "Namsai",
    "Pakke-Kessang",
    "Papum Pare",
    "Shi-Yomi",
    "Siang",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang"],
  },
  {
    state: "Assam",
    districts: [
      "Bajali",
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup",
      "Kamrup Metropolitan",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Sivasagar",
      "Sonitpur",
      "South Salmara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong"
    ]
  },  
  {
    state: "Bihar",
    districts: ["Araria", 
      "Arwal",
      "Aurangabad", 
      "Banka",
      "Begusarai", 
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga", 
      "Gaya",
      "Gopalganj", 
      "Jamui",
      "Jehanabad", 
      "Kaimur (Bhabua)",
      "Katihar",
      "Khagaria",
      "Kishanganj", 
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger",
      "Muzaffarpur", 
      "Nalanda",
      "Nawada",
      "Pashchim Champaran", 
      "Patna",
      "Purbi Champaran", 
      "Purnia",
      "Rohtas",
      "Saharsa", 
      "Samastipur", 
      "Saran",
      "Sheikhpura", 
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali"],
  },
  {
    state: "Chhattisgarh",
    districts: ["Balod", 
      "Balodabazar-Bhatapara",
      "Balrampur-Ramanujganj",
      "Bastar", 
      "Bemetara", 
      "Bijapur", 
      "Bilaspur", 
      "Dakshin Bastar Dantewada", 
      "Dhamtari", 
      "Durg", 
      "Gariyaband", 
      "Gaurela-Pendra-Marwahi", 
      "Janjgir-Champa", 
      "Jashpur", 
      "Kabeerdham", 
      "Khairagarh-Chhuikhadan-Gandai",
      "Kondagaon", 
      "Korba", 
      "Korea", 
      "Mahasamund", 
      "Manendragarh-Chirmiri-Bharatpur(M C B)",
     " Mohla-Manpur-Ambagarh Chouki", 
      "Mungeli", 
      "Narayanpur", 
      "Raigarh", 
      "Raipur", 
      "Rajnandgaon", 
      "Sakti",
      "Sarangarh-Bilaigarh",
      "Sukma", 
      "Surajpur", 
      "Surguja", 
      "Uttar Bastar Kanker"],
  },
  {
    state: "Goa",
    districts: [ "North Goa",
      "South Goa"],
  },
  {
    state: "Gujarat",
    districts: ["Ahmedabad", 
      "Amreli",
      "Anand",
      "Arvalli", 
     " Banas Kantha", 
      "Bharuch",
      "Bhavnagar", 
      'Botad',
      "Chhotaudepur", 
      "Dahod",
      "Dangs",
      "Devbhumi Dwarka", 
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda",
      "Mahesana", 
      "Mahisagar", 
      "Morbi",
      "Narmada", 
      "Navsari",
      'Panch Mahals', 
      "Patan",
      "Porbandar", 
      "Rajkot",
      "Sabar Kantha", 
      "Surat",
      "Surendranagar", 
      "Tapi",
      "Vadodara", 
      'Valsad'],
  },
  {
    state: "Haryana",
    districts: [ "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurugram",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Nuh",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar"],
  },
  {
    state:"Jammu and Kashmir",
    districts :["Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur"]
  },
  {
    state: "Himachal Pradesh",
    districts: ["Bilaspur" ,
      "Chamba",
      "Hamirpur", 
      "Kangra", 
      'Kinnaur' ,
      'Kullu' ,
      'Lahaul And Spiti' ,
      'Mandi' ,
      'Shimla' ,
      'Sirmaur', 
      'Solan' ,
      'Una'],
  },
  {
    state: "Jharkhand",
    districts: ["Bokaro", 
      'Chatra' ,
      'Deoghar' ,
      'Dhanbad' ,
      'Dumka' ,
      'East Singhbum' ,
      'Garhwa' ,
      'Giridih' ,
      'Godda' ,
      'Gumla' ,
      'Hazaribagh', 
      'Jamtara' ,
      'Khunti' ,
      'Koderma' ,
      'Latehar' ,
      'Lohardaga', 
      'Pakur',
      'Palamu' ,
      'Ramgarh' ,
      'Ranchi' ,
      'Sahebganj' ,
      'Saraikela Kharsawan' ,
      'Simdega' ,
      'West Singhbhu'],
  },
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
  {
    state: "Kerala",
    districts: ["Alappuzha",
      "Ernakulam",
      "Idukki" ,
      "Kannur",
      "Kasaragod", 
      "Kollam",
      "Kottayam", 
      "Kozhikode", 
      "Malappuram", 
      "Palakkad",
      "Pathanamthitta", 
      "Thiruvananthapuram", 
      "Thrissur",
      "Wayanad"],
  },
  {
    state:"Ladakh",
    districts:["Leh",
    "Kargil"]
  },
  {
    state: "Madhya Pradesh",
    districts: [ "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Niwari",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha"],
  },
  {
    state:"Lakshadweep",
    districts:["Lakshadweep"]
  },
  {
    state: "Maharashtra",
    districts: [
      "Ahilyanagar",
      "Akola",
      "Amravati",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Chhatrapati Sambhajinagar",
      "Dharashiv",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Mumbai Suburban",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal"
    ]
  },
  
  {
    state: "Manipur",
    districts: [ "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal East",
      "Imphal West",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Peren",
      "Senapati",
      "Tamenglong",
      "Thoubal",
      "Ukhrul"],
  },
  {
    state: "Meghalaya",
    districts: [ "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "Eastern West Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills"],
  },
  {
    state: "Mizoram",
    districts: [  "Aizawl",
      "Champhai",
      "Hnahthial",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saitual",
      "Serchhip",
      "Siaha",
      "Vaihnuai"],
  },
  {
    state: "Nagaland",
    districts: [ "Chumoukedima",
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Niuland",
      "Noklak",
      "Peren",
      "Phek",
      "Shamator",
      "Tseminyu",
      "Tuensang",
      "Wokha",
      "Zunheboto"],
  },
  {
    state: "Odisha",
    districts: [  "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghpur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar",
      "Khurda",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Subarnapur",
      "Sundargarh"],
  },
  {
    state: "Punjab",
    districts: [ "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Firozpur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawan Shehr",
      "Patiala",
      "Rupnagar",
      "Sahibzada Ajit Singh Nagar (Mohali)",
      "Sangrur",
      "Tarn Taran"],
  },
  {
    state: "Rajasthan",
    districts: [  "Ajmer",
      "Alwar",
      "Anupgarh",
      "Balotra",
      "Banswara",
      "Baran",
      "Barmer",
      "Beawar",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Deeg",
      "Dholpur",
      "Didwana-Kuchaman",
      "Dudu",
      "Dungarpur",
      "Ganganagar",
      "Gangapurcity",
      "Hanumangarh",
      "Jaipur",
      "Jaipur (Gramin)",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Jodhpur (Gramin)",
      "Karauli",
      "Kekri",
      "Khairthal-Tijara",
      "Kota",
      "Nagaur",
      "Neem Ka Thana",
      "Pali",
      "Phalodi",
      "Shahpura",
      "Sikar",
      "Sirohi",
      "Tonk",
      "Udaipur",
      "Pratapgarh",
      "Rajsamand",
      "Salumbar",
      "Sanchore",
      "Sawai Madhopur"],
  },
  {
    state: "Sikkim",
    districts: ["Gangtok", "Namchi", "Mangan", "Soreng", "Gyalshing", "Pakyong"],
  },
  {
    state: "Tamil Nadu",
    districts: ["Ariyalur",
      "Chengalpattu",
      "Chennai", 
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri", 
      "Dindigul",  
      "Erode", 
      "Kallakurichi",
      "Kancheepuram",
      "Kanniyakumari", 
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Mayiladuthurai", 
      "Nagapattinam",
      "Namakkal",
      "Perambalur", 
      "Pudukkottai", 
      "Ramanathapuram", 
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur", 
      "The Nilgiris", 
      "Theni", 
      "Thiruvallur", 
      "Thiruvarur", 
      "Thoothukkudi",
      "Tiruchirappalli", 
      "Tirunelveli",
      "Tirupathur", 
      "Tiruppur",
      "Tiruvannamalai", 
      "Vellore",
      "Viluppuram", 
      "Virudhunagar",],
  },
  {
    state: "Telangana",
    districts: [ "Adilabad",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhupalapally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal-Malkajgiri",
      "Mulugu",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Warangal",
      "Warangal (Rural)",
      "Yadadri Bhuvanagiri"],
  },
  {
    state: "Tripura",
    districts: [ "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "South Tripura",
      "Unakoti",
      "West Tripura"],
  },
  {
    state: "Uttar Pradesh",
    districts: [  "Agra",
      "Aligarh",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bijnor",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kushinagar",
      "Lakhimpur Kheri",
      "Lalitpur",
      "Lucknow",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "Raebareli",
      "Rampur",
      "Saharanpur",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamli",
      "Siddharth Nagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi"],
  },
  {
    state: "Uttarakhand",
    districts: [ "Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi"],
  },
  {
    state: "West Bengal",
    districts: ["Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur"],
  },
  {
    state: "Andaman and Nicobar Islands",
    districts: ["Port Blair", "Nicobar", "Car Nicobar", "Little Andaman"],
  },
  {
    state: "Chandigarh",
    districts: ["Chandigarh"],
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    districts: ["Daman", "Diu", "Silvassa"],
  },

  {
    state: "Delhi",
    districts: ["Central",
      "East",
     " New Delhi ",
      "North",
      "North East ",
      "North West ",
      "Shahdara" ,
      "South" ,
     " South East ",
      "South West" ,
      "West"],
  },
  {
    state: "Puducherry",
    districts: ["Puducherry", "Karaikal", ],
  },
];

const Passport = () => {
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
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [applyingFor, setApplyingFor] = useState("");
  // const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showOtpSection, setShowOtpSection] = useState(true);
  const [typeofapplication, setTypeOfApplication] = useState(true);
  const openPopup = () => {
       setShowPopup(true);
       navigate("/passport-form"); // Update the URL
     };
   
     // Function to close the popup and revert the URL
     const closePopup = () => {
       setShowPopup(false);
       navigate("/passport"); // Revert the URL
       setCurrentStep(1);
       setIsCompleted(false);
     };
   
     React.useEffect(() => {
      if (location.pathname === "/passport-form" || location.pathname === "/passport/proceed-to-pay") {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }, [location.pathname]);
    
  const [typeofbooklet, setTypeOfBooklet] = useState("");
  const [registrationNumber, setSeletedRegistrationNumber] = useState("");
  const handleDob = (e) => setDob(e.target.value);
  const handleQualification = (e) => setQualification(e.target.value);
  const handleMaritalStatus = (e) => setMaritalStatus(e.target.value);
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleTypeOfBooklet = (e) => setTypeOfBooklet(e.target.value);
  const handleMotherName = (e) => setMotherName(e.target.value);
  const handleFatherName = (e) => setFatherName(e.target.value);
  // const handleGender = (e) => setSelectedGender(e.target.value);
  const handleTypeOfApplication = (e) => setTypeOfApplication(e.target.value);
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const handleApplyingFor = (e) => setApplyingFor(e.target.value);
  const [applicationType, setApplicationType] = useState("");
  const [passportBookletType, setPassportBookletType] = useState("");
  const [educationQualification, setEducationQualification] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  // const [maritalstatus, setMaritalStatus]=useState("");
  const [gender, setGender] = useState("");
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };

  const [spouseName, setSpouseName] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
const [leadId,setLeadId]=useState();
  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];


  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };


  // Navigate steps
  const validateStep = () => {
    let errors = {};
    switch (currentStep) {
      case 1:
        const applyingForOptions =
          document.getElementsByName("agreementOption");
        if (!Array.from(applyingForOptions).some((option) => option.checked)) {
          errors.applyingFor = "Please select an option.";
        }
        break;
      case 2:
      case 2:
        if (!applicationType) {
          errors.applicationType = "Please select a type of application.";
        }
        if (!passportBookletType) {
          errors.passportBookletType =
            "Please select a type of passport booklet.";
        }
        if (!selectedGender) {
          errors.selectedGender = "Please select your gender.";
        }
        break;

      case 3:
        if (!fullName) {
          errors.fullName = "Given Name is required.";
        }
        if (!dob) {
          errors.dob = "Date of Birth is required.";
        }
        if (!document.getElementById("place").value) {
          errors.place = "Place of Birth is required.";
        }
        break;
      case 4:
        if (!qualification) {
          errors.qualification = "Please select your education qualification.";
        }
        if (!employmentType) {
          errors.employment = "Please select your employment type.";
        }
        break;
      case 5:
        if (!maritalStatus) {
          errors.maritalStatus = "Please select your marital status.";
        }
        break;
      case 6:
        if (!fatherName) {
          errors.fatherName = "Father's Given Name is required.";
        }
        if (!motherName) {
          errors.motherName = "Mother's Given Name is required.";
        }
        break;
      case 7:
        if (!villageTownCity) {
          errors.villageTownCity = "House No. and Street Name is required.";
        }
        if (!selectedState) {
          errors.selectedState = "State is required.";
        }
        if (!selectedDistrict) {
          errors.selectedDistrict = "District is required.";
        }
        if (!document.getElementById("pincode").value) {
          errors.pincode = "Pin Code is required.";
        }
        if (!emailId) {
          errors.emailId = "Email ID is required.";
        }
        if (!mobileNumber) {
          errors.mobileNumber = "Mobile Number is required.";
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const nextStep = () => {
    const errors = validateStep();
    if (Object.keys(errors).length === 0) {
      setErrorMessages({});
      if (currentStep < 7) setCurrentStep(currentStep + 1);
    } else {
      setErrorMessages(errors);
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
          setOtpSent(true);
          setResendCountdown(30);
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



  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        pincode: "", // Clear error if the input is valid
      }));
    }
  };

  const handleBlur = () => {
    // Validate pin code length when user leaves input field
    if (pincode.length !== 6) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        pincode: "Pin Code must be exactly 6 digits.",
      }));
    }
  };

  const [userDetails, setUserDetails] = useState(null); // Holds user details
  const [orderid, setOrderID] = useState();
  const [paidAmount, setPaidAmount] = React.useState(1); 
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  
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
      SERVICE: "PassPort",
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
    }finally {
      setIsLoading(false); // Set loading to false
    }
  };
  

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Opens at the top without scrolling
  // }, []);

  const checkPaymentStatus = async (orderid) => {
    try {
      const statusResponse = await axios.get(
        `https://makemydocuments.nakshatranamahacreations.in/payment-status.php?orderid=${orderid}`
      );
  
      if (statusResponse.status === 200) {
        console.log("Payment Status Response:", statusResponse.data);
  
       
        if (statusResponse.data.status === "SUCCESS") {
          // alert("Payment was successful!");
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
          navigate("/passport/proceed-to-pay");
          // await sendMessage(formattedNumber);
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


  const sendMessage = async (formattedNumber) => {
    try {
      const name = fullName || "User"; // Assuming `fullName` is available in your state
      const url = `https://makemydocuments.nakshatranamahacreations.in/message-insurance.php?mobile=${formattedNumber}&name=${encodeURIComponent(
        name
      )}`;

      const response = await axios.get(url);

      if (response.status === 200) {
        console.log("Message sent successfully:", response.data);
      } else {
        console.error("Error sending message:", response.data);
      }
    } catch (error) {
      console.error("Error while sending message:", error);
      alert("An error occurred while sending the message. Please try again.");
    }
  };
  
    const [date, setDate] = useState(null);  // Manage date state
          const [time, setTime] = useState(null);  // Manage time state
         
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
      orderid:orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedOption || "",
      address: villageTownCity || "", 
      district: selectedDistrict || "",
      date: date,
      dob: dob || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "1",
      qualification: qualification || "",
      typeofapplication: typeofapplication || "",
      applying_for: applyingFor || "",
      applicationType : applicationType ||"",
  
      passportBookletType : passportBookletType || "",
      gender: selectedGender || "",
      spouseName : spouseName || "",
      fathername: fatherName || "",
      mothername: motherName || "",
      employmentType : employmentType  || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      maritalStatus: maritalStatus || "",
      pancard: "",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "PassPort",
    
      // existingpancardnumber: existingPanCardNumber || "",
      village: villageTownCity || "",
      state: selectedState || "", 
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
            name: leadData.name || "",
            mobilenumber: leadData.mobilenumber || "",
            orderid: leadData.orderId || "",
            services: leadData.services || "N/A",
            paidAmount: leadData.paidAmount || "₹1",
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
      question: "Who qualifies for an Indian passport?",
      // answer: (
      //   <ul style={{ listStyleType: 'disc' }}>
      //     <li>Minimizes the conflicts between a tenant and the owner</li>
      //     <li>Rental/lease agreement acts as an address proof</li>
      //     <li>Acts as a proof for Bank loans</li>
      //     <li>Helps in investment & loan</li>
      //     <li>Vehicle registration</li>
      //   </ul>
      // ),
      answer:
        "You can qualify for Indian citizenship by being born in the country, being born elsewhere but with at least one Indian parent, or by being granted citizenship through a naturalization process. If none of these categories apply you will not be classed as an Indian citizen, and will not be entitled to an Indian passport.",
    },
    {
      question: "What is Ordinary, Diplomatic or Official Passport?",
      answer:
        "All private citizens apply for an ordinary passport however the other two types of passports are for government workers who are being send overseas on official business only.",
    },
    {
      question: "What is validity of passport?",
      answer: "05 years for minor 10 years for adults",
    },
    {
      question: "What is the different between normal and tatkal application?",
      answer: (
        <ul style={{ listStyleType: "none" }}>
          <li>
            In normal application you will receive your passport within 10 to 15
            working days
          </li>
          <br />
          <li>
            In tatkal application you will receive your passport within 2 to 5
            working days
          </li>
        </ul>
      ),
    },
    {
      question: "Within how many days will I get the appointment?",
      answer:
        "Its depends on the demand in market, our executive will give 3 to 4 days’ options you can book according to your calendar.",
    },
    {
      question: "Is that possible to get the appointment in weekends?",
      answer: "No appointments are booked only in weekdays.",
    },
    {
      question: "What happens if I missed the passport appointment?",
      answer:
        "If you missed your 1st appointment still you have 2 more chance to reschedule",
    },
    {
      question: "Can someone else attend my passport appointment for me?",
      answer:
        "You have to attend in person for your passport interview, even if you are ill or if it is very inconvenient for you to do so. You are allowed to bring someone with you for your passport interview if you find it difficult to travel.",
    },
    {
      question: "When the police verification will happen?",
      answer:
        "After the appointment, police verification will happen at your nearest police station.",
    },
    {
      question: "How will I get the passport?",
      answer:
        "Passport will be dispatched through Indian speed post for your address.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title>"Get Your Passport Fast and Hassle-Free | Expert Passport Application Assistance"</title>
<meta name="description" content="Looking to get your passport without the hassle? Our passport services provide fast and efficient assistance with your passport application. Trust our expert passport team to handle everything, ensuring you receive your passport quickly and smoothly. Get started on your passport journey today and experience the best in passport services!"/>
<meta name="keywords" content="passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application"/>
<link rel="canonical" href="https://makemydocuments.com/passport" />
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
      <div>
        <div className="container-passport" style={{height:'480px'}}
    //       style={{
    //         background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
    //         height: '500px',
    // paddingTop: '20px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: '0 20px'
    //       }}
        >
          <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}>
            <p>"Ready to Explore the World? Get Expert <br className="d-block d-lg-none"/>
           Assistance for Your Passport Application Today!"</p>
          </div>
          <div className="passport-image">
            <img
              src={Image30}
              alt="Rental Agreement"
              // style={{ maxWidth: '80%', height: '20%', marginTop:'20%' }}
            />
          </div>
        </div>
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
          <div className="col-12 col-md-8 position-relative d-none d-lg-block">
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
                height: "105%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-40%",
                marginLeft: "50%",
              }}
            ></div>
            <div className="text-center mb-5" style={{marginTop:'-24%'}}>
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
                height: "32%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-36%",
                marginLeft: "50%",
              }}
            ></div>
            <div className="text-center mb-5" style={{marginTop:'-21%'}}>
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
                height: "45%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-59%",
                marginLeft: "50%",
              }}
            ></div>
            <div className="text-center mb-5" style={{marginTop:'-23%'}}>
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
                height: "35%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-37%",
                marginLeft: "50%",
              }}
            ></div>

            {/* Second Section: How It Works */}
            <div className="text-center mb-5" style={{marginTop:'-23%'}}>
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
                height: "45%",
                // margin: '0 auto',
                marginLeft: "49.8%",
                marginTop: "-48%",
                width: "4px",
              }}
            ></div>

            {/* Third Section */}
            <div className="text-center mb-5" style={{marginTop:'-38%'}}>
              <div style={{ position: "relative" }}>
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
            className="mb-5"
            style={{
              marginTop: "-130%",
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
              Documents Required For Fresh Passport
            </h4>
            {/* First List */}
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                whiteSpace: "nowrap",
                margin: "20px 0",
              }}
            >
              <li style={{ fontWeight: "bold" }}>Proof of Identity (Any 01)</li>
              <li>Aadhar Card</li>
              <li>Voter ID</li>
              <li>Pan Card</li>
              <li>Driving Licence</li>
            </ul>

            {/* Second List */}
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                whiteSpace: "nowrap",
                margin: "20px 0",
              }}
            >
              <li style={{ fontWeight: "bold" }}>Proof of Address (Any 01)</li>
              <li>Aadhar Card</li>
              <li>Voter ID</li>
              <li>Bank Account Passbook</li>
              <li>
                Gas Connection Bill / Electricity Bill / Telephone Bill / Water
                Bill
              </li>
              <li>Parents Passport / Spouse Passport</li>
            </ul>

            {/* Third List */}
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                whiteSpace: "nowrap",
                margin: "20px 0",
              }}
            >
              <li style={{ fontWeight: "bold" }}>Proof of Birth (Any 01)</li>
              <li>10th Certificate</li>
              <li>12th Certificate</li>
              <li>Higher Education Pass Certificate</li>
              <li>School Leaving Certificate</li>
              <li>Income Tax Assessment Order</li>
            </ul>
          </div>
          <div
            className="mb-5"
            style={{
              marginTop: "-5%",
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
              Document Required for Renewal / Reissue of Passport
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
              <li style={{ fontWeight: "" }}>Original Old Passport</li>
              <li style={{ fontWeight: "" }}>Id And Present Address Proof</li>
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
              Document Required for Minor Passport
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
              <li style={{ fontWeight: "" }}>Birth Certificate</li>
              <li style={{ fontWeight: "" }}>Both Parents Passport</li>
            </ul>
          </div>
          <div style={{ marginLeft: "72%", marginTop: "22%" }}>
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
              <li style={{ fontWeight: "" }}>Register Online & Make Payment</li>
              <li style={{ fontWeight: "" }}>Upload Documents</li>
              <li style={{ fontWeight: "" }}>Get Appointment</li>
              <li style={{ fontWeight: "" }}>Visit Psk</li>
              <li style={{ fontWeight: "" }}>Get Delivered</li>
            </ul>
          </div>
          <div style={{ marginLeft: "72%", marginTop: "12%" }}>
            <h4
              style={{
                display: "grid",
                color: "#007BFF",
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              Time Duration
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
              <li style={{ fontWeight: "" }}>15-20 working days (Normal)</li>
              <li style={{ fontWeight: "" }}>5-10 working days (Tatkal)</li>
            </ul>
          </div>
          <div style={{ marginLeft: "72%", marginTop: "20%" }}>
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
              <li style={{}}>
                <strong>Rs. 2,499</strong> For (Normal Application)
              </li>

              <li style={{ fontWeight: "" }}>
                <strong>Rs. 4,499</strong> For (Tatkal Application)
              </li>
              <li style={{ fontWeight: "" }}>
                <strong>Rs.99</strong> as booking fee. Need to pay while
                submitting online form (This fee is non-refundable <br />
                and will be adjusted in the total bill.)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="document-container d-block d-lg-none" style={{marginTop:'-40%'}}>
  {/* Section for Fresh Passport */}
  <div className="document-section fresh-passport row-container">
    <div className="icon-container">
      <div style={{ position: "relative", }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            top: "71%",
            left: "50%",
            width:'20px',
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Documents Required For Fresh <br /> Passport
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li className="list-title">Proof of Identity (Any 01)</li>
        <li >Aadhar Card</li>
        <li >Voter ID</li>
        <li >Pan Card</li>
        <li >Driving Licence</li>
      </ul>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li className="list-title">Proof of Identity (Any 01)</li>
        <li >Aadhar Card</li>
        <li >Voter ID</li>
        <li >Bank Account Passbook</li>
        <li >Gas Connection Bill / Electricity Bill / Telephone Bill / Water Bill</li>
        <li >Parents Passport / Spouse Passport</li>
      </ul>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li className="list-title">Proof of Identity (Any 01)</li>
        <li >10th Certificate</li>
        <li >12th Certificate</li>
        <li>Higher Educational Pass Certificate</li>
        <li >School leaving Certificate</li>
        <li>Income Tax Assessment Order</li>
      </ul>
    </div>
  </div>

  {/* Section for Renewal / Reissue */}
  <div className="document-section renewal-passport row-container">
    <div className="icon-container">
      <div style={{ position: "relative", }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Document Required for Renewal / <br /> Reissue of Passport
      </h4>
      <ul className="document-list"  style={{ listStyleType: "disc",}}>
        <li >Original Old Passport</li>
        <li>Id And Present Address Proof</li>
      </ul>
    </div>
  </div>

  {/* Section for Minor Passport */}
  <div className="document-section minor-passport row-container">
    <div className="icon-container">
      <div style={{ position: "relative" ,  }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Document Required for Minor <br/> Passport
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >Birth Certificate</li>
        <li >Both Parents Passport</li>
      </ul>
    </div>
  </div>

  {/* Section for How It Works */}
  <div className="document-section how-it-works row-container">
    <div className="icon-container">
      <div style={{ position: "relative" ,  }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={howIcon}
          alt="How It Works Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        How It Works
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >Register Online & Make Payment</li>
        <li >Upload Documents</li>
        <li>Get Appointment</li>
        <li >Visit Psk</li>
        <li >Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Section for Time Duration */}
  <div className="document-section time-duration row-container">
    <div className="icon-container">
      <div style={{ position: "relative", }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={TimeIcon}
          alt="Time Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Time Duration
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >15-20 working days (Normal)</li>
        <li >5-10 working days (Tatkal)</li>
      </ul>
    </div>
  </div>

  {/* Section for Charges */}
  <div className="document-section charges-section row-container">
    <div className="icon-container">
      <div style={{ position: "relative",  }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={Price}
          alt="Charges Icon"
          style={{
            position: "absolute",
            top: "70%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Charges
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >
          <strong>Rs. 2,499</strong> For (Normal Application)
        </li>
        <li >
          <strong>Rs. 4,499</strong> For (Tatkal Application)
        </li>
        <li>
          <strong>Rs.99</strong> as booking fee. Need to pay while submitting online form (This fee is non-refundable and will be adjusted in the total bill.)
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
  <button className="continue-button" onClick={openPopup} style={{borderRadius:'0px'}}>
    Continue
  </button>
</div>

        {/* Modal Popup */}
        {showPopup && (
          <div
           className="popupstyle-passport"
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
            <div className="popup-passport"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   borderRadius: "28px",
              //   width: "70%",
              //   maxHeight: "90%",
              //   overflowY: "auto",
              //   textAlign: "center",
              //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              // }}
            >
              {/* Stepper */}
              {!isCompleted ? (
                <>
                  <div className="stepper-passport"
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
                          <button className="button-passport-stepper"
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
                      <div style={{ textAlign: "center" }}>
                        <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          Applying For
                          <span style={{ color: "red" }}>*</span>
                        </h5>

                        {/* Radio Buttons */}
                        <div
                        
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "4%",
                            textAlign:'left',
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
                              name="agreementOption"
                              value=" Fresh Passport"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Fresh Passport 
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
                              name="agreementOption"
                              value="Re-issue of Passport "
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Re-issue of Passport 
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
                              name="agreementOption"
                              value="Change In Existing Personal Particulars "
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Change In Existing Personal Particulars 
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
                              name="agreementOption"
                              value="Damaged Passport"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Damaged Passport 
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
                              name="agreementOption"
                              value="Exhaustion Of Pages"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Exhaustion Of Pages  
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
                              name="agreementOption"
                              value="Lost Passport"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Lost Passport
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
                              name="agreementOption"
                              value="Validity Expired More Than 3 Years Ago "
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Validity Expired More Than 3 Years Ago 
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
                              name="agreementOption"
                              value="Validity Expired Within 3 Years/Due To Expire"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Validity Expired Within 3 Years/Due To Expire
                          </label>
                        </div>
                        {errorMessages.applyingFor && (
                          <p style={{ color: "red" }}>
                            {errorMessages.applyingFor}
                          </p>
                        )}
                      </div>
                    )}
                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          Application Details
                          <span style={{ color: "red" }}>*</span>
                        </h5>

                        {/* Type of Application */}
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
                          <h5 style={{ fontWeight: "600", fontSize: "22px" }}>
                            Type of Application
                          </h5>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="applicationType"
                              value="normal"
                              onChange={(e) =>
                                setApplicationType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Normal
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
                              name="applicationType"
                              value="tatkal"
                              onChange={(e) =>
                                setApplicationType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Tatkal
                          </label>
                          {errorMessages.applicationType && (
                            <p style={{ color: "red" }}>
                              {errorMessages.applicationType}
                            </p>
                          )}
                        </div>
                        <br />
                        {/* Type of Passport Booklet */}
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
                          <h5 style={{ fontWeight: "600", fontSize: "22px", textAlign:'left' }}>
                            Type of Passport Booklet
                          </h5>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="passportBookletType"
                              value="36Pages"
                              onChange={(e) =>
                                setPassportBookletType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            36 Pages
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
                              name="passportBookletType"
                              value="60Pages"
                              onChange={(e) =>
                                setPassportBookletType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            60 Pages
                          </label>
                          {errorMessages.passportBookletType && (
                            <p style={{ color: "red" }}>
                              {errorMessages.passportBookletType}
                            </p>
                          )}
                        </div>
                        <br />
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
                          <h5 style={{ fontWeight: "600", fontSize: "22px" }}>
                            Gender<span style={{ color: "red" }}>*</span>
                          </h5>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              onChange={handleGenderChange}
                              style={{ marginRight: "10px" }}
                            />
                            Female
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
                              name="gender"
                              value="male"
                              onChange={handleGenderChange}
                              style={{ marginRight: "10px" }}
                            />
                            Male
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
                              name="gender"
                              value="transgender"
                              onChange={handleGenderChange}
                              style={{ marginRight: "10px" }}
                            />
                            Transgender
                          </label>
                          {errorMessages.selectedGender && (
                            <p style={{ color: "red" }}>
                              {errorMessages.selectedGender}
                            </p>
                          )}
                       
                        </div>
                      </div>
                    )}
                    {currentStep === 3 && (
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="givenname"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Given Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={handleFullNameChange}
                            id="givernname"
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
                            htmlFor="surname"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Surname
                          </label>
                          <input
                            type="text"
                            id="ownerFatherName"
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
                            htmlFor="dateOfBirth"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Date of Birth
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            value={dob}
                            onChange={handleDob}
                            max={new Date().toISOString().split("T")[0]}
                            placeholder="Enter Date of Birth"
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
                            htmlFor="place"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Place of Birth (Village/ Town / City) *
                          </label>
                          <input
                            type="text"
                            id="place"
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

                        {errorMessages.place && (
                          <p style={{ color: "red" }}>{errorMessages.place}</p>
                        )}
                      </div>
                    )}
                    {currentStep === 4 && (
                      <div style={{ textAlign: "center" }}>
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
                          <p style={{ fontWeight: "600", fontSize: "18px" }}>
                            Education Qualification
                          </p>

                          {/* Education Qualification Radio Buttons */}
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="qualification"
                              value="graduateAndAbove"
                              onChange={handleQualification}
                              style={{ marginRight: "10px" }}
                            />
                            Graduate And Above
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
                              name="qualification"
                              value="10thPassAndAbove"
                              onChange={handleQualification}
                              style={{ marginRight: "10px" }}
                            />
                            10th Pass And Above
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
                              name="qualification"
                              value="below10th"
                              onChange={handleQualification}
                              style={{ marginRight: "10px" }}
                            />
                            Below 10th
                          </label>

                          <p style={{ fontWeight: "600", fontSize: "18px" }}>
                            Employment Type
                          </p>

                          {/* Employment Type Radio Buttons */}
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="employmentType"
                              value="government"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Government
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
                              name="employmentType"
                              value="private"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Private
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
                              name="employmentType"
                              value="selfEmployed"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Self Employed
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
                              name="employmentType"
                              value="student"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Student
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
                              name="employmentType"
                              value="homeMaker"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Home Maker
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
                              name="employmentType"
                              value="retired"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Retired
                          </label>

                          {errorMessages.qualification && (
                            <p style={{ color: "red" }}>
                              {errorMessages.qualification}
                            </p>
                          )}
                          {errorMessages.employment && (
                            <p style={{ color: "red" }}>
                              {errorMessages.employment}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    {currentStep === 5 && (
                      <div style={{ textAlign: "center" }}>
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
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Marital Status{" "}
                            <span style={{ color: "red" }}>*</span>
                          </p>

                          {/* Marital Status Radio Buttons */}
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="maritalStatus"
                              value="single"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Single
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
                              name="maritalStatus"
                              value="married"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Married
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
                              name="maritalStatus"
                              value="widowWidower"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Widow/Widower
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
                              name="maritalStatus"
                              value="separated"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Separated
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
                              name="maritalStatus"
                              value="divorced"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Divorced
                          </label>
                        </div>
                        {errorMessages.maritalStatus && (
                          <p style={{ color: "red" }}>
                            {errorMessages.maritalStatus}
                          </p>
                        )}
                      </div>
                    )}
                    {currentStep === 6 && (
                      <div style={{ textAlign: "center" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <label
                            style={{ fontSize: "20px", fontWeight: "600" }}
                          >
                            Present Residential Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>

                        {/* Father's Given Name */}
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
                            Father's Given Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fatherName}
                            onChange={handleFatherName}
                            placeholder=""
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                            }}
                          />
                          {errorMessages.fatherName && (
                            <p style={{ color: "red" }}>
                              {errorMessages.fatherName}
                            </p>
                          )}
                        </div>

                        {/* Mother's Given Name */}
                        <div
                          style={{ marginBottom: "40px", textAlign: "left" }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Mother's Given Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={motherName}
                            onChange={handleMotherName}
                            placeholder=""
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                            }}
                          />
                          {errorMessages.motherName && (
                            <p style={{ color: "red" }}>
                              {errorMessages.motherName}
                            </p>
                          )}
                        </div>

                        {/* Spouse's Given Name - Conditionally Rendered */}
                        {maritalStatus !== "single" &&
                          maritalStatus !== "widowWidower" &&
                          maritalStatus !== "divorced" && (
                            <div
                              style={{
                                marginBottom: "40px",
                                textAlign: "left",
                              }}
                            >
                              <label
                                style={{ fontSize: "16px", fontWeight: "bold" }}
                              >
                                Spouse's Given Name{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                value={spouseName}
                                onChange={(e) => setSpouseName(e.target.value)}
                                placeholder=""
                                style={{
                                  width: "100%",
                                  padding: "10px",
                                  marginTop: "10px",
                                  border: "1px solid orange",
                                  borderRadius: "4px",
                                }}
                              />
                            </div>
                          )}
                      </div>
                    )}

                    {currentStep === 7 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Present Residential Address
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
                            House No. and Street Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={handleVillageTownCityChange}
                            id=""
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
                          {errorMessages.villageTownCity && (
                            <p style={{ color: "red" }}>
                              {errorMessages.villageTownCity}
                            </p>
                          )}
                        </div>

                        <div>
                          {/* State Dropdown */}
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
                            {errorMessages.selectedState && (
                              <p style={{ color: "red" }}>
                                {errorMessages.selectedState}
                              </p>
                            )}
                          </div>

                          {/* District Dropdown */}
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
                              {errorMessages.selectedDistrict && (
                                <p style={{ color: "red" }}>
                                  {errorMessages.selectedDistrict}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

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
        id="pincode"
        value={pincode} // Bind the input value to the state
        onChange={handleInputChange} // Handle changes to input
        onBlur={handleBlur} // Validate when input loses focus
        maxLength="6" // Restrict input length to 6 characters
        placeholder="Enter Pin Code"
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: `2px solid ${errorMessages.pincode ? "red" : "#FCA505"}`, // Red border if there's an error
          borderRadius: "4px",
        }}
      />
      {errorMessages.pincode && (
        <p style={{ color: "red", fontSize: "14px", textAlign: "left" }}>
          {errorMessages.pincode}
        </p>
      )}
    </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor=""
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
                            id=""
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
                          {errorMessages.emailId && (
                            <p style={{ color: "red" }}>
                              {errorMessages.emailId}
                            </p>
                          )}
                        </div>

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
                            Nearest Police Station
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id=""
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
                            type="text"
                            id=""
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
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
                          {errorMessages.mobileNumber && (
                            <p style={{ color: "red" }}>
                              {errorMessages.mobileNumber}
                            </p>
                          )}
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
                      //   // onClick={()=>console.log("test009897", )}

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
    style={{ backgroundColor:'#fca505'}}
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
    Verify
  </button>
</div>

                    </div>
                  ) : (
                    <>
                 {location.pathname === "/passport/proceed-to-pay" && (
                    <>
       
            
                <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
                <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name and Mobile Number (Responsive) */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign:'left' }}>Name</label>
      <input type="text" value={userDetails?.name || "N/A"} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign:'left' }}>Mobile Number</label>
      <input type="text" value={userDetails?.mobilenumber || "N/A"} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
  </div>

  {/* Order ID and Services (Responsive) */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign:'left' }}>Order ID</label>
      <input type="text" value={userDetails?.orderid} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" , textAlign:'left'}}>Services</label>
      <input type="text" value={applyingFor} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
  </div>

  {/* Amount Booking Fee */}
  <div style={{ marginTop: "10px" }}>
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" , textAlign:'left'}}>
      Amount (Booking Fee)
      {/* <p style={{ fontSize: "12px", margin: "5px 0" }} className="d-none d-lg-block">
        You can pay the balance amount post documents verification by our consultant:
      </p> */}
    </label>
    <input type="text" value={paidAmount || "₹0"} readOnly 
           style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    <p style={{ fontSize: "12px", marginTop: "5px" }} >
      You can pay the balance amount post documents verification by our consultant:
    </p>
  </div>
</div>



             
                <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    className="proceed-button"
    style={{color:'#000', fontWeight:'bold'}}
    disabled={isLoading} // Disable button while loading
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
          <h3 className="faq-tag-title-h3">
            <strong>Comprehensive Passport Services - Make My Documents</strong>
          </h3>
          <p style={{textAlign:'left'}}>
            Are you planning an international journey and need a reliable
            passport agent to help you navigate the process? Look no further
            than <strong>Make My Documents</strong>. Our team of experienced
            passport agents is dedicated to providing you with fast, efficient,
            and hassle-free passport services. Whether you're planning a
            vacation, studying abroad, or relocating to another country, we are
            here to assist you in obtaining your passport quickly and easily.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Why Choose Our Passport Services?</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            At <strong>Make My Documents</strong>, we understand the importance
            of having a valid passport for international travel. Our team
            specializes in a wide range of passport services to meet your needs,
            including:
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>New Passport Applications:</strong> Starting a new chapter
            abroad? We help you get your new passport application right the
            first time.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Passport Renewals:</strong> Is your passport nearing its
            expiration date? We offer swift passport renewal services to ensure
            your travel plans remain uninterrupted.
          </p>
          <p style={{textAlign:'left'}}>
            <strong>Passport Corrections:</strong> Need to correct errors in
            your passport? We handle passport corrections efficiently to prevent
            any travel complications.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Lost or Stolen Passport Replacement:</strong> If you've lost
            your passport or it has been stolen, we can help you navigate the
            process of getting a replacement.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Name Change on Passport:</strong> Have you changed your name
            recently? We assist with updating your passport to reflect your new
            name.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Child Passport Applications:</strong> Traveling with
            children? We guide you through the specific requirements for
            obtaining a child’s passport.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Passport Expedite Services:</strong> Need your passport
            urgently? Our expedited passport services ensure you receive your
            passport as quickly as possible.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Expertise You Can Rely On</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            Navigating the latest passport regulations and requirements can be
            challenging. Our team of experienced passport agents stays
            up-to-date with the latest changes, ensuring your application meets
            all necessary criteria. We handle every detail of your passport
            application process, from filling out the forms accurately to
            submitting your application to the passport office on your behalf.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Exceptional Customer Service</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            At <strong>Make My Documents</strong>, we pride ourselves on
            providing exceptional customer service. We understand that the
            passport application process can be overwhelming, and we are here to
            make it as easy and stress-free as possible. Our personalized
            guidance and support throughout the application process ensure that
            you have a seamless experience from start to finish.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Fast and Efficient Turnaround Times</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            We know that time is of the essence when it comes to obtaining a
            passport. Our fast turnaround times mean you can have your passport
            in hand as soon as possible, allowing you to focus on planning your
            trip. Whether you need a passport for an upcoming vacation, a
            business trip, or any other reason, we work diligently to expedite
            your application.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Competitive Pricing</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            Obtaining a passport shouldn’t break the bank. At{" "}
            <strong>Make My Documents</strong>, we offer competitive pricing for
            all our passport services. We believe in providing high-quality
            services at affordable rates, ensuring that you receive the best
            value for your money.
          </p>

          <p  style={{textAlign:'left'}}>
            If you need passport services, contact{" "}
            <strong>Make My Documents</strong>. Our experienced agents are ready
            to help you embark on your next international adventure. Schedule an
            appointment today and take the first step towards obtaining your
            passport.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>
              Types of Indian Passports: Your Comprehensive Guide to Easy
              Applications
            </strong>
          </p>
          <p  style={{textAlign:'left'}}>
            Are you looking to apply for an Indian passport? Navigating through
            the various types of passports and understanding the application
            process can be daunting. At <strong>Make My Documents</strong>, we
            simplify the process for you, ensuring a hassle-free experience from
            start to finish. Whether you need a passport for personal travel,
            business trips, or diplomatic purposes, we’ve got you covered.
            Here’s everything you need to know about the different types of
            Indian passports.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Ordinary Passport (Blue Passport)</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            The Ordinary Passport, also known as the Blue Passport, is the most
            common type issued to Indian citizens. It's ideal for regular
            international travel, including vacations, business trips, and
            student exchanges. With a validity of 10 years, it offers
            convenience for frequent travelers.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Key Features:</strong>
          </p>
          <ul>
            <li>Suitable for general travel purposes</li>
            <li>Valid for 10 years</li>
            <li>Available for renewal upon expiry</li>
          </ul>

          <p  style={{textAlign:'left'}}>
            <strong>Official Passport (White Passport)</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            The Official Passport, or White Passport, is issued to individuals
            representing the Indian government on official business abroad. This
            includes government employees, delegates, and officials attending
            international conferences.
          </p>

          <p  style={{textAlign:'left'}}>
            <strong>Key Features:</strong>
          </p>
          <ul>
            <li>Issued for official government travel</li>
            <li>Validity varies based on the assignment duration</li>
            <li>Streamlined application process through government channels</li>
          </ul>

          <p  style={{textAlign:'left'}}>
            <strong>Diplomatic Passport (Maroon Passport)</strong>
          </p>
          <p  style={{textAlign:'left'}}>
            The Diplomatic Passport is reserved for Indian diplomats and
            consular staff, as well as their families. This passport facilitates
            diplomatic duties and provides certain privileges and immunities in
            foreign countries.
          </p>

          <p style={{textAlign:'left'}} >
            <strong>Key Features:</strong>
          </p>
          <ul style={{textAlign:'left'}}>
            <li>Exclusively for diplomats and consular officials</li>
            <li>Offers diplomatic immunity and privileges</li>
            <li>
              Validity aligns with the tenure of the diplomatic assignment
            </li>
          </ul>

          <p style={{textAlign:'left'}}>
            At <strong>Make My Documents</strong>, we understand the
            complexities involved in obtaining an Indian passport. Our expert
            team is dedicated to providing you with personalized assistance,
            ensuring a smooth and efficient application process.
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

export default Passport;
