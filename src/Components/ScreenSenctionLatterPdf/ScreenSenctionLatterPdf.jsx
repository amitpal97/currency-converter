import React, { useEffect, useRef } from "react";
import "./ScreenSenctionLatterPdf.scss";
// import getImage from "../../../../utilities/getImage";
// import { allScreens, dispatchTwoWheelerLoan, useTwoWheelerLoanContext } from "../../two-wheeler-loan-context";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
// import { dispatchSuccessState, useApiStatusContext } from "../../../../context/api-status-context";

const ScreenSenctionLetterPdf = () => {
    const pdfClickDownloadBtn = () => {
        console.log("buttoon clicked");
        setTimeout(() => {
            pdfClickDownload();
        }, 200);
    };

    // const [twoWheelerData, dispatchTw] = useTwoWheelerLoanContext();
    // const [apiStatus, dispatchApiStatus] = useApiStatusContext();

    const htmlRef = useRef(null);

    // useEffect(() => {
    const pdfClickDownload = () => {
        // console.log("btnClicked");
        var mql = window.matchMedia("(max-width:600px)");

        html2canvas(htmlRef.current, {
            x: mql.matches ? 20 : -5,
            // y: 1
        }).then((canvas) => {
            const imgData = canvas.toDataURL("images/png");
            const pdf = new jsPDF("p", "px", [2500, 2500]);
            // const imgProperties = pdf.getImageProperties(imgData);
            // const pdfWidth = pdf.internal.pageSize.getWidth();
            // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

            pdf.addImage(
                imgData,
                "PNG",
                mql.matches ? 60 : 40,
                mql.matches ? 20 : 15,
                0,
                0
            );
            pdf.save("Sanction Latter.pdf");
        });
    };

    // }, []);

    return (
        <>
            {/* <button onClick={pdfClickDownload}>Button </button> */}

            {/* <button onClick={pdfClickDownloadBtn}>download btn</button> */}
            <section
                className="mainPdfWrapper"
                ref={htmlRef}
                style={{
                    background: `url(
                        "/public/two-wheeler-loan/bannner-image.jpg"
                    ) no-repeat bottom  /cover`,
                }}
            >
                <div style={{ height: "47px" }} />
                <header className="mainPdfWrapper-header">
                    <span className="greybackground"></span>
                    <span className="headinglogo">
                        <img
                            src="/public/two-wheeler-loan/idfc-logo.jpg"
                            alt="headerLogo"
                        />
                    </span>
                </header>

                <div className="mainPdfWrapper-mainContainer">
                    <section className="mainPdfWrapper-paraContainer">
                        <p className="paraContainer-paraOne">Dear Amit Pal,</p>
                        <p className="paraContainer-paraTwo">
                            Thank you for enquiring about our Two-Wheeler Loan
                            offerings. <br /> We are proud to present you with a
                            sanction letter on your journey towards <br />
                            fulfilling your two-wheeler dreams.
                        </p>
                    </section>

                    <section className="mainPdfWrapper-tableContainer">
                        <p className="tableContainer-para">
                            Given below are the details:
                        </p>
                        <div className="tablecontainermainWrapper">
                            <div className="tableContent">Application ID</div>
                            <div className="tableContent">Location</div>
                            <div className="tableContent">
                                Customer <br />
                                Name
                            </div>
                            <div className="tableContent">Brand</div>
                            <div className="tableContent">
                                Model <br />
                                Name
                            </div>
                            <div className="tableContent">
                                Asset Cost <br />
                                (RS)
                            </div>
                            <div className="tableContent">
                                Loan <br />
                                sanctioned <br />
                                (Rs)
                            </div>

                            <div className="tavleValue">
                                <p>121245212541244 </p>
                            </div>
                            <div className="tavleValue">
                                <p>Mumbai</p>
                            </div>
                            <div className="tavleValue">
                                <p>Amit Rajendra Pal</p>
                            </div>
                            <div className="tavleValue">
                                <p>jkhjgj hkjh bjhj</p>
                            </div>
                            <div className="tavleValue">
                                <p>hjgjghjjgjgjghjgjgj</p>
                            </div>
                            <div className="tavleValue">
                                <p>njkhkhkjhk</p>
                            </div>
                            <div className="tavleValue">
                                <p>hjgjgjhgjhghjgj</p>
                            </div>
                        </div>
                    </section>

                    <section className="mainPdfWrapper-regardsPara">
                        <p className="regardsParaone">Regards,</p>
                        <p className="regardsParaTwo">
                            Team - Two-Wheeler Loans
                            <br />
                            IDFC FIRST Bank
                        </p>
                    </section>
                </div>
            </section>

            <button style={{ fontSize: "82px" }} onClick={pdfClickDownloadBtn}>
                download btn
            </button>
        </>
    );
};

export default ScreenSenctionLetterPdf;
