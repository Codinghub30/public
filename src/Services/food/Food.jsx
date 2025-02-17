import React, { useState , useEffect} from 'react';
import Image30 from '../../images/food-image.svg'; 
import circleIcon from '../../images/circle1.svg'; 
import documentsIcon from '../../images/documents.svg'; 
import TimeIcon from '../../images/Time.svg'; 
import Price from '../../images/Price Tag.svg';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import "../food/food.css";
import { FaArrowLeft } from 'react-icons/fa';
import howIcon from '../../images/how.svg';

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
const Food = () => {
       const navigate = useNavigate();
          const location = useLocation();
  
    const [current, setCurrent] = useState(1); 

   const openPopup = () => {
          setShowPopup(true);
          navigate("/food-license-form"); // Update the URL
        };
      
        // Function to close the popup and revert the URL
        const closePopup = () => {
          setShowPopup(false);
          navigate("/food-license"); // Revert the URL
          setCurrentStep(1);
          setIsCompleted(false);
        };
      
        React.useEffect(() => {
          // Automatically show the popup if the URL matches /two-wheeler-insurance-info
          if (location.pathname === "/food-license-form" ||  location.pathname === "/food-license/proceed-to-pay") {
            setShowPopup(true);
          } else {
            setShowPopup(false);
          }
        }, [location.pathname]);

      const [openIndex, setOpenIndex] = useState(null); 
        const [showPopup, setShowPopup] = useState(false);
        const [currentStep, setCurrentStep] = useState(1);
        const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX"); 
   const [selectedDistrict, setSelectedDistrict] = useState("");
        const [isCompleted, setIsCompleted] = useState(false);
        const [mobileNumber, setMobileNumber] = useState('');
        const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
      const [fullName, setFullName] = useState('');
      const [emailId, setEmailId] = useState('');
      const [selectedOption, setSelectedOption] = useState('');
      const [houseStreetName, setHouseStreetName] = useState('');
      const [villageTownCity, setVillageTownCity] = useState('');
      const [dob, setDob] = useState('');
      const [selectedGender, setSelectedGender] = useState('');
      const [selectedAffidavit, setSelectedAffidavit] = useState('');
      const [pincode, setPincode] = useState('');
      const [aadharNumber, setAadharNumber] = useState('');
      const [leadId,setLeadId]=useState();
      const [isLoading, setIsLoading] = useState(false);
      const [selectedState, setSelectedState] = useState('');
      const handlePincode = (e) => {
        const value = e.target.value;
    
        // Allow only numeric input and restrict to 6 digits
        if (/^\d{0,6}$/.test(value)) {
          setPincode(value);  // Update the pincode value in the state
        }
      };
      const selectedStateData = stateData.find(
        (stateObj) => stateObj.state === selectedState
      );
      const districts = selectedStateData ? selectedStateData.districts : [];
      const [otp, setOtp] = useState(["", "", "", ""]);
      const [resendCountdown, setResendCountdown] = useState(30); 
      const [isResending, setIsResending] = useState(false);
    
      const [error, setError] = useState("");
      const [showOtpSection, setShowOtpSection] = useState(true); 
      
      const [registrationNumber, setSeletedRegistrationNumber]=useState('');
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      
        useEffect(() => {
          const handleResize = () => setIsMobile(window.innerWidth <= 768);
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
          const handleFullNameChange = (event) => {
            setFullName(event.target.value);
          };
          const handleEmailIdChange = (e) => setEmailId(e.target.value);
          const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
          const handleStateChange = (e) => setSelectedState(e.target.value);

          const handleRegistrationNumber =(e) => setSeletedRegistrationNumber(e.target.value);
      
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
          setMaskedNumber(getMaskedMobileNumber(mobileNumber)); 
        }
        setIsCompleted(true);
      };

      const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
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

      const submitDataToAPI = async () => {
        const data = {
          orderid:orderid || "",
          name: fullName || "", 
          mobilenumber: mobileNumber || "", 
          email: emailId || "",
          services: selectedAffidavit || "", 
          address: villageTownCity || "", 
          district: selectedDistrict || "",
          date: date,
          dob: dob || "",
          insurance_registration_number: registrationNumber || "",
          paidAmount: "1",
          // paymentStatus: paymentStatus || "",
          // qualification: "", 
          applyingfor:"",
          gender: selectedGender || "", 
          // fathername: fatherName || "", 
          // mothername: motherName || "", 
          pincode: pincode || "", 
          adharnumber: aadharNumber || "", 
          pancard: "", 
          time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
          comment: "", 
          status: "",
          service: "Food License(FSSAI)",
       
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
    
      const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
    
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
  
      const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
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
              navigate("/food-license/proceed-to-pay");
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


 
    

    const generateOrderId = () => {
      return `ORD${Date.now()}`;
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
        SERVICE: "Food License(FSSAI)",
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

  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    emailId: "",
    address: "",
    service: "Food License (FSSAI)",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div style={{overflow:'hidden'}}>
          <div  className='container-food'
          style={{
    background: 'linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)',
    minHeight: '87vh',
    paddingTop: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px'
}}>
    <div style={{ flex: 1, fontWeight: 'bold' }} className='food-text-content'>
        <h2 >
        Apply FSSAI Food Safety License Registration
        </h2>
        
        {/* Form section */}
      
    </div>
    
    <div>
        <img src={Image30} alt="Lease Agreement" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
</div>



            <div
                className="content-section"
                style={{
                    backgroundColor: '#fffff',
                    padding: '30px 15px',
                    borderRadius: '10px',
                    margin: '3% auto',
                    marginRight:'72%',
                }}
            >
                <div className="row justify-content-center">
                    {/* Main Column for Vertical Layout */}
                    <div className="col-12 col-md-8 position-relative d-none d-lg-block">
                        {/* First Section: Documents */}
                        <div className="text-center mb-5">
                            <div style={{ position: 'relative' }}>
                                <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                                <img
                                    src={documentsIcon}
                                    alt="Documents Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '63%',
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
                                height: '60%',
                                // margin: '0 auto',
                                width: '4px',
                                marginTop:'-40%',
                                marginLeft:'50%'
                            }}
                        ></div>

                        {/* Second Section: How It Works */}
                        <div className="text-center mb-5" style={{marginTop:'-32%'}}>
                            <div style={{ position: 'relative' }}>
                                <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                                <img
                                    src={howIcon}
                                    alt="How It Works Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '63%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div>
              
                        </div>
                        <div
                            style={{
                                borderLeft: '3px solid #007BFF',
                                height: '60%',
                                // margin: '0 auto',
                                width: '4px',
                                marginTop:'-43%',
                                marginLeft:'50%'
                            }}
                        ></div>

<div className="text-center mb-5">
                            <div style={{ position: 'relative' , marginTop:'-27%'}}>
                                <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                                <img
                                    src={TimeIcon}
                                    alt="How It Works Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '63%',
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
                                height: '55%',
                                // margin: '0 auto',
                                marginLeft:'49.8%',
                                marginTop:'-48%',
                                width: '4px',
                            }}
                        ></div>

                        {/* Third Section */}
                        <div className="text-center mb-5" style={{marginTop:'-29%'}}>
                            <div style={{ position: 'relative' }}>
                                <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                                <img
                                    src={Price}
                                    alt="How It Works Icon"
                                    style={{
                                        position: 'absolute',
                                        top: '63%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            </div>
              
                        </div>
                       
            
                    </div>
                </div>
             <div className='d-none d-lg-block'>
             
             <div
    className="mb-5"
    style={{
        marginTop: '-90%',
        marginLeft: '70%',
    }}
>
    <h4
        style={{
            color: '#007BFF',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
        }}
    >
        Documents Required Food License (Soft Copy)
    </h4>
    <ul
        style={{
            display: 'grid',
            listStyleType: 'disc', 
            paddingLeft: '20px',
            whiteSpace: 'nowrap',
            margin: '20px 0',
        }}
    >
        <li style={{ }}>Aadhar card</li>
        <li style={{  }}>Pan card</li>
        <li style={{  }}>One Passport Size Photo</li>
        <li style={{ fontWeight: '' }}>Fssai declaration form</li>
        <li style={{ fontWeight: '' }}>Nature of business details</li>
    </ul>
</div>

                <div style={{marginLeft:'72%',marginTop:'-5%'}}>
                    <h4 style={{ color: '#007BFF', fontWeight: 'bold',whiteSpace:'nowrap' }}>How It Works</h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8', whiteSpace: 'nowrap' }}>
  <li style={{ padding: '0', marginBottom: '0' }}>Register Online</li>
  <li style={{ padding: '0', marginBottom: '0' }}>Upload Documents</li>
  <li style={{ padding: '0', marginBottom: '0' }}>Payment</li>
  <li style={{ padding: '0', marginBottom: '0' }}>Get Delivered</li>
</ul>
                </div>
                <div style={{marginLeft:'72%',marginTop:'25%'}}>
                    <h4 style={{ color: '#007BFF', fontWeight: 'bold',whiteSpace:'nowrap' }}>Time Duration</h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' , whiteSpace:'nowrap' }}>
                    <li style={{ fontWeight: '', marginBottom: '10px' }}>1-2 working days</li>
                    </ul>
                </div>
                <div style={{marginLeft:'72%',marginTop:'37%'}}>
                    <h4 style={{ color: '#007BFF', fontWeight: 'bold',whiteSpace:'nowrap' }}>Charges</h4>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' , whiteSpace:'nowrap' }}>
                    <li style={{  padding: '0', marginBottom: '0' }}><strong>Rs 1200</strong></li>
        <li style={{  padding: '0', marginBottom: '0' }}><strong>Rs 99</strong> as booking/consulting charge. Need to pay while submitting online form</li>
        {/* <li style={{ fontWeight: 'bold', marginBottom: '10px' }}>Note: Additional charges for stamp paper</li> */}
       
                    </ul>
                </div>
                </div>
            </div>
            <div>
            <div className="food-license-container d-block d-lg-none"  style={{marginTop:'-37%'}}>
  {/* Documents Required Section */}
  <div className="food-license-section row-container">
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
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Documents Required Food <br /> License (Soft Copy)
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li>Aadhar card</li>
        <li>Pan card</li>
        <li>One Passport Size Photo</li>
        <li>FSSAI declaration form</li>
        <li>Nature of business details</li>
      </ul>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="how-it-works-section row-container">
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
      <h4 className="section-title" style={{ textAlign: "left" }}>How It Works</h4>
      <ul className="steps-list" style={{ listStyleType: "disc",}}>
        <li>Register Online</li>
        <li>Upload Documents</li>
        <li>Payment</li>
        <li>Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Time Duration Section */}
  <div className="time-duration-section row-container">
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
      <h4 className="section-title" style={{ textAlign: "left" }}>Time Duration</h4>
      <ul className="time-list" style={{ listStyleType: "disc",}}>
        <li>1-2 working days</li>
      </ul>
    </div>
  </div>

  {/* Charges Section */}
  <div className="charges-section row-container">
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
      <h4 className="section-title" style={{ textAlign: "left" }}>Charges</h4>
      <ul className="charges-list" style={{ listStyleType: "disc",}}>
        <li>
          <strong>Rs 1200</strong>
        </li>
        <li>
          <strong>Rs 99</strong> as booking/consulting charge. Need to pay while submitting online form
        </li>
      </ul>
    </div>
  </div>
  <br/>
</div>


   
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
         marginRight:"40%",
         marginTop:"-30%",
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
     <div   className="popupstyle-food"
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
       <div className="popup-food"
        //  style={{
        //    backgroundColor: "#FFFFFF",
        //    padding: "40px",
        //    borderRadius: "28px",
        //    width: "70%",
        //    maxHeight: "90%", // Maximum height of the popup
        //    overflowY: "auto", // Enable scrolling if content overflows
        //    textAlign: "center",
        //    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        //  }}
       >
         {/* Stepper */}
       

         {!isCompleted ? (
           <>
   <div  className="stepper-food" style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
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
        <button className="button-food-stepper"
          onClick={() => setCurrentStep(index + 1)} // Make step clickable
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: currentStep >= index + 1 ? "#4285F4" : "#ccc",
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


      {index < 1 && (
        <div
          style={{
            height: "2px",
            flex: 1,
            backgroundColor: currentStep > index + 1 ? "#4285F4" : "#ccc",
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
          <h4 style={{ color: "#1A76D8", fontWeight: "600" }}>Application</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "20px",
              textAlign: "start",
            }}
          >
            <div style={{ width: "45%" }}>
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
               value={fullName}
                onChange={handleFullNameChange}
                placeholder=""
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: "2px solid #FCA505",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div style={{ width: "45%" }}>
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                  whiteSpace:'nowrap'
                }}
              >
                Mobile Number<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="mobileNumber"
               value={mobileNumber}
                onChange={handleMobileNumberChange}
                placeholder=""
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: "2px solid #FCA505",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "20px",
              textAlign: "start",
            }}
          >
            <div style={{ width: "100%" }}>
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Email Id<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="emailId"
                value={emailId}
                onChange={handleEmailIdChange}
                placeholder=""
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: "2px solid #FCA505",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "20px",
              textAlign: "start",
            }}
          >
            <div style={{ width: "100%" }}>
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                Address<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="address"
                value={villageTownCity}
              onChange={handleVillageTownCityChange}
                placeholder=""
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  border: "2px solid #FCA505",
                  borderRadius: "10px",
                }}
              />
            </div>
      
           
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
                                border: "2px solid #FCA505",
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
                                  border: "2px solid #FCA505",
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
                            Pin Code
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="pincode"
                            value={pincode} // Bind the input value to the state
                            onChange={handlePincode} // Handle changes to input
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
            {error && <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>}
          <p style={{ marginTop: "20px", fontSize: "14px", textAlign: "left" }}>
       By clicking submit, you agree to our{" "}
       <a  href="/terms-conditions" style={{ color: "#007BFF", textDecoration: "underline" }}>
         Terms & Conditions
       </a>{" "}
       and{" "}
       <a
          href="/privacy-policy"
         style={{ color: "#007BFF", textDecoration: "underline" }}
       >
         Privacy Policy
       </a>.
     </p>
     <br/>
        </div>
      )}



         </div>
         <div   style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}>
          
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

           {currentStep < 1 ? (
           <button
           onClick={nextStep}
           style={{
             padding: "10px 20px",
             backgroundColor: "#FCA505",
             color: "#000000",
             border: "none",
             borderRadius: "5px",
             cursor: "pointer",
           }}
         >
           Next
         </button>
           
           ) : (
            // <button
            // onClick={() => {
            //   if (!fullName) {
            //     setError("Name is required.");
            //     return;
            //   }
            //   if (!mobileNumber) {
            //     setError("Mobile number is required."); 
            //     return;
            //   }
            //   if (!emailId) {
            //     setError("Email ID is required.");
            //     return;
            //   }
            //   if (!villageTownCity) {
            //     setError("Address is required.");
            //     return;
            //   }
           
            //   handleSendOtp();
            //   setShowOtpSection(true);
            //   setError("");
            //   setIsCompleted(true);
            // }}
            //   style={{
            //     padding: "10px 20px",
            //     backgroundColor: "#FCA505",
            //     color: "#000000",
            //     border: "none",
            //     alignContent:'center',
            //     alignItems:'center',
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
      if (!fullName) {
        setError("Name is required.");
        return;
      }
      if (!mobileNumber) {
        setError("Mobile number is required.");
        return;
      }
      if (!emailId) {
        setError("Email ID is required.");
        return;
      }
      if (!villageTownCity) {
        setError("Address is required.");
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
    Verify
  </button>
</div>
      </div>
          ) : (
            <>
                 {location.pathname === "/food-license/proceed-to-pay" && (
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
      { label: "Services", value: "Food License (FSSAI)" }, // Allows dynamic or default value
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

                {/* <p style={{fontSize:'18px'}}>Amount (Booking Fee)
                You can pay the balance amount post documents verification by our consultant.</p> */}
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
                className='d-none d-lg-block'
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

 <br></br>

        
        
        </div>
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

export default Food;
