import React, {useState} from "react"
import {Menu, Icon} from "antd"
import style from "./index.less"

const {SubMenu} = Menu


const Index = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const [currentPage, setCurrentPage] = useState(['home']);

  const sidebarObj: { [key: string]: any } = {
    'welcome-home': ['home'],

    'user-bill-query': ['repayment'],
    'repay-plan-query': ['repayment'],
    'repay-transaction': ['repayment'],
    'repay-rec': ['repayment'],

    'user-loan': ['finance'],
    'loan-fail': ['finance'],
    'disburse-rec': ['finance'],

    'repay-channel': ['channel'],

    'disburse-reconciliation': ['settlement'],
    'repay-reconciliation': ['settlement'],

    'ar-home': ['ar-home'],
    'customer-detail': ['ar-home'],

    'reward-query': ['reward'],
    'reward-reconciliation': ['reward'],
  };

  const clickHandler = () => {
    console.log("it worked");
  }

  const keyFilterHandler = (str: string) => {
    return sidebarObj[str] || {}
  }

  return (
    <div className={style['sidebar']}>
      <Menu
        onClick={clickHandler}
        defaultOpenKeys={['home']}
        defaultSelectedKeys={['home']}
        className={style['menu']}
        mode="inline"
      >
        <SubMenu
          key="home"
          title={
            <span>
                <Icon type="home"/>
                <span>Welcome Home</span>
              </span>
          }
        >
          <Menu.Item key="welcome-home">Home Introduce</Menu.Item>
        </SubMenu>
        <SubMenu
          key="repayment"
          title={
            <span>
                <Icon type="wallet"/>
                <span>Repayment Management</span>
              </span>
          }
        >
          <Menu.Item key="user-bill-query">User Bill Query</Menu.Item>
          <Menu.Item key="repay-plan-query">Repay Plan Query</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
                <Icon type="setting"/>
                <span>Navigation Three</span>
              </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default Index
