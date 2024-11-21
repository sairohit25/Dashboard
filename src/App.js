import { useState } from 'react';
import './App.css';

function App() {
  // State to track if the "Select All" checkbox is checked for each table
  const [isAllSelectedExtractedData, setIsAllSelectedExtractedData] = useState(false);
  const [isAllSelectedOwnerDetails, setIsAllSelectedOwnerDetails] = useState(false);

  // State to track the individual checkboxes for each table
  const [selectedRows, setSelectedRows] = useState({
    extractedData: [false, false, false],
    ownerDetails: [false, false, false, false, false, false, false, false, false, false]
  });

  // State to track if each section is collapsed or expanded
  const [collapsedSections, setCollapsedSections] = useState({
    extractedData: false,
    ownerDetails: false,
    addOwner: false
  });

  // Handle the click on the "Select All" checkbox for Extracted Data table
  const handleSelectAllExtractedData = () => {
    setIsAllSelectedExtractedData(!isAllSelectedExtractedData);
    const updatedSelectedRows = {
      ...selectedRows,
      extractedData: new Array(3).fill(!isAllSelectedExtractedData)
    };
    setSelectedRows(updatedSelectedRows);
  };

  // Handle the click on the "Select All" checkbox for Owner Details table
  const handleSelectAllOwnerDetails = () => {
    setIsAllSelectedOwnerDetails(!isAllSelectedOwnerDetails);
    const updatedSelectedRows = {
      ...selectedRows,
      ownerDetails: new Array(10).fill(!isAllSelectedOwnerDetails)
    };
    setSelectedRows(updatedSelectedRows);
  };

  // Handle the change of individual checkboxes for each table
  const handleCheckboxChange = (table, index) => {
    const updatedSelectedRows = { ...selectedRows };
    updatedSelectedRows[table][index] = !updatedSelectedRows[table][index];
    setSelectedRows(updatedSelectedRows);
  };

  // Function to toggle the collapse/expand state of each section
  const toggleCollapse = (section) => {
    setCollapsedSections(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="dashboard">
      <div className="profupl">
        {/* Div 1: User Profile */}
        <div className="card profile">
          <h2>Hey, Sai Rohit</h2>
          <div className="profile-details">
            <p><i className="icon user"></i> <span className="label">Username:</span> <span className="value">@sairohit25</span></p>
            <p><i className="icon company"></i> <span className="label">Company Name:</span> <span className="value">Tech Solutions</span></p>
            <p><i className="icon email"></i> <span className="label">Email:</span> <span className="value">example@domain.com</span></p>
            <p><i className="icon phone"></i> <span className="label">Phone:</span> <span className="value">+123456789</span></p>
            <p><i className="icon address"></i> <span className="label">Address:</span> <span className="value">123 Tech Street</span></p>
            <p><i className="icon city"></i> <span className="label">City:</span> <span className="value">Phoenix</span></p>
            <p><i className="icon zip"></i> <span className="label">Zip Code:</span> <span className="value">85001</span></p>
          </div>
        </div>

        {/* Div 2: Upload Excel File */}
        <div className="card upload">
          <h2>Upload Excel File</h2>
          <input type="file" id="excelFile" accept=".xls, .xlsx" />
          <button className="btn-primary">Upload</button>
        </div>
      </div>

      {/* Div 3: Extracted Data */}
      <div className="card extracted-data">
        <div className="header">
          <h2>Extracted Data</h2>
          <button 
            className="collapse-button" 
            onClick={() => toggleCollapse('extractedData')}
          >
            {collapsedSections.extractedData ? '+' : '-'}
          </button>
        </div>
        {!collapsedSections.extractedData && (
          <>
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={isAllSelectedExtractedData}
                    onChange={handleSelectAllExtractedData}
                  />
                </th>
                <th>Reporting Company Legal Name</th>
                <th>Alternate Name</th>
                <th>Tax ID Type</th>
                <th>Tax ID Number</th>
                <th>Country</th>
                <th>State of Formation</th>
                <th>Current Address</th>
                <th>Current City</th>
                <th>Current State</th>
                <th>Current Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {['Acme Corporation', 'Beta Industries', 'Gamma Solutions'].map((company, index) => (
                <tr key={company}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.extractedData[index]}
                      onChange={() => handleCheckboxChange('extractedData', index)}
                    />
                  </td>
                  <td>{company}</td>
                  <td>{company} Ltd.</td>
                  <td>{index === 0 ? 'EIN' : 'SSN'}</td>
                  <td>{123456789 + index}</td>
                  <td>{index === 0 ? 'USA' : 'Canada'}</td>
                  <td>{index === 0 ? 'Delaware' : 'Ontario'}</td>
                  <td>{index === 0 ? '123 Elm Street' : '456 Maple Ave'}</td>
                  <td>{index === 0 ? 'New York' : 'Toronto'}</td>
                  <td>{index === 0 ? 'NY' : 'ON'}</td>
                  <td>{10001 + index}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="upload-button-container">
          <button className="btn-primary">Upload Selected Data</button>
        </div>
        </>
        )}
        
      </div>

      {/* Div 4: Owner Details */}
      <div className="card owner-details">
        <div className="header">
          <h2>Owner Details</h2>
          <button 
            className="collapse-button" 
            onClick={() => toggleCollapse('ownerDetails')}
          >
            {collapsedSections.ownerDetails ? '+' : '-'}
          </button>
        </div>
        {!collapsedSections.ownerDetails && (
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={isAllSelectedOwnerDetails}
                    onChange={handleSelectAllOwnerDetails}
                  />
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Country</th>
                <th>ID Type</th>
                <th>ID Number</th>
              </tr>
            </thead>
            <tbody>
              {['John', 'Jane', 'Michael'].map((name, index) => (
                <tr key={name}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.ownerDetails[index]}
                      onChange={() => handleCheckboxChange('ownerDetails', index)}
                    />
                  </td>
                  <td>{name}</td>
                  <td>{index === 0 ? 'Doe' : index === 1 ? 'Smith' : 'Brown'}</td>
                  <td>{index === 0 ? '1980-01-01' : index === 1 ? '1990-05-15' : '1975-08-20'}</td>
                  <td>{index === 0 ? '789 Pine Drive' : '456 Maple Ave'}</td>
                  <td>{index === 0 ? 'Los Angeles' : 'Toronto'}</td>
                  <td>{index === 0 ? 'CA' : 'ON'}</td>
                  <td>{90001 + index}</td>
                  <td>{index === 0 ? 'USA' : 'Canada'}</td>
                  <td>{index === 0 ? 'Passport' : 'Driver\'s License'}</td>
                  <td>{`A${123456789 + index}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Div 5: Additional Section */}
      <div className="card add-owner">
      <div className='header'>
        <h2>Add a New Owner</h2>
        <button 
            className="collapse-button" 
            onClick={() => toggleCollapse('addOwner')}
          >
            {collapsedSections.addOwner ? '+' : '-'}
          </button>
          </div>
          {!collapsedSections.addOwner && (
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="date" placeholder="Date of Birth" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="ID Type" />
          <input type="text" placeholder="ID Number" />
          <div className='upload-button-container'>
            <button type="submit" className="btn-primary">Add Owner</button>
          </div>
        </form>
          )}
      </div>
    </div>
  );
}

export default App;
