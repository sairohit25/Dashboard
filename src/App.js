import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="dashboard">
    <div className="profupl">
    {/* <!-- Div 1: User Profile --> */}
    <div className="card profile">
      <h2>Hey, Sai Nath</h2>
      <div className="profile-details">
        <p><i className="icon user"></i> Username: <span>saiperson</span></p>
        <p><i className="icon company"></i> Company Name: <span>Tech Solutions</span></p>
        <p><i className="icon email"></i> Email: <span>example@domain.com</span></p>
        <p><i className="icon phone"></i> Phone: <span>+123456789</span></p>
        <p><i className="icon address"></i> Address: <span>123 Tech Street</span></p>
        <p><i className="icon city"></i> City: <span>Phoenix</span></p>
        <p><i className="icon zip"></i> Zip Code: <span>85001</span></p>
      </div>
    </div>
    

    {/* <!-- Div 2: Upload Excel File --> */}
    <div className="card upload">
      <h2>Upload Excel File</h2>
      <input type="file" id="excelFile" accept=".xls, .xlsx"/>
      <button className="btn-primary">Upload</button>
    </div>
    </div>
    {/* <!-- Div 3: Extracted Data --> */}
    <div className="card extracted-data">
      <div className="header">
        <h2>Extracted Data</h2>
        <i className="icon minimize"></i>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox"/></th>
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
            <tr>
              <td><input type="checkbox"/></td>
              <td>Acme Corporation</td>
              <td>Acme Ltd.</td>
              <td>EIN</td>
              <td>123456789</td>
              <td>USA</td>
              <td>Delaware</td>
              <td>123 Elm Street</td>
              <td>New York</td>
              <td>NY</td>
              <td>10001</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Beta Industries</td>
              <td>Beta Inc.</td>
              <td>EIN</td>
              <td>987654321</td>
              <td>Canada</td>
              <td>Ontario</td>
              <td>456 Maple Ave</td>
              <td>Toronto</td>
              <td>ON</td>
              <td>M5H 2N2</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Gamma Solutions</td>
              <td>Gamma Tech</td>
              <td>SSN</td>
              <td>567890123</td>
              <td>USA</td>
              <td>California</td>
              <td>789 Pine Drive</td>
              <td>Los Angeles</td>
              <td>CA</td>
              <td>90001</td>
            </tr>
          </tbody>          
      </table>
    </div>

    {/* <!-- Div 4: Owner Details --> */}
    <div className="card owner-details">
      <div className="header">
        <h2>Owner Details</h2>
        <i className="icon minimize"></i>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox"/></th>
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
            <tr>
              <td><input type="checkbox"/></td>
              <td>John</td>
              <td>Doe</td>
              <td>1980-01-01</td>
              <td>789 Pine Drive</td>
              <td>Los Angeles</td>
              <td>CA</td>
              <td>90001</td>
              <td>USA</td>
              <td>Passport</td>
              <td>AB123456</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Jane</td>
              <td>Smith</td>
              <td>1990-05-15</td>
              <td>456 Maple Ave</td>
              <td>Toronto</td>
              <td>ON</td>
              <td>M5H 2N2</td>
              <td>Canada</td>
              <td>Driver's License</td>
              <td>C123456789</td>
            </tr>
            <tr>
              <td><input type="checkbox"/></td>
              <td>Michael</td>
              <td>Brown</td>
              <td>1975-08-20</td>
              <td>123 Elm Street</td>
              <td>New York</td>
              <td>NY</td>
              <td>10001</td>
              <td>USA</td>
              <td>ID Card</td>
              <td>D567890123</td>
            </tr>
            <tr>
                <td><input type="checkbox"/></td>
                <td>John</td>
                <td>Doe</td>
                <td>1980-01-01</td>
                <td>789 Pine Drive</td>
                <td>Los Angeles</td>
                <td>CA</td>
                <td>90001</td>
                <td>USA</td>
                <td>Passport</td>
                <td>AB123456</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>Jane</td>
                <td>Smith</td>
                <td>1990-05-15</td>
                <td>456 Maple Ave</td>
                <td>Toronto</td>
                <td>ON</td>
                <td>M5H 2N2</td>
                <td>Canada</td>
                <td>Driver's License</td>
                <td>C123456789</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>Michael</td>
                <td>Brown</td>
                <td>1975-08-20</td>
                <td>123 Elm Street</td>
                <td>New York</td>
                <td>NY</td>
                <td>10001</td>
                <td>USA</td>
                <td>ID Card</td>
                <td>D567890123</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>John</td>
                <td>Doe</td>
                <td>1980-01-01</td>
                <td>789 Pine Drive</td>
                <td>Los Angeles</td>
                <td>CA</td>
                <td>90001</td>
                <td>USA</td>
                <td>Passport</td>
                <td>AB123456</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>Jane</td>
                <td>Smith</td>
                <td>1990-05-15</td>
                <td>456 Maple Ave</td>
                <td>Toronto</td>
                <td>ON</td>
                <td>M5H 2N2</td>
                <td>Canada</td>
                <td>Driver's License</td>
                <td>C123456789</td>
              </tr>
              <tr>
                <td><input type="checkbox"/></td>
                <td>Michael</td>
                <td>Brown</td>
                <td>1975-08-20</td>
                <td>123 Elm Street</td>
                <td>New York</td>
                <td>NY</td>
                <td>10001</td>
                <td>USA</td>
                <td>ID Card</td>
                <td>D567890123</td>
              </tr>
          </tbody>          
      </table>
    </div>

    {/* <!-- Div 5: Add a New Owner --> */}
    <div className="card add-owner">
      <h2>Add a New Owner</h2>
      <form>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="date" placeholder="Date of Birth"/>
        <input type="text" placeholder="Street"/>
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="State"/>
        <input type="text" placeholder="Zip Code"/>
        <input type="text" placeholder="Country"/>
        <input type="text" placeholder="ID Type"/>
        <input type="text" placeholder="ID Number"/>
        <input type="file"/>
        <button className="btn-primary">Add Owner</button>
      </form>
    </div>

  </div>
  );
}

export default App;
