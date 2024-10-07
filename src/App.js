import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import CompanyCrud from './Components/CompanyCrud';

const App = () => {
  const [totalCompany, setTotalCompany] = useState(0);

  useEffect(() => {
      companyCount();
  }, []);

  const companyCount = async () => { 
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/total-company')
          console.log(response.data);
          setTotalCompany(response.data);
      } catch (e) {
          console.error("Error Count companies:", e);
      }
  }

  const handleCompanyCount = async () => {
    await companyCount();
  }
  
  return (
    <div>
      <Header totalCompany={ totalCompany } />
      <CompanyCrud onCompanyChange={ handleCompanyCount } />
    </div>
  );
};
export default App;
