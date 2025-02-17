import React, { useState, useEffect } from "react";
import Image30 from "../../images/msme-image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import "../msme/msme.css"
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import howIcon from "../../images/how.svg";
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

const Msme = () => {
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
  const [errors, setErrors] = useState({});
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
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
            navigate("/msme-registration-form"); // Update the URL
          };
        
          // Function to close the popup and revert the URL
          const closePopup = () => {
            setShowPopup(false);
            navigate("/msme-registration"); // Revert the URL
            setCurrentStep(1);
            setIsCompleted(false);
          };
        
          React.useEffect(() => {
            // Automatically show the popup if the URL matches /two-wheeler-insurance-info
            if (location.pathname === "/msme-registration-form" || location.pathname === "/msme-registration/proceed-to-pay") {
              setShowPopup(true);
            } else {
              setShowPopup(false);
            }
          }, [location.pathname]);
  const [registrationNumber, setSeletedRegistrationNumber] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleAadharChange = (e) => setAadhaarNumber(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const [adharnumber, setAadhaarNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [organisationType, setOrganisationType] = useState("");
  const [dateOfIncorporation, setDateOfIncorporation] = useState("");
  const [panNumber, setPanNumber] = useState("");

  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return "";
    const firstTwo = number.slice(0, 2);
    const lastDigit = number.slice(-1);
    const masked = `${firstTwo}******${lastDigit}`;
    return masked;
  };
  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Only allow numbers and restrict the input to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);  // Update pincode state
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate pincode is exactly 6 digits
    if (!pincode || pincode.length !== 6) {
      newErrors.pincode = "Pin Code must be exactly 6 digits.";
    }

    setErrors(newErrors);
  };

  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  const validateStep1 = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = "Name is required.";
    }
    if (!adharnumber.trim()) {
      errors.adharnumber = "Aadhaar number is required.";
    } else if (!/^\d{12}$/.test(adharnumber)) {
      errors.adharnumber = "Aadhaar number must be 12 digits.";
    }
    if (!businessName.trim()) {
      errors.businessName = "Name of Enterprise/Business is required.";
    }
    if (!dateOfIncorporation) {
      errors.dateOfIncorporation =
        "Date of Incorporation / Registration is required.";
    } else if (new Date(dateOfIncorporation) > new Date()) {
      errors.dateOfIncorporation =
        "Incorporation date cannot be in the future.";
    }
    if (!organisationType.trim()) {
      errors.organisationType = "Type of Organisation is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};

    if (!villageTownCity.trim()) {
      errors.villageTownCity = "Address is required.";
    }
    if (!selectedState.trim()) {
      errors.selectedState = "State is required.";
    }
    if (!selectedDistrict.trim()) {
      errors.selectedDistrict = "District is required.";
    }
    if (!pincode.trim()) {
      errors.pincode = "Pin code is required.";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin code must be 6 digits.";
    }
    if (!mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits.";
    }
    if (!emailId.trim()) {
      errors.emailId = "Email ID is required.";
    } else if (!/\S+@\S+\.\S+/.test(emailId)) {
      errors.emailId = "Email ID is invalid.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (currentStep === 1 && validateStep1()) {
      handleNext(); // Proceed to the next step (Step 2)
    } else if (currentStep === 2 && validateStep2()) {
      handleSendOtp();
      setShowOtpSection(true);
      setError("");
      setIsCompleted(true);
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
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



  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };

  const [userDetails, setUserDetails] = useState(null); // Holds user details
  const [orderid, setOrderID] = useState();
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
          SERVICE: "MSME",
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
      
    //  useEffect(() => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth',
    //     });
    //   }, []); 
      
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
          navigate("/msme-registration/proceed-to-pay");
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




  const [selectedDistrict, setSelectedDistrict] = useState("");

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
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };
  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid ||"",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedOption || "",
      address: villageTownCity || "", 
      district: selectedDistrict || "",
      businessName : businessName || "",
      organisationType : organisationType || "",
      dateOfIncorporation : dateOfIncorporation || "",
      date: date,
      dob: dob || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "1",
      // qualification: "",
      adharnumber: adharnumber || "N/A",
      applyingfor: "",
      panNumber : panNumber || "",
      gender: selectedGender || "",
      // fathername: fatherName || "",
      // mothername: motherName || "",
      pincode: pincode || "",
     
      pancard: "",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "MSME",
     
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
      question: "Who are eligible for MSME Registration?",
      answer: (
        <div>
          <p>
            Any person who intends to establish a micro, small, medium
            enterprise may apply online for MSME/Udyog Aadhaar registration.
            Someone who belongs to Proprietorship, Hindu Undivided Family (HUF),
            One Person Company (OPC), Partnership Business, Limited Liability
            Partnership (LLP), Private Limited or Limited Company, Co-operative
            Societies or any other group of individuals can easily apply for
            Micro, Small & Medium Enterprise.
          </p>
          <p style={{ marginTop: "10px" }}>
            The purpose to include all wide categories of enterprises for
            registration under this Act, is to ensure that the benefits offered
            by Government reaches to large portion of Society.
          </p>
        </div>
      ),
    },
    {
      question: "What are the benefits Of MSME?",
      answer: (
        <div>
          <ul style={{ listStyleType: "disc", marginTop: "10px" }}>
            <li>
              MSME registration helps new entrepreneurs, traders, and business
              owners in getting loans at low interest rates.
            </li>
            <li>MSME registration helps in getting government tenders.</li>
            <li>
              Under bank loan, 15% import subsidy on fully automatic machinery.
            </li>
            <li>
              Becomes easy to get licenses, approvals, and registrations,
              irrespective of the field of business.
            </li>
            <li>Compensation of ISO certificate expenditure.</li>
            <li>
              Registered MSMEs get tariff subsidies and tax and capital
              subsidies.
            </li>
            <li>Get exemption under Direct Tax Laws.</li>
            <li>Concession in electricity bills.</li>
            <li>
              Protection against payments (Delayed payments) through MSME
              Samadhan.
            </li>
            <li>Technology and quality up-gradation support to MSMEs.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How Wll I Get MSME Certificate ?",
      answer:
        "Soft copy will be shared to your registered mail id. No physical copy of MSME Certificate will be issued.",
    },
    {
      question:
        "What is the difference between Udyam Registration and MSME/Udyog Aadhar?",
      answer:
        "Udyam Registration is MSME registration to start business under Ministry of Micro, Small and Medium Enterprises (MoMSME) approved by Government of India. Whereas MSME/Udyog Aadhaar is a 12-digit Unique Identification Number (UIN) provided by the MoMSME for Small and Medium Enterprises (SMEs).",
    },
    {
      question: "Is Aadhaar Number mandatory for online MSME Registration?",
      answer:
        "Yes Aadhaar Number is mandatory for issuance of MSME Certificate",
    },
    {
      question: "Is there any renewal provision of MSME registration?",
      answer:
        "Registration Number is a permanent identity number and there will be no need for renewal of Registration.",
    },
    {
      question: "What are the chances of rejection of Online MSME Application?",
      answer:
        "The application will be approved on the basis of the information provided by the applicant.",
    },
    {
      question: "Can the MSE borrowers get collateral free loans from banks?",
      answer:
        "In terms of RBI circular, banks are mandated not to accept collateral security in the case of loans upto Rs 10 lakh extended to units in the MSE sector. Further banks may, on the basis of good track record and financial position of MSE units, increase the limit of dispensation of collateral requirement for loans up to Rs.25 lakh with the approval of the appropriate authority.",
    },
    {
      question:
        "Can MSME borrowers get collateral-free loans from financial institutions?",
      answer:
        "MSME borrowers get collateral-free loans from financial institutions",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title> Apply MSME Certificate Online | Online MSME Registration | Udyam Certificate </title>
<meta name="description" content="Click here to apply for MSME Certificate and get it at the earliest with expert advice and guidance. MSME Registration (Udyam Certificate) made simple and hassle-free."/>
<meta name="keywords" content="MSME certificate, apply MSME certificate, MSME registration, MSME certificate online, MSME certificate application, Udyam registration, Udyam certificate, online MSME registration India, MSME application, MSME agents near me, how to apply for MSME certificate, MSME registration form, MSME registration near me, MSME registration portal, documents required for MSME certificate, MSME certificate process, MSME site, new MSME certificate apply, Udyam certificate application, online Udyam registration"/>
<link rel="canonical" href="https://makemydocuments.com/msme-certificate"/>
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
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
      <div className="container-msme"
        style={{
          background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          minHeight: "60vh",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          marginTop: "4%",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}>
          <h2
            // style={{
            //   marginLeft: "25%",
            //   marginBottom: "60px",
            //   fontWeight: "bold",
            // }}
          >
            MSME registration Online
          </h2>

          {/* Form section */}
        </div>

        <div>
          <img
            src={Image30}
            alt="Lease Agreement"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div
        className="content-section"
        style={{
          backgroundColor: "#fffff",
          padding: "30px 15px",
          borderRadius: "10px",
          margin: "3% auto",
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
                height: "65%",
                // margin: '0 auto',
                width: "4px",
                marginTop: "-65%",
                marginLeft: "50%",
              }}
            ></div>

            {/* Second Section: How It Works */}
            <div className="text-center mb-5" style={{marginTop:'-31%'}}>
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
              <div style={{ position: "relative" , marginTop:'-31%'}}>
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
              marginTop: "-90%",
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
              Documents Required For MSME Registration
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
              <li style={{ fontWeight: "" }}>Aadhar Card</li>
              <li style={{ fontWeight: "" }}>Pan Card</li>
            </ul>
          </div>
          <div style={{ marginLeft: "72%", marginTop: "30%" }}>
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
                listStyleType: "disc",
                paddingLeft: "20px",
                lineHeight: "1.8",
                whiteSpace: "nowrap",
              }}
            >
              <li style={{ padding: "0", marginBottom: "0" }}>
                Register Online
              </li>
              <li style={{ padding: "0", marginBottom: "0" }}>
                Upload Documents
              </li>
              <li style={{ padding: "0", marginBottom: "0" }}>Payment</li>
              <li style={{ padding: "0", marginBottom: "0" }}>Get Delivered</li>
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
              <li style={{ padding: "0", marginBottom: "0" }}>
                1-2 working days
              </li>
            </ul>
          </div>
          <div style={{ marginLeft: "72%", marginTop: "40%" }}>
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
                listStyleType: "disc",
                paddingLeft: "20px",
                lineHeight: "1.8",
                whiteSpace: "nowrap",
              }}
            >
              <li style={{ padding: "0", marginBottom: "0" }}>
                <strong>Rs 500</strong>
              </li>
              <li style={{ padding: "0", marginBottom: "0" }}>
                <strong>Rs 99</strong> as booking/consulting charge. Need to pay
                while submitting online form
              </li>
              {/* <li style={{ fontWeight: 'bold', marginBottom: '10px' }}>Note: Additional charges for stamp paper</li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="msme-container d-block d-lg-none" style={{marginTop:'-18%'}}>
  {/* Documents Section */}
  <div className="msme-section documents-section row-container ">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>
        Documents Required For MSME <br />Registration
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li>Aadhar Card</li>
        <li>Pan Card</li>
      </ul>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="msme-section how-it-works-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={howIcon}
          alt="How It Works Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>How It Works</h4>
      <ul className="steps-list" style={{ listStyleType: "disc",}}>
        <li>Register Online</li>
        <li>Upload Documents</li>
        <li>Payment</li>
        <li>Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Time Duration Section */}
  <div className="msme-section time-duration-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={TimeIcon}
          alt="Time Duration Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>Time Duration</h4>
      <ul className="time-list" style={{ listStyleType: "disc",}}>
        <li>1-2 working days</li>
      </ul>
    </div>
  </div>

  {/* Charges Section */}
  <div className="msme-section charges-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={Price}
          alt="Charges Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>Charges</h4>
      <ul className="charges-list" style={{ listStyleType: "disc",}}>
        <li><strong>Rs 500</strong></li>
        <li>
          <strong>Rs 99</strong> as booking/consulting charge. Need to pay while submitting online form
        </li>
      </ul>
    </div>
  </div>
</div>

<br/>
      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "-2%" }}>
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
          <div className="popupstyle-msme"
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
            <div className="popup-msme"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   marginTop: "-5%",
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
                  <div className="stepper-msme"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    {Array.from({ length: 2 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="step-container"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        > 
                          <button className="button-msme-stepper"
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
                        {index < 1 && (
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
                     <div className="application-form" style={{ textAlign: "center" }}>
                     <h4 className="application-title" style={{ color: "#1A76D8", fontWeight: "600" }}>
                       Application
                     </h4>
                   
                     <div className="form-row">
                       <div className="form-group">
                         <label>Name<span style={{ color: "red" }}>*</span></label>
                         <input
                           type="text"
                           value={fullName}
                           onChange={handleFullNameChange}
                           placeholder="Enter your name"
                         />
                         {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                       </div>
                       <div className="form-group">
                         <label>
                           Aadhaar Number<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="text"
                           value={adharnumber}
                           onChange={handleAadharChange}
                           placeholder="Enter your Aadhaar number"
                         />
                         {errors.adharnumber && <p className="error-message">{errors.adharnumber}</p>}
                       </div>
                     </div>
                   
                     <div className="form-row">
                       <div className="form-group">
                         <label>
                           Name of Enterprise/Business<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="text"
                           value={businessName}
                           onChange={(e) => setBusinessName(e.target.value)}
                           placeholder="Enter your Name of Enterprise/Business"
                         />
                         {errors.businessName && <p className="error-message">{errors.businessName}</p>}
                       </div>
                       <div className="form-group">
                         <label>
                           Type of Organisation<span style={{ color: "red" }}>*</span>
                         </label>
                         <select value={organisationType} onChange={(e) => setOrganisationType(e.target.value)}>
                           <option value="">--Select Organisation--</option>
                           <option value="Proprietorship">Proprietorship</option>
                           <option value="Private Limited">Private Limited</option>
                           <option value="Public Limited">Public Limited</option>
                           <option value="Partnership Firm">Partnership Firm</option>
                           <option value="Limited Liability Partnership">
                             Limited Liability Partnership
                           </option>
                           <option value="Trust">Trust</option>
                           <option value="Society">Society</option>
                           <option value="Hindu Undivided Family">Hindu Undivided Family</option>
                           <option value="Co-operative">Co-operative</option>
                           <option value="Other">Other</option>
                         </select>
                         {errors.organisationType && <p className="error-message">{errors.organisationType}</p>}
                       </div>
                     </div>
                   
                     <div className="form-row">
                       <div className="form-group">
                         <label>
                           Date of Incorporation / Registration<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="date"
                           value={dateOfIncorporation}
                           onChange={(e) => setDateOfIncorporation(e.target.value)}
                         />
                         {errors.dateOfIncorporation && <p className="error-message">{errors.dateOfIncorporation}</p>}
                       </div>
                   
                       <div className="form-group" style={{marginLeft:''}}>
                         <label>
                           Business PAN Number<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="text"
                           value={panNumber}
                           onChange={(e) => setPanNumber(e.target.value)}
                           placeholder="Enter your Business PAN Number"
                         />
                         {errors.panNumber && <p className="error-message">{errors.panNumber}</p>}
                       </div>
                       <br/>
                     </div>
                     <br/>
                   </div>
                   
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* <h4 style={{ color: "#1A76D8", fontWeight: "600" }}>Application</h4> */}

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
                            Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={(e) => setVillageTownCity(e.target.value)}
                            placeholder="Enter your address"
                            style={{
                              width: "100%",
                              height: "80px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {errors.villageTownCity && (
                            <p style={{ color: "red" }}>
                              {errors.villageTownCity}
                            </p>
                          )}
                        </div>

                        {/* State and District */}

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
                                border: "2px solid #FCA505",
                              }}
                            >
                              <option value="">Select State</option>
                              {stateData.map((stateObj, index) => (
                                <option key={index} value={stateObj.state}>
                                  {stateObj.state}
                                </option>
                              ))}
                            </select>
                            {errors.selectedState && (
                              <p style={{ color: "red" }}>
                                {errors.selectedState}
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
                                  border: "2px solid #FCA505",
                                }}
                              >
                                <option value="">Select District</option>
                                {districts.map((district, index) => (
                                  <option key={index} value={district}>
                                    {district}
                                  </option>
                                ))}
                              </select>
                              {errors.selectedDistrict && (
                                <p style={{ color: "red" }}>
                                  {errors.selectedDistrict}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

                        <br></br>
                        {/* Name, Mobile Number, and Email */}
                        <div className="form-row">
  <div className="form-group">
    <label className="form-label">
      Pincode <span style={{ color: "red" }}>*</span>
    </label>
    <input
      type="text"
      placeholder="Enter your Pincode"
      value={pincode}
      onChange={handlePincodeChange} // Handle the input change
      onBlur={validateForm} // Validate when input loses focus
      className="form-input"
    />
    {errors.pincode && <p className="error-message">{errors.pincode}</p>}
  </div>

  <div className="form-group">
    <label className="form-label">
      Mobile Number <span style={{ color: "red" }}>*</span>
    </label>
    <input
      type="text"
      id="mobileNumber"
      value={mobileNumber}
      onChange={handleMobileNumberChange}
      placeholder="Enter your mobile number"
      className="form-input"
    />
    {errors.mobileNumber && (
      <p className="error-message">{errors.mobileNumber}</p>
    )}
  </div>

  <div className="form-group">
    <label className="form-label">
      Email ID <span style={{ color: "red" }}>*</span>
    </label>
    <input
      value={emailId}
      onChange={handleEmailIdChange}
      type="email"
      placeholder="Enter your email"
      className="form-input"
    />
    {errors.emailId && <p className="error-message">{errors.emailId}</p>}
  </div>
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
                    {currentStep < 2 ? (
                      // <button
                      //   onClick={handleNext}
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
  <button className="next-button" onClick={handleNext}>
    Next
  </button>
</div>

                    ) : (
                      // <button
                      //   onClick={handleSubmit}
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
  <button className="submit-button" onClick={handleSubmit}>
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
    Verfiy
  </button>
</div>
      </div>
          ) : (
            <>
                 {location.pathname === "/msme-registration/proceed-to-pay" && (
            <>
            {paymentSuccess ? ( // Conditionally render success message
              <div>
                <h2 style={styles.successMessage}>Payment Successful!</h2>
                <h3 style={styles.thankYouMessage}>Thank You for Your Submission!</h3>
              </div>
            ) : (
              <div>
                <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
                <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name, Mobile Number, Order ID, Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Name", value: userDetails?.name || "N/A" },
      { label: "Mobile Number", value: userDetails?.mobilenumber || "N/A" },
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value:  "MSME" }, // Allows dynamic service selection
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
    style={{color:'#000', fontWeight:'bold'}}
    className="proceed-button"
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

export default Msme;
