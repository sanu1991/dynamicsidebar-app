import React, {  useState } from "react";
import { MdOutlineFastfood } from "react-icons/md";
import NavBarComponent from "../navbarcomponents/NavBarComponent";
import logo from "./logo.png";

const Layout = () => {
  const [component, setComponent] = useState(true);

  const [openNav, setOpenNav] = useState(false);
  const data = [
    {
      id: 1,
      icon: <MdOutlineFastfood />,
      isHovering: false,
      visible: false,
      name: "Router Link Example",
      sub: [
        {
          isHovering: false,
          visible: false,
          name: "Blogs",
          sub: [],
          link: "/blogs"
        },
        {
          isHovering: false,
          visible: false,
          name: "Contact",
          sub: [],
          link: "/contact"
        }
      ],
    },
    {
      id: 2,
      icon: <MdOutlineFastfood />,
      isHovering: false,
      visible: false,
      name: "Cuisine",
      sub: [
        {
          isHovering: false,
          visible: false,
          name: "Indian",
          sub: [
            {
              isHovering: false,
              visible: false,
              name: "Fast food",
              sub: [
                {
                  isHovering: false,
                  visible: false,
                  name: "Chole Bhature",
                  sub: [],
                },
                {
                  isHovering: false,
                  visible: false,
                  name: "Samosas (Deep-Fried Potato/Veggie Dumpling)",
                  sub: [],
                },
                {
                  isHovering: false,
                  visible: false,
                  name: "Pav Bhaji",
                  sub: [],
                },
                { isHovering: false, visible: false, name: "Pakora", sub: [] },
                { isHovering: false, visible: false, name: "Pasta", sub: [] },
              ],
            },
            {
              visible: false,
              name: "Main Course",
              sub: [
                {
                  visible: false,
                  name: "Chicken Makhani (Butter Chicken)",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Chana masala",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Aloo Gobi (Potato and Cauliflower)",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Naan (Flatbread)",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Matar Paneer (Peas and Cooked Cottage Cheese)",
                  sub: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      icon: <MdOutlineFastfood />,
      isHovering: false,
      visible: false,
      name: "Cuisine1",
      sub: [
        {
          isHovering: false,
          visible: false,
          name: "Indian",
          sub: [
            {
              isHovering: false,
              visible: false,
              name: "Fast food",
              sub: [
                {
                  isHovering: false,
                  visible: false,
                  name: "Chole Bhature",
                  sub: [],
                },
                {
                  isHovering: false,
                  visible: false,
                  name: "Samosas (Deep-Fried Potato/Veggie Dumpling)",
                  sub: [],
                },
                {
                  isHovering: false,
                  visible: false,
                  name: "Pav Bhaji",
                  sub: [],
                },
                { isHovering: false, visible: false, name: "Pakora", sub: [] },
                { isHovering: false, visible: false, name: "Pasta", sub: [] },
              ],
            },
            {
              visible: false,
              name: "Main Course",
              sub: [
                {
                  visible: false,
                  name: "Chicken Makhani (Butter Chicken)",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Chana masala",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Aloo Gobi (Potato and Cauliflower)",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Naan (Flatbread)",
                  sub: [],
                },
                {
                  visible: false,
                  name: "Matar Paneer (Peas and Cooked Cottage Cheese)",
                  sub: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const expandableTime = ".5s";
  return (
    <div>
      {component ? (
        /* // Slide the Page Content to the Right // */
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
          }}
        >
          <NavBarComponent
            navbarType="slide_page"
            header="logo"
            logo={logo}
            dropDownList={data}
            isOpenNav={setOpenNav}
            openNav={openNav}
            backgroundColor="#0d6efd"
            backgroundOpacity={0.9}
            itemColor="#d3d7db"
            hoverItemColor="white"
            expandIconColor="white"
            expandIconDeviderColor="white"
            searchIconColor="white"
            expandableTime={expandableTime}
            searchHighlightBackgroundColor="#eb0808"
          />
          <div
            className={openNav ? "openSidenavWidth1" : "closeSidenavWidth1"}
            style={
              openNav
                ? {
                    width: "100%",
                    padding: "5px 10px",
                    transition: expandableTime,
                  }
                : {
                    width: "100%",
                    padding: "5px 10px",
                    transition: expandableTime,
                  }
            }
          >
            <div className="text-center">
              <button
                className="btn btn-sm btn-outline-primary"
                type="button"
                onClick={() => setComponent(false)}
              >
                Switch To Fixed Page Component
              </button>
              <p className="txt">
                Side Navbar Component (Slide the Page Content to the Right)
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* // Open the Sidebar Navigation Over a Part of the Content // */
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <NavBarComponent
            navbarType="fixed_page"
            header="normal"
            dropDownList={data}
            isOpenNav={setOpenNav}
            openNav={openNav}
            backgroundColor="black"
            backgroundOpacity={1}
            itemColor="#d3d7db"
            hoverItemColor="red"
            expandIconColor="red"
            expandIconDeviderColor="red"
            searchIconColor="white"
            expandableTime={expandableTime}
            searchHighlightBackgroundColor="#eb0808"
          />
          <div style={{ width: "100%", padding: "5px 10px", zIndex: 1 }}>
            <div className="text-center">
              <button
                className="btn btn-sm btn-outline-primary"
                type="button"
                onClick={() => setComponent(true)}
              >
                Switch To Slide Page Component
              </button>
              <p className="txt">
                Side Navbar Component (Open the Sidebar Navigation Over a Part
                of the Content)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
