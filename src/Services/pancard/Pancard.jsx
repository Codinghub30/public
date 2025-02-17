import React, { useState, useEffect } from "react";
import Image30 from "../../images/pancard_image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import "../pancard/pancard.css"
import { ArrowLeft } from "lucide-react";
import howIcon from "../../../src/images/how.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state: "Arunachal Pradesh",
    districts: [
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
      "West Siang",
    ],
  },
  {
    state: "Andhra Pradesh",
    districts: [
      "Alluri Sitharama Raju",
      "Anakapalli",
      "Ananthapuramu",
      "Annamayya",
      "Bapatla",
      "Chittoor",
      "Dr. B.R. Ambedkar Konaseema",
      "East Godavari",
      "Eluru",
      "Guntur",
      "Kakinada",
      "Krishna",
      "Kurnool",
      "Nandyal",
      "Ntr",
      "Palnadu",
      "Parvathipuram Manyam",
      "Prakasam",
      "Sri Potti Sriramulu Nellore",
      "Sri Sathya Sai",
      "Srikakulam",
      "Tirupati",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "Y.S.R.",
    ],
  },
  {
    state: "Arunachal Pradesh",
    districts: [
      "Anjaw",
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
      "West Siang",
    ],
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
      "West Karbi Anglong",
    ],
  },
  {
    state: "Bihar",
    districts: [
      "Araria",
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
      "Vaishali",
    ],
  },
  {
    state: "Chhattisgarh",
    districts: [
      "Balod",
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
      "Uttar Bastar Kanker",
    ],
  },
  {
    state: "Goa",
    districts: ["North Goa", "South Goa"],
  },
  {
    state: "Gujarat",
    districts: [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Arvalli",
      " Banas Kantha",
      "Bharuch",
      "Bhavnagar",
      "Botad",
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
      "Panch Mahals",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabar Kantha",
      "Surat",
      "Surendranagar",
      "Tapi",
      "Vadodara",
      "Valsad",
    ],
  },
  {
    state: "Haryana",
    districts: [
      "Ambala",
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
      "Yamunanagar",
    ],
  },
  {
    state: "Jammu and Kashmir",
    districts: [
      "Anantnag",
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
      "Udhampur",
    ],
  },
  {
    state: "Himachal Pradesh",
    districts: [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul And Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur",
      "Solan",
      "Una",
    ],
  },
  {
    state: "Jharkhand",
    districts: [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribagh",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahebganj",
      "Saraikela Kharsawan",
      "Simdega",
      "West Singhbhu",
    ],
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
    districts: [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
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
      "Wayanad",
    ],
  },
  {
    state: "Ladakh",
    districts: ["Leh", "Kargil"],
  },
  {
    state: "Madhya Pradesh",
    districts: [
      "Agar Malwa",
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
      "Vidisha",
    ],
  },
  {
    state: "Lakshadweep",
    districts: ["Lakshadweep"],
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
      "Yavatmal",
    ],
  },

  {
    state: "Manipur",
    districts: [
      "Bishnupur",
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
      "Ukhrul",
    ],
  },
  {
    state: "Meghalaya",
    districts: [
      "East Garo Hills",
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
      "West Khasi Hills",
    ],
  },
  {
    state: "Mizoram",
    districts: [
      "Aizawl",
      "Champhai",
      "Hnahthial",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saitual",
      "Serchhip",
      "Siaha",
      "Vaihnuai",
    ],
  },
  {
    state: "Nagaland",
    districts: [
      "Chumoukedima",
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
      "Zunheboto",
    ],
  },
  {
    state: "Odisha",
    districts: [
      "Angul",
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
      "Sundargarh",
    ],
  },
  {
    state: "Punjab",
    districts: [
      "Amritsar",
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
      "Tarn Taran",
    ],
  },
  {
    state: "Rajasthan",
    districts: [
      "Ajmer",
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
      "Sawai Madhopur",
    ],
  },
  {
    state: "Sikkim",
    districts: [
      "Gangtok",
      "Namchi",
      "Mangan",
      "Soreng",
      "Gyalshing",
      "Pakyong",
    ],
  },
  {
    state: "Tamil Nadu",
    districts: [
      "Ariyalur",
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
      "Virudhunagar",
    ],
  },
  {
    state: "Telangana",
    districts: [
      "Adilabad",
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
      "Yadadri Bhuvanagiri",
    ],
  },
  {
    state: "Tripura",
    districts: [
      "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "South Tripura",
      "Unakoti",
      "West Tripura",
    ],
  },
  {
    state: "Uttar Pradesh",
    districts: [
      "Agra",
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
      "Varanasi",
    ],
  },
  {
    state: "Uttarakhand",
    districts: [
      "Almora",
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
      "Uttarkashi",
    ],
  },
  {
    state: "West Bengal",
    districts: [
      "Alipurduar",
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
      "Uttar Dinajpur",
    ],
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
    districts: [
      "Central",
      "East",
      " New Delhi ",
      "North",
      "North East ",
      "North West ",
      "Shahdara",
      "South",
      " South East ",
      "South West",
      "West",
    ],
  },
  {
    state: "Puducherry",
    districts: ["Puducherry", "Karaikal"],
  },
];

const Pancard = () => {
   const navigate = useNavigate();
    const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const [current, setCurrent] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [isCompleted, setIsCompleted] = useState(false);
  // const [userData, setUserData] = useState(null);
  const [showOtpSection, setShowOtpSection] = useState(true);
 const openPopup = () => {
     setShowPopup(true);
     navigate("/pan-card-form"); // Update the URL
   };
 
   // Function to close the popup and revert the URL
   const closePopup = () => {
     setShowPopup(false);
     navigate("/pan-card"); // Revert the URL
     setCurrentStep(1);
     setIsCompleted(false);
   };
 
   React.useEffect(() => {
     // Automatically show the popup if the URL matches /two-wheeler-insurance-info
     if (location.pathname === "/pan-card-form" || location.pathname === "/pan-card/proceed-to-pay") {
       setShowPopup(true);
     } else {
       setShowPopup(false);
     }
   }, [location.pathname]);
const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [gender, setSelectedGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [leadId, setLeadId] = useState();
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  // const [orderid, setOrderID] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const handleHouseStreetNameChange = (e) => setHouseStreetName(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);

  const handleFatherNameChange = (e) => setFatherName(e.target.value);
  const handleMotherNameChange = (e) => setMotherName(e.target.value);
  const handleAadharChange = (e) => setAadharNumber(e.target.value);
  const handleParentSelection = (e) => setSelectedParent(e.target.value);
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setError(""); // Clear error if the input is valid
    }
  };

  const handleBlur = () => {
    // Check if the pin code has exactly 6 digits
    if (pincode.length !== 6) {
      setError("Pin Code must be exactly 6 digits.");
    } else {
      setError("");
    }
  };

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCountdown]);

  // Handle OTP Input Change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus on the next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const validateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  // Handle Backspace Logic
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
          navigate("/pan-card/proceed-to-pay");
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
  



  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };
  

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
      SERVICE: "Pancard",
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
 
          // const formattedNumber = userDetails?.mobile || ""; 
          // await sendSuccessMessage(formattedNumber);
          
       
        } else {
        
        }
      } else {
        // alert("Unable to fetch payment status. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      // alert("An error occurred while fetching the payment status.");
    }
  };
  
  
  

  const handleEmailIdChange = (e) => {
    setEmailId(e.target.value);
    setError(""); // Clear error as user types
  };

  const [emailError, setEmailError] = useState(""); // Add this to your component

  const handleAgreementChange = (e) => {
    setSelectedAgreement(e.target.value);
    setError(""); 
  };

 
  const nextStep = () => {
    // Validate all required fields for the current step
    if (currentStep === 1) {
      if (!selectedAgreement) {
        setError("Please select an option to proceed.");
        return;
      }
    }

    if (currentStep === 2) {
      // Gender validation
      if (!gender) {
        setError("Please select your gender.");
        return;
      }

      // Full name validation
      if (!fullName) {
        setError("Please enter your full name.");
        return;
      }

      // Date of Birth validation
      if (!dob) {
        setError("Please select your date of birth.");
        return;
      }

      // Validate age (18+)
      const age = validateAge(dob);
      if (age < 18) {
        setError("You must be at least 18 years old.");
        return;
      }

      if (
        (selectedAgreement === "correctionInPanCard" ||
          selectedAgreement === "lostDamagePanCard") &&
        !existingPanCardNumber
      ) {
        setError("Please enter your existing Pan Card number.");
        return;
      }
    }

    if (currentStep === 3) {
      if (!fatherName) {
        setError("Please enter Father's Name.");
        return;
      }
      if (!motherName) {
        setError("Please enter Mother's Name.");
        return;
      }
      if (!selectedParent) {
        setError(
          "Please select the name (Father or Mother) to print on the PAN card."
        );
        return;
      }
      if (!aadharNumber) {
        setError("Please enter your Aadhar number.");
        return;
      }
    }

    if (currentStep === 4) {
      if (!houseStreetName) {
        setError("Please enter House No. and Street Name.");
        return;
      }
      if (!villageTownCity) {
        setError("Please enter Village / Town / City.");
        return;
      }
      if (!selectedState) {
        setError("Please select your State.");
        return;
      }
      if (!selectedDistrict) {
        setError("Please select your District.");
        return;
      }
      if (!pincode) {
        setError("Please enter your Pin Code.");
        return;
      }
    }

    if (currentStep === 5) {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileNumber) {
        setError("Please enter your mobile number.");
        return;
      }
      if (!mobileRegex.test(mobileNumber)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailId) {
        setError("Please enter your email address.");
        return;
      }
      if (!emailRegex.test(emailId)) {
        setError("Please enter a valid email address.");
        return;
      }
    }

    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1); // Correct way to update state
      setError(""); // Clear the error message on valid form submission
    }
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

  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedAgreement || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date,
      paidAmount: "1",
      qualification: "",
      applying_for: selectedAgreement || "",
      gender: gender || "",
      fathername: fatherName || "",
      mothername: motherName || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      time:
        time && time !== "00:00:00"
          ? time
          : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      printOnPanCard: selectedParent || "",
      service: "Pancard",
      
      existingpancardnumber: existingPanCardNumber || "",
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
          });
      } else {
        console.error("Error in API Response:", response.data);
      }
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  };
  

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };

  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber)); // Mask the mobile number
    }
    setIsCompleted(true);
  };

  const [selectedAgreement, setSelectedAgreement] = useState("");
  const [existingPanCardNumber, setExistingPanCardNumber] = useState("");

  const handleExistingPanCardChange = (event) => {
    setExistingPanCardNumber(event.target.value);
  };

  const faqs = [
    {
      question: "Why PAN Card is Required?",
      answer:
        "The purpose of having a pan card is strengthened from the fact that from 1 January 2005 it has been made mandatory to quote Permanent Account Number (PAN) on challans for any payments due to Income Tax Department (ITD), while filing returns of income and all correspondence with any income tax authority. Thus Purpose of having Pan Card has become mandatory.",
    },
    {
      question: "Who can apply for PAN?",
      answer:
        "All existing assessees or taxpayers or persons who are required to file a return of income, even on behalf of others, must have a PAN. Any person, who intends to enter into economic or financial transactions where quoting PAN is mandatory, must also have a PAN.",
    },
    {
      question:
        "Who can apply on behalf of minor, lunatic, idiot, mentally retarded, deceased and wards of court?",
      answer: (
        <div>
          <p>
            Section 160 of IT Act, 1961 provides that a minor, lunatic, idiot,
            mentally retarded, deceased, wards of court, and such other persons
            may be represented through a Representative Assessee.
          </p>
          <p>In such cases:</p>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              Details of the minor, lunatic, idiot, mentally retarded, deceased,
              wards of court, etc. should be provided in the PAN application.
            </li>
            <li>
              Details of the Representative Assessee must be provided in item 14
              of the PAN application form.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Is it compulsory to quote PAN on 'return of income'?",
      answer: "Yes, it is compulsory to quote PAN on return of income.",
    },
    {
      question:
        "Do I need to apply for a new PAN when I move from one city to another?",

      answer: (
        <div>
          <p>
            Permanent Account Number (PAN), as the name suggests, is a permanent
            number and does not change.
          </p>
          <p>
            Changing the address though, may change the Assessing Officer. Such
            changes must, therefore, be intimated to ITD so that the PAN
            database of ITD can be updated. One can intimate change in address
            by filling up the form for Request for New PAN Card or/and Changes
            or Correction in PAN data.
          </p>
        </div>
      ),
    },
    {
      question: "Can I have more than one PAN?",
      answer:
        "No. Obtaining/possessing more than one PAN is against the law and may attract a penalty up to 10,000. Therefore, it is advisable not to obtain/possess more than one PAN.",
    },
    {
      question: "What should I do if I have more than one PAN?",
      answer:
        "You may fill and submit PAN Change Request application form by mentioning the PAN which you are using currently on top of the form. All other PAN/s inadvertently allotted to you should be mentioned at item no. 11 of the form and the corresponding PAN card copy/s should be submitted for cancellation along with the form.",
    },
    {
      question: (
        <div>
          <p>
          Is there any third party verification conducted to verify identity and address of PAN applicants along with genuineness of documents submitted by them?
          </p>
       
        </div>
      ),
      answer:
        "Yes. As per procedure prescribed by Income Tax Department, third party verification may be conducted to verify identity and address of PAN applicants along with genuineness of documents submitted by them during PAN application. If found fake, the Income Tax Department may take suitable action.",
        
    },
    {
      question: "What is e-PAN? Is e-PAN a valid proof of allotment of PAN?",
      answer:
        "e-PAN is a digitally signed PAN card issued in electronic form and it is a valid proof of allotment of PAN.",
    },
    {
      question:
        "Is father’s name compulsory for female applicants (including married/divorced/widow)?",
      answer:
        "Yes, all female applicants irrespective of their marital status should write only father’s name in the PAN application form. There is no provision to mention husband's name in the application/online form.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title> Apply Pan Card Online | Online Pan Card Application | form 49A </title>
<meta name="description" content="Click here to apply pan card and get it the earliest,with expertise advice and guidance.New pan(form 49A),Changes or Correction in existing PANData."/>
<meta name="keywords" content="pan card, apply pan card, pan card online, pan card apply online, pan card apply online India, pan card apply bangalore, instant pan card, pan card application, pan card application online, pan application, pan card agents near me, online pan card agents, how to apply for pan card, new pan card application, documents required for pan card, pan card form, pan card application near me, how to get pan card online, pan card site, e pan card, new pan card apply, e pan card apply"/>
<link rel="canonical" href="https://makemydocuments.com/pan-card"/>
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
      <div className="container-pancard"
      
        style={{
          background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          minHeight: "60vh",
          paddingTop: "20px",
          display: "flex",
          
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }} className="pancard-text">
          {/* <h2 style={{marginLeft:"25%", marginBottom:"60px",fontWeight:"bold"}}>Lease Agreement Online</h2> */}
          <p>"Expert Assistance for Quick and Convenient <br className="d-block d-lg-none"/>
       PAN Card Services - Apply Now!"</p>
        </div>
        <div>
          <img
            src={Image30}
            alt="Lease Agreement"
            style={{ maxWidth: "80%", height: "20%", marginTop: "10%" }}
          />
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
                height: "30%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-35%",
                marginLeft: "50%",
              }}
            ></div>
            <div className="text-center mb-5 " style={{marginTop:""}}>
              <div style={{ position: "relative" ,marginTop:"-23%"}}>
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
                height: "30%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-32%",
                marginLeft: "50%",
              }}
            ></div>

            <div className="text-center mb-5" style={{marginTop:'-29%'}}>
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
                height: "30%",
                // margin: '0 auto',
                marginLeft: "49.8%",
                marginTop: "-35%",
                width: "4px",
              }}
            ></div>

            {/* Second Section: How It Works */}
            <div className="text-center mb-5" style={{marginTop:'-24%'}}>
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
                height: "60%",
                // margin: '0 auto',
                marginLeft: "49.8%",
                marginTop: "-55%",
                width: "4px",
              }}
            ></div>

            {/* Third Section */}
            <div className="text-center mb-5" style={{marginTop:'-51%'}}>
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
            className="desktop-margin mb-5"
            // style={{
            //   marginTop: "-105%",
            //   marginLeft: "70%",
            // }}
          >
            <h4 className="desktop-text"
              // style={{
              //   color: "#007BFF",
              //   fontWeight: "bold",
              //   whiteSpace: "nowrap",
              // }}
            >
              Documents Required For New Pan Card 
            </h4>
            <ul className="desktop-ul"
              style={{
                // display: "grid",

                listStyleType: "disc",
                // paddingLeft: "20px",
                // whiteSpace: "nowrap",
                // margin: "20px 0",
              }}
            >
              <li style={{}}>Aadhaar card</li>
            </ul>
          </div>
          <div className="desktop-margin-document" >
            <h4 className="desktop-margin-document-text"
              // style={{
              //   color: "#007BFF",
              //   fontWeight: "bold",
              //   whiteSpace: "nowrap",
              // }}
            >
              Documents Required For Correction/Lost/damage Pan Card
            </h4>
            <ul className="desktop-ul"
              style={{
                listStyleType: "disc",
                // paddingLeft: "20px",
                lineHeight: "1.8",
                // whiteSpace: "nowrap",
              }}
            >
              <li style={{ padding: "0px", rginBottom: "0px" }}>
                Aadhaar card
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Existing Pan copy
              </li>
            </ul>
          </div>
          <div className='desktop-margin-how' >
            <h4 
            className="desktop-text-how"
              // style={{
              //   color: "#007BFF",
              //   fontWeight: "bold",
              //   whiteSpace: "nowrap",
              // }}
            >
              How It Works
            </h4>
            <ul  className="desktop-ul"
              style={{
                listStyleType: "disc",
                // paddingLeft: "20px",
                lineHeight: "1.8",
                // whiteSpace: "nowrap",
              }}
            >
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Register And Pay Online
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Upload Documents
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Online EKYC
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Get Delivered
              </li>
            </ul>
          </div>
          <div className='desktop-margin-time' >
            <h4 className="desktop-text-time"
              // style={{
              //   color: "#007BFF",
              //   fontWeight: "bold",
              //   whiteSpace: "nowrap",
              // }}
            >
              Time Duration
            </h4>
            <ul className="desktop-ul"
              style={{
                listStyleType: "disc",
                // paddingLeft: "20px",
                lineHeight: "1.8",
                // whiteSpace: "nowrap",
              }}
            >
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                15-20 working days (New Physical Pan Card)
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                20-30 working days (Lost/Correction)
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                E- Pan Card Copy 24 - 48 hrs (New Application Only)
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Applicant Will Receive Both E- Pan And Physical Card
              </li>
            </ul>
          </div>
          <div className='desktop-margin-charges' >
            <h4 className="desktop-text-charges"
              // style={{
              //   color: "#007BFF",
              //   fontWeight: "bold",
              //   whiteSpace: "nowrap",
              // }}
            >
              Charges
            </h4>
            <ul className="desktop-ul"
              style={{
                listStyleType: "disc",
                // paddingLeft: "20px",
                lineHeight: "1.8",
                // whiteSpace: "nowrap",
              }}
            >
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                <strong>
                  <del style={{ color: "grey" }}>Rs.399</del> Rs.350
                </strong>
              </li>

              <li style={{ padding: "0px", marginBottom: "0px" }}>
                If you decide to cancel your order after payment, please note
                that a cancellation fee of <strong>Rs. 50</strong> will apply.
              </li>

            </ul>
          </div>
        </div>
       

      </div>

      <div className="pan-card-container d-block d-lg-none" style={{marginTop:'-21%'}}>
  {/* Documents Required For New Pan Card Section */}
  <div className="new-pan-documents-section  row-container">
    <div className="icon-container">
      <div style={{ position: "relative" }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:'55%'}} />
        <img
          src={documentsIcon}
          alt="Documents Icon"
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
      <h4 className="new-pan-title" style={{ textAlign: "left" }}>
        Documents Required For New <br /> Pan Card <span className="required-text">*</span>
      </h4>
      <ul className="new-pan-list" style={{ listStyleType: "disc",}}>
        <li>Aadhaar card</li>
      </ul>
    </div>
  </div>

  {/* Documents Required For Correction/Lost/Damaged Pan Card Section */}
  <div className="correction-pan-documents-section row-container">
    <div className="icon-container">
      <div style={{ position: "relative" }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:'55%'}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            width:'20px',
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="correction-pan-title" style={{ textAlign: "left" }}>
        Documents Required For  <br /> Correction / Lost / Damaged <br/> Pan Card
      </h4>
      <ul className="correction-pan-list" style={{ listStyleType: "disc",}}>
        <li>Aadhaar card</li>
        <li>Existing Pan copy</li>
      </ul>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="how-it-works-section row-container" style={{marginTop:''}}>
    <div className="icon-container">
      <div style={{ position: "relative" }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:'55%'}} />
        <img
          src={howIcon}
          alt="How It Works Icon"
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
      <h4 className="how-it-works-title" style={{ textAlign: "left" , }}>
        How It Works
      </h4>
      <ul className="how-it-works-list" style={{ listStyleType: "disc",}}>
        <li>Register And Pay Online</li>
        <li>Upload Documents</li>
        <li>Online EKYC</li>
        <li>Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Time Duration Section */}
  <div className="time-duration-section row-container" style={{marginTop:''}}>
    <div className="icon-container">
      <div style={{ position: "relative" }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:'55%'}}/>
        <img
          src={TimeIcon}
          alt="Time Duration Icon"
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
      <h4 className="time-duration-title" style={{ textAlign: "left" , marginTop:''}}>
        Time Duration
      </h4>
      <ul className="time-duration-list" style={{ listStyleType: "disc",}}>
        <li>15-20 working days (New Physical Pan Card)</li>
        <li>20-30 working days (Lost/Correction)</li>
        <li>E- Pan Card Copy 24 - 48 hrs (New Application Only)</li>
        <li>Applicant Will Receive Both E- Pan And Physical Card</li>
      </ul>
    </div>
  </div>

  {/* Charges Section */}
  <div className="charges-section row-container">
    <div className="icon-container">
      <div style={{ position: "relative" }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:'55%'}}/>
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
      <h4 className="charges-title" style={{ textAlign: "left" }}>
        Charges
      </h4>
      <ul className="charges-list" style={{ listStyleType: "disc",}}>
        <li>
          <strong>
            <del className="original-price">Rs.399</del> Rs.350
          </strong>
        </li>
        <li>
          If you decide to cancel your order after payment, please note that a
          cancellation fee of <strong>Rs. 50</strong> will apply.
        </li>
      </ul>
    </div>
  </div>
</div>

<br/>
      <div >
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
          <div className="popupstyle-pancard"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              // backgroundColor: "rgba(26, 118, 216, 0.9)",
              // backgroundColor:'#fff',
              backgroundColor: "#126ece",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div  className="popup-pancard"
           
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
                  <div className="stepper-pancard"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="step-container"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        >
                          <button className="button-stepper"
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
                        </div>

                        {index < 4 && (
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
                          Applying for <span style={{ color: "red" }}>*</span>
                        </h5>
                        {error && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error}
                          </p>
                        )}{" "}
                        {/* Show error message */}
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
                          <label style={{ fontSize: "18px", color: "#333" }}>
                            <input
                              type="radio"
                              name="agreementOption"
                              value="newPanCard"
                              onChange={handleAgreementChange}
                              style={{ marginRight: "10px" }}
                            />
                            New Pan Card
                          </label>
                          <label style={{ fontSize: "18px", color: "#333" }}>
                            <input
                              type="radio"
                              name="agreementOption"
                              value="correctionInPanCard"
                              onChange={handleAgreementChange}
                              style={{ marginRight: "10px" }}
                            />
                            Correction in Pan Card
                          </label>
                          <label style={{ fontSize: "18px", color: "#333" }}>
                            <input
                              type="radio"
                              name="agreementOption"
                              value="lostDamagePanCard"
                              onChange={handleAgreementChange}
                              style={{ marginRight: "10px" }}
                            />
                            Lost/Damage Pan Card
                          </label>
                        </div>
                        <br/>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          I Am <span style={{ color: "red" }}>*</span>
                        </h5> */}
                        {error && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error}
                          </p>
                        )}

                        {/* Existing Pan Card Number */}
                        {(selectedAgreement === "correctionInPanCard" ||
                          selectedAgreement === "lostDamagePanCard") && (
                          <div
                            style={{ marginBottom: "33px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="existingPanCardNumber"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Existing Pan Card Number
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="existingPanCardNumber"
                              value={existingPanCardNumber}
                              onChange={handleExistingPanCardChange}
                              style={{
                                width: "100%",
                                padding: "10px",
                                fontSize: "16px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                              }}
                            />
                          </div>
                        )}

                        {/* Applicant's Full Name */}
                        <div
                          style={{ marginBottom: "33px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="fullName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Applicant’s Full Name (Mention Name As Per Aadhaar)
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={handleFullNameChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Gender */}
                        <div
                          style={{
                            marginBottom: "33px",
                            textAlign: "left",
                            gap: "10px",
                          }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "500" }}
                          >
                            Gender <span style={{ color: "red" }}>*</span>
                          </label>
                          <br />
                          <div>
                            <label style={{ marginRight: "20px" }}>
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                onChange={handleGenderChange}
                                style={{ marginRight: "10px" }}
                              />
                              Female
                            </label>
                            <br />
                            <label style={{ marginRight: "20px" }}>
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                onChange={handleGenderChange}
                                style={{ marginRight: "10px" }}
                              />
                              Male
                            </label>
                            <br />
                            <label style={{ marginRight: "20px" }}>
                              <input
                                type="radio"
                                name="gender"
                                value="transgender"
                                onChange={handleGenderChange}
                                style={{ marginRight: "10px" }}
                              />
                              Transgender
                            </label>
                          </div>
                        </div>

                        {/* Date of Birth */}
                        <div
                          style={{ marginBottom: "33px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="dob"
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
                            id="dob"
                            value={dob}
                            onChange={(e) => {
                              const selectedDate = e.target.value; // Get value directly from e.target.value
                              const age = validateAge(selectedDate); // Reuse the validateAge function

                              if (age < 18) {
                                setError(
                                  "Minor applications can’t be processed online"
                                );
                              } else {
                                setError(""); // Clear error if valid
                                handleDobChange(e); // Proceed with your logic
                              }
                            }}
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              appearance: "auto",
                            }}
                            onFocus={(e) => (e.target.type = "date")} // Ensures date input appears properly on iOS
  onBlur={(e) => (e.target.type = "text")} 
                          />
                        </div>

                        {/* Error Message */}
                        {error && (
                          <div
                            style={{
                              color: "red",
                              marginTop: "10px",
                              textAlign: "left",
                            }}
                          >
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
                          Parents Details<span style={{ color: "red" }}>*</span>
                        </p>
                        {error && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error}
                          </p>
                        )}{" "}
                        {/* Show error message */}
                        {/* Father's Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="fathername"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Father's Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="fathername"
                            value={fatherName}
                            onChange={handleFatherNameChange}
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
                        {/* Mother's Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="mothername"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Mother's Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="mothername"
                            value={motherName}
                            onChange={handleMotherNameChange}
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
                        {/* Parent Name Selection */}
                        <div
                          style={{
                            display: "flex",
                            textAlign: "left",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "fit-content",
                            gap: "20px",
                            fontWeight: "500",
                          }}
                        >
                          <label  style={{
                              display: "block",
                            
                              fontSize: "18px",
                              fontWeight: "500",
                            }}>
                            Select the name either father or mother which you
                            may like to print on PAN CARD
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <label style={{ fontSize: "16px", color: "#333" }}>
                            <input
                              type="radio"
                              name="parentName"
                              value="father"
                              onChange={handleParentSelection}
                              style={{ marginRight: "10px" }}
                            />
                            Father
                          </label>
                          <label style={{ fontSize: "16px", color: "#333" }}>
                            <input
                              type="radio"
                              name="parentName"
                              value="mother"
                              onChange={handleParentSelection}
                              style={{ marginRight: "10px" }}
                            />
                            Mother
                          </label>
                        </div>
                        <br />
                        {/* Aadhar Number */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="aadhar"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Please Mention your AADHAR Number
                            {/* <span style={{ color: "red" }}>*</span> */}
                          </label>
                          <input
                            type="text"
                            id="aadhar"
                            value={aadharNumber}
                            onChange={handleAadharChange}
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
                        <br/>
                      </div>
                    
                    )}

                    {currentStep === 4 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Address Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Address
                        </p>
                        {error && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error}
                          </p>
                        )}{" "}
                        {/* Show error message */}
                        {/* House No. and Street Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="houseStreetName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            House No. and Street Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="houseStreetName"
                            placeholder="Enter House No. and Street Name"
                            value={houseStreetName}
                            onChange={handleHouseStreetNameChange}
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
                        {/* Village / Town / City */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="Village"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Village / Town / City{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="Village"
                            placeholder="Enter Village / Town / City"
                            value={villageTownCity}
                            onChange={handleVillageTownCityChange}
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
                        {/* States Dropdown */}
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
                          </div>
                          {/* {selectedStateError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {selectedStateError}
        </p>
      )} */}

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
                            </div>
                          )}
                        </div>
                        {/* Pin Code */}
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
                            maxLength="6" // Limit input to 6 characters
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: `2px solid ${error ? "red" : "#FCA505"}`, // Red border if error
                              borderRadius: "4px",
                            }}
                          />
                          {error && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {error}
                            </p>
                          )}
                        </div>
                        <br/>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Contact Details<span style={{ color: "red" }}>*</span>
                        </p>
                        {error && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error}
                          </p>
                        )}

                        <div
                          style={{
                            marginBottom: "20px",
                            textAlign: "left",
                          }}
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
                            Mobile Number{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="mobilenumber"
                            placeholder="Enter Mobile Number"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
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

                        {/* Email Id */}
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
                            Email Id <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="emailid"
                            placeholder="Enter Email Id"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: emailError
                                ? "2px solid red"
                                : "2px solid #FCA505", // Highlight border on error
                              borderRadius: "4px",
                            }}
                          />
                          {emailError && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "5px",
                              }}
                            >
                              {emailError}
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

                    {currentStep < 5 ? (
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
                      //     const mobileRegex = /^[0-9]{10}$/;
                      //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                      //     // Perform validation for Step 5
                      //     if (!mobileNumber) {
                      //       setError("Please enter your mobile number.");
                      //       return;
                      //     }
                      //     if (!mobileRegex.test(mobileNumber)) {
                      //       setError(
                      //         "Please enter a valid 10-digit mobile number."
                      //       );
                      //       return;
                      //     }
                      //     if (!emailId) {
                      //       setError("Please enter your email address.");
                      //       return;
                      //     }
                      //     if (!emailRegex.test(emailId)) {
                      //       setError("Please enter a valid email address.");
                      //       return;
                      //     }

                      //     handleSendOtp();
                      //     setShowOtpSection(true);
                      //     setError("");
                      //     setIsCompleted(true);
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
      const mobileRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Perform validation for Step 5
      if (!mobileNumber) {
        setError("Please enter your mobile number.");
        return;
      }
      if (!mobileRegex.test(mobileNumber)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }
      if (!emailId) {
        setError("Please enter your email address.");
        return;
      }
      if (!emailRegex.test(emailId)) {
        setError("Please enter a valid email address.");
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
    style={{color:'#000', fontWeight:'bold'}}
  >
    Verify
  </button>
</div>

                    </div>
                  ) : (
                    <>
                 {location.pathname === "/pan-card/proceed-to-pay" && (
                    <>
                      {paymentSuccess ? (
                        <div>
                          <h2 style={styles.successMessage}>
                            Payment Successful!
                          </h2>
                          <h3 style={styles.thankYouMessage}>
                            Thank You for Your Submission!
                          </h3>
                        </div>
                      ) : (
                        <div>
                        <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
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
                            <label style={styles.label}>Mobile Number:</label>
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
                              value={userDetails?.orderid || "N/A"}
                              readOnly
                              style={styles.input}
                            />
                          </div>
                          <div style={styles.inputGroup}>
                            <label style={styles.label}>Services:</label>
                            <input
                              type="text"
                              value={userDetails?.services || "Pancard"}
                              readOnly
                              style={styles.input}
                            />
                          </div>
                          <div style={styles.inputGroup}>
                            <label style={styles.label}>Payment Amount:</label>
                            <input
                              type="text"
                              value={paidAmount || "₹0"}
                              readOnly
                              style={styles.input}
                            />
                          </div>
                        </div>
                        {/* <button
                          onClick={handleProceedToPay}
                          style={styles.proceedButton}
                          disabled={isLoading} // Disable button while loading
                        >
                          {isLoading ? "Loading..." : "Proceed to Pay"}
                        </button> */}
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
                    textAlign:'left',
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
                    textAlign:'left',
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
        <div className="title-text-pancard">
          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            Welcome to Make My Documents, your one-stop destination for all your
            PAN card needs. A PAN card is an essential document that serves as a
            unique identification number for individuals and businesses in
            India. It is required for various financial transactions and other
            purposes.
          </p>

          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            At Make My Douments, we understand the importance of having a PAN
            card, which is why we offer a hassle-free solution to help you apply
            for your PAN card quickly and easily. Our online PAN card
            application process is simple and user-friendly, allowing you to
            apply for a new PAN card, update your existing PAN card, or apply
            for a duplicate PAN card.
          </p>

          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            Our team of experts will guide you through every step of the
            process, ensuring that your PAN card application is completed
            accurately and efficiently. We provide PAN card application services
            for individuals, businesses, and NRIs. You can also check the status
            of your PAN card application online.
          </p>

          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            We also offer a range of additional PAN card services, including PAN
            card corrections, lost or damaged PAN card replacements, PAN card
            verification, and PAN card updates. Our services are competitively
            priced, and our fast turnaround times mean that you can have your
            PAN card in hand as soon as possible.
          </p>

          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            Applying for a PAN card has never been easier. You can apply for PAN
            card online through our website, which offers a PAN card online
            application form that is easy to fill out. We also provide a PAN
            card form that can be downloaded for offline applications. Our team
            will take care of the rest and keep you updated on the PAN card
            status.
          </p>

          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            The PAN card fees are reasonable and our PAN card services are
            reliable. We ensure that our PAN card services cater to the needs of
            individuals, businesses.
          </p>

          <p style={{ fontFamily: "Poppins, sans-serif", textAlign: "left" }}>
            If you have any questions about our PAN card services, our team is
            always ready to assist you. Contact us today to learn more about our
            PAN card services, fees, and to schedule an appointment with one of
            our experts. We look forward to helping you obtain your PAN card and
            enjoy a stress-free experience.
          </p>
        </div>
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
export default Pancard;
