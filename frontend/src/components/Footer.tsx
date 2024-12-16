const Footer = () => {
  return (
    <div className="bg-orange-500 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-3xl tracking-tight font-bold">AdisKitchen.com</div>
        <div className="font-bold tracking-tight flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
