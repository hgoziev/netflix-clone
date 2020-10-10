import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../components/footer.css";
import { sphere } from "react-icons-kit/icomoon/sphere";
import { Icon } from "react-icons-kit/Icon";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import styled from "styled-components";

class FooterLogin extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    langContent: false,
  };
  handleToggle = (props) => {
    props.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };
  render() {
    return (
      <FooterContainer>
        <div className="footer_container">
          <span
            style={{ marginLeft: "15%", fontSize: "1.125rem", color: "#999" }}
          >
            Questions ? <Link>Contact us</Link>
          </span>

          <div className="footer_columns">
            <ul>
              <li>
                <Link>Gift Card Terms</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link>Terms of use</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link>Privacy Statement</Link>
              </li>
            </ul>
          </div>
          <div className="lang_btn" onClick={this.handleToggle}>
            <Icon icon={sphere} size={20} />
            English
            <Icon icon={ic_keyboard_arrow_down} />
          </div>

          {this.state.langContent && (
            <div className="lang_toggle">
              <ul>
                <li>Russian</li>
              </ul>
            </div>
          )}
        </div>
      </FooterContainer>
    );
  }
}

export default FooterLogin;

const FooterContainer = styled.div`
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  padding-top: 0;
  padding-bottom: 6rem;
  position: relative;
  z-index: 5;
  .footer_container {
    width: 80%;
    color: #999;
    margin: 1rem auto 0;
  }
  .lang_btn {
    margin-left: 15.6%;
    margin-top: 2rem;
    color: #999;
  }
  .lang_toggle {
    left: 7rem;
  }
`;
