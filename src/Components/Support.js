import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function Support() {

    const [fullname, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleFullName = (event) => {
        setFullName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <h1>Contact Us</h1>

                <h4>Connect with us or tell us about your next project.</h4>
                <h4>We can help you</h4>
                <form noValidate autoComplete="off">
                    <div >
                        <TextField
                            label="Full Name"
                            multiline
                            rowsMax={1}
                            value={fullname}
                            onChange={handleFullName}
                        />

                        <TextField
                            label="Email Address"
                            multiline
                            rowsMax={1}
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>

                    <TextField
                        label="Your Message"
                        multiline
                        rowsMax={10}
                        value={message}
                        onChange={handleMessage}
                    />
                    <br />
                    <br />
                    <Button variant="contained" size="medium" color="primary" type="submit" >
                        Submit
                    </Button>
                </form>


            </Container>
        </React.Fragment>
    );
}





