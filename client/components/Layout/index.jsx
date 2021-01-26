import React, { useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Popover,
  message,
  List,
  Drawer,
  PageHeader,
  Tag,
  Dropdown,
  Modal,
  Upload,
  Button,
} from "antd";
import {
  RightCircleOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "./style.css";
import "antd/dist/antd.css";
import { APIClient, BACKEND_URL } from "../../../client/api";

export default function LayoutComponent({ ...props }) {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={() => {
          setShowDrawer(false);
        }}
        visible={showDrawer}
        bodyStyle={{ padding: 0 }}
      >
        <LeftMenu display={true} />
      </Drawer>

      <PageHeader
        style={{ padding: 5 }}
        title={
          <>
            <MenuOutlined
              onClick={() => {
                setShowDrawer(true);
              }}
            />
            {" Home"}
          </>
        }
        extra={[<SearchOutlined key={1} />]}
      >
        {props.children}
      </PageHeader>
    </>
  );
}

function LeftMenu() {
  const MENU_DATA = [
    {
      is_open: true,
      key: "tag",
      name: "tag",
      icon: <RightCircleOutlined />,
      path: "tag",
    },
  ];

  const menuItems = [];

  for (let i = 0; i < MENU_DATA.length; i++) {
    const menu = MENU_DATA[i];

    if (menu.is_open) {
      menuItems.push(
        <Menu.Item key={menu.key} style={{ paddingLeft: 0 }}>
          <Link href={menu.path}>
            <>
              {menu.icon}
              <span>{menu.name}</span>
            </>
          </Link>
        </Menu.Item>
      );
    }
  }

  async function loginGoogle() {
    try {
      const result = await APIClient.post("/login-google");
      window.location.href = result;
    } catch (error) {
      message.error(error.message);
    }
  }

  return (
    <div style={{ display: "block" }}>
      {localStorage.getItem("me") ? (
        <p>{localStorage.getItem("me")}</p>
      ) : (
        <>
          <Button
            onClick={() => {
              loginGoogle();
            }}
          >
            login
          </Button>
        </>
      )}
      <Menu theme="light" mode="inline">
        {menuItems}
      </Menu>
      {localStorage.getItem("me") && (
        <a
          style={{
            display: "block",
            position: "fixed",
            bottom: 0,
          }}
          onClick={() => {
            localStorage.clear();
            Router.push("/");
          }}
        >
          logout
        </a>
      )}
    </div>
  );
}
