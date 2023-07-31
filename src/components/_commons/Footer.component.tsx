import React from 'react';

const Footer: React.FC = () => {
  const appName = 'React Blog';
  const fullName = 'Seydina GUEYE';
  const email = 'dina3903@gmail.com';

  return (
    <footer className="w-full py-4 bg-indigo-500 text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {appName} | Developed by {fullName} | Email: {email}
      </p>
    </footer>
  );
};

export default Footer;
