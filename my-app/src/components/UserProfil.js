import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeInfoForm from './ChangeInfoForm';
import './UserProfil.css'; // Importing styles here
import Header from './Header';

const UserProfil = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChangeInfoOpen, setChangeInfoOpen] = useState(false);
  const [isManageAccountOpen, setManageAccountOpen] = useState(false);

  const { user_id } = useParams();

  const apiUrl = `https://prod-04.southeastasia.logic.azure.com/workflows/59546a02895f4ab2b5f2c2cde57f2ed6/triggers/manual/paths/invoke/user_id/${user_id}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LElgT0NEd674m9Pm0o7ybQNGakf-58DkcaLM-KX1p6I`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setUserData(data.body[0]);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError('An error occurred while fetching user data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleOpenChangeInfo = () => {
    setChangeInfoOpen(true);
  };

  const handleCloseChangeInfo = () => {
    setChangeInfoOpen(false);
  };

  const handleManageAccount = () => {
    setManageAccountOpen(!isManageAccountOpen);
  };

  // Function to handle account deletion, ensuring id is sent as an integer
  const handleDeleteAccount = async () => {
    const deleteApiUrl = `https://prod-11.southeastasia.logic.azure.com:443/workflows/3580e9c039ed4aa19408eeaeb0d82852/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tAFfnEapS2O8_mKR7xa76WAVVtUEw3zPmmXR3xIpdx0`;

    try {
      const response = await fetch(deleteApiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: parseInt(user_id, 10) }), // Ensure user_id is parsed as an integer
      });

      if (response.status === 200) {
        console.log('Account deletion successful.');
        // Optionally, redirect or update UI here
      } else if (response.status === 404) {
        console.log('Account not found.');
      } else {
        console.log('Failed to delete account. Response status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred while deleting the account.', error);
      setError('An error occurred while deleting the account.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header onSignInClick={handleOpenChangeInfo} onSignUpClick={handleOpenChangeInfo} />
      <div className="user-profile-container">
        <h2>User Profile</h2>
        {userData && (
          <div>
            <p>Email: {userData.email_address}</p>
            <p>First Name: {userData.first_name || 'N/A'}</p>
            <p>Last Name: {userData.last_name || 'N/A'}</p>
            <p>Phone Number: {userData.phone_number || 'N/A'}</p>
            <p>Password: {userData.password || 'N/A'}</p>

            <button className="manage-account-button" onClick={handleManageAccount}>
              Manage Account
            </button>

            {isManageAccountOpen && (
              <div className="manage-account-options">
                <button className="confirm-email-button" onClick={handleOpenChangeInfo}>
                  Confirm Email
                </button>
                
                <button className="change-info-button" onClick={handleOpenChangeInfo}>
                  Change Info
                </button>
                <button className="delete-account-button" onClick={handleDeleteAccount}>
                  Delete Account
                </button>
              </div>
            )}

            {isChangeInfoOpen && <ChangeInfoForm user_id={user_id} onClose={handleCloseChangeInfo} />}
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfil;
