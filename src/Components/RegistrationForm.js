import React, { Component } from 'react'
import PostData from '../../Components/FakeData/PostData.json'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



class Register extends Component {
    constructor(props) {
        super(props)


        this.state = {
            firstname: '',
            lastname: '',
            school: [],
            province: [],
            email: '',
            password: '',
            re_password: '',


        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSchoolName = (event) => {
        this.setState({
            school: event.target.value
        })
    }

    handleProvinceNameChange = (event) => {
        this.setState({
            province: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }


    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleRePasswordChange = (event) => {
        this.setState({
            re_password: event.target.value
        })
    }



    handleSubmit = event => {
        alert(`${this.state.firstname} ${this.state.lastname} ${this.state.school} ${this.state.province} ${this.state.email} ${this.state.password} ${this.state.re_password}`)
        //to avoid data lost when refresh
        event.preventDefault()
    }

    render() {
        const { firstname, lastname, school, province, email, password, re_password } = this.state
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <Container component="main" maxWidth="xs">
                    <div className="Header">Register</div>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstname"
                                label="First Name"
                                name="firstname"
                                autoComplete="firstname"
                                autoFocus
                                value={firstname}
                                onChange={this.handleFirstNameChange}
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lastname"
                                label="Last Name"
                                name="lastname"
                                autoComplete="lastname"
                                autoFocus
                                value={lastname}
                                onChange={this.handleLastName}
                            />
                        </div>
                        <div>
                            <InputLabel >School Name</InputLabel>
                            <Select
                                multiple
                                value={school}
                                onChange={this.handleSchoolName}
                                input={<Input />}
                            >
                                {PostData.map((element) => (
                                    <MenuItem key={element.id} value={element.SchoolName}>
                                        {element.SchoolName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <br />
                        <div>
                            <InputLabel >Province Name</InputLabel>
                            <Select
                                multiple
                                value={province}
                                onChange={this.handleSchoolName}
                                input={<Input />}
                            >
                                {PostData.map((element) => (
                                    <MenuItem key={element.id} value={element.ProvinceName}>
                                        {element.ProvinceName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                type="password"
                                label="Password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                                value={password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <div>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="re-password"
                                type="password"
                                label="Re enter password"
                                name="re-password"
                                autoComplete="re-password"
                                autoFocus
                                value={re_password}
                                onChange={this.handleRePasswordChange}
                            />
                        </div>
                        <br />
                        <Button type="submit" fullWidth variant="contained" color="secondary">
                            Register
                    </Button>
                    </form>
                </Container>
            </div >
        )
    }
}

export default Register
