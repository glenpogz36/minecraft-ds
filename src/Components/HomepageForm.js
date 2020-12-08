import React, { useState } from 'react';


import '../App.css';

import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import School from '../Data/county_schools.json'
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';







const HomepageForm = () => {

    const [uniqueCodeReg, setUniqueCodeReg] = useState("");
    const [school, setSchool] = useState([]);
    const [selectedCounty, setSelectedCountry] = useState("");
    const [selectedSchool, setSelectedSchool] = useState("");

    const RECAPTCHA_SITE_KEY = '6LcewPYZAAAAAEJiZns0fNgEkTZ_-eMiQigYLeZ_';
    const [captcha, setCaptcha] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');
    const [registerResponse, setRegisterResponse] = useState('');


    const countryList = Object.keys(School).map(key => ({
        name: key
    }));

    function handleCountiesSelect(e) {
        console.log("Selected country", e.target.value);
        const countrySel = e.target.value;
        const schoolSel = countrySel !== "" ? School[countrySel] : "";
        setSelectedCountry(countrySel);
        setSchool(schoolSel);
        setSelectedSchool("");
    }

    function handleSchoolSelect(e) {
        console.log("Selected School", e.target.value);
        const schoolSel = e.target.value;
        setSelectedSchool(schoolSel);
    }




    const handleCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const handleSubmit = async (e) => {
        setRegisterStatus('pending');
        e.preventDefault();
        e.persist();
        if (captcha) {
            const payload = {
                uniqueCode: uniqueCodeReg,
                provinceName: selectedCounty,
                schoolName: selectedSchool,
                captcha,
            };
            try {
                const { data } = await axios.post('http://localhost:3001/home', payload);

                if (data.success) {
                    setRegisterStatus('success')

                } else {
                    setRegisterStatus('error');
                }

                setRegisterResponse(data.message);
            } catch (error) {
                setRegisterStatus('error');
                setRegisterResponse('Error while registering!');
            }
        } else {
            setRegisterStatus('error');
            setRegisterResponse('Please select captcha');
            console.log('captcha not verified');
        }
    };


    return (
        <div className="Background-img">
            <Container className="container-form">

                <div className="home-form">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <h1>MINECRAFT Games School Registration</h1>
                        <h4>Enter your unique minecraft games code below to join:</h4>
                        <FormHelperText style={{ color: "red" }}>Required *</FormHelperText>
                        <TextField className="code-required"
                            required
                            onChange={(e) => {
                                setUniqueCodeReg(e.target.value);
                            }}
                            inputProps={{ maxLength: 20 }
                            }
                            type="password"
                        />

                        <h4>Pick your country and school from the list or just type in:</h4>

                        <div className="grid-container">
                            <Select className="select-province" value={selectedCounty} onChange={e => handleCountiesSelect(e)} displayEmpty>
                                <MenuItem value="">
                                    <em>Select the Province</em>
                                </MenuItem>

                                {countryList.map((province, key) => (
                                    <MenuItem key={key} value={province.name}>
                                        {province.name}
                                    </MenuItem>
                                ))}
                            </Select>


                            <div className="input-school" >
                                <Autocomplete

                                    options={school}
                                    getOptionLabel={(option) => option}
                                    renderInput={(params) => <TextField {...params} label="Type School Name" />}
                                />
                            </div>
                        </div>


                        <div className='recaptcha'>
                            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
                            <br />
                            <Button className="home-button" variant="contained" size="medium" color="primary" type="submit" disabled={registerStatus === 'pending'}>
                                {registerStatus === 'pending' ? 'Submitting form ...' : 'Submit'}
                            </Button>
                            {registerResponse !== '' ? (
                                <div className={`alert ${registerStatus === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {registerResponse}
                                </div>
                            ) : null}
                        </div>

                    </form>
                </div>
            </Container>

        </div>

    );
};

export default HomepageForm;
