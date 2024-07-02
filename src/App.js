import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import OrderList from './components/OrderList/OrderList';
import PickerDashboard from './components/PickerDashboard/PickerDashboard';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ContactCustomer from './components/ContactCustomer/ContactCustomer';
import PickupArea from './components/PickupArea/PickupArea';
import DeliveryPanel from './components/DeliveryPanel/DeliveryPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<OrderList />} />
          <Route path="/picker-dashboard" element={<PickerDashboard />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/contact-customer" element={<ContactCustomer />} />
          <Route path="/pickup-area" element={<PickupArea />} />
          <Route path="/delivery-panel" element={<DeliveryPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
