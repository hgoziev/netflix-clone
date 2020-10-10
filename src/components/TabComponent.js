import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabPrice from "./tabs_nav/TabPrice";
import TabDevices from "./tabs_nav/TabDevices";
import "./tabs_nav/tab_nav.css";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab_list">

                        <Tab className={this.state.tabIndex === 0 ? 'tab_selected active' : null} ><TabDoor />  <p><strong>No commitments. Cancel online at anytime </strong></p></Tab>
                        <Tab className={this.state.tabIndex === 1 ? 'tab_selected active' : null}><TabDevices /><p style={{ marginTop: "-5.3rem" }}><strong>Watch anywhere</strong></p></Tab>
                        <Tab className={this.state.tabIndex === 2 ? 'tab_selected active' : null}><TabPrice /><p style={{ marginTop: "-2.8px" }}><strong>Pick your price</strong></p></Tab>


                    </TabList>
                    <TabPanel>
                        <TabOne />
                    </TabPanel>
                    <TabPanel>
                        <TabTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabThree />
                    </TabPanel>

                </Tabs>
            </div>
        )
    }
}

export default TabComponent;