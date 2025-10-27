import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./components/Button";
import TextArea from "./components/TextArea";
import MainLayout from "./layout/MainLayout";
import { faQuestionCircle, faRocket } from "@fortawesome/free-solid-svg-icons";
import Details from "./components/Details";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import ProgressProvider from "./components/ProgressProvider";

interface Data {
    data: {
        prediction: number;
        prediction_probability: {
            AI: number;
            Human: number;
        };
    };
}

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("");
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(text.length);

        if (text.length <= 99) {
            setIsOpen(false);
            alert("Text length must be 100 characters!");
        } else if (text.length >= 10001) {
            setIsOpen(false);
            alert("Cannot exceed 1000 characters!");
        }

        setLoading(false);
        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            });

            const result = await response.json();
            setData(result);
            setLoading(true);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <MainLayout>
            <div className="items-center justify-center flex flex-col">
                <div className=" font-extrabold text-center min-h-screen  justify-center flex flex-col ">
                    <h2 className="text-6xl text-blue-400" data-aos="fade">
                        AI - Human Analyzer
                    </h2>
                    <h3
                        className=" text-blue-300 text-xl"
                        data-aos="fade"
                        data-aos-delay="200"
                    >
                        Find Out Is Your Text Written By AI Or Human...
                    </h3>
                    <div
                        className="pt-4 flex justify-center gap-4"
                        data-aos="fade"
                    >
                        <a href="#analyze">
                            <Button
                                text="Analyze"
                                icon={<FontAwesomeIcon icon={faRocket} />}
                                className="text-white bg-blue-400 hover:bg-blue-500 hover:text-gray-200 px-10 py-2"
                            ></Button>
                        </a>
                        <a href="#question">
                            <Button
                                text="Question"
                                className="text-blue-400 px-10 py-2"
                                icon={
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                }
                            ></Button>
                        </a>
                    </div>
                    <p className="absolute bottom-6 text-blue-400/75 left-0 right-0 animate-bounce">
                        V
                    </p>
                </div>

                <div
                    className="flex flex-col gap-4 justify-center h-screen items-center"
                    id="analyze"
                    data-aos="fade"
                >
                    <h2 className="text-2xl font-extrabold text-blue-400 text-center">
                        Analysis Your Text Here
                    </h2>
                    <form action="POST" onSubmit={(e) => handleSubmit(e)}>
                        <p className="text-gray-400">{text.length} / 10000</p>
                        <TextArea
                            placeholder="Paste Or Input Your Text Here..."
                            onChange={(e) => setText(e.target.value)}
                        />

                        <Button
                            disabled={text.length === 0}
                            text="Analyze"
                            type="submit"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white bg-blue-400 hover:bg-blue-500 hover:text-gray-200 w-full text-center font-black py-2 justify-center"
                        />
                    </form>
                </div>

                <div
                    className="min-h-screen flex flex-col items-center pt-30"
                    id="question"
                    data-aos="fade"
                >
                    <h2 className="text-blue-400 font-black text-6xl">
                        Question
                    </h2>

                    <div className="flex flex-col w-screen max-w-6xl items-center gap-6 mt-10">
                        <Details className="cursor-default">
                            <summary className="cursor-pointer font-extrabold">
                                What is AI - Human Analyzer?
                            </summary>
                            <p>
                                The website provides to analyze your text is
                                written by AI or Human..
                            </p>
                        </Details>
                        <Details>
                            <summary className="cursor-pointer font-extrabold">
                                Is Support Another Languages?
                            </summary>
                            <p>
                                For now is not. Because the dataset only
                                contains english language and we only have small
                                datasets from kaggle.
                            </p>
                        </Details>
                        <Details>
                            <summary className="cursor-pointer font-extrabold">
                                Can I Get The Project?
                            </summary>
                            <p>
                                Of Course, You can get the project on my Github
                                pages and search the repository of project.
                            </p>
                        </Details>
                        <Details>
                            <summary className="cursor-pointer font-extrabold">
                                Where you get the dataset?
                            </summary>
                            <p>
                                You can get the dataset from{" "}
                                <a
                                    className="underline"
                                    href="https://www.kaggle.com/datasets/shanegerami/ai-vs-human-text"
                                >
                                    here
                                </a>
                                . i have a big thanks with ShaneGerami who
                                created the dataset.
                            </p>
                        </Details>
                        <Details>
                            <summary className="cursor-pointer font-extrabold">
                                How to use this application?
                            </summary>
                            <p>
                                You just need to input or paste your text on the
                                text area provided, after that click the
                                "Analyze" button, and wait for the result.
                            </p>
                        </Details>
                        <Details>
                            <summary className="cursor-pointer font-extrabold">
                                Is This Accurate?
                            </summary>
                            <p>
                                For now accuracy not too high its just prototype
                                project
                            </p>
                        </Details>
                    </div>
                </div>
            </div>

            {/* Modal Section */}
            {loading && data ? (
                <Modal isOpen={isOpen}>
                    <Button
                        text="X"
                        onClick={() => setIsOpen(false)}
                        className="bg-none shadow-none rounded-full font-black absolute text-blue-400 text-right"
                    />
                    <div className="items-center flex justify-center h-full ">
                        <div className="w-full flex flex-col justify-center items-center gap-5">
                            <h2 className="text-4xl text-blue-400 font-black">
                                Prediction Probability
                            </h2>
                            <div className="w-80  flex flex-row   justify-center items-center text-center gap-6">
                                <div className="flex flex-col text-blue-400 ">
                                    <h2 className="mb-2 font-extrabold">
                                        {" "}
                                        🤖 AI
                                    </h2>
                                    <ProgressProvider
                                        valueStart={0}
                                        valueEnd={
                                            data.data.prediction_probability
                                                .AI * 100
                                        }
                                    >
                                        {(value) => (
                                            <CircularProgressbar
                                                value={value}
                                                text={value + "%"}
                                            />
                                        )}
                                    </ProgressProvider>
                                </div>

                                <div className="flex flex-col text-blue-400">
                                    <h2 className="mb-2 font-extrabold">
                                        🙍‍♂️ Human
                                    </h2>
                                    <ProgressProvider
                                        valueStart={0}
                                        valueEnd={
                                            data.data.prediction_probability
                                                .Human * 100
                                        }
                                    >
                                        {(value) => (
                                            <CircularProgressbar
                                                value={value}
                                                text={value + "%"}
                                            />
                                        )}
                                    </ProgressProvider>
                                </div>
                            </div>

                            <h2 className="text-blue-400 text-2xl font-black mt-5">
                                from analysis your text is written by
                            </h2>
                            <h1 className="text-5xl font-black  text-blue-400">
                                {data.data.prediction === 1
                                    ? "Artificial Intelligence"
                                    : "Human"}
                            </h1>
                        </div>
                    </div>
                </Modal>
            ) : (
                <Modal isOpen={isOpen}>
                    <div className="w-full h-full flex justify-center items-center">
                        <h2 className="text-blue-400 text-xl font-black">
                            Loading....
                        </h2>
                    </div>
                </Modal>
            )}
        </MainLayout>
    );
}

export default App;
