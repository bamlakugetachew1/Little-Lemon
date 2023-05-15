import handleClick from "../utils/HandleClick";
function Footer() {
  const footerImageUrl =
    "https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg";
    return (
    <footer id="contact-section" className="mx-10 mt-5  font-body mb-10">
      <hr
        style={{
          background: "#6F38C5",
          height: "3px",
          border: "none",
        }}
      />

      <div className="md:flex md:justify-between mt-2">
        <img src={footerImageUrl} className="mt-2 mb-2 md:mt-0" alt="footer images" />
         <div className="mb-2">
          <h3 className="mb-5 font-bold">Navigation</h3>
          <ul>
                <li className="hover:text-slate-400"><button onClick={()=>{handleClick('home')}}>Home</button></li>
                <li className="hover:text-slate-400"><button onClick={()=>{handleClick('contact')}}>Contactus</button></li>
                <li className="hover:text-slate-400"><button onClick={()=>{handleClick('menu')}}>menu</button></li>
          </ul>
        </div>
        <div className="mb-2">
          <h3 className="mb-5 font-bold">Contact</h3>
          <p>
            <a href="tel:+4733378901">+47 333 78 901</a>
          </p>
          <p>
            <a href="mailto:someone@example.com">littlelemon@gmail.com</a>
          </p>
        </div>

        <div className="mb-2">
          <h3 className="mb-5 font-bold">Social Media</h3>
          <p className="cursor-pointer">Instagram</p>
          <p className="cursor-pointer">LinkedIn</p>
          <p className="cursor-pointer">Pinterest</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
