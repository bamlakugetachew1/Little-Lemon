
function Header(){
    const Logourl = "https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png";
    return(
        <header >
            <img className="ml-auto mr-auto md:ml-0 md:mr-0" src={Logourl} height={200} width={200} alt="Little Lemon Logo"/>
        </header>
    );
}

export default Header