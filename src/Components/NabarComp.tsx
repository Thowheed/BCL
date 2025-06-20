'use client';

import { Dropdown, Badge, Avatar, Input , AutoComplete} from 'antd';
import { DownOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import "../styles/userprofile.scss";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductListLoad } from '@/store/reducer/indexSlice';
import { useRouter } from "next/navigation";


const NavbarComp = () => {
    //language
    const [language, setLanguage] = useState("en");
    const [suggestions, setSuggestions] = useState([]);
    
    const router = useRouter()

    const user = useSelector((state: any) => state.bcl.loginData?.user?.user);
    const localUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || 'null') : null;
    const loggedInUser = user || localUser;

    const gocart = () => {
        router.push("/cart")
    }

    const goToLogin = () => router.push("/login");
    //const goToProductdetail = () => router.push("/productdetail");

    const [searchterm, setsearchterm] = useState<any>(null);
    const [debouncedTerm, setDebouncedTerm] = useState(searchterm);

    const dispatch = useDispatch();


    useEffect(() => {
        if (searchterm) {
          const timer = setTimeout(() => {
            fetchSuggestions(searchterm); //  trigger suggestions
            getAllproductapi(searchterm); // optional: update store
          }, 500);
      
          return () => clearTimeout(timer); // cancel timeout if term changes
        }
        else {
          setSuggestions([]); // clear suggestions if input is empty
        }
      }, [searchterm]);
      

    const getAllproductapi = (value: any) => {


        let paylaod = {

            name: value,
            
            
        }

        dispatch(getallproductListLoad(paylaod))
    }

    
    
    const fetchSuggestions = async (text: string) => {
        try {
          const response = await fetch(
            `https://api.purfull.com/product/get-all-product?name=${encodeURIComponent(text)}&lang=${language}`
          );
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const result = await response.json();
          const products = result?.data || [];
      
          const formattedSuggestions = products.map((item: any) => ({
            value: item.id.toString(),
            label: item.name,
            //id: item.id,
           
          }));
      
          setSuggestions(formattedSuggestions);
        } catch (error) {
          console.error("Suggestion error:", error);
          setSuggestions([]);
        }
      };
      
    
    

    const dropdownContent = (
        <div className="drop-down">
            <div className="drop-down-inside">

                <div className="user-info">
                    <img src="/user.png" alt="user" className="avatar" />
                    <div className="user-details">
                        <span className="name">{loggedInUser?.name || 'User Name'}</span>
                        <span className="email">{loggedInUser?.email || 'user@example.com'}</span>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="menu-item">
                    <img src="/user.png" alt="profile" className="icon" />
                    <span>Profile</span>
                </div>

                <div className="menu-item">
                    <img src="/checkout.png" alt="orders" className="icon" />
                    <span>My Orders</span>
                </div>

                <div className="divider"></div>

                <div className="menu-item logout" onClick={() => {
                    localStorage.removeItem('user');
                    router.push('/login');
                }}>
                    <img src="/logout.png" alt="logout" className="icon" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="navbar">

                <img className="logo" src="/BCL-Green-1.svg" alt="Logo" />

                {/* <div className="delivery">
                    <span className="delivery-time">Language</span>
                    <div className="location">
                        <span>Select Language</span>
                        <img src="./Border.svg" alt="dropdown" />
                    </div>
                </div> */}

                <div className="delivery">
                {/* <span className="delivery-time">Language</span> */}
                <div className="lang">
                    <select
                    value={language}
                    onChange={(e) => {
                        const lang = e.target.value;
                        setLanguage(lang);
                        getAllproductapi(searchterm); // update product list in selected language
                    }}
                    className="bg-transparent outline-none"
                    >
                    <option value="en">English</option>
                    <option value="ta">Tamil</option>
                    </select>
                    {/* <img src="./Border.svg" alt="dropdown" /> */}
                </div>
                </div>



                <div className="actions-tab-surface">
                    {loggedInUser ? (
                        <Dropdown overlay={dropdownContent} trigger={['click']} placement="bottomRight">
                            <Badge dot color="green" className="avatar-badge">
                                <Avatar shape="circle" src={loggedInUser?.avatarUrl || "/user.png"} icon={!loggedInUser?.avatarUrl && <UserOutlined />} />
                            </Badge>
                        </Dropdown>
                    ) : (
                        <button className="login-button" onClick={goToLogin}>
                            Login
                        </button>
                    )}
                    <button className="cart-button" onClick={gocart}>
                        <img src="./Vectora.svg" alt="cart" />
                        <span>Cart</span>
                    </button>
                </div>

                    <AutoComplete 
                    options={suggestions}
                    style={{ width: 300 }}
                    onSearch={(text : any) => setsearchterm(text.trim())}
                    onSelect={(value) => {
                         router.push(`/productdetail/${value}`);
                                
                        // setsearchterm(value);
                        // getAllproductapi(value);
                    }}
                    >
                    <Input
                        placeholder="Search by Tomato..."
                        prefix={<SearchOutlined />}
                        className="search-input"
                        style={{ fontSize: 16, fontWeight: 400 }}
                    />
                    </AutoComplete>


                {/* <div className="search">
                    <Input
                        className="search-input"
                        placeholder="Search by Tomato....."
                        prefix={<SearchOutlined />}
                        style={{ fontSize: 16, fontWeight: 400 }}
                        onChange={(e) => { setsearchterm(e.target.value) }}
                    />
                </div> */}

                <div className="actions">
                    {loggedInUser ? (
                        <Dropdown overlay={dropdownContent} trigger={['click']} placement="bottomRight">
                            <Badge dot color="green" className="avatar-badge">
                                <Avatar shape="circle" src={loggedInUser?.avatarUrl || "/user.png"} icon={!loggedInUser?.avatarUrl && <UserOutlined />} />
                            </Badge>
                        </Dropdown>
                    ) : (
                        <button className="login-button" onClick={goToLogin}>
                            Login
                        </button>
                    )}
                    {/* <Dropdown overlay={dropdownContent} trigger={['click']} placement="bottomRight">
                        <Badge dot color="green" className="avatar-badge">
                            <Avatar shape="circle" icon={<UserOutlined />} />
                        </Badge>
                    </Dropdown> */}
                    <button className="cart-button" onClick={gocart}>
                        <img src="./Vectora.svg" alt="cart" />
                        <span>Cart</span>
                    </button>
                </div>





            </div>




            {/* /// mobile nav bar */}


            <div className="navbar-mobile">

                <div className='deleivery-and-carts'>

                    {/* <div className="delivery-mobile">
                        <span className="delivery-time">Delivery in 8 minutes</span>
                        <div className="location-mobile">
                            <span>Select Location</span>
                            <img src="./Border.svg" alt="dropdown" />
                        </div>




                    </div> */}
                    <div className="actions-mobile">
                        <button className="cart-button-mobile" onClick={gocart}>
                            <img src="./Vectora.svg" alt="cart" />
                        </button>
                        {loggedInUser ? (
                            <Dropdown overlay={dropdownContent} trigger={['click']} placement="bottomRight">
                                <Badge dot color="green" className="avatar-badge">
                                    <Avatar shape="circle" src={loggedInUser?.avatarUrl || "/user.png"} icon={!loggedInUser?.avatarUrl && <UserOutlined />} />
                                </Badge>
                            </Dropdown>
                        ) : (
                            <button className="login-button-mobile" onClick={goToLogin}>Login</button>
                        )}
                    </div>



                </div>

                <div className="search-mobile">
                    <AutoComplete
                        options={suggestions}
                        style={{ width: '100%' }}
                        onSearch={(text: any) => setsearchterm(text.trim())}
                        onSelect={(value) => {
                            router.push(`/productdetail/${value}`);
                        // setsearchterm(value);
                        // getAllproductapi(value);
                        }}
                    >
                        <Input
                        className="search-input-mobile"
                        placeholder="Search by Tomato..."
                        prefix={<SearchOutlined />}
                        style={{ fontSize: 16, fontWeight: 400 }}
                        />
                    </AutoComplete>
                    </div>
            </div>
        </>


    )
}




export default NavbarComp;
