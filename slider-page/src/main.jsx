
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
 import './index.css';
 import SliderPage from "./components/SliderPage";
 import  RegisterPage from "./components/RegisterPage";
 import RestaurantList from './components/RestaurantList';
 import LoginPage from "./components/LoginPage";
 import AdminPage from "./components/AdminPage";
 import BookingsPage from "./components/BookingsPage";
 //import RoomsPage from "./components/RoomsPage";
 import UsersPage from "./components/UsersPage";

 import RoomEditForm from "./components/RoomEditForm";
 import ViewRooms from "./components/ViewRooms";
 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="slider" element={<SliderPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="restaurants" element={<RestaurantList />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/bookings" element={<BookingsPage />} />
        {/* <Route path="/admin/rooms" element={<RoomsPage />} /> */}
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/rooms/view" element={<ViewRooms />} />

        <Route path="/admin/rooms/edit/:id" element={<RoomEditForm />} />

        {/* <Route path="/api" element={<ApiPage />} /> */}
        


        


      </Route>
      
    </Routes>
  </BrowserRouter>
);
