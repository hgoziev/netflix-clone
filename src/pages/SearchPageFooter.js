import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchFooter.css";
import { sphere } from "react-icons-kit/icomoon/sphere";
import { Icon } from "react-icons-kit/Icon";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";

class SearchPageFooter extends Component {
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
      <div className="footer_container">
        <span style={{ marginLeft: "15.5%", fontSize: "1.125rem" }}>
          Questions ? <Link>Contact us</Link>
        </span>

        <div className="footer_columns">
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Investor Relations</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Speed Test</Link>
            </li>
            <li>
              <Link>Netflix Uzbekistan</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Cookie Preferences</Link>
            </li>
            <li>
              <Link>Legal Notices</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Account</Link>
            </li>
            <li>
              <Link>Ways to Watch</Link>
            </li>
            <li>
              <Link>Corporate Information</Link>
            </li>
            <li>
              <Link>Netflix Originals</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link>Media Center</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
          <div className="lang_btn" onClick={this.handleToggle}>
            <Icon icon={sphere} size={20} />
            English
            <Icon icon={ic_keyboard_arrow_down} />
          </div>
        </div>
        {this.state.langContent && (
          <div className="lang_toggle">
            <ul>
              <li>Russian</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default SearchPageFooter;
