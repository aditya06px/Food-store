const Footer = () => {
  return (
    <footer className="bg-rose-100 py-8">
      <div className="whole-box">
        <div className="flex justify-around text-center">
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul>
                <li className="py-1"><a className="block hover:font-medium" href="">About us</a></li>
                <li className="py-1"><a className="block hover:font-medium" href="">Careers</a></li>
                <li className="py-1"><a className="block hover:font-medium" href="">Blog</a></li>
              </ul>
            </div>
            <div >
              <h3 className="text-lg font-medium mb-4">help</h3>
              <ul>
                <li className="py-1"><a className="block hover:font-medium" href="">Contact us</a></li>
                <li className="py-1"><a className="block hover:font-medium" href="">FAQs</a></li>
                <li className="py-1"><a className="block hover:font-medium" href="">Support</a></li>
              </ul>
            </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
      <p className="text-sm text-gray-500 text-center hover:font-medium">© 2023 Food App. All rights reserved.</p>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
