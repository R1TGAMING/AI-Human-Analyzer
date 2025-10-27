import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faRocket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header className="flex w-full items-center justify-between text-blue-400 p-4 pt-5 absolute left-0 right-0 max-w-6xl mx-auto">
            <div>
                <h1 className="text-xl font-extrabold ">AI - Human Analyzer</h1>
            </div>

            <nav className="font-extrabold ">
                <ul className="flex flex-row gap-4 items-center">
                    <li>
                        <a href="#analyze">
                            <Button
                                text="Analyze"
                                icon={<FontAwesomeIcon icon={faRocket} />}
                                className="text-white bg-blue-400 hover:bg-blue-500 hover:text-gray-200"
                            ></Button>
                        </a>
                    </li>
                    <li>
                        <a href="#question">
                            <Button
                                text="Question"
                                icon={
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                }
                            ></Button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
