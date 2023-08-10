import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBarComponent.css";
import Highlighter from "react-highlight-words";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const NavBarComponent = ({
  dropDownList,
  header,
  logo,
  isOpenNav,
  openNav,
  navbarType,
  backgroundColor,
  backgroundOpacity,
  itemColor,
  hoverItemColor,
  expandIconColor,
  expandIconDeviderColor,
  searchIconColor,
  expandableTime,
  searchHighlightBackgroundColor,
}) => {
  const [data, setData] = useState(dropDownList);
  const [srchData, setsrchData] = useState("");
  const [filterData, setFilterData] = useState([]);

  const Listmap = (itm) =>
    itm.map((e, i) => (
      <div
        className="fontSize"
        key={i}
        style={{
          padding: "5px 0px 0px 10px",
          display: "block",
        }}
      >
        <Link
          to={e?.link}
          style={{
            textDecoration: "none",
            color: e.isHovering ? hoverItemColor : itemColor,
          }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {/* list icon */}
            <span style={{ width: "10%", textAlign: "left" }}>{e.icon}</span>
            {/* list name */}
            {openNav ? (
              <span
                style={{ width: "80%" }}
                onClick={(e1) => {
                  if (e.name === e1.target.innerText) {
                    e.visible = !e.visible;
                    setData([...data]);
                  }
                }}
                onMouseEnter={(e1) => {
                  if (e.name === e1.target.innerText) {
                    e.isHovering = true;
                    setData([...data]);
                  }
                }}
                onMouseLeave={(e1) => {
                  if (e.name === e1.target.innerText) {
                    e.isHovering = false;
                    setData([...data]);
                  }
                }}
              >
                <Highlighter
                  highlightStyle={{
                    backgroundColor: searchHighlightBackgroundColor,
                  }}
                  highlightClassName="YourHighlightClass"
                  searchWords={[srchData]}
                  autoEscape={true}
                  textToHighlight={e.name}
                />
              </span>
            ) : (
              <span
                style={{ width: "80%" }}
                onClick={(e1) => {
                  if (e.name === e1.target.innerText) {
                    e.visible = !e.visible;
                    setData([...data]);
                  }
                }}
                onMouseEnter={(e1) => {
                  if (e.id === i + 1) {
                    e.isHovering = true;
                    setData([...data]);
                  }
                }}
                onMouseLeave={(e1) => {
                  if (e.id === i + 1) {
                    e.isHovering = false;
                    setData([...data]);
                  }
                }}
              ></span>
            )}
            {/* up / down button */}
            {openNav && e.sub.length !== 0 && (
              <span style={{ width: "10%", textAlign: "right" }}>
                {e.visible ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </span>
            )}
          </div>
        </Link>
        {e.visible && Listmap(e.sub)}
      </div>
    ));

  const srch = (srchData, listData) => {
    srchData !== "" &&
      listData?.map((e, i) => {
        e.name.toLowerCase().includes(srchData.toLowerCase()) &&
          setFilterData((pre) => [...pre, e]);
        e?.sub?.length !== 0 && srch(srchData, e?.sub);
      });
  };

  const sidenavStyle = () => {
    if (navbarType === "slide_page") {
      if (openNav) {
        return {
          transition: expandableTime,
          backgroundColor: backgroundColor,
          opacity: backgroundOpacity,
        };
      } else {
        return {
          transition: expandableTime,
          backgroundColor: backgroundColor,
          opacity: backgroundOpacity,
        };
      }
    } else if (navbarType === "fixed_page") {
      if (openNav) {
        return {
          transition: expandableTime,
          zIndex: 2,
          position: "absolute",
          backgroundColor: backgroundColor,
          opacity: backgroundOpacity,
        };
      } else {
        return {
          transition: expandableTime,
          zIndex: 2,
          position: "absolute",
          backgroundColor: backgroundColor,
          opacity: backgroundOpacity,
        };
      }
    }
  };

  document.onkeyup = function (e) {
    if (e.ctrlKey && e.altKey && e.which === 79) {
      // ctrl + alt + o  to open navbar
      isOpenNav(true);
    } else if (e.ctrlKey && e.altKey && e.which === 67) {
      // ctrl + alt + c  to close navbar
      isOpenNav(false);
    }
  };

  return (
    <div
      className={
        openNav ? "sidenav openSidenavWidth" : "sidenav closeSidenavWidth"
      }
      onMouseEnter={() => isOpenNav(true)}
      onMouseLeave={() => {
        isOpenNav(false);
        setData([...dropDownList]);
      }}
      style={sidenavStyle()}
    >
      {/* expand Icon */}
      <div>
        <div
          className="expandIconSize"
          style={{
            textAlign: "center",
            cursor: "pointer",
            color: expandIconColor,
            borderBottom: `1px solid`,
            borderBottomColor: expandIconDeviderColor,
          }}
          // onMouseEnter={() => isOpenNav(true)}
        >
          {header === "logo" ? (
            <img
              className="logoSize"
              style={{ borderRadius: "50%", margin: "5px" }}
              src={logo}
              alt="error!"
            />
          ) : header === "normal" ? (
            <span>&#9776;</span>
          ) : (
            <p></p>
          )}
        </div>
        {/* search Icon */}
        {openNav ? (
          <div className="m-2" style={{ height: "25px" }}>
            <input
              autoFocus
              type="text"
              className="form-control form-control-sm"
              id="formGroupExampleInput"
              placeholder="Search..."
              onChange={(e) => {
                setsrchData(e.target.value);
                setFilterData([]);
                srch(e.target.value, data);
              }}
            ></input>
          </div>
        ) : (
          <div
            className="m-2 srchIcon"
            style={{
              textAlign: "center",
              height: "25px",
            }}
            onClick={() => isOpenNav(true)}
          >
            <FiSearch style={{ color: searchIconColor }} />
          </div>
        )}
      </div>
      <div>{Listmap(filterData.length === 0 ? data : filterData)}</div>
    </div>
  );
};

export default NavBarComponent;
