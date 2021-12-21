import React from 'react';
import { FaTachometerAlt, FaBars, FaUser, FaUserEdit } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { RiFileHistoryLine } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import Profiles from '../Profiles/Profiles';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './Dashboard.css';
import DashboardHome from '../DashboardHome/DashboardHome';
import EditProfiles from '../EditProfiles/EditProfiles';
import ManageEmployee from '../ManagerEmployee/ManageEmployee';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageCategory from '../ManageCategory/ManageCategory';
import ManageShop from '../ManageShop/ManageShop';
import EmployeeWork from '../EmployeeWork/EmployeeWork';
import CustromerWork from '../CustromerWork/CustromerWork';



const Dashboard = () => {
     let { path, url } = useRouteMatch();
     return (
          <div className="container-fluid">
               <div className="row flex-nowrap">
                    <div className='dashboard'>
                         <div className="dashboard-nav">
                              <header>
                                   <Link to={`${url}`} className="brand-logo"><span>BRAND</span></Link></header>
                              <nav className="dashboard-nav-list">
                                   <Link to={`${url}/dashboardHome`} className="dashboard-nav-item"><i><FaTachometerAlt /></i> Dashboard </Link>
                                   <Link to={`${url}/profiles`} className="dashboard-nav-item"><i><FaUser /></i> Profile </Link>
                                   <Link to={`${url}/employee`} className="dashboard-nav-item"><i><FaUserEdit /></i>Employee </Link>
                                   <Link to={`${url}/product`} className="dashboard-nav-item"><i><MdProductionQuantityLimits /></i> Product </Link>
                                   <Link to={`${url}/category`} className="dashboard-nav-item"><i><BiCategoryAlt /></i> Category </Link>
                                   <Link to={`${url}/shop`} className="dashboard-nav-item"><i><BsShop /></i> Shop </Link>
                                   <Link to={`${url}/employeework`} className="dashboard-nav-item"><i><RiFileHistoryLine /></i> Employee History </Link>
                                   <Link to={`${url}/custromerwork`} className="dashboard-nav-item"><i><RiFileHistoryLine /></i> Custromer History </Link>

                                   <div className="nav-item-divider"></div>
                                   <Link to={`${url}`} className="dashboard-nav-item">
                                        <i className="fas fa-sign-out-alt"></i> Logout
                                   </Link>
                              </nav>
                         </div>

                         <div className='dashboard-app'>
                              <header className='dashboard-toolbar'>
                                   <a href="#!" className="menu-toggle"><i ><FaBars /></i></a>
                              </header>
                              <div className='dashboard-content'>


                                   <div className="col py-3">
                                        <Switch>
                                             <Route exact path={`${path}/dashboardHome`}>
                                                  <DashboardHome></DashboardHome>

                                             </Route>
                                             <Route path={`${path}/employee`}>
                                              <ManageEmployee></ManageEmployee>
                                             </Route>
                                             <Route path={`${path}/profiles`}>
                                                  <Profiles></Profiles>
                                             </Route>
                                             <Route path={`/EditProfiles`}>
                                                  <EditProfiles></EditProfiles>
                                             </Route>


                                             {/* <Route path={`${path}/EditProfiles`}>
                                                  <EditProfiles></EditProfiles>
                                             </Route> */}

                                             <Route path={`${path}/product`}>
                                                <ManageProduct></ManageProduct>
                                             </Route>

                                             <Route path={`${path}/category`}>
                                                  <ManageCategory></ManageCategory>
                                             </Route> 
                                             <Route path={`${path}/shop`}>
                                                  <ManageShop></ManageShop>
                                             </Route> 
                                             <Route path={`${path}/employeework`}>
                                                  <EmployeeWork></EmployeeWork>
                                             </Route> 
                                             <Route path={`${path}/custromerwork`}>
                                             <CustromerWork></CustromerWork>
                                             </Route> 

                                             {/* Admin Route  */}
                                        </Switch>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Dashboard;