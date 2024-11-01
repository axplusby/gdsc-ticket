const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="w-full fixed 
             inset-x-0 
             bottom-0 
             bg-gray-200 py-4 text-center text-black">
            <p className="text-xs"><strong> &copy; {year} Google Developers on Campus - MAKAUT. All Rights Reserved.</strong></p>
        </div>
    );
  };
  
  export default Footer;