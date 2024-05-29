"use client"
import { useState } from 'react';
import Select from 'react-select';
import CountdownTimer from "../../Components/Timer"
import Dropdown from 'react-bootstrap/Dropdown';
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    borderColor: 'none',
    boxShadow: 'none', // Remove box shadow on focus
    outline: 'none', // Remove blue border on focus
    width: '100%',
  }),
  menu: (provided) => ({
    ...provided,
    border: 'none',
    borderColor: 'none',
  }),
  DropdownIndicator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  IndicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
export default function page() {
  const [state, setState] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1); 
  const stateOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ];
  
  const handleStateChange = (selectedOption) => {
    setState(selectedOption.label);
  };
  const [errors, setErrors] = useState({
    state: '',
    name: '',
    city: '',
    address: '',
    zip: '',
    phone: '',
    email: '',
    agree:"",
    confirm:""
  });

  // Validation and submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    // Check each field
    if (state.trim() === '') {
      formIsValid = false;
      newErrors.state = 'Please fill the state';
    }
    if (name.trim() === '') {
      formIsValid = false;
      newErrors.name = 'Please fill the name';
    }
    if (city.trim() === '') {
      formIsValid = false;
      newErrors.city = 'Please fill the city';
    }
    if (address.trim() === '') {
      formIsValid = false;
      newErrors.address = 'Please fill the address';
    }
    if (zip.trim() === '') {
      formIsValid = false;
      newErrors.zip = 'Please fill the zip';
    }
    if (phone.trim() === '') {
      formIsValid = false;
      newErrors.phone = 'Please fill the phone';
    }
    if (email.trim() === '') {
      formIsValid = false;
      newErrors.email = 'Please fill the email';
    }
    if (!agree) {
      formIsValid = false;
      newErrors.agree = 'Please Check this Box';
    }
    if (!confirm) {
      formIsValid = false;
      newErrors.confirm = 'Please Check this box';
    }

    if (!formIsValid) {
      setErrors(newErrors);
    } else {
      // Submit the form (or handle the form data)
      console.log('Form submitted successfully', { state, name, city, address, zip, phone, email });
      alert('Form submitted successfully', { state, name, city, address, zip, phone, email })
    }
  };

  return (
  <>
  <div className='desktopversion'>
  <div className="container-main">
<div className="dropdownitems">
<Dropdown>
      <Dropdown.Toggle variant="" className='dropdowncover' id="dropdown-basic">
       <img src='/images/english.png' className='falgsimage'></img> Select Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="dropdown-item-custom">  <img src='/images/english.png' className='falgsimage'></img>English</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="dropdown-item-custom">  <img src='/images/portugusee.png' className='falgsimage'></img> Español</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="dropdown-item-custom"> <img src='/images/Brazil.png' className='falgsimage'></img> Português</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
<div className="registrationarea">
  <div className="logoimagecontainer">
  <img src="/images/Logo.png" alt="logo"></img>

  </div>
  <div className="textheading">Preencha o formulário para</div>
  <div className="descriptiontext">concorrer ao sorteio</div>
  <div className="coverofallinput">
    <div className="oneinput"           style={{ borderColor: errors.name ? 'red' : '' }}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M8.91631 11.8017C12.0027 11.8017 14.4718 9.30226 14.4718 6.24411C14.4718 3.18597 11.9733 0.686523 8.91631 0.686523C5.85933 0.686523 3.36084 3.18597 3.36084 6.24411C3.36084 9.33166 5.85933 11.8017 8.91631 11.8017ZM8.91631 2.50965C10.9739 2.50965 12.62 4.18575 12.62 6.21471C12.62 8.24367 10.9445 9.91977 8.91631 9.91977C6.88812 9.91977 5.21266 8.24367 5.21266 6.21471C5.21266 4.18575 6.88812 2.50965 8.91631 2.50965Z" fill="#5F616E"/>
  <path d="M8.9165 13.6543C4.30164 13.6543 0.568604 17.3888 0.568604 22.0054C0.568604 22.5053 0.980119 22.9464 1.50921 22.9464C2.0383 22.9464 2.44982 22.5347 2.44982 22.0054C2.44982 18.4179 5.35983 15.5068 8.94589 15.5068C12.532 15.5068 15.442 18.4179 15.442 22.0054C15.442 22.5053 15.8535 22.9464 16.3826 22.9464C16.9117 22.9464 17.3232 22.5347 17.3232 22.0054C17.3232 17.3888 13.5901 13.6543 8.97529 13.6543H8.9165Z" fill="#5F616E"/>
</svg>Nome: <input onChange={(e)=>{setName(e.target.value)}} value={name} className="inputfeilds"></input>
    </div>
    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

    <div className="oneinput" style={{ borderColor: errors.address ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
  <path d="M8.9165 0.967285C4.30164 0.967285 0.568604 4.70175 0.568604 9.31837C0.568604 13.6998 7.32922 19.5514 8.12286 20.1983L8.9165 20.8746L9.71014 20.1983C10.4744 19.5514 17.2644 13.6998 17.2644 9.31837C17.2644 4.70175 13.5314 0.967285 8.9165 0.967285ZM8.9165 17.6106C6.38862 15.2876 3.06709 11.5238 3.06709 9.34778C3.06709 6.11321 5.68316 3.49614 8.9165 3.49614C12.1498 3.49614 14.7659 6.11321 14.7659 9.34778C14.7659 11.5532 11.4444 15.317 8.9165 17.6401V17.6106Z" fill="#5F616E"/>
  <path d="M8.91646 11.7591C10.2963 11.7591 11.415 10.6401 11.415 9.25969C11.415 7.87929 10.2963 6.76025 8.91646 6.76025C7.53658 6.76025 6.41797 7.87929 6.41797 9.25969C6.41797 10.6401 7.53658 11.7591 8.91646 11.7591Z" fill="#5F616E"/>
</svg>Endereco: <input className="inputfeilds" onChange={(e)=>{setAddress(e.target.value)}} value={address}></input>
    </div>
    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

    <div className="oneinput" style={{ borderColor: errors.city ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path d="M9.6971 0.470539C9.168 5.48288e-05 8.37437 5.48288e-05 7.84528 0.470539L0.437988 7.14552V14.3792C0.437988 15.6142 1.43738 16.614 2.67193 16.614H14.9292C16.1638 16.614 17.1632 15.6142 17.1632 14.3792V7.14552L9.75589 0.470539H9.6971ZM10.8729 15.2026H6.69891V11.7033C6.69891 10.5565 7.63952 9.61557 8.78588 9.61557C9.93225 9.61557 10.8729 10.5565 10.8729 11.7033V15.2026ZM15.7229 14.3792C15.7229 14.8497 15.3407 15.2026 14.8998 15.2026H12.2544V11.7033C12.2544 9.792 10.6965 8.23352 8.78588 8.23352C6.87527 8.23352 5.31739 9.792 5.31739 11.7033V15.2026H2.67193C2.20163 15.2026 1.8489 14.8203 1.8489 14.3792V7.76305L8.81528 1.49972L15.7817 7.76305V14.3792H15.7229Z" fill="#5F616E"/>
</svg>Ciudade: <input className="inputfeilds" onChange={(e)=>{setCity(e.target.value)}} value={city}></input>
    </div>
    {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}

    <div className="oneinput" style={{ borderColor: errors.state ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="125" height="18" viewBox="0 0 125 18" fill="none">
  <path d="M123.912 5.53076L116.182 13.2644L108.451 5.53076" stroke="#5F616E" stroke-width="1.5" stroke-miterlimit="10"/>
  <path d="M51.0304 16.7029C49.8546 16.7029 48.8846 16.497 48.0616 16.056C47.2385 15.6149 46.6213 14.9974 46.1804 14.174C45.7394 13.3507 45.5337 12.3509 45.5337 11.1747V2.58838H48.091V11.1747C48.091 12.2333 48.3261 12.9978 48.7964 13.4977C49.2667 13.9976 50.0016 14.2328 51.0304 14.2328C51.677 14.2328 52.2061 14.1446 52.647 13.9388C53.088 13.7329 53.4113 13.4095 53.617 12.939C53.8228 12.4979 53.9404 11.9099 53.9404 11.1747V2.58838H56.527V11.1747C56.527 12.1451 56.3801 12.9979 56.0861 13.7036C55.7922 14.4093 55.4101 14.968 54.9104 15.409C54.4107 15.8501 53.8228 16.1736 53.1467 16.3794C52.4707 16.5853 51.7652 16.7029 51.0304 16.7029Z" fill="#5F616E"/>
  <path d="M64.2576 16.7028C63.4051 16.7028 62.6115 16.5558 61.9061 16.2323C61.2006 15.9383 60.5833 15.4972 60.0836 14.9385C59.5839 14.3798 59.2018 13.7329 58.9373 12.9683L61.2594 12.1156C61.5533 12.7625 61.9648 13.2624 62.4939 13.674C63.023 14.0857 63.6403 14.2916 64.287 14.2916C64.9924 14.2916 65.5509 14.1445 65.9624 13.8505C66.3739 13.5564 66.5797 13.1154 66.5797 12.5567C66.5797 12.1744 66.4621 11.8509 66.1976 11.5863C65.9624 11.3216 65.6097 11.0864 65.1982 10.9099C64.7867 10.7335 64.3164 10.5277 63.7873 10.3513C63.2876 10.1748 62.7585 9.99838 62.2588 9.76314C61.7297 9.5573 61.2594 9.29267 60.8479 8.99862C60.407 8.70456 60.0836 8.29291 59.8191 7.82243C59.5545 7.35194 59.437 6.7638 59.437 6.08748C59.437 5.41116 59.6133 4.79368 59.9954 4.20557C60.3776 3.61747 60.8773 3.17639 61.5827 2.85293C62.2882 2.50007 63.1112 2.35303 64.0812 2.35303C64.8748 2.35303 65.6097 2.50005 66.227 2.7647C66.8442 3.02935 67.3733 3.41163 67.7848 3.88211C68.1964 4.3526 68.4903 4.88189 68.6373 5.47L66.3445 6.23452C66.1682 5.82284 65.8742 5.46998 65.4921 5.17593C65.11 4.88188 64.6103 4.76426 63.9636 4.76426C63.3464 4.76426 62.8761 4.88186 62.5527 5.1171C62.2294 5.35235 62.053 5.70524 62.053 6.11692C62.053 6.41097 62.1706 6.6756 62.4057 6.88144C62.6409 7.08727 62.9348 7.26371 63.317 7.44014C63.6991 7.61657 64.14 7.7636 64.6397 7.94003C65.1982 8.11646 65.7273 8.32231 66.2858 8.55756C66.8442 8.7928 67.3145 9.08683 67.7848 9.41029C68.2258 9.73375 68.5785 10.1748 68.8724 10.6747C69.137 11.1746 69.2839 11.7921 69.2839 12.4978C69.2839 13.38 69.0782 14.1446 68.6373 14.7621C68.1964 15.3796 67.6085 15.85 66.8736 16.1735C66.1388 16.497 65.2864 16.6734 64.3458 16.6734L64.2576 16.7028Z" fill="#5F616E"/>
  <path d="M70.3423 16.4676L75.6332 2.58838H78.0729L83.3638 16.4676H80.6008L79.5132 13.5271H74.2223L73.1347 16.4676H70.3717H70.3423ZM75.0159 11.1747H78.6314L77.2499 7.46964C77.2499 7.46964 77.1617 7.23443 77.1029 7.0874C77.0441 6.94037 77.0147 6.82275 76.9559 6.67573C76.8971 6.5287 76.8678 6.41107 76.8384 6.29344C76.809 6.41107 76.7502 6.5287 76.7208 6.67573C76.662 6.82275 76.6326 6.96978 76.5738 7.0874C76.515 7.23443 76.4856 7.35202 76.4268 7.46964L75.0159 11.1747Z" fill="#5F616E"/>
  <path d="M27.3528 0.0917969H0.222168V17.5879H27.3528V0.0917969Z" fill="white"/>
  <path d="M27.3528 0.0917969H0.222168V2.97352H27.3528V0.0917969Z" fill="#E20C49"/>
  <path d="M27.3528 4.97314H0.222168V7.85485H27.3528V4.97314Z" fill="#E20C49"/>
  <path d="M27.3528 9.85449H0.222168V12.7362H27.3528V9.85449Z" fill="#E20C49"/>
  <path d="M27.3528 14.7354H0.222168V17.6171H27.3528V14.7354Z" fill="#E20C49"/>
  <path d="M13.0967 0.0917969H0.222168V9.82492H13.0967V0.0917969Z" fill="#274893"/>
  <path d="M2.04447 1.53271L2.30901 2.06201L2.89689 2.15022L2.45598 2.56189L2.57356 3.1206L2.04447 2.85594L1.54477 3.1206L1.63295 2.56189L1.22144 2.15022L1.77992 2.06201L2.04447 1.53271Z" fill="white"/>
  <path d="M5.18973 1.53271L5.45428 2.06201L6.01276 2.15022L5.60125 2.56189L5.68943 3.1206L5.18973 2.85594L4.66064 3.1206L4.77822 2.56189L4.3667 2.15022L4.92518 2.06201L5.18973 1.53271Z" fill="white"/>
  <path d="M8.33485 1.53271L8.57 2.06201L9.15788 2.15022L8.74636 2.56189L8.83454 3.1206L8.33485 2.85594L7.80575 3.1206L7.89394 2.56189L7.48242 2.15022L8.0703 2.06201L8.33485 1.53271Z" fill="white"/>
  <path d="M11.4505 1.53271L11.715 2.06201L12.3029 2.15022L11.8914 2.56189L11.9796 3.1206L11.4505 2.85594L10.9508 3.1206L11.039 2.56189L10.6274 2.15022L11.2153 2.06201L11.4505 1.53271Z" fill="white"/>
  <path d="M2.04447 4.00244L2.30901 4.53176L2.89689 4.61997L2.45598 5.03164L2.57356 5.59035L2.04447 5.32567L1.54477 5.59035L1.63295 5.03164L1.22144 4.61997L1.77992 4.53176L2.04447 4.00244Z" fill="white"/>
  <path d="M5.18973 4.00244L5.45428 4.53176L6.01276 4.61997L5.60125 5.03164L5.68943 5.59035L5.18973 5.32567L4.66064 5.59035L4.77822 5.03164L4.3667 4.61997L4.92518 4.53176L5.18973 4.00244Z" fill="white"/>
  <path d="M8.33485 4.00244L8.57 4.53176L9.15788 4.61997L8.74636 5.03164L8.83454 5.59035L8.33485 5.32567L7.80575 5.59035L7.89394 5.03164L7.48242 4.61997L8.0703 4.53176L8.33485 4.00244Z" fill="white"/>
  <path d="M11.4505 4.00244L11.715 4.53176L12.3029 4.61997L11.8914 5.03164L11.9796 5.59035L11.4505 5.32567L10.9508 5.59035L11.039 5.03164L10.6274 4.61997L11.2153 4.53176L11.4505 4.00244Z" fill="white"/>
  <path d="M2.04447 6.50195L2.30901 7.00184L2.89689 7.09005L2.45598 7.50172L2.57356 8.06043L2.04447 7.79579L1.54477 8.06043L1.63295 7.50172L1.22144 7.09005L1.77992 7.00184L2.04447 6.50195Z" fill="white"/>
  <path d="M5.18973 6.50195L5.45428 7.00184L6.01276 7.09005L5.60125 7.50172L5.68943 8.06043L5.18973 7.79579L4.66064 8.06043L4.77822 7.50172L4.3667 7.09005L4.92518 7.00184L5.18973 6.50195Z" fill="white"/>
  <path d="M8.33485 6.50195L8.57 7.00184L9.15788 7.09005L8.74636 7.50172L8.83454 8.06043L8.33485 7.79579L7.80575 8.06043L7.89394 7.50172L7.48242 7.09005L8.0703 7.00184L8.33485 6.50195Z" fill="white"/>
  <path d="M11.4505 6.50195L11.715 7.00184L12.3029 7.09005L11.8914 7.50172L11.9796 8.06043L11.4505 7.79579L10.9508 8.06043L11.039 7.50172L10.6274 7.09005L11.2153 7.00184L11.4505 6.50195Z" fill="white"/>
</svg>       <Select
    options={stateOptions}
    value={stateOptions.find((option) => option.value === state)} // Ensure correct display of selected state
    onChange={handleStateChange}
    placeholder="Estado"
    styles={customStyles}
  />
    </div>
    {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}

    <div className="oneinput" style={{ borderColor: errors.zip ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M8.91631 11.8017C12.0027 11.8017 14.4718 9.30226 14.4718 6.24411C14.4718 3.18597 11.9733 0.686523 8.91631 0.686523C5.85933 0.686523 3.36084 3.18597 3.36084 6.24411C3.36084 9.33166 5.85933 11.8017 8.91631 11.8017ZM8.91631 2.50965C10.9739 2.50965 12.62 4.18575 12.62 6.21471C12.62 8.24367 10.9445 9.91977 8.91631 9.91977C6.88812 9.91977 5.21266 8.24367 5.21266 6.21471C5.21266 4.18575 6.88812 2.50965 8.91631 2.50965Z" fill="#5F616E"/>
  <path d="M8.9165 13.6543C4.30164 13.6543 0.568604 17.3888 0.568604 22.0054C0.568604 22.5053 0.980119 22.9464 1.50921 22.9464C2.0383 22.9464 2.44982 22.5347 2.44982 22.0054C2.44982 18.4179 5.35983 15.5068 8.94589 15.5068C12.532 15.5068 15.442 18.4179 15.442 22.0054C15.442 22.5053 15.8535 22.9464 16.3826 22.9464C16.9117 22.9464 17.3232 22.5347 17.3232 22.0054C17.3232 17.3888 13.5901 13.6543 8.97529 13.6543H8.9165Z" fill="#5F616E"/>
</svg>Zipcode: <input className="inputfeilds" onChange={(e)=>{setZip(e.target.value)}} value={zip}></input>
    </div>
    {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}

    <div className="oneinput" style={{ borderColor: errors.phone ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M18.3691 8.77913C17.9576 8.77913 17.6048 8.42629 17.6048 8.01461C17.6048 4.63301 14.8712 1.89833 11.4615 1.86893C11.05 1.86893 10.6972 1.51604 10.6972 1.10436C10.6972 0.69269 11.05 0.339844 11.4615 0.339844C15.6942 0.339844 19.1333 3.78026 19.1333 8.01461C19.1333 8.42629 18.7806 8.77913 18.3691 8.77913ZM16.0763 8.01461C16.0763 5.48576 14.0188 3.4274 11.4909 3.4274C11.0794 3.4274 10.7266 3.78025 10.7266 4.19192C10.7266 4.6036 11.0794 4.95644 11.4909 4.95644C13.1957 4.95644 14.5479 6.33851 14.5479 8.01461C14.5479 8.42629 14.9006 8.77913 15.3121 8.77913C15.7236 8.77913 16.0763 8.42629 16.0763 8.01461ZM17.7518 17.3361L18.4573 16.5421C19.3685 15.6011 19.3685 14.1015 18.4573 13.1899L16.576 11.7491C15.6648 10.8669 14.2245 10.8669 13.2839 11.7491L11.8142 12.9841C9.4039 11.9843 7.49329 10.073 6.4939 7.66176L7.72845 6.1915C8.61027 5.27994 8.61027 3.83905 7.72845 2.89808C7.72845 2.89808 6.31753 1.04559 6.28814 1.04559C5.37693 0.134023 3.90723 0.104589 2.96662 1.01615L2.0848 1.78072C-3.11794 7.80879 8.08117 18.9533 14.3421 18.7475C15.606 18.7475 16.8406 18.2476 17.7224 17.3361H17.7518Z" fill="#5F616E"/>
</svg>Celular: <input className="inputfeilds" onChange={(e)=>{setPhone(e.target.value)}} value={phone}></input>
    </div>
    {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

    <div className="oneinput" style={{ borderColor: errors.email ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
  <path d="M13.6197 0.104492H4.56634C2.44997 0.104492 0.745117 1.81 0.745117 3.92718V11.5726C0.745117 13.6897 2.44997 15.3953 4.56634 15.3953H13.6197C15.7361 15.3953 17.4409 13.6897 17.4409 11.5726V3.92718C17.4409 1.81 15.7361 0.104492 13.6197 0.104492ZM13.6197 2.19228C14.0312 2.19228 14.4427 2.33929 14.7661 2.63334L10.2394 7.16178C9.59271 7.77929 8.59331 7.77929 7.94665 7.16178L3.41997 2.63334C3.7433 2.33929 4.12543 2.19228 4.56634 2.19228H13.6197ZM13.6197 13.3075H4.56634C3.59634 13.3075 2.83209 12.5429 2.83209 11.5726V4.98577L6.47695 8.63204C7.91725 10.0729 10.2688 10.0729 11.7091 8.63204L15.3539 4.98577V11.5726C15.3539 12.5429 14.5897 13.3075 13.6197 13.3075Z" fill="#5F616E"/>
</svg>E-mail: <input className="inputfeilds" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
    </div>
    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

    <div className='forboxes'>
        <div className='checkbox'>
          {
            agree ? (<img src='/images/checked.png' className='boxcheck' onClick={()=>{setAgree(false)}} alt='box'></img>):(<img src='/images/box.png' onClick={()=>{setAgree(true)}} className='boxcheck' alt='box'></img>)
          }
    &nbsp;&nbsp;&nbsp;Estoy de acuerdo con los <span className='condtions'>Términos y Condiciones.</span>
    </div>
    {errors.agree && <p style={{ color: 'red' }}>{errors.agree}</p>}

    <div className='checkbox'>
    {
            confirm ? (<img src='/images/checked.png' onClick={()=>{setConfirm(false)}} className='boxcheck' alt='box'></img>):(<img src='/images/box.png' onClick={()=>{setConfirm(true)}} className='boxcheck' alt='box'></img>)
          } &nbsp;&nbsp; Confirmo que resido legalmente en los Estados Unidos.
    </div>
    {errors.confirm && <p style={{ color: 'red' }}>{errors.confirm}</p>}

    </div>
  <div onClick={handleSubmit} className='registerbox'>
  Quero participar
  </div>
  <div className='socialicons'>
    <div className='insta'>
<img src='/images/instagram.png' alt='instaimage'></img> &nbsp; Instagram
    </div>
    <div className='insta'>
    <img src='/images/facebook.png' alt='instaimage'></img> &nbsp; facebook
      </div>
  </div>
  </div>
</div>
 <div className='forback' >
  <div className='forflex'>
  <div className='largeimage'>
        <img src='/images/cdlpt.png' alt='largeima' />
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div className='positioning'>
      <div className='contenttitle'> Concorra todo<span></span>mês a uma CDL  <span>totalmente grátis!</span>
      <svg className='marker' xmlns="http://www.w3.org/2000/svg" width="273" height="103" viewBox="0 0 273 103" fill="none">
  <path d="M250.192 101.614C231.495 55.9807 164.299 -26.0167 45.0869 11.063C-103.928 57.4127 174.432 128.295 271.469 26.0337" stroke="#FCAF3D" stroke-width="3"/>
</svg>
      </div>
      <img src='/images/personlisence.png' alt='instaimage'></img> 

      </div>

  </div>
     

    </div>
    <div></div>
  </div>
  </div>
  <div className='mobileversion'>
<div className='mainmobile'>
  <div className='anotherback'>

 
  <div className='dropdownitem'>
  <Dropdown>
      <Dropdown.Toggle variant="" className='dropdowncover' id="dropdown-basic">
       <img src='/images/english.png' className='falgsimage'></img> Select Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" className="dropdown-item-custom">  <img src='/images/english.png' className='falgsimage'></img>English</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="dropdown-item-custom">  <img src='/images/portugusee.png' className='falgsimage'></img> Español</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="dropdown-item-custom"> <img src='/images/Brazil.png' className='falgsimage'></img> Português</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  </div>
<div className='centralimage'>
<img src="/images/personoffer.png" alt='person'></img>

</div>
<div className='centralimage'>
<div className='contenttitle'>Participate every month for a <span>100%</span>  FREE <span>CDL!</span></div>

   </div>
   <div className='centertext'>
   Draw Day
   </div>
   <CountdownTimer targetDate={targetDate} />
   <div className="coverofallinput">
    <div className='accountcreate'>Create your account</div>
    <div className='descriptiontext'>Let's create an account 
and start a wonderful journey</div>
    <div className="oneinput"           style={{ borderColor: errors.name ? 'red' : '' }}
>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M8.91631 11.8017C12.0027 11.8017 14.4718 9.30226 14.4718 6.24411C14.4718 3.18597 11.9733 0.686523 8.91631 0.686523C5.85933 0.686523 3.36084 3.18597 3.36084 6.24411C3.36084 9.33166 5.85933 11.8017 8.91631 11.8017ZM8.91631 2.50965C10.9739 2.50965 12.62 4.18575 12.62 6.21471C12.62 8.24367 10.9445 9.91977 8.91631 9.91977C6.88812 9.91977 5.21266 8.24367 5.21266 6.21471C5.21266 4.18575 6.88812 2.50965 8.91631 2.50965Z" fill="#5F616E"/>
  <path d="M8.9165 13.6543C4.30164 13.6543 0.568604 17.3888 0.568604 22.0054C0.568604 22.5053 0.980119 22.9464 1.50921 22.9464C2.0383 22.9464 2.44982 22.5347 2.44982 22.0054C2.44982 18.4179 5.35983 15.5068 8.94589 15.5068C12.532 15.5068 15.442 18.4179 15.442 22.0054C15.442 22.5053 15.8535 22.9464 16.3826 22.9464C16.9117 22.9464 17.3232 22.5347 17.3232 22.0054C17.3232 17.3888 13.5901 13.6543 8.97529 13.6543H8.9165Z" fill="#5F616E"/>
</svg> Name: <input onChange={(e)=>{setName(e.target.value)}} value={name} className="inputfeilds"></input>
    </div>
    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

    <div className="oneinput" style={{ borderColor: errors.address ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
  <path d="M8.9165 0.967285C4.30164 0.967285 0.568604 4.70175 0.568604 9.31837C0.568604 13.6998 7.32922 19.5514 8.12286 20.1983L8.9165 20.8746L9.71014 20.1983C10.4744 19.5514 17.2644 13.6998 17.2644 9.31837C17.2644 4.70175 13.5314 0.967285 8.9165 0.967285ZM8.9165 17.6106C6.38862 15.2876 3.06709 11.5238 3.06709 9.34778C3.06709 6.11321 5.68316 3.49614 8.9165 3.49614C12.1498 3.49614 14.7659 6.11321 14.7659 9.34778C14.7659 11.5532 11.4444 15.317 8.9165 17.6401V17.6106Z" fill="#5F616E"/>
  <path d="M8.91646 11.7591C10.2963 11.7591 11.415 10.6401 11.415 9.25969C11.415 7.87929 10.2963 6.76025 8.91646 6.76025C7.53658 6.76025 6.41797 7.87929 6.41797 9.25969C6.41797 10.6401 7.53658 11.7591 8.91646 11.7591Z" fill="#5F616E"/>
</svg> Address: <input className="inputfeilds" onChange={(e)=>{setAddress(e.target.value)}} value={address}></input>
    </div>
    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

    <div className="oneinput" style={{ borderColor: errors.city ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path d="M9.6971 0.470539C9.168 5.48288e-05 8.37437 5.48288e-05 7.84528 0.470539L0.437988 7.14552V14.3792C0.437988 15.6142 1.43738 16.614 2.67193 16.614H14.9292C16.1638 16.614 17.1632 15.6142 17.1632 14.3792V7.14552L9.75589 0.470539H9.6971ZM10.8729 15.2026H6.69891V11.7033C6.69891 10.5565 7.63952 9.61557 8.78588 9.61557C9.93225 9.61557 10.8729 10.5565 10.8729 11.7033V15.2026ZM15.7229 14.3792C15.7229 14.8497 15.3407 15.2026 14.8998 15.2026H12.2544V11.7033C12.2544 9.792 10.6965 8.23352 8.78588 8.23352C6.87527 8.23352 5.31739 9.792 5.31739 11.7033V15.2026H2.67193C2.20163 15.2026 1.8489 14.8203 1.8489 14.3792V7.76305L8.81528 1.49972L15.7817 7.76305V14.3792H15.7229Z" fill="#5F616E"/>
</svg> City: <input className="inputfeilds" onChange={(e)=>{setCity(e.target.value)}} value={city}></input>
    </div>
    {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}

    <div className="oneinput" style={{ borderColor: errors.state ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="125" height="18" viewBox="0 0 125 18" fill="none">
  <path d="M123.912 5.53076L116.182 13.2644L108.451 5.53076" stroke="#5F616E" stroke-width="1.5" stroke-miterlimit="10"/>
  <path d="M51.0304 16.7029C49.8546 16.7029 48.8846 16.497 48.0616 16.056C47.2385 15.6149 46.6213 14.9974 46.1804 14.174C45.7394 13.3507 45.5337 12.3509 45.5337 11.1747V2.58838H48.091V11.1747C48.091 12.2333 48.3261 12.9978 48.7964 13.4977C49.2667 13.9976 50.0016 14.2328 51.0304 14.2328C51.677 14.2328 52.2061 14.1446 52.647 13.9388C53.088 13.7329 53.4113 13.4095 53.617 12.939C53.8228 12.4979 53.9404 11.9099 53.9404 11.1747V2.58838H56.527V11.1747C56.527 12.1451 56.3801 12.9979 56.0861 13.7036C55.7922 14.4093 55.4101 14.968 54.9104 15.409C54.4107 15.8501 53.8228 16.1736 53.1467 16.3794C52.4707 16.5853 51.7652 16.7029 51.0304 16.7029Z" fill="#5F616E"/>
  <path d="M64.2576 16.7028C63.4051 16.7028 62.6115 16.5558 61.9061 16.2323C61.2006 15.9383 60.5833 15.4972 60.0836 14.9385C59.5839 14.3798 59.2018 13.7329 58.9373 12.9683L61.2594 12.1156C61.5533 12.7625 61.9648 13.2624 62.4939 13.674C63.023 14.0857 63.6403 14.2916 64.287 14.2916C64.9924 14.2916 65.5509 14.1445 65.9624 13.8505C66.3739 13.5564 66.5797 13.1154 66.5797 12.5567C66.5797 12.1744 66.4621 11.8509 66.1976 11.5863C65.9624 11.3216 65.6097 11.0864 65.1982 10.9099C64.7867 10.7335 64.3164 10.5277 63.7873 10.3513C63.2876 10.1748 62.7585 9.99838 62.2588 9.76314C61.7297 9.5573 61.2594 9.29267 60.8479 8.99862C60.407 8.70456 60.0836 8.29291 59.8191 7.82243C59.5545 7.35194 59.437 6.7638 59.437 6.08748C59.437 5.41116 59.6133 4.79368 59.9954 4.20557C60.3776 3.61747 60.8773 3.17639 61.5827 2.85293C62.2882 2.50007 63.1112 2.35303 64.0812 2.35303C64.8748 2.35303 65.6097 2.50005 66.227 2.7647C66.8442 3.02935 67.3733 3.41163 67.7848 3.88211C68.1964 4.3526 68.4903 4.88189 68.6373 5.47L66.3445 6.23452C66.1682 5.82284 65.8742 5.46998 65.4921 5.17593C65.11 4.88188 64.6103 4.76426 63.9636 4.76426C63.3464 4.76426 62.8761 4.88186 62.5527 5.1171C62.2294 5.35235 62.053 5.70524 62.053 6.11692C62.053 6.41097 62.1706 6.6756 62.4057 6.88144C62.6409 7.08727 62.9348 7.26371 63.317 7.44014C63.6991 7.61657 64.14 7.7636 64.6397 7.94003C65.1982 8.11646 65.7273 8.32231 66.2858 8.55756C66.8442 8.7928 67.3145 9.08683 67.7848 9.41029C68.2258 9.73375 68.5785 10.1748 68.8724 10.6747C69.137 11.1746 69.2839 11.7921 69.2839 12.4978C69.2839 13.38 69.0782 14.1446 68.6373 14.7621C68.1964 15.3796 67.6085 15.85 66.8736 16.1735C66.1388 16.497 65.2864 16.6734 64.3458 16.6734L64.2576 16.7028Z" fill="#5F616E"/>
  <path d="M70.3423 16.4676L75.6332 2.58838H78.0729L83.3638 16.4676H80.6008L79.5132 13.5271H74.2223L73.1347 16.4676H70.3717H70.3423ZM75.0159 11.1747H78.6314L77.2499 7.46964C77.2499 7.46964 77.1617 7.23443 77.1029 7.0874C77.0441 6.94037 77.0147 6.82275 76.9559 6.67573C76.8971 6.5287 76.8678 6.41107 76.8384 6.29344C76.809 6.41107 76.7502 6.5287 76.7208 6.67573C76.662 6.82275 76.6326 6.96978 76.5738 7.0874C76.515 7.23443 76.4856 7.35202 76.4268 7.46964L75.0159 11.1747Z" fill="#5F616E"/>
  <path d="M27.3528 0.0917969H0.222168V17.5879H27.3528V0.0917969Z" fill="white"/>
  <path d="M27.3528 0.0917969H0.222168V2.97352H27.3528V0.0917969Z" fill="#E20C49"/>
  <path d="M27.3528 4.97314H0.222168V7.85485H27.3528V4.97314Z" fill="#E20C49"/>
  <path d="M27.3528 9.85449H0.222168V12.7362H27.3528V9.85449Z" fill="#E20C49"/>
  <path d="M27.3528 14.7354H0.222168V17.6171H27.3528V14.7354Z" fill="#E20C49"/>
  <path d="M13.0967 0.0917969H0.222168V9.82492H13.0967V0.0917969Z" fill="#274893"/>
  <path d="M2.04447 1.53271L2.30901 2.06201L2.89689 2.15022L2.45598 2.56189L2.57356 3.1206L2.04447 2.85594L1.54477 3.1206L1.63295 2.56189L1.22144 2.15022L1.77992 2.06201L2.04447 1.53271Z" fill="white"/>
  <path d="M5.18973 1.53271L5.45428 2.06201L6.01276 2.15022L5.60125 2.56189L5.68943 3.1206L5.18973 2.85594L4.66064 3.1206L4.77822 2.56189L4.3667 2.15022L4.92518 2.06201L5.18973 1.53271Z" fill="white"/>
  <path d="M8.33485 1.53271L8.57 2.06201L9.15788 2.15022L8.74636 2.56189L8.83454 3.1206L8.33485 2.85594L7.80575 3.1206L7.89394 2.56189L7.48242 2.15022L8.0703 2.06201L8.33485 1.53271Z" fill="white"/>
  <path d="M11.4505 1.53271L11.715 2.06201L12.3029 2.15022L11.8914 2.56189L11.9796 3.1206L11.4505 2.85594L10.9508 3.1206L11.039 2.56189L10.6274 2.15022L11.2153 2.06201L11.4505 1.53271Z" fill="white"/>
  <path d="M2.04447 4.00244L2.30901 4.53176L2.89689 4.61997L2.45598 5.03164L2.57356 5.59035L2.04447 5.32567L1.54477 5.59035L1.63295 5.03164L1.22144 4.61997L1.77992 4.53176L2.04447 4.00244Z" fill="white"/>
  <path d="M5.18973 4.00244L5.45428 4.53176L6.01276 4.61997L5.60125 5.03164L5.68943 5.59035L5.18973 5.32567L4.66064 5.59035L4.77822 5.03164L4.3667 4.61997L4.92518 4.53176L5.18973 4.00244Z" fill="white"/>
  <path d="M8.33485 4.00244L8.57 4.53176L9.15788 4.61997L8.74636 5.03164L8.83454 5.59035L8.33485 5.32567L7.80575 5.59035L7.89394 5.03164L7.48242 4.61997L8.0703 4.53176L8.33485 4.00244Z" fill="white"/>
  <path d="M11.4505 4.00244L11.715 4.53176L12.3029 4.61997L11.8914 5.03164L11.9796 5.59035L11.4505 5.32567L10.9508 5.59035L11.039 5.03164L10.6274 4.61997L11.2153 4.53176L11.4505 4.00244Z" fill="white"/>
  <path d="M2.04447 6.50195L2.30901 7.00184L2.89689 7.09005L2.45598 7.50172L2.57356 8.06043L2.04447 7.79579L1.54477 8.06043L1.63295 7.50172L1.22144 7.09005L1.77992 7.00184L2.04447 6.50195Z" fill="white"/>
  <path d="M5.18973 6.50195L5.45428 7.00184L6.01276 7.09005L5.60125 7.50172L5.68943 8.06043L5.18973 7.79579L4.66064 8.06043L4.77822 7.50172L4.3667 7.09005L4.92518 7.00184L5.18973 6.50195Z" fill="white"/>
  <path d="M8.33485 6.50195L8.57 7.00184L9.15788 7.09005L8.74636 7.50172L8.83454 8.06043L8.33485 7.79579L7.80575 8.06043L7.89394 7.50172L7.48242 7.09005L8.0703 7.00184L8.33485 6.50195Z" fill="white"/>
  <path d="M11.4505 6.50195L11.715 7.00184L12.3029 7.09005L11.8914 7.50172L11.9796 8.06043L11.4505 7.79579L10.9508 8.06043L11.039 7.50172L10.6274 7.09005L11.2153 7.00184L11.4505 6.50195Z" fill="white"/>
</svg>       <Select
    options={stateOptions}
    value={stateOptions.find((option) => option.value === state)} // Ensure correct display of selected state
    onChange={handleStateChange}
    placeholder="State"
    styles={customStyles}
  />
    </div>
    {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}

    <div className="oneinput" style={{ borderColor: errors.zip ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M8.91631 11.8017C12.0027 11.8017 14.4718 9.30226 14.4718 6.24411C14.4718 3.18597 11.9733 0.686523 8.91631 0.686523C5.85933 0.686523 3.36084 3.18597 3.36084 6.24411C3.36084 9.33166 5.85933 11.8017 8.91631 11.8017ZM8.91631 2.50965C10.9739 2.50965 12.62 4.18575 12.62 6.21471C12.62 8.24367 10.9445 9.91977 8.91631 9.91977C6.88812 9.91977 5.21266 8.24367 5.21266 6.21471C5.21266 4.18575 6.88812 2.50965 8.91631 2.50965Z" fill="#5F616E"/>
  <path d="M8.9165 13.6543C4.30164 13.6543 0.568604 17.3888 0.568604 22.0054C0.568604 22.5053 0.980119 22.9464 1.50921 22.9464C2.0383 22.9464 2.44982 22.5347 2.44982 22.0054C2.44982 18.4179 5.35983 15.5068 8.94589 15.5068C12.532 15.5068 15.442 18.4179 15.442 22.0054C15.442 22.5053 15.8535 22.9464 16.3826 22.9464C16.9117 22.9464 17.3232 22.5347 17.3232 22.0054C17.3232 17.3888 13.5901 13.6543 8.97529 13.6543H8.9165Z" fill="#5F616E"/>
</svg> Zipcode: <input className="inputfeilds" onChange={(e)=>{setZip(e.target.value)}} value={zip}></input>
    </div>
    {errors.zip && <p style={{ color: 'red' }}>{errors.zip}</p>}

    <div className="oneinput" style={{ borderColor: errors.phone ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M18.3691 8.77913C17.9576 8.77913 17.6048 8.42629 17.6048 8.01461C17.6048 4.63301 14.8712 1.89833 11.4615 1.86893C11.05 1.86893 10.6972 1.51604 10.6972 1.10436C10.6972 0.69269 11.05 0.339844 11.4615 0.339844C15.6942 0.339844 19.1333 3.78026 19.1333 8.01461C19.1333 8.42629 18.7806 8.77913 18.3691 8.77913ZM16.0763 8.01461C16.0763 5.48576 14.0188 3.4274 11.4909 3.4274C11.0794 3.4274 10.7266 3.78025 10.7266 4.19192C10.7266 4.6036 11.0794 4.95644 11.4909 4.95644C13.1957 4.95644 14.5479 6.33851 14.5479 8.01461C14.5479 8.42629 14.9006 8.77913 15.3121 8.77913C15.7236 8.77913 16.0763 8.42629 16.0763 8.01461ZM17.7518 17.3361L18.4573 16.5421C19.3685 15.6011 19.3685 14.1015 18.4573 13.1899L16.576 11.7491C15.6648 10.8669 14.2245 10.8669 13.2839 11.7491L11.8142 12.9841C9.4039 11.9843 7.49329 10.073 6.4939 7.66176L7.72845 6.1915C8.61027 5.27994 8.61027 3.83905 7.72845 2.89808C7.72845 2.89808 6.31753 1.04559 6.28814 1.04559C5.37693 0.134023 3.90723 0.104589 2.96662 1.01615L2.0848 1.78072C-3.11794 7.80879 8.08117 18.9533 14.3421 18.7475C15.606 18.7475 16.8406 18.2476 17.7224 17.3361H17.7518Z" fill="#5F616E"/>
</svg> Phone: <input className="inputfeilds" onChange={(e)=>{setPhone(e.target.value)}} value={phone}></input>
    </div>
    {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

    <div className="oneinput" style={{ borderColor: errors.email ? 'red' : '' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
  <path d="M13.6197 0.104492H4.56634C2.44997 0.104492 0.745117 1.81 0.745117 3.92718V11.5726C0.745117 13.6897 2.44997 15.3953 4.56634 15.3953H13.6197C15.7361 15.3953 17.4409 13.6897 17.4409 11.5726V3.92718C17.4409 1.81 15.7361 0.104492 13.6197 0.104492ZM13.6197 2.19228C14.0312 2.19228 14.4427 2.33929 14.7661 2.63334L10.2394 7.16178C9.59271 7.77929 8.59331 7.77929 7.94665 7.16178L3.41997 2.63334C3.7433 2.33929 4.12543 2.19228 4.56634 2.19228H13.6197ZM13.6197 13.3075H4.56634C3.59634 13.3075 2.83209 12.5429 2.83209 11.5726V4.98577L6.47695 8.63204C7.91725 10.0729 10.2688 10.0729 11.7091 8.63204L15.3539 4.98577V11.5726C15.3539 12.5429 14.5897 13.3075 13.6197 13.3075Z" fill="#5F616E"/>
</svg> Email: <input className="inputfeilds" onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
    </div>
    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

    <div className='forboxes'>
        <div className='checkbox'>
          {
            agree ? (<img src='/images/checked.png' className='boxcheck' onClick={()=>{setAgree(false)}} alt='box'></img>):(<img src='/images/box.png' onClick={()=>{setAgree(true)}} className='boxcheck' alt='box'></img>)
          }
    &nbsp;&nbsp;&nbsp;I agree with the <span className='condtions'>Terms and Conditions.</span>
    </div>
    {errors.agree && <p style={{ color: 'red' }}>{errors.agree}</p>}

    <div className='checkbox'>
    {
            confirm ? (<img src='/images/checked.png' onClick={()=>{setConfirm(false)}} className='boxcheck' alt='box'></img>):(<img src='/images/box.png' onClick={()=>{setConfirm(true)}} className='boxcheck' alt='box'></img>)
          } &nbsp;&nbsp; I agree with the Terms and Conditions.
    </div>
    {errors.confirm && <p style={{ color: 'red' }}>{errors.confirm}</p>}

    </div>
  <div onClick={handleSubmit} className='registerbox'>
    Register
  </div>
  <div className='socialicons'>
    <div className='insta'>
<img src='/images/instagram.png' alt='instaimage'></img> &nbsp; Instagram
    </div>
    <div className='insta'>
    <img src='/images/facebook.png' alt='instaimage'></img> &nbsp; facebook
      </div>
  </div>
  <div className='termandconditions'>
  Terms and Conditions | Privacy Policy 
  </div>
  </div>
   </div>

</div>
  </div>
  </>
  );
}
