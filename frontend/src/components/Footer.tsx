import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="w-full flex justify-center flex-row gap-2 text-center p-2 pt-5 text-gray-400 shadow-blue-200">
            <div>
                <a href="https://github.com/R1TGAMING" className="">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://linkedin.com/in/rafi-sofyan-triyanto-1b66b131b"
                    className=""
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            Created By Ipi &copy; 2025
        </div>
    );
};

export default Footer;
