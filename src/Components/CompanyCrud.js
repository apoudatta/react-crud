import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/companies';

const CompanyCrud = ({ onCompanyChange }) => {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', website: '', address: '' });
  const [editing, setEditing] = useState(null);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get(API_URL);
      setCompanies(response.data.data); // Set companies to the array in the data property
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
      
    onCompanyChange();
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        await axios.put(`${API_URL}/${editing}`, formData);
        setEditing(null);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({ name: '', email: '', website: '', address: '' });
      fetchCompanies();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleEdit = (company) => {
    setFormData({ name: company.name, email: company.email, website: company.website, address: company.address });
    setEditing(company.id);
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`${API_URL}/${id}`);
      fetchCompanies();
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="my-4 p-4 shadow-md border-t-8 border-sky-300">
        <h1 className="text-xl font-bold mb-4">Companies Create</h1>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Company Name"
          className="border p-2 rounded mr-2 w-full mb-2"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded mr-2 w-full mb-2"
          required
        />
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
          className="border p-2 rounded mr-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 rounded mr-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editing ? 'Update' : 'Add'}
        </button>
      </form>

      <div className='shadow-md p-4 border-t-8 border-sky-300'>
        <h2 className='text-xl pb-4 font-semibold'>Company List</h2>
        <table className='w-full border-y-0 text-center'>
          <thead>
          <tr className='border-y'>
            <th className='py-2'>Company Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {companies.map((company) => (
            <tr key={company.id} className="border-y p-2 mb-2 items-center">
              <td className='py-2'>
                <span className="font-semibold">{company.name}</span>
              </td>
              <td>
                {company.email}
              </td>
              <td>
                {company.website}
              </td>
              <td>
                {company.address}
              </td>
              <td>
                <button onClick={() => handleEdit(company)} className="bg-green-500 text-white p-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(company.id)} className="bg-red-500 text-white p-1 rounded">
                  Delete
                </button>
              </td>
              </tr>
          ))}
          </tbody>
          </table>
        </div>
    </div>
  );
};

export default CompanyCrud;
