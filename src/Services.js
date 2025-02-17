import React, { useEffect, useState } from "react";
import circleIcon from "../src/images/circle1.svg";
import documentsIcon from "../src/images/documents.svg";
import TimeIcon from "../src/images/Time.svg";
import Price from "./images/Price Tag.svg";

import { FaArrowLeft } from "react-icons/fa";
import howIcon from "./images/how.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import "./Service.css";
import UAEImage from "../src/images/UAE_image_banner.jpg";
import Singapureimage from "../src/images/Singapore_image_banner.jpg";
import Ukimage from "../src/images/United Kingdom_image_banner.jpg";
import Australiaimage from "../src/images/Australia_image_banner.jpg";
import MalysiaImage from "../src/images/Malaysia_image_banner.jpg";
import Egyptimage from "../src/images/Egypt_image_banner.jpg";
import vietnamImage from "../src/images/Vietnam_image_banner.jpg";
import HongkongImage from "../src/images/Hong Kong_image_banner.jpg";
import IndonsiaImage from "../src/images/Indonesia_image_banner.jpg";
import azerbaijanImage from "../src/images/Azerbaijan_image_banner.jpg";
import OmanImage from "../src/images/Oman_image_banner.jpg";
import MoroccoImage from "../src/images/Morocco_image_banner.jpg";
import BaharinImage from "../src/images/Bahrain_image_banner.jpg";
import QatarIamage from "../src/images/Qatar_image_banner.jpg";
import RussiaImage from "../src/images/Russia_image_banner.jpg";
import UzbekistanImage from "../src/images/Uzbekistan_image_banner.jpg";
import { Helmet } from "react-helmet";
import Custom404Page from "./Custom404Page";
import Header from "./Header";

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

const visadata = [
  {
    name: "United Arab Emirated",
    routeName: "dubai-visa",
    img: "arabImage1",
    bannerimage: UAEImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
            <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Scan clear color copy of Passport  <br class="d-block d-lg-none" />(first and last page)</li>
              <li>01 color passport-size photo</li>
              <li>PAN Card</li>
             
            </ul>
          `,
      },
      {
        title: "How It Works",
        desc: `
            <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Register Online</li>
              <li>Upload Documents</li>
              <li>Documents Verfication</li>
               <li>Payment</li>
                <li>Receive your E-Visa via E-mail</li>
            </ul>
          `,
      },
      {
        title: "Time Duration",
        desc: `
            
           <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 05 working days</li>
              
            </ul>
          `,
      },
      {
        title: "Charges",
        desc: `
            <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>UAE 30 Days Single Entry E-Visa  <br class="d-block d-lg-none" /> <strong> Rs: 7854</strong></li>
              <li>UAE 30 Days Multiple Entry E-Visa    <br class="d-block d-lg-none" /><strong> Rs: 14,600 </strong></li>
             <li>UAE 60 Days Single Entry E-Visa  <br class="d-block d-lg-none" /> <strong> Rs: 12,446   </strong></li>
             <li>UAE 60 Days Multiple Entry E-Visa   <br class="d-block d-lg-none" /> <strong>  Rs: 19,118 </strong></li>
             <li><strong>Rs. 99 </strong>  as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This fee is  <br class="d-block d-lg-none" /> non-refundable and will be adjusted   <br class="d-block d-lg-none" />in the total bill.)</li>
            </ul>
          `,
      },
    ],
  },
  {
    name: "Singapore",
    routeName: "singapore-visa",
    img: "singapurImage",
    bannerimage: Singapureimage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Original Passport</li>
                    <li>Visa from</li>
                    <li>Photo (3nos mate finish photo with  <br class="d-block d-lg-none" /> 80% face   covering and with white  <br class="d-block d-lg-none" /> back ground)</li>
                    <li>Covering letter (if you’re doing  <br class="d-block d-lg-none" /> own business   need to mention   <br class="d-block d-lg-none" />the monthly</li>
                     <li>income , business details and letter  <br class="d-block d-lg-none" />should be in  letter head )</li>
                      <li>Hotel voucher</li>
                      <li>Air Ticket</li>
                      <li>Educational certificate</li>
                      <li>Last Month's Pay slip (if your  <br class="d-block d-lg-none" /> employee )</li>
                      <li>Office ID card copy.(if your employee )</li>
                      <li>Visiting Card (if your own business )</li>
                       <li>School ID card copy(if your student)</li>
                        <li>Last 3 months Bank statement</li>
                  </ul>
                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Door Step Documents Pickup  <br class="d-block d-lg-none" />& Verification</li>
                    <li>Payment</li>
                     <li>We Submit Your Documents To   <br class="d-block d-lg-none" />Embassy</li>
                      <li>Your Visa Deliver To Your Doorstep</li>
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>07 - 10 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Rs. 3,500</li>
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This  <br class="d-block d-lg-none" />amount will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "United Kingdom",
    routeName: "uk-visa",
    img: "ukImage",
    bannerimage: Ukimage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                 <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Original passport with 06 months  <br class="d-block d-lg-none" /> validity from the date of travel. +  <br class="d-block d-lg-none" />Old Passports if any.</li>
  <li>02 Colour photographs with white  <br class="d-block d-lg-none" />background, matte finish size 35 mm  <br class="d-block d-lg-none" /> X 45 mm 80% face size.</li>
  <li>Covering letter mentioning your travel <br class="d-block d-lg-none" /> details and stay details while in the UK.</li>
  <li>Original Bank statement for the last  <br class="d-block d-lg-none" />6 months updated with healthy and  <br class="d-block d-lg-none" /> sufficient balance.</li>
  <li>Income tax / Form 16 for the last 3  <br class="d-block d-lg-none" /> years.</li>
  <li>Salary Slips for the last 6 months - if  <br class="d-block d-lg-none" /> employed.</li>
  <li>Original Leave letter from employer/  <br class="d-block d-lg-none" />school/college.</li>
  <li>Retirement Letter if retired.</li>
  <li>School / College ID proof - if student.</li>
  <li>Other financial papers (NSC, PPF,  <br class="d-block d-lg-none" /> Bonds, FD, shares, property papers, etc.)</li>
  <li>Minor travelers:</li>
  <ul>
  <li >
    a minor accompanied by one parent <br class="d-block d-lg-none" /> shall provide an original notarized <br class="d-block d-lg-none" /> NOC by the  other parent,
    plus <br class="d-none d-lg-block" /> copies of  <br class="d-block d-lg-none" />parents' passports or ID.
  </li>
  <li>
    a minor traveling alone shall  <br class="d-block d-lg-none" /> provide an original notarized NOC by <br class="d-block d-lg-none" /> both parents/legal   guardians, 
    plus  <br class="d-none d-lg-block" /> copies <br class="d-block d-lg-none" /> of parents' passports or ID.
  </li>
</ul>

  <li>Visiting Card (if your own business)</li>
  <li>School ID card copy (if your student)</li>
  <li>Last 3 months Bank statement.</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Door Step Documents Pickup &  <br class="d-block d-lg-none" />Verification</li>
                    <li>Payment</li>
                     <li>Get Appointment</li>
                      <li>Visit For Documents Verification</li>
                       <li>Get Delivered</li>
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>15-20 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Rs. 12,499</li>
              <li>Rs. 99 as booking fee. Need  <br class="d-block d-lg-none" /> to pay while submitting online form (  <br class="d-block d-lg-none" />This amount  will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Australia",
    routeName: "australia-visa",
    img: "australiaimage",
    bannerimage: Australiaimage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Original passport</li>
  <li>Aadhar card</li>
  <li>02 photos with white background and  <br class="d-block d-lg-none" />no border (35mm X 45mm)</li>
  <li>Invitee passport & visa copy</li>
  <li>Invitee's one residence proof</li>
  <li>Applicant's 6 months bank statement  <br class="d-block d-lg-none" />(with stamp & signature and sufficient funds)</li>
  <li>3 months pay slips</li>
  <li>2-3 years Income Tax Return (ITR)</li>
  <li>Previous travel passport stamped copy</li>
  <li>Any investment documents like fixed  <br class="d-block d-lg-none" />deposits or property documents (optional)</li>
  <li>Flight booking confirmation (optional)</li>
  <li>Covering letter (Given by us)</li>
  <li>Company leave approval letter</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>20-25 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Rs. 10,999</li>
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This  <br class="d-block d-lg-none" /> amount will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Malaysia",
    routeName: "malaysia-visa",
    img: "malysiaimage",
    bannerimage: MalysiaImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Flight and Hotel Details</li>
  <li>Flight Number</li>
  <li>Hotel Name</li>
  <li>Passport</li>
  
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>03 - 04 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Malaysia Electronic Travel Authorization  <br class="d-block d-lg-none" /> Rs. 999</li>
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" /> while submitting online form (This fee   <br class="d-block d-lg-none" />is non-refundable and will be adjusted  <br class="d-block d-lg-block" /> in the total bill.)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Egypet",
    routeName: "egypet-visa",
    img: "egyptimage",
    bannerimage: Egyptimage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" /> and back copy in colour scanner</li>
  
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>07 - 10 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Egypt 30days Single Entry E-Visa  <br class="d-block d-lg-none" /> Rs. 4,798
</li>
              <li>Egypt 30 days Multiple Entry E-Visa  <br class="d-block d-lg-none" /> Rs. 6,580</li>
                <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" /> while submitting online form (This fee is  <br class="d-block d-lg-none" /> non-refundable and will be adjusted in the  <br class="d-block d-lg-none" /> total bill.)
</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Vietnam",
    routeName: "vietnam-visa",
    img: "vietnamimage",
    bannerimage: vietnamImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Passport</li>
    <li>Traveler Photo</li>
  
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>07 - 10 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Vietnam 30 Days Singal Entry E-Visa  <br class="d-block d-lg-none" /> Rs. 4,371</li>
              <li>Vietnam 30 Days Multiple Entry E-Visa   <br class="d-block d-lg-none" />Rs. 12492</li>
                <li>Vietnam 90 Days Multiple Entry E-Visa  <br class="d-block d-lg-none" />Rs. 14573</li>
                <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" /> while submitting online form (This fee  <br class="d-block d-lg-none" />is non-refundable and will be adjusted in the  <br class="d-block d-lg-none" />total bill.)</li>
            </ul>
                `,
      },
    ],
  },
  {
    name: "Hong Kong",
    routeName: "hongkong-visa",
    img: "hongkong",
    bannerimage: HongkongImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" />and back copy in colour scanner</li>
  
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>02 - 03 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Multiple Entry 14 Days Hong Kong E-Visa  <br class="d-block d-lg-none" /> Rs. 1332</li>
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This amount  <br class="d-block d-lg-none" />will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Indonesia",
    routeName: "indonesia-visa",
    img: "indonesiimage",
    bannerimage: IndonsiaImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" /> and back copy in colour scanner</li>
  <li>Hotel Address Information</li>
  <li>Return Flight Ticket</li>
  <li>Traveler Photo</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>05 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Indonesia 30 Days Single Entry E-Visa  <br class="d-block d-lg-none" /> Rs. 5109</li>
              <li>Rs. 99 as booking fee. Need to pay   <br class="d-block d-lg-none" />while submitting online form (This amount  <br class="d-block d-lg-none" /> will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Azerbaijan",
    routeName: "azerbaijan-visa",
    img: "azerbaijanimage",
    bannerimage: azerbaijanImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" />and back copy in colour scanner</li>
 
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>07 - 10 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Azerbaijan 30 days Single Entry  E-Visa  <br class="d-block d-lg-none" /> Rs. 4498</li>
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This  <br class="d-block d-lg-none" />amount will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Oman",
    routeName: "oman-visa",
    img: "omanimage",
    bannerimage: OmanImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" />and back copy in colour scanner</li>
   <li>Traveler Photo</li>
 
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Oman 10 Day E-Visa Rs. 4,015</li>
               <li>Oman 30 Day E-Visa Rs. 7,776</li>
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This amount <br class="d-block d-lg-none" /> will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Morocco",
    routeName: "morocco-visa",
    img: "moroccoimage",
    bannerimage: MoroccoImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front <br class="d-block d-lg-none" /> and back copy in colour scanner</li>
   <li>Traveler Photo</li>
 
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Morocco 30 Days Single Entry E-Visa  <br class="d-block d-lg-none" />Rs. 9,053</li>
              
              <li>Rs. 99 as booking fee. Need to pay while <br class="d-block d-lg-none" /> submitting online form (This amount <br class="d-block d-lg-none" /> will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Bahrain",
    routeName: "bahrain-visa",
    img: "baharinimage",
    bannerimage: BaharinImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front <br class="d-block d-lg-none" /> and back copy in colour scanner</li>
   <li>Clear scanned photo with white background</li>
    <li>Flight and Hotel Details</li>
       <li>Last 3 month bank statement</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Bahrain E-Visa Rs. 3,850</li>
              
              <li>Rs. 99 as booking fee. Need to pay <br class="d-block d-lg-none" /> while submitting online form (This  <br class="d-block d-lg-none" />amount will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Qatar",
    routeName: "qatar-visa",
    img: "qatarimage",
    bannerimage: QatarIamage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front <br class="d-block d-lg-none" /> and back copy in colour scanner</li>
   <li>Clear scanned photo with white background</li>
    <li>Flight and Hotel Details</li>
       <li>Last 3 month bank statement</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Qatar E-Visa Rs. 3,850</li>
              
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This amount  <br class="d-block d-lg-none" />will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Russia",
    routeName: "russia-visa",
    img: "russiaimage",
    bannerimage: RussiaImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" /> and back copy in colour scanner</li>
   <li>Clear scanned photo with white background</li>
    <li>Flight and Hotel Details</li>
       <li>Last 3 month bank statement</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Russia E-Visa Rs. 3,850</li>
              
              <li>Rs. 99 as booking fee. Need to pay  <br class="d-block d-lg-none" /> while submitting online form (This amount <br class="d-block d-lg-none" /> will be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
  {
    name: "Uzbekistan",
    routeName: "uzbekistan-visa",
    img: "uzbekistanimage",
    bannerimage: UzbekistanImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
                <ul
  style="
    display: grid;
    list-style-type: disc; 
    padding-left: 20px;
    white-space: nowrap;
    margin: 20px 0;
  "
>
  <li>Clear scanned copy of passport front  <br class="d-block d-lg-none" />and back copy in colour scanner</li>
   <li>Clear scanned photo with white background</li>
    <li>Flight and Hotel Details</li>
       <li>Last 3 month bank statement</li>
</ul>

                `,
      },
      {
        title: "How It Works",
        desc: `
                  <ul
                    style="
                      display: grid;
                      list-style-type: disc; 
                      padding-left: 20px;
                      white-space: nowrap;
                      margin: 20px 0;
                    "
                  >
                    <li>Register Online</li>
                    <li>Upload Documents</li>
                    <li>Documents Verfication</li>
                     <li>Payment</li>
                      <li>Receive your E-Visa via E-mail</li>
                    
                  </ul>
                `,
      },
      {
        title: "Time Duration",
        desc: `
                 <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 07 working days</li>
              
            </ul>
                `,
      },
      {
        title: "Charges",
        desc: `
                   <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Uzbekistan E-Visa Rs. 3,850</li>
              
              <li>Rs. 99 as booking fee. Need to pay while  <br class="d-block d-lg-none" />submitting online form (This amount will <br class="d-block d-lg-none" /> be adjusted in total bill)</li>
             
            </ul>
                `,
      },
    ],
  },
];


const metaTags = {
  "dubai-visa": {
    title: "Dubai Visa Application | Apply for Dubai Tourist Visa Online",
    description:
      "Apply for a Dubai tourist visa online with expert guidance. Get your Dubai visa quickly for 30, 60, or 90 days, with both single and multiple entry options.",
    keywords:
      "Dubai visa, UAE visa, Dubai tourist visa online, Dubai visa for Indians, Dubai visa application, UAE tourist visa, Dubai visa cost, how to apply for Dubai visa, Dubai visit visa, UAE visa online, Dubai visa types, apply Dubai visa",
    canonical: "https://makemydocuments.com/dubai-visa",
  },
  "singapore-visa": {
    title:
      "Singapore visa | Singapore tourist visa application Online | Apply Now",
    description:
      "Click here to apply Singapore visa online and get it the earliest, with expertise advice and guidance. Get Singapore Visa for Indians in just 3-5 days! Apply Now!",
    keywords:
      "Singapore visa, Singapore Visa For Indians, Singapore Visa Online, Singapore Tourist Visa, Singapore Visa Fees, Apply Singapore Visa Online, How to apply for Singapore visa, how to get Singapore visa.",
    canonical: "https://makemydocuments.com/singapore-visa",
  },
  "uk-visa": {
    title: "Apply UK Visa Online | UK Tourist Visa | UK Visa Application",
    description:
      "Click here to apply for a UK Visa and get it at the earliest with expert advice and guidance. Hassle-free UK Tourist Visa application process.",
    keywords:
      "UK visa, apply UK visa, UK visa online, UK visa application, UK visa apply online, UK tourist visa, UK business visa, UK visa agents near me, how to apply for UK visa, UK visa application process, documents required for UK visa, UK visa form, UK visa agents Bangalore, UK visa fees, UK visa online application India, UK visa site, UK visa application status, apply for UK tourist visa, UK visa process, UK visa services",
    canonical: "https://makemydocuments.com/uk-visa",
  },
  "australia-visa": {
    title: "Australia Visa Application | Apply for Australian Tourist & Visitor Visa Online",
    description:
      "Apply for your Australian tourist visa online with fast processing and expert guidance. Get your 3, 6, or 12-month single or multiple entry visa for Australia. Hassle-free application process.",
    keywords:
      "Australia visa, Australia visa online, apply for Australia visa, Australian tourist visa, Australia visa for Indians, Australia visitor visa, Australia visa cost, how to apply for Australia visa, Australian visa application, Australia visa requirements, online Australia visa application, Australia e-visa, Australia travel visa, Australian visa guide",
    canonical: "https://makemydocuments.com/australia-visa",
  },
  "malaysia-visa": {
    title: "Malaysia Visa Application | Apply for Malaysian Tourist & Visitor Visa Online",
    description:
      "Apply for your Malaysian visa online with easy processing and expert guidance. Get your 30, 60, or 90-day single or multiple entry visa for Malaysia. Fast, secure, and hassle-free visa application process.",
    keywords:
      "Malaysia visa, Malaysia visa online, apply for Malaysia visa, Malaysian tourist visa, Malaysia visa for Indians, Malaysia visitor visa, Malaysia visa cost, how to apply for Malaysia visa, Malaysia visa application, Malaysia e-visa, Malaysia travel visa, Malaysian visa requirements, online Malaysia visa application, Malaysian visa guide",
    canonical: "https://makemydocuments.com/malaysia-visa",
  },
  "egypet-visa": {
    title: "Egypt Visa Application | Apply for Egyptian Tourist & Visitor Visa Online",
    description:
      "Streamline your travel plans to Egypt with our easy online visa application service. Whether you need a tourist visa or visitor visa, we provide tailored assistance for single or multiple entry visas, valid for 30, 60, or 90 days. Fast, secure, and hassle-free application process for all your Egypt travel needs.",
    keywords:
      "Egypt visa, Egypt visa online, apply for Egypt visa, Egyptian tourist visa, Egypt visa for Indians, Egypt visitor visa, Egypt visa cost, how to apply for Egypt visa, Egypt visa application, Egypt e-visa, Egypt travel visa, Egyptian visa requirements, online Egypt visa application, Egyptian visa guide",
    canonical: "https://makemydocuments.com/egypt-visa",
  },
  "vietnam-visa": {
    title: "Vietnam Visa Application | Apply for Vietnamese Tourist & Visitor Visa Online",
    description:
      "Easily apply for your Vietnam tourist or visitor visa online with expert guidance. Secure a single or multiple entry visa for Vietnam, valid for 30, 60, or 90 days. Fast, straightforward, and secure application process designed for your travel convenience.",
    keywords:
      "Vietnam visa, Vietnam visa online, apply for Vietnam visa, Vietnamese tourist visa, Vietnam visa for Indians, Vietnam visitor visa, Vietnam visa cost, how to apply for Vietnam visa, Vietnam visa application, Vietnam e-visa, Vietnam travel visa, Vietnamese visa requirements, online Vietnam visa application, Vietnamese visa guide",
    canonical: "https://makemydocuments.com/vietnam-visa",
  },
  "hongkong-visa": {
    title: "Hong Kong Visa Application | Apply for Hong Kong Tourist & Visitor Visa Online",
    description:
      "Apply for your Hong Kong tourist or visitor visa with ease. Our expert assistance ensures a simple, fast, and secure application process for single or multiple entry visas. Tailored solutions for your Hong Kong travel plans.",
    keywords:
      "Hong Kong visa, Hong Kong visa online, apply for Hong Kong visa, Hong Kong tourist visa, Hong Kong visa for Indians, Hong Kong visitor visa, Hong Kong visa cost, how to apply for Hong Kong visa, Hong Kong visa application, Hong Kong e-visa, Hong Kong travel visa, Hong Kong visa requirements, online Hong Kong visa application, Hong Kong visa guide",
    canonical: "https://makemydocuments.com/hongkong-visa",
  },
  "indonesia-visa": {
    title: "Indonesia Visa Application | Apply for Indonesian Tourist & Visitor Visa Online",
    description:
      "Discover a seamless way to apply for your Indonesia visa online. Our expert team ensures a smooth process for obtaining tourist and visitor visas. Whether you’re planning a short stay or longer visit, we offer hassle-free visa solutions for single and multiple entry to Indonesia.",
    keywords:
      "Indonesia visa, Indonesia visa online, apply for Indonesia visa, Indonesian tourist visa, Indonesia visa for Indians, Indonesia visitor visa, Indonesia visa cost, how to apply for Indonesia visa, Indonesia visa application, Indonesia e-visa, Indonesia travel visa, Indonesian visa requirements, online Indonesia visa application, Indonesia visa guide",
    canonical: "https://makemydocuments.com/indonesia-visa",
  },
  "azerbaijan-visa": {
    title: "Azerbaijan Visa Application | Apply for Azerbaijani Tourist & Visitor Visa Online",
    description:
      "Easily apply for your Azerbaijan tourist or visitor visa online with our expert assistance. We simplify the application process for both single and multiple entry visas, ensuring a fast, secure, and efficient solution for your travel to Azerbaijan.",
    keywords:
      "Azerbaijan visa, Azerbaijan visa online, apply for Azerbaijan visa, Azerbaijani tourist visa, Azerbaijan visa for Indians, Azerbaijan visitor visa, Azerbaijan visa cost, how to apply for Azerbaijan visa, Azerbaijan visa application, Azerbaijan e-visa, Azerbaijan travel visa, Azerbaijani visa requirements, online Azerbaijan visa application, Azerbaijan visa guide",
    canonical: "https://makemydocuments.com/azerbaijan-visa",
  },
  "oman-visa": {
    title: "Oman Visa Application | Apply for Omani Tourist & Visitor Visa Online",
    description:
      "Quickly apply for your Oman tourist or visitor visa online with expert guidance. Enjoy a simple, secure, and fast application process for both single and multiple entry visas. Get your Oman visa for travel, business, or tourism with ease.",
    keywords:
      "Oman visa, Oman visa online, apply for Oman visa, Omani tourist visa, Oman visa for Indians, Oman visitor visa, Oman visa cost, how to apply for Oman visa, Oman visa application, Oman e-visa, Oman travel visa, Omani visa requirements, online Oman visa application, Oman visa guide",
    canonical: "https://makemydocuments.com/oman-visa",
  },
  "morocco-visa": {
    title: "Morocco Visa Application | Apply for Moroccan Tourist & Visitor Visa Online",
    description:
      "Effortlessly apply for your Morocco tourist or visitor visa online. With our expert assistance, you’ll experience a quick, secure, and hassle-free process for obtaining your visa for travel, business, or tourism to Morocco. Get your visa in just a few simple steps.",
    keywords:
      "Morocco visa, Morocco visa online, apply for Morocco visa, Moroccan tourist visa, Morocco visa for Indians, Morocco visitor visa, Morocco visa cost, how to apply for Morocco visa, Morocco visa application, Morocco e-visa, Morocco travel visa, Moroccan visa requirements, online Morocco visa application, Morocco visa guide",
    canonical: "https://makemydocuments.com/morocco-visa",
  },
  "bahrain-visa": {
    title: "Bahrain Visa Application | Apply for Bahraini Tourist & Visitor Visa Online",
    description:
      "Apply for your Bahrain visa with ease through our online application service. Whether you're traveling for tourism or leisure, our expert team ensures a smooth process for obtaining your tourist or visitor visa for Bahrain, with guaranteed fast processing and secure assistance.",
    keywords:
      "Bahrain visa, Bahrain visa online, apply for Bahrain visa, Bahraini tourist visa, Bahrain visa for Indians, Bahrain visitor visa, Bahrain visa cost, how to apply for Bahrain visa, Bahrain visa application, Bahrain e-visa, Bahrain travel visa, Bahraini visa requirements, online Bahrain visa application, Bahrain visa guide",
    canonical: "https://makemydocuments.com/bahrain-visa",
  },
  "qatar-visa": {
    title: "Qatar Visa Application | Apply for Qatar Tourist Visa Online",
    description:
      "Apply for your Qatar tourist visa easily with our online service. Enjoy a fast, secure, and hassle-free application process for your Qatar visa. Whether you're traveling for sightseeing or leisure, we provide expert assistance to ensure a smooth experience.",
    keywords:
      "Qatar visa, Qatar tourist visa, apply for Qatar tourist visa, Qatar visa online, Qatar visa for Indians, Qatar visitor visa, Qatar visa application, Qatar e-visa, Qatar travel visa, Qatar visa cost, Qatar visa requirements, Qatar tourist visa application, Qatar visa guide, online Qatar visa",
    canonical: "https://makemydocuments.com/qatar-visa",
  },
  "russia-visa": {
    title: "Russia Visa Application | Apply for Russia Tourist Visa Online",
    description:
      "Easily apply for your Russia tourist visa online with our expert assistance. Our secure and fast visa application process ensures a smooth experience for sightseeing or leisure travel to Russia. Get your tourist visa in just a few simple steps.",
    keywords:
      "Russia visa, Russia tourist visa, apply for Russia tourist visa, Russia visa online, Russian tourist visa for Indians, Russia visitor visa, Russia visa cost, how to apply for Russia visa, Russia visa application, Russia e-visa, Russia travel visa, Russian visa requirements, online Russia visa application, Russia tourist visa guide",
    canonical: "https://makemydocuments.com/russia-visa",
  },
  "uzbekistan-visa": {
    title: "Uzbekistan Visa Application | Apply for Uzbekistan Tourist Visa Online",
    description:
      "Apply for your Uzbekistan tourist visa easily with our fast, secure, and expert online application service. Whether you're visiting for sightseeing, leisure, or cultural exploration, we provide a hassle-free process for obtaining your Uzbekistan visa.",
    keywords:
      "Uzbekistan visa, Uzbekistan tourist visa, apply for Uzbekistan tourist visa, Uzbekistan visa online, Uzbekistan visa for Indians, Uzbekistan visitor visa, Uzbekistan visa cost, how to apply for Uzbekistan visa, Uzbekistan visa application, Uzbekistan e-visa, Uzbekistan travel visa, Uzbek visa requirements, online Uzbekistan visa application, Uzbekistan visa guide",
    canonical: "https://makemydocuments.com/uzbekistan-visa",
  },
};

const Services = () => {

  const navigate = useNavigate();
  const { services } = useParams();
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
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [travellingDate, setTravellingDate] = useState("");
  const [returningDate, setReturningDate] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAffidavit, setSelectedAffidavit] = useState("");
  const [pincode, setPincode] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [errors, setErrors] = useState({});
  const [aadharNumber, setAadharNumber] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(visadata[0]);
  const [selectedState, setSelectedState] = useState("");

  const [selectedDestination, setSelectedDestination] = useState(null);
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, []); 
  const handleClick = (destination) => {
    setSelectedDestination(destination);
  };
  const handleTravellingDateChange = (e) => {
    setTravellingDate(e.target.value);
  };
  const handleReturningDateChange = (e) => {
    setReturningDate(e.target.value);
  };
  const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set to tomorrow's date
    return today.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
  };
  const getMinReturningDate = () => {
    return travellingDate; // The returning date must be after or on the same day as the travelling date
  };

  useEffect(() => {
    // Validate the returning date when travelling date or returning date changes
    if (returningDate && new Date(returningDate) < new Date(travellingDate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        returningDate:
          "Returning date must be after or on the same day as the travelling date.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { returningDate, ...rest } = prevErrors;
        return rest;
      });
    }
  }, [travellingDate, returningDate]);
  const [otpSent, setOtpSent] = useState(false);
  // const [userDetails, setUserData] = useState(null); // Holds user details
  const [userDetails, setUserDetails] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const closePopup = () => {
    setShowPopup(false);
    setCurrentStep(1);
    setIsCompleted(false);
    const cleanedRoute = services.endsWith("-form")
    ? services.replace("-form", "")
    : services;

  navigate(`/${cleanedRoute}`);
  };

  const [registrationNumber, setSeletedRegistrationNumber] = useState("");

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

  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // })

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
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailIdChange = (e) => {
    const value = e.target.value;
    setEmailId(value);

    // Clear error if input matches a valid email format
    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailId: "", // Clear error
      }));
    }
  };
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const [leadId, setLeadId] = useState();
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };

  const handleAffidavitChange = (e) => {
    setSelectedAffidavit(e.target.value);
    setError(""); // Clear error when a selection is made
  };

  const handleContinue = () => {
    setShowPopup(true)
    navigate(`/${services}-form`); 
  };

  useEffect(() => {
    if (services.endsWith("-form")) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [services]);


  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and a maximum of 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "", // Clear the error if valid
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "Pin Code must be a 6-digit number.", // Set the error
      }));
    }
  };





  const handleBlur = () => {
    setIsTouched(true); // Mark the field as interacted
    // Check if the length is exactly 6 digits
    if (!pincode || pincode.length !== 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "Pin Code must be exactly 6 digits.",
      }));
    }
  };
  // Navigate steps
  const nextStep = () => {
    let validationErrors = {};

    if (currentStep === 1) {
      // Step 1 Validation
      if (!fullName.trim()) {
        validationErrors.fullName = "Full Name is required.";
      }
      if (!gender) {
        validationErrors.gender = "Gender is required.";
      }
      if (!travellingDate) {
        validationErrors.travellingDate = "Travelling Date is required.";
      }
      if (!returningDate) {
        validationErrors.returningDate = "Returning Date is required.";
      }
    } else if (currentStep === 2) {
      // Step 2 Validation
      if (!mobileNumber.trim()) {
        validationErrors.mobileNumber = "Mobile Number is required.";
      } else if (!/^\d{10}$/.test(mobileNumber)) {
        validationErrors.mobileNumber = "Mobile Number must be 10 digits.";
      }

      if (!emailId.trim()) {
        validationErrors.emailId = "Email ID is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
        validationErrors.emailId = "Please enter a valid Email ID.";
      }

      if (!villageTownCity.trim()) {
        validationErrors.villageTownCity = "Address is required.";
      }
      if (!selectedState) {
        validationErrors.selectedState = "State is required.";
      }
      if (!selectedDistrict) {
        validationErrors.selectedDistrict = "District is required.";
      }

      // Pincode Validation
      const pincodeRegex = /^[0-9]{6}$/; // Pincode should be exactly 6 digits.
      if (!pincode.trim()) {
        validationErrors.pincode = "Pincode is required.";
      } else if (!pincodeRegex.test(pincode)) {
        validationErrors.pincode = "Pincode must be exactly 6 digits.";
      }
    }

    // If there are validation errors, set them and stop navigation
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and move to the next step
    setErrors({});
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and a maximum of 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: "", // Clear error if valid
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: "Mobile number must be a 10-digit number.",
      }));
    }
  };

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

  // To track if OTP has been sent

  const handleSendOtp = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      formattedNumber = `91${formattedNumber}`;
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


  
  
  const [isResending, setIsResending] = useState(false);
  const handleResend = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^91\d{10}$/.test(formattedNumber)) {
        formattedNumber = `91${formattedNumber}`;
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
      SERVICE: "Travel Visa",
      id: leadId, 
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
  

  const handleVerify = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
  
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
  
      formattedNumber = `91${formattedNumber}`;
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
          if (services) {
            navigate(`/${services}/proceed-to-pay`);
          } else {
            navigate("/"); // Default redirect
          }
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
  
  const routeName = services.endsWith("-form")
    ? services.replace("-form", "")
    : services;

  // Filter data based on the resolved route name
  const filteredData = visadata?.find((item) => item.routeName === routeName);

  // const filteredData = visadata?.find((item) => item.routeName === services.replace("-form", ""));


  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };
  const submitDataToAPI = async () => {
    const data = {
      
      orderid :orderid ||"",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      travellingDate: travellingDate || "",
      returningDate: returningDate || "",
      services: selectedAffidavit || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
      registrationNumber: registrationNumber || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "1",
    
      applying_for: filteredData?.name || "N/A",
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
      service: "Travel Visa",
     
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
          applying_for: leadData.applying_for || "N/A",
          paidAmount: leadData.paidAmount || "₹1",
        });
      } else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      // alert("An error occurred while saving your details. Please try again.");
    }
  };

  if (!filteredData) {
    return (
      <>
    
      {filteredData ? (
        <div>
          {/* Your Service Content */}
        </div>
      ) : (
        <Custom404Page />
      )}
    </>
    );
  }

  const faqs = [
    {
      question: "When is the best time to apply?",
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
        "Make My Documents will recommend to apply visa 20 days before of your departure.",
    },
    {
      question: "Do I need to visit any office to submit and documents?",
      answer:
        "No its completely online process you can share your documents through WhatsApp or Email.",
    },
    {
      question: "Do I need to share any original documents to get UAE visa?",
      answer:
        "No, original documents is not required for processing. Share only soft copies of the documents and get your visa.",
    },
    {
      question: "How will I get my Visa?",
      answer:
        "UAE issues e-visa, so we will mail/WhatsApp you once your visa is approved.",
    },
    {
      question: "What will happen if I stay beyond the validity of visa?",
      answer:
        "If you stay beyond your validity you will be penalized with 1000 AED.",
    },
    {
      question: "Can I cancel my Visa?",
      answer:
        "Cancellation can only be done till the time documents are not submitted to embassy. Post submission there is no cancellation and refund",
    },
    {
      question: "Will I get a refund if I cancel my visa?",
      answer:
        "If the application is not submitted to embassy and cancellation is done, we will only refund visa embassy fee.",
    },
    {
      question: "In case there is a rejection, can I get a refund?",
      answer:
        "No, you will not be able to cancel your visa and hence there would be no refund.",
    },
    {
      question: "Can I reapply if my visa is rejected?",
      answer:
        "You can re-apply,however chances of approval would not be that high. We usually don’t reprocess the applications which are rejected previously.",
    },
    {
      question: "What all documents are required at Immigration?",
      answer:
        "Below are the list of documents required at immigration: - Original passport. - Print out of your e-visa.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentMeta = metaTags[routeName] || {};
  return (
    <>
    <Helmet>
    <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      <meta name="keywords" content={currentMeta.keywords} />
      <link rel="canonical" href={currentMeta.canonical} />
      <meta name="author" content={currentMeta.canonical} />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="2 days" />
      <meta name="robots" content="ALL, index, follow" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="Safe For All" />
      <meta name="language" content="English" />
      <meta httpEquiv="window-target" content="_top" />
      <meta httpEquiv="pics-label" content="for all ages" />
      <meta name="GOOGLEBOTS" content="All, FOLLOW" />
      <meta name="YAHOOBOTS" content="All, FOLLOW" />
      <meta name="MSNBOTS" content="All, FOLLOW" />
      <meta name="BINGBOTS" content="All, FOLLOW" />
      <meta name="Googlebot-Image" content="All" />
      <meta name="Slurp" content="All" />
      <meta name="Scooter" content="All" />
      <meta name="WEBCRAWLERS" content="All" />
    </Helmet>
    {filteredData?<Header /> :""}
    <div style={{overflow:'hidden'}}>
    <div style={{ marginTop: "8%" }}>
    <div className="headsection">
  <div
    style={{
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "55vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden", // Prevent content from overflowing the container
    }}
  >
    {/* Container for Image */}
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1, // Keep image behind the text
      }}
    >
      <img
        src={filteredData.bannerimage} // Dynamically set image based on route
        alt="Travel Visa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Container for Text */}
    <div
      style={{
        position: "relative",
        zIndex: 2, // Keep text on top of the image
        textAlign: "center",
        color: "#ffffff", // White text for better visibility on most backgrounds
        padding: "20px", // Add padding for better spacing
      }}
    >
      <h1
        style={{
          fontSize: "36px", // Font size for desktop
          fontWeight: "bold",
          margin: 0,
        }}
        className="banner-name"
      >
        {filteredData.name} Tourist Visa 
      </h1>
    </div>
  </div>
</div>


      <div
        className="content-section"
        style={{
          backgroundColor: "#ffffff",
          padding: "30px 15px",
          borderRadius: "10px",
          margin: "-1% auto",
          marginRight: "72%",
        }}
      >
        <div className="row justify-content-center">
          {/* Main Column for Vertical Layout */}
          <div className="col-12 col-md-8 position-relative">
            {/* First Section: Documents */}
            <div className="text-center mb-5">
              <div className="image-style d-none d-lg-block" style={{ position: "relative" }}>
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
                    top: "67%",
                    left: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              {/* Documents Content */}
              <div className="d-none d-lg-block">
  {filteredData.data.map((item, index) => {
    if (item.title === "Documents Required For Visa") {
      // Add the dynamic country name to the description
      const updatedDesc = item.desc.replace(
        /Documents Required For Visa/g, 
        `Documents Required For Visa ${filteredData.name}`
      );

      return (
        <div
          key={index}
          className="mb-5"
          style={{
            marginTop: "-30%",
            marginLeft: "75%",
          }}
        >
          <h4 className="document-title">
            {`Documents Required For ${filteredData.name} Visa `}
          </h4>
          <div
            className="document-ul" style={{ listStyleType: "disc",}}
            dangerouslySetInnerHTML={{ __html: updatedDesc }}
          />
        </div>
      );
    }
    return null;
  })}
</div>

            </div>
      



            {/* Second Section: How It Works */}
            <div className=" text-center mb-5">
              <div className="d-none d-lg-block" style={{ position: "relative" }}>
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
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              {/* How It Works Content */}
              <div className="d-none d-lg-block">
              {filteredData.data.map((item, index) => {
                if (item.title === "How It Works") {
                  return (
                    <div
                      key={index}
                      style={{ marginLeft: "80%", marginTop: "-30%" }}
                    >
                      <h4 className="document-title"
                        // style={{
                        //   color: "#007BFF",
                        //   fontWeight: "bold",
                        //   whiteSpace: "nowrap",
                        // }}
                      >
                        {item.title}
                      </h4>
                      <div className="document-ul"
                        style={{
                          textAlign: "left", // Ensure content below the title also aligns to the left
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  );
                }
                return null;
              })}
              </div>

             

            </div>

            {/* Thwedird Section: Time Duration */}
            <div className="text-center mb-5">
              <div className="d-none d-lg-block"  style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                />
                <img
                  src={TimeIcon}
                  alt="Time Duration Icon"
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              {/* Time Duration Content */}
              <div className="d-none d-lg-block">
              {filteredData.data.map((item, index) => {
                if (item.title === "Time Duration") {
                  return (
                    <div
                      key={index}
                      style={{ marginLeft: "80%", marginTop: "-25%" }}
                    >
                      <h4 className="document-title"
                        // style={{
                        //   color: "#007BFF",
                        //   fontWeight: "bold",
                        //   whiteSpace: "nowrap",
                        // }}
                      >
                        {item.title}
                      </h4>
                      <div className="document-ul"
                        style={{
                          textAlign: "left", // Ensure content below the title also aligns to the left
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  );
                }
                return null;
              })}
              </div>

             

            </div>

            {/* Fourth Section: Charges */}
            <div className="text-center mb-5">
              <div className="d-none d-lg-block"  style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                />
                <img
                  src={Price}
                  alt="Charges Icon"
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              {/* Charges Content */}
              <div className="d-none d-lg-block">
              {filteredData.data.map((item, index) => {
                if (item.title === "Charges") {
                  return (
                    <div
                      key={index}
                      style={{ marginLeft: "80%", marginTop: "-25%" }}
                    >
                      <h4 className="document-title"
                        // style={{
                        //   color: "#007BFF",
                        //   fontWeight: "bold",
                        //   whiteSpace: "nowrap",
                        // }}
                      >
                        {item.title}
                      </h4>
                      <div className="document-ul"
                        style={{
                          textAlign: "left", // Ensure content below the title also aligns to the left
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  );
                }
                return null;
              })}
              </div>

              

            </div>
          </div>
        </div>
      </div>

      <div className="content-section-visa" style={{ marginTop: '-29%', marginLeft: '-10%' }}>
  <div className="content-wrapper">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 position-relative">

        {/* Mobile Section */}
        <div className="mobile-section d-block d-lg-none">
          {filteredData.data.map((item, index) => {
            let icon;

            // Dynamically update icons based on the title
            if (item.title === `Documents Required For Visa`) {
              icon = documentsIcon;
            } else if (item.title === "How It Works") {
              icon = howIcon;
            } else if (item.title === "Time Duration") {
              icon = TimeIcon;
            } else if (item.title === "Charges") {
              icon = Price;
            }

            return (
              <div
                key={index}
                className="mobile-content d-flex align-items-start"
                style={{ marginBottom: '10px' }} // Reduced global gap between items
              >
                {/* Icon */}
                <div
                  className="mobile-icon-container"
                  style={{
                    position: 'relative',
                    flex: '0 0 15%', // Slightly smaller icon container
                    marginTop: '-4%',
                  }}
                >
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid circle-icon-mobile"
                  />
                  <img
                    src={icon}
                    alt={`${item.title} Icon`}
                    className="position-absolute mobile-icon"
                    style={{
                      top: '65%',
                      left: '50%',
                      width: '18px', // Slightly smaller icon size
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>

                {/* Text Content */}
                <div
                  className="mobile-text-content"
                  style={{
                    flex: '1',
                    paddingLeft: '10px', // Reduced padding for a tighter layout
                    marginTop: '-2%',
                  }}
                >
                  {/* Title with Dynamic Name */}
                  <h4
  className="mobile-title"
  style={{
    fontSize: '16px', // Adjusted font size for better spacing
    marginBottom: '5px',
    whiteSpace: 'normal', // Allow text wrapping
    wordWrap: 'break-word', // Break words if they're too long
  }}
>
  {item.title === "Documents Required For Visa"
    ? `Documents Required For ${filteredData.name} Visa`
    : item.title}
</h4>


                  {/* Description */}
                  <div
                    className="mobile-desc"
                    style={{
                      marginTop: '-10px', // Reduced top margin
                      fontSize: '13px', // Slightly smaller font size for description
                      lineHeight: '1.4',
                     listStyleType: "disc",
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: item.desc,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  </div>
</div>






      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "26%" }}>
          <button
            style={{
              backgroundColor: "#FCA505",
              color: "#000000",
              padding: "12px 50px",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              textAlign: "center",
              position: "static",
              fontSize: "16px",
              marginRight: "40%",
              marginTop: "-30%",
            }}
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        </div> */}
        <div className="text-center-continue">
  <button className="fixed-button" onClick={handleContinue}>
    CONTINUE
  </button>
</div>

        {/* Modal Popup */}
        {showPopup && (
          <div className="popupstyle-servicevisa"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              backgroundColor: "#126ece",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div className="popup-servicevisa"
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
                  <div className="stepper-servicevisa"
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
                          <button className="button-servicevisa-stepper"
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
                      <div style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Application
                        </h4>
                        <div>
                          {/* Travelling Date */}
                          <div style={{ width: "100%", textAlign: "left" }}>
                            <label
                              style={{
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              Travelling Date
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="date"
                              value={travellingDate}
                              onChange={handleTravellingDateChange}
                              min={getTomorrowDate()} // Set minimum date to tomorrow
                              style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                            {errors.travellingDate && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                {errors.travellingDate}
                              </p>
                            )}
                          </div>
                          <br />
                          {/* Returning Date */}
                          <div style={{ width: "100%", textAlign: "left" }}>
                            <label
                              style={{
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              Returning Date
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="date"
                              value={returningDate}
                              onChange={handleReturningDateChange}
                              min={getMinReturningDate()} // Set minimum date to the travelling date
                              style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                            {errors.returningDate && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                {errors.returningDate}
                              </p>
                            )}
                          </div>
                        </div>
                        <br />
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
                            Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={handleFullNameChange}
                            id="fullName"
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {errors.fullName && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginRight: "auto",
                            width: "fit-content",
                            // gap: "20px",
                            fontWeight: "700",
                          }}
                        >
                          <label
                            htmlFor="gender"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Gender
                            <span style={{ color: "red" }}>*</span>
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
                              value="Male"
                              checked={gender === "Male"}
                              onChange={(e) => setGender(e.target.value)}
                              style={{
                                marginRight: "10px",
                                padding: "0px",
                                marginBottom: "0px",
                              }}
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
                              value="Female"
                              checked={gender === "Female"}
                              onChange={(e) => setGender(e.target.value)}
                              style={{
                                marginRight: "10px",
                                padding: "0px",
                                marginBottom: "0px",
                              }}
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
                              value="Transgender"
                              checked={gender === "Transgender"}
                              onChange={(e) => setGender(e.target.value)}
                              style={{
                                marginRight: "10px",
                                padding: "0px",
                                marginBottom: "0px",
                              }}
                            />
                            Transgender
                          </label>
                          {errors.gender && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.gender}
                            </p>
                          )}
                          <br/>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Contact Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Mobile Number */}
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
                            Mobile Number{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            onBlur={handleBlur} // Trigger error check on blur
                            type="text"
                            id="mobileNumber"
                            placeholder="Enter your mobile number"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {/* Show error only after the field is touched and the input is invalid */}
                          {isTouched && errors.mobileNumber && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.mobileNumber}
                            </p>
                          )}
                        </div>

                        {/* Email ID */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="emailId"
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
                            type="text"
                            id="emailId"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            onBlur={handleBlur} // Attach handleBlur for validation on focus loss
                            placeholder="Enter your email address"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {/* Display error message only if the field is touched and there's an error */}
                          {isTouched && errors.emailId && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.emailId}
                            </p>
                          )}
                        </div>

                        {/* Address */}
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
                            Address<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={(e) => setVillageTownCity(e.target.value)}
                            onBlur={handleBlur} // Trigger blur on losing focus
                            placeholder="Enter your address"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {isTouched && !villageTownCity && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              Address is required.
                            </p>
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
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>

                          {isTouched && !selectedState && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              State selection is required.
                            </p>
                          )}
                        </div>

                        {/* District Selection */}
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
                                borderRadius: "10px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>

                            {isTouched && !selectedDistrict && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                District selection is required.
                              </p>
                            )}
                          </div>
                        )}

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
                            onBlur={handleBlur} // Trigger error check on blur
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                          {/* Show error only after the field is touched and the input is invalid */}
                          {isTouched && errors.pincode && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.pincode}
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
                    {currentStep < 2 ? (
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
                      <button className="next-button" onClick={nextStep}>
  Next
</button>

                    ) : (
      
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
                        if (!selectedState) {
                          setError("State is required.");
                          return;
                        }
                        if (!selectedDistrict) {
                          setError("District is required.");
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
    style={{color:"#000", fontWeight:'bold'}}
    className="verify-button"
  >
    VERIFY
  </button>
</div>

                    </div>
                  ) : (
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
                          <h2 style={styles.thankYouMessage}>
                            Thank You for Your Submission!
                          </h2>
                          <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name and Mobile Number */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Name", value: userDetails?.name || "N/A" },
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

  {/* Order ID and Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
    {[
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value: filteredData?.name || "N/A" }, // Removed hardcoded value
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

  {/* Amount Booking Fee */}
  <div style={{ marginTop: "10px" }}>
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
      Amount (Booking Fee)
    </label>
    <input type="text" value={paidAmount || "₹0"} readOnly 
           style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    <p style={{ fontSize: "12px", marginTop: "5px" }}>
      You can pay the balance amount post documents verification by our consultant:
    </p>
  </div>
</div>

                         
                          <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    className="proceed-button"
    style={{color:"#000", fontWeight:'bold'}}
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
        className="faq-section-visa"
        // style={{
        //   margin: "10px auto",
        //   padding: "20px",
        //   background: "#FFFFFF",
        //   borderRadius: "10px",
        //   width: "80%",
        // }}
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

export default Services;
