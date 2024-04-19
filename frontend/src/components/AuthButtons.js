import React from 'react';
##
const AuthButtons = () => {
  const handleSignIn = () => {
    window.location.href = './api/auth/SignIn';
  };
  const handleSignOut = () => {
    window.location.href = './api/auth/SignOut';
  };
  const handleSignUp = () => {
    window.location.href = './api/auth/SignUp';
  };
  return (
    <div className="auth-buttons">
      {}
      {localStorage.getItem('accessToken') ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      ) : (
        <button onClick={handleSignUp}>Sign Up</button>
      )}
    </div>
  );
};

export default AuthButtons;
