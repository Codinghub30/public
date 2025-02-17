import React, { useState, useEffect } from 'react';
import './InsurancePage.css'; 
import checklistIcon from '../images/notebook.svg';
import vehiclesIcon from '../images/four_wheeler_image.png';
import circleIcon from '../images/circle1.svg'; 
import documentsIcon from '../images/documents.svg'; 
import howIcon from '../images/how.svg'; 
import thirdImage from '../images/third.svg'; 
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import "./twowheeler.css"
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

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

const FourWheeler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null); 
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX"); 
  const [resendCountdown, setResendCountdown] = useState(30); 
  const [isCompleted, setIsCompleted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
const [otp, setOtp] = useState(['', '', '', '']);
const [fullName, setFullName] = useState('');
const [emailId, setEmailId] = useState('');
const [selectedOption, setSelectedOption] = useState('');
const [houseStreetName, setHouseStreetName] = useState('');
const [villageTownCity, setVillageTownCity] = useState('');
const [dob, setDob] = useState('');
const [selectedGender, setSelectedGender] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
const [pincode, setPincode] = useState('');
const [aadharNumber, setAadharNumber] = useState('');

const [selectedState, setSelectedState] = useState('');

const [userData, setUserData] = useState(null); 
const [error, setError] = useState("");
const [showOtpSection, setShowOtpSection] = useState(true); 
  const openPopup = () => {
     setShowPopup(true);
     navigate("/car-insurance-info"); 
   };
 
   const handleGoHome = () => {
    navigate("/");
  };
 
   const closePopup = () => {
     setShowPopup(false);
     navigate("/car-insurance"); 
     setCurrentStep(1);
     setIsCompleted(false);
   };
 
   React.useEffect(() => {

     if (location.pathname === "/car-insurance-info") {
       setShowPopup(true);
     } else {
       setShowPopup(false);
     }
   }, [location.pathname]);


    const handleFullNameChange = (event) => {
      setFullName(event.target.value);
    };
    
    const handleEmailIdChange = (e) => setEmailId(e.target.value);
    const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
 
    const [policyOption, setPolicyOption] = useState("");
    const [policyOptionError, setPolicyOptionError] = useState("");
    
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [registrationNumberError, setRegistrationNumberError] = useState("");
    
    const [registrationDate, setRegistrationDate] = useState("");
    const [registrationDateError, setRegistrationDateError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [mobileNumberError, setMobileNumberError] = useState("");
    const [emailIdError, setEmailIdError] = useState("");
    const [villageTownCityError, setVillageTownCityError] = useState("");
    const [selectedStateError, setSelectedStateError] = useState("");
    const [selectedDistrictError, setSelectedDistrictError] = useState("");
    const handleStateChange = (e) => {
      const state = e.target.value;
      setSelectedState(state);
      setSelectedDistrict(""); 
      setSelectedStateError(""); 
      setSelectedDistrictError(""); 
    };
    const handleDistrictChange = (e) => {
      setSelectedDistrict(e.target.value);
      setSelectedDistrictError(""); 
    };
    const getMaskedMobileNumber = (number) => {
      if (!number || number.length < 3) return ""; 
      const firstTwo = number.slice(0, 2); 
      const lastDigit = number.slice(-1); 
      const masked = `${firstTwo}******${lastDigit}`; 
      return masked;
    };

    const selectedStateData = stateData.find(
      (stateObj) => stateObj.state === selectedState
    );
    const districts = selectedStateData ? selectedStateData.districts : [];
    const [isResending, setIsResending] = useState(false);
    const [applyingfor, setApplyingFor]=useState('');
  
    const nextStep = () => {
      if (currentStep < 3) setCurrentStep(currentStep + 1);
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
    
        const response = await axios.post("https://api.makemydocuments.in/api/sendOTP", {
          mobilenumber: formattedNumber,
        });
    
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


    


    const handleVerify = async () => {
      try {
          let formattedNumber = mobileNumber.trim();
  
          // Validate the mobile number format (10 digits, no country code check here)
          if (!/^\d{10}$/.test(formattedNumber)) {
              alert("Please enter a valid 10-digit mobile number.");
              return;
          }
  
          // Add country code (only if needed)
          formattedNumber = `+91${formattedNumber}`;
          console.log("Formatted Mobile Number:", formattedNumber);
  
          // Validate OTP
          const enteredOtp = otp.join("").trim();
          if (!enteredOtp || enteredOtp.length !== 4) {
              alert("Please enter a valid 4-digit OTP.");
              return;
          }
  
          // Make the API request to verify OTP
          const response = await axios.post(
              "https://api.makemydocuments.in/api/verifyOTP",
              { mobilenumber: formattedNumber, otp: enteredOtp }
          );
  
          // Handle the response
          if (response.status === 200) {
              console.log("OTP Verification Response:", response.data);
              if (response.data.status === "success") {
             
                  setShowOtpSection(false); // Hide OTP section
                  finishSubmission();                  
                  
                  await sendMessage(formattedNumber);
              } else {
                  alert(response.data.message || "Error verifying OTP.");
              }
          } else {
              throw new Error(`Unexpected response status: ${response.status}`);
          }
      } catch (error) {
          console.error("Error verifying OTP:", error);
          // alert("An error occurred while verifying OTP. Please try again.");
      }
  };
  
  const sendMessage = async (formattedNumber, name) => {
    try {
      const payload = {
        mobile: formattedNumber,
        name: name  
      };
  
      const response = await axios.post(
        "https://api.makemydocuments.in/api/send-sms",
        payload
      );
  
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
          setResendCountdown();
          alert("OTP resent successfully!");
        } else {
          alert(response.data.message || "Error resending OTP.");
        }
      } catch (error) {
        console.error("Error resending OTP:", error);
        // alert("An error occurred while resending OTP. Please try again.");
      }  finally {
        setIsResending(false); // Stop resending state
      }
    };
   
    const handlePincodeChange = (e) => {
      const value = e.target.value;
  
      // Check if the value is numeric and has at most 6 digits
      if (/^\d{0,6}$/.test(value)) {
        setPincode(value);
        setPincodeError(""); // Clear the error if valid
      } else {
        setPincodeError("Pin Code must be a 6-digit number.");
      }
    };

    const handleBlur = () => {
      if (pincode.length !== 6) {
        setPincodeError("Pin Code must be exactly 6 digits.");
      }
    };
const [pincodError , setPincodeError] = useState("");
    const validateForm = () => {
      let isValid = true;
    
      // Step 1: Validate policy option
      if (currentStep === 1) {
          if (!policyOption) {
              setPolicyOptionError("Please select an option");
              isValid = false;
          } else {
              setPolicyOptionError("");
          }
      }
    
      // Step 2: Validate registration details
      if (currentStep === 2) {
          if (!registrationNumber) {
              setRegistrationNumberError("Please enter registration number");
    
              isValid = false;
          } else {
              setRegistrationNumberError("");
          }
    
          if (!registrationDate) {
              setRegistrationDateError("Please enter registration date");
              isValid = false;
          } else {
              setRegistrationDateError("");
          }
      }
    
      // Step 3: Validate contact details
      if (currentStep === 3) {
          if (!fullName) {
              setFullNameError("Please enter your name");
              isValid = false;
          } else {
              setFullNameError("");
          }
    
          if (!mobileNumber) {
              setMobileNumberError("Please enter your mobile number");
              isValid = false;
          } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
              setMobileNumberError("Please enter a valid 10-digit mobile number");
              isValid = false;
          } else {
              setMobileNumberError("");
          }
    
          if (!emailId) {
              setEmailIdError("Please enter your email ID");
              isValid = false;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
              setEmailIdError("Please enter a valid email address");
              isValid = false;
          } else {
              setEmailIdError("");
          }
    
          if (!villageTownCity) {
              setVillageTownCityError("Please enter your address");
              isValid = false;
          } else {
              setVillageTownCityError("");
          }
    
          if (!selectedState) {
            setSelectedStateError("Please select a state");
            isValid = false;
        } else {
            setSelectedStateError("");
        }
        
          if (!selectedDistrict) {
              setSelectedDistrictError("Please select a district");
              isValid = false;
          } else {
              setSelectedDistrictError("");
          }
          if (!pincode) {
            setPincodeError("Please enter the Pincode");
            isValid = false;
        } else if (!/^[0-9]{6}$/.test(pincode)) { // Corrected regex for 6-digit pincode
            setPincodeError("Please enter a valid 6-digit Pincode");
            isValid = false;
        } else {
            setPincodeError("");
        }
      }
    
      return isValid;
    };

    
// Example handlers for radio buttons and inputs
const handlePolicyOptionChange = (e) => {
  setPolicyOption(e.target.value);
  setPolicyOptionError("");
};

const handleRegistrationNumberChange = (e) => {
  setRegistrationNumber(e.target.value);
  setRegistrationNumberError("");
};

const handleRegistrationDateChange = (e) => {
  setRegistrationDate(e.target.value);
  setRegistrationDateError("");
};


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
        name: fullName || "", 
        mobilenumber: mobileNumber || "", 
        applying_for: policyOption || "",
        registrationDate: registrationDate || "",
      registrationNumber : registrationNumber || "",
        email: emailId || "",
        services: selectedOption || "", 
        address: villageTownCity || "", 
        district: selectedDistrict || "",
        dob: dob || "",
        date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
        paidamount: "0.00",
        // qualification: "", 
       
        gender: selectedGender || "", 
        // fathername: fatherName || "", 
        // mothername: motherName || "", 
        pincode: pincode || "", 
        adharnumber: aadharNumber || "", 
        pancard: "", 
        time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
        comment: "", 
        status: "",
        service: "Four Wheeler Insurance",
       
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
        if (response.data.success) {
          alert("Details saved successfully!");
        } else {
        }
      } catch (error) {
        console.error("Error while saving data:", error);
        alert("An error occurred while saving your details. Please try again.");
      }
    };
  


    const faqs = [
        {
            question: "What is Car Insurance?",
            answer: "Car Insurance not only provides financial protection to the car but also provides cover for injuries to driver, passengers or pedestrians, and their property. It pays for damages to your car due to accidents, vandalism, theft, fire, man-made/ natural disasters, and third-party liability. Considering the exorbitant repair costs these days even a minor damage can cost a fortune. The Motor Vehicles Act also requires every vehicle on the road to at least have a valid third-party liability cover, i.e. cover that pays for bodily injury, loss of life and damage to property of a third person that was caused by an accident with your car.",
        },
        {
            question: "Which Documents are Required to buy a car insurance plan?",
            answer: "To buy the policy individuals would have to submit the RC book of the car, invoice of the new car or existing policy document for an old car, No claim bonus certificate of the existing policy if required.",
        },
        {
            question: "What is Covered Under car insurance?",
            answer: "The IRDAI revises premium every year, considering the ratio of claims made and loss for providers. Because of this, third party insurance rates for cars and bikes have become costly from April 1st, with the insurance rate rising up to 40%.  ",
        },
        {
            question: "What is not Covered Under car insurance?",
            answer: "Normal wear and tear and general ageing of the insured vehicle.",
        },
        {
            question: "What are the benefits of buying car insurance plans?",
            answer: "A car insurance policy is not only legally mandatory, it is beneficial too. Here’s how",
        },
        {
          question: "How much will I get paid for a car damage claim?",
          answer: `
            Once your claim is accepted, you will be paid the approved claim amount minus certain deductions which you will have to pay out from your pocket:
            
            Depreciation: Standard insurance pays for the actual cash value of your damaged or destroyed vehicle part. However, since the part was already in use, its value will be less than or depreciated in comparison to a new replacement part. This will be 30% for fibre components and 50% for plastics and rubber. If you do not want to bear the depreciation cost, you can buy a zero depreciation add-on, which is available typically for cars not older than 3 years.
            
            Standard or Voluntary Deductible: This is a fixed amount that you have to bear before the policy comes into force. For private cars, this amount currently is Rs. 1,000.
          `,
        },      
        {
          question: "What is IDV?",
          answer: (
            <div>
              <p>
                The Insured Declared Value (IDV) represents the actual sum insured of the car insurance policy. It is calculated by deducting the age-based depreciation from the market value of the car. The applicable depreciation rates depend on the age of the car, as shown in the table below:
              </p>
              <table border="1" style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px', textAlign: 'left' }}>Age of the car</th>
                    <th style={{ padding: '8px', textAlign: 'left' }}>Applicable depreciation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px' }}>Less than 6 months</td>
                    <td style={{ padding: '8px' }}>5%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>More than 6 months but less than a year</td>
                    <td style={{ padding: '8px' }}>15%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>More than a year but less than 2 years</td>
                    <td style={{ padding: '8px' }}>20%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>More than 2 years but less than 3 years</td>
                    <td style={{ padding: '8px' }}>30%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>More than 3 years but less than 4 years</td>
                    <td style={{ padding: '8px' }}>40%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>More than 4 years but less than 5 years</td>
                    <td style={{ padding: '8px' }}>50%</td>
                  </tr>
                </tbody>
              </table>
              <p>
                If the car is more than 5 years old, the IDV is mutually decided between the insurance company and the policyholder. The IDV is paid as a claim if the car is damaged beyond repair or if it is stolen.
              </p>
            </div>
          ),
        },
        
        {
            question: "For how many times can I claim for roadside assistance cover?",
            answer: "You can claim the roadside assistance cover for a maximum of four times during the entire policy period.",
        },
        {
          question:"What is CTL?",
          answer:"CTL stands for Constructive Total Loss of the car. A loss if declared to be a CTL if the estimated repair costs exceed the IDV of the policy. In such cases, the IDV is paid as claim."
        },
        {
          question:"Can the car insurance policy be transferred to another individual?",
          answer:"Yes, if you are selling your car to another individual you can also transfer the insurance policy of the car to the buyer. While the policy ownership would change, the no claim bonus would remain with you and you can use the bonus to claim a premium discount in another car insurance policy which you buy."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
    };


    return (
      <>
      <Helmet>
      <title> Car Insurance Online - Buy/Renew Car Insurance Policy Online </title>
<meta name="description" content=" Click here to get car insurance instantly, comprehensive or thrid party liability, no paper work, and instant policy download, complete online process."/>
<meta name="keywords" content=" car insurance India, car insurance, car insurance near me, car insurance online, car insurance agent in Bangalore, Compare car insurance online, car insurance policy, Third party car insurance online, best car insurance India, how to get car insurance online, apply car insurance, get car insurance online, instant car insurance, car insurance Bangalore, car insurance price, car insurance renewal, car insurance renewal policy"/>
<meta name="author" content="https://makemydocuments.com/car-insurance"/>
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
        <div
            
            style={{
               overflow:'hidden'
            }}
        >
            {/* Top Section */}
            <div className="row justify-content-start align-items-center insurance-container"  style={{
                background: 'linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)',
                minHeight: '60vh',
                paddingTop: '20px',
            }}
        >
                {/* Left side: Text content */}
                <div className="col-12 col-md-6 text-left">
                    <div className="text-content rotate-on-hover">
                        <h1>Protect Your Four-Wheeler with Ease</h1>
                        <p style={{ fontWeight: '500' }}>Insurance applications made simple and stress-free.</p>
                    </div>
                    <img src={checklistIcon} alt="Checklist Icon" className=" checklist-icon d-none d-lg-none"   style={{maxWidth:'293px', marginTop:'24%'}} />
                </div>

                {/* Right side: Vehicles and Phone Icon */}
                <div className="col-12 col-md-6 text-center">
                    <img src={vehiclesIcon} alt="Vehicles and Phone" className="img-fluid vehicles-icon" />
                </div>
            </div>

            {/* Content Section */}
            <div
                className="content-section"
                style={{
                    backgroundColor: '#fffff',
                    padding: '30px 15px',
                    borderRadius: '10px',
                    margin: '-2% auto',
                    marginRight:'72%',
                }}
            >
                <div className="row justify-content-center">
                    {/* Main Column for Vertical Layout */}
                    <div className=" d-none d-lg-block col-12 col-md-8 position-relative">
                        {/* First Section: Documents */}
                        <div className="text-center mb-5">
                            <div style={{ position: 'relative' }}>
                                <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                                <img
                                    src={documentsIcon}
                                    alt="Documents Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '69%',
                                        left: '50%',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div> 
                        </div>
                    
           
                        <div
                            style={{
                                borderLeft: '3px solid #007BFF',
                                height: '100%',
                                // margin: '0 auto',
                                width: '4px',
                                marginTop:'-32%',
                                marginLeft:'50%'
                            }}
                        ></div>

                        {/* Second Section: How It Works */}
                        <div className="text-center mb-5" style={{marginTop:'-22%'}}>
                            <div style={{ position: 'relative' }}>
                                <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                                <img
                                    src={howIcon}
                                    alt="How It Works Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '69%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div>
              
                        </div>

                        {/* Blue Line */}
                        <div
                            style={{
                                borderLeft: '3px solid #007BFF',
                                height: '110%',
                                // margin: '0 auto',
                                marginLeft:'49.8%',
                                marginTop:'-32%',
                                width: '4px',
                            }}
                        ></div>

                        {/* Third Section */}
                        <div className="text-center">
                            <div style={{ position: 'relative' }}>
                    
                                <img
                                    src={thirdImage}
                                    alt="Third Section Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '60%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div>
                           
                        </div>
                       
            
                    </div>
                </div>
             <div className=' d-none d-lg-block'>
                <div className="desktop-document mb-5"   
                // style={{
                //         marginTop: '-38%',
                //         marginLeft: '71%',
                //     }}
                    >
                     <h4 className="text-document"
        // style={{
        //     color: '#007BFF',
        //     fontWeight: 'bold',
        //     whiteSpace: 'nowrap', // Prevents text from wrapping
        // }}
    >Documents Required For Four-Wheeler Insurance</h4>
                    <ul className="text-ul" style={{ listStyleType: "disc",  fontSize:'bold' }}>
                    <li style={{ padding: '0px', marginBottom: '0px' }}>Registration Copy</li>
                    <li style={{ padding: '0px', marginBottom: '0px' }}>Old Policy Details If It's Renew</li>
                    </ul>
                </div>

                {/* How It Works Section */}
                <div className="desktop-how mb-5">
                    <h4 className="text-how" >How It Works</h4>
                    <ul className="text-ul" style={{ listStyleType: "disc", whiteSpace:'nowrap' }}>
                    <li style={{  padding: '0px', marginBottom: '0px'  }}>Register Online</li>
        <li style={{  padding: '0px', marginBottom: '0px'  }}>Get Quotation Via E-mail / WhatsApp</li>
        <li style={{  padding: '0px', marginBottom: '0px'  }}>Compare Policies</li>
        <li style={{  padding: '0px', marginBottom: '0px'  }}>Make Payment</li>
        <li style={{  padding: '0px', marginBottom: '0px'  }}>Download Your Policy Instantly</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="d-block d-lg-none" style={{ marginTop: '-29%' }}>
  {/* First Row: Documents Section */}
  <div className="row align-items-center mb-5">
    {/* Icon */}
    <div className="col-3 text-center">
      <div className="icon-section position-relative">
        <img src={circleIcon} alt="Circle Background" className="img-fluid-circle" />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="position-absolute top-50 start-50 translate-middle overlay-icon"
        />
      </div>
    </div>
    {/* Content */}
    <div className="col-9">
      <div className="desktop-document" style={{marginTop:'1%'}}>
        <h4
          className="text-document"
          style={{ textAlign: 'left', fontSize: '14px', marginBottom:'10px' }}
        >
          Documents Required For Four-Wheeler Insurance
        </h4>
        <ul
          className="text-ul list-unstyled"
          style={{ textAlign: 'left', fontSize: '12px', margin: 0 ,listStyleType: "disc",}}
        >
          <li>Registration Copy</li>
          <li>Old Policy Details If It's Renew</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Second Row: How It Works Section */}
  <div className="row align-items-center"  style={{marginTop:'-31%'}}>
    {/* Icon */}
    <div className="col-3 text-center">
      <div className="icon-section position-relative">
        <img src={circleIcon} alt="Circle Background" className="img-fluid-circle" />
        <img
          src={howIcon}
          alt="How It Works Icon"
          className="position-absolute top-50 start-50 translate-middle overlay-icon"
        />
      </div>
    </div>
    {/* Content */}
    <div className="col-9">
      <div className="desktop-how">
        <h4
          className="text-how"
          style={{
            textAlign: 'left',
            fontSize: '14px',
            marginTop: 0,
          }}
        >
          How It Works
        </h4>
        <ul
          className="text-ul list-unstyled"
          style={{ textAlign: 'left', fontSize: '12px', margin: 0, listStyleType: "disc", }}
        >
          <li>Register Online</li>
          <li>
            Get Quotation Via E-mail <br />/ WhatsApp
          </li>
          <li>Compare Policies</li>
          <li>Make Payment</li>
          <li>Download Your Policy Instantly</li>
        </ul>
      </div>
    </div>
  </div>
</div>
     <div>
      {/* Get Quotes Button */}
      {/* <div style={{ textAlign: "center", marginTop: "-10%" }}>
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
            marginRight:"40%",
            marginTop:"-30%",
          }}
          onClick={openPopup}
        >
          Get Quotes
        </button>
      </div> */}

<div className="get-quotes-button">
  <button  className="button-static" onClick={openPopup}>
    Get Quotes
  </button>
</div>

      {/* Modal Popup */}
      {showPopup && (
        <div className="popupstyle-twowheeler"
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
          <div  className="popup-twowheeler"
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
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: currentStep >= 1 ? "#4285F4" : "#ccc",
                    color: "white",
                    borderRadius: "50%",
                    lineHeight: "60px",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step 1</span> */}
              </div>
              <div
                style={{
                  height: "2px",
                  flex: 1,
                  backgroundColor: currentStep >= 2 ? "#4285F4" : "#ccc",
                  alignSelf: "center",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: currentStep >= 2 ? "#4285F4" : "#ccc",
                    color: "white",
                    borderRadius: "50%",
                    lineHeight: "50px",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step 2</span> */}
              </div>
              <div
                style={{
                  height: "2px",
                  flex: 1,
                  backgroundColor: currentStep >= 3 ? "#4285F4" : "#ccc",
                  alignSelf: "center",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: currentStep === 3 ? "#4285F4" : "#ccc",
                    color: "white",
                    borderRadius: "50%",
                    lineHeight: "50px",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step 3</span> */}
              </div>
            </div>

            {/* Popup Content Based on Step */}
            <div style={{ marginBottom: "20px" }}>
            {currentStep === 1 && (
  <div style={{ textAlign: "center" }}>
    <p style={{ fontWeight: "600" }}>Buy / Renew Car insurance without inspection or paperwork</p>

    <h4 style={{ color: "#007BFF", fontWeight: "bold" }}>
      I Want to
      <span style={{ color: "red" }}>*</span>
    </h4>

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
      <label style={{ fontSize: "18px", fontWeight: "500", color: "#333" }}>
        <input
          type="radio"
          name="policyOption"
          value="buyNewPolicy"
          checked={policyOption === "buyNewPolicy"}
          onChange={(e) => setPolicyOption(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        Buy New Policy
      </label>
      <label style={{ fontSize: "18px", fontWeight: "500", color: "#333" }}>
        <input
          type="radio"
          name="policyOption"
          value="renewExistingPolicy"
          checked={policyOption === "renewExistingPolicy"}
          onChange={(e) => setPolicyOption(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        Renew Existing Policy
      </label>
    </div>
    {policyOptionError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {policyOptionError}
        </p>
      )}
  </div>
)}

{currentStep === 2 && (
  <div style={{ textAlign: "center" }}>
    {/* Step 2 Heading */}
    <p>Buy Insurance, the smart way</p>

    {/* Subheading */}
    <h3 style={{ color: "#007BFF", fontWeight: "600", margin: "20px 0" }}>
      Enter Your Car Details
    </h3>

    {/* Registration Input */}
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="registrationNumber"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Registration Number
        <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        id="registrationNumber"
        // onChange={handleRegistrationNumberChange}
        value={registrationNumber}
        placeholder="Enter Registration Number"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      {registrationNumberError && (
        <p style={{ color: "red", fontSize: "14px" ,textAlign:'left'}}>
          {registrationNumberError}
        </p>
      )}
    </div>

    {/* Registration Date Input */}
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="registrationDate"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Registration Date
        <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="date"
        id="registrationDate"
        value={registrationDate}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        onChange={(e) => setRegistrationDate(e.target.value)}
      />
      {registrationDateError && (
        <p style={{ color: "red", fontSize: "14px", textAlign:'left' }}>
          {registrationDateError}
        </p>
      )}
    </div>
  </div>
)}

{currentStep === 3 && (
  <div style={{ textAlign: "center" }}>
    <p>Buy Insurance, the smart way</p>

    <h3 style={{ color: "#007BFF", fontWeight: "600", margin: "20px 0" }}>
      Contact Details
    </h3>

    {/* Form Fields */}
    {/* Name */}
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="name"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Name<span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        id="name"
        value={fullName}
        onChange={handleFullNameChange}
        placeholder="Enter Your Name"
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
     
    </div>
    {fullNameError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {fullNameError}
        </p>
      )}
    {/* Mobile Number */}
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="mobileNumber"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Mobile Number<span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        id="mobileNumber"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        placeholder="Enter Your Mobile Number"
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    
    </div>
    {mobileNumberError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {mobileNumberError}
        </p>
      )}

    {/* Email ID */}
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="email"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Email ID<span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="email"
        id="email"
        value={emailId}
        onChange={handleEmailIdChange}
        placeholder="Enter Your Email ID"
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
     
    </div>
    {emailIdError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {emailIdError}
        </p>
      )}

    {/* Address */}
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="address"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Address<span style={{ color: "red" }}>*</span>
      </label>
      <textarea
        id="address"
        value={villageTownCity}
        onChange={handleVillageTownCityChange}
        placeholder="Enter Your Address"
        style={{
          width: "100%",
          height: "70px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    
    </div>
    {villageTownCityError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {villageTownCityError}
        </p>
      )}


    <div>
      {/* State Dropdown */}
      <div style={{ marginBottom: "20px", textAlign: "left" }}>
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
      {selectedStateError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {selectedStateError}
        </p>
      )}

      {/* District Dropdown */}
      {selectedState && (
        <div style={{ marginBottom: "20px", textAlign: "left" }}>
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
          {selectedDistrictError && (
            <p style={{ color: "red", fontSize: "14px" }}>{selectedDistrictError}</p>
          )}
        </div>
      )}
    </div>
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
                            id="pincode"
                            placeholder="Enter Pin Code"
                            value={pincode}
                            onChange={handlePincodeChange}
                            onBlur={handleBlur}
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
    
                        {pincodError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {pincodError}
        </p>
      )}
  </div>
)}

            </div>

            {/* Stepper Navigation */}
            <div  style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}>
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
              {currentStep < 3 ? (
                // <button
                // onClick={() => {
                
                //   if (!validateForm()) {
                //     setError("Please fill all required fields.");
                //     return;
                //   }
              
                //   nextStep(); 
                // }}
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
<button
onClick={() => {
if (!validateForm()) {
setError("Please fill all required fields.");
return;
}

nextStep();
}}
className="next-insurance-button"
>
Next
</button>
</div>

              ) : (
                // <button
                // onClick={() => {
                 
                //   if (!validateForm()) {
                //     // If form is not valid, do not proceed
                //     setError("Please fill all required fields.");
                //     return;
                //   }
                //   handleSendOtp(); 
                //   setShowOtpSection(true);  
                //   setError(""); 
                //   setIsCompleted(true)
                // }}
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
                        <br/>
  <button
    onClick={() => {
      if (!validateForm()) {
        setError("Please fill all required fields.");
        return;
      }

      handleSendOtp();
      setShowOtpSection(true);
      setError("");
      setIsCompleted(true);
    }}
    className="submit-insurance-button"
  >
    SUBMIT
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
                        OTP sent on {mobileNumber ? mobileNumber.replace(/.(?=.{4})/g, "*") : ""}
                      </h4>
                      <div style={{ margin: "20px 0" }}>
                        <label style={{ fontWeight: "500", marginBottom: "10px" }}>
                          Enter OTP <span style={{ color: "red" }}>*</span>
                        </label>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              type="text"
                              maxLength="1"
                              value={digit}
                              onChange={(e) => handleChange(e.target.value, index)}
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
                        style={{
                          backgroundColor: "#FFA500",
                          color: "#000",
                          border: "none",
                          borderRadius: "5px",
                          padding: "10px 20px",
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        VERIFY
                      </button>
                    </div>
              ) : (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                {/* Success Message with Checkmark */}
                <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Optional: light green background
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#28a745",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "circleAnimation 1s ease-in-out",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          stroke="white"
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 6L9 17l-5-5"
          />
        </svg>
      </div>
      {/* <span style={{ marginLeft: "15px", color: "#28a745" }}>Success!</span> */}
    </div>
    <br/>
    <p style={{fontSize:'30px'}}> Thank You!</p>
                {/* Confirmation Text */}
                <p>Your Submission has been Received.</p>
                <p>We appreciate your interest and will get back to you as soon as possible.</p>
                <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleGoHome}
      >
        Back to Home
      </button>
                {/* {redirecting && <p>Redirecting to homepage...</p>} */}
              </div>
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

                       {/* FAQ Section */}
 <div className="faq-section" style={{ margin: '14px auto', padding: '20px', background: '#FFFFFF', borderRadius: '10px', width: '80%' }}>
            <h4 style={{ textAlign: 'center', fontWeight: 'bold', color: '#007BFF', marginBottom: '20px' }}>FAQs</h4>
            <p style={{ textAlign: 'center', fontWeight: '500', marginBottom: '30px' }}>Need help? Contact us for any queries related to us</p>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item" style={{ marginBottom: '10px' }}>
                        <button
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: '10px 20px',
                                border: '1px solid #007BFF',
                                borderRadius: '5px',
                                background: '#F9F9F9',
                                fontWeight: '500',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleToggle(index)}
                        >
                            {faq.question}
                            <span style={{ fontWeight: 'bold', fontSize: '16px', marginLeft: '10px' }}>
                                {openIndex === index ? '▲' : '▼'}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div
                                style={{
                                    marginTop: '10px',
                                    padding: '10px 20px',
                                    background: '#F3F3F3',
                                    borderRadius: '5px',
                                    color: '#333',
                                }}
                            >
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
<br/>
        </div>
        </>
    );
};

export default FourWheeler;
