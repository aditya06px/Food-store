const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 fixed bottom-0 right-0 left-0">
      <div>
        <div className="flex justify-around text-center">
            <div>
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul>
                <li className="py-1"><a className="block hover:font-medium hover:text-gray-400" href="">About us</a></li>
                <li className="py-1"><a className="block hover:font-medium hover:text-gray-400" href="">Careers</a></li>
                <li className="py-1"><a className="block hover:font-medium hover:text-gray-400" href="">Blog</a></li>
              </ul>
            </div>
            <div >
              <h3 className="text-lg font-medium mb-4">help</h3>
              <ul>
                <li className="py-1"><a className="block hover:font-medium hover:text-gray-400" href="">Contact us</a></li>
                <li className="py-1"><a className="block hover:font-medium hover:text-gray-400" href="">FAQs</a></li>
                <li className="py-1"><a className="block hover:font-medium hover:text-gray-400" href="">Support</a></li>
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
