"use client"
import { useState } from 'react';
import Select from 'react-select';
import CountdownTimer from "../../../Components/Timer"
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

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
    <div className='backgroundvector'>
  <div className="container-main">
<div className="dropdownitems">
<img className='cdllogo' src="/images/Logo.png" alt="logo"></img>
  <div className="forlarger">
 

    <div className='contenttitle '>Concorra todo  <span>mês a uma CDL </span><span>totalmente grátis!</span>
      <svg className='marker' xmlns="http://www.w3.org/2000/svg" width="273" height="103" viewBox="0 0 273 103" fill="none">
  <path d="M250.192 101.614C231.495 55.9807 164.299 -26.0167 45.0869 11.063C-103.928 57.4127 174.432 128.295 271.469 26.0337" stroke="#FCAF3D" stroke-width="3"/>
</svg>
      </div>
<div className='doneimage'>
  <img src='/images/done.png'></img>
  <div className='infosent'>Information sent successfully</div>
  <div className='start'>Good Lucky!</div>
  <div className='backtohome'><Link href="/">Home</Link></div>
  <div className='timer'>        <CountdownTimer targetDate={targetDate} />
</div>

</div>
<div className='sociali'>
    <div className='insta'>
<img src='/images/instagram.png' className='socialimg' alt='instaimage'></img> &nbsp; Instagram
    </div>
    <div className='insta'>
    <img src='/images/facebook.png' className='socialimg' alt='instaimage'></img> &nbsp; facebook
      </div>
  </div>
  </div>
</div>

 <div className='forback' >
  <div className='forflex'>
  <div className='largeimage'>
        <img src='/images/mano.png' alt='largeima' />
      </div>
      <div className='personimg'>
  
      <img src='/images/personlisence.png' alt='instaimage'></img> 

      </div>

  </div>
     

    </div>
    <div></div>
  </div>
  </div>
  </div>
  <div className='mobileversion'>
<div className='mainmobile'>
  <div className='anotherback'>

 

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
   <div className='doneimage'>
  <img src='/images/done.png'></img>
  <div className='infosent'>Information sent successfully</div>
  <div className='start'>Now you can start your course</div>
  <div className='backtohome'> <Link href="/">Home</Link> </div>


</div>
<div className='termandconditions'>
  Terms and Conditions | Privacy Policy 
  </div>
   </div>

</div>
  </div>
  </>
  );
}
