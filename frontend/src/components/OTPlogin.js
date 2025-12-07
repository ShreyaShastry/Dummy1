import { Component } from "react";
import "./Login.css";
import { withRouter } from "./withRouter";

class OTPLogin extends Component {
  state = {
    email: "",
    otp: "",
    step: 1, // step 1 = enter email, step 2 = enter OTP
  };

  handleEmailSubmit = (e) => {
    e.preventDefault();
    this.setState({ step: 2 });
  };

  handleOtpSubmit = (e) => {
    e.preventDefault();
    alert("OTP verification logic will go here.");
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          {this.state.step === 1 && (
            <form onSubmit={this.handleEmailSubmit}>
              <h2>Login with Email</h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
              <button type="submit" className="otp-button">
                Continue
              </button>
            </form>
          )}

          {this.state.step === 2 && (
            <form onSubmit={this.handleOtpSubmit}>
              <h2>Enter OTP</h2>
              <input
                type="text"
                placeholder="Enter the OTP sent to your email"
                value={this.state.otp}
                onChange={(e) => this.setState({ otp: e.target.value })}
                required
              />
              <button type="submit" className="otp-button">
                Verify OTP
              </button>
            </form>
          )}

          <button
            className="back-button"
            onClick={() => this.props.navigate('/login')}
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(OTPLogin);