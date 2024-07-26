import React, { useEffect } from "react";
import "./ScreenCongratulations.scss"
import { allScreens, dispatchTwoWheelerLoan, useTwoWheelerLoanContext } from "../../two-wheeler-loan-context";
import { dispatchLoadingState, useApiStatusContext } from "../../../../context/api-status-context";



const ScreenCongratulations = ({ status = "", rejectStatus = "" }) => {


    const [twoWheelerData, dispatchTw] = useTwoWheelerLoanContext();
    const [apiStatus, dispatchApiStatus] = useApiStatusContext();

    const pdfDownload = () => {


        // document.body.classList.add("scroll-hiden");
        dispatchTwoWheelerLoan(dispatchTw, { activeScreen: allScreens.ScreenSenctionLetterPdf, showPdfLoder: true })

    }

    const showMoreStore = () => {
        window.open("https://www.idfcfirstbank.com/personal-banking/loans/two-wheeler-loan/tw-store-locator")
    }

    return (
        <>
            <div className="react-tw-congrat-main-wrapper ">

                <>
                    {/* <div className= {`react-congrat-form-container ${rejectStatus === 'cardReject' ? "react-tw-congrat-main-wrapper-backgroundPurple": 'react-tw-congrat-main-wrapper-backgroundNone'} `}> */}
                    <div className= {`react-congrat-form-container  ${rejectStatus === 'cardReject' ? "" : "react-tw-congrat-main-wrapper-backgroundNone"}`}>

                        {
                            rejectStatus === "cardReject" ?
                                (<>
                                    <div className="react-congrats-card-container react-congrats-card-container-scorecardPending">
                                        <div className="react-cong-card-para-amount-container">

                                            <p className="react-cong-card-para-mob">Apologies, due to internal policy criteria, we will not be able to approve this loan for now.
                                                This is not a reflection of your credit score, you can still go ahead and avail our other
                                                products and services.</p>

                                            <p className="react-cong-card-para">Apologies, due to internal policy criteria, we will not be able to approve this loan for now.
                                                This is not a reflection of your credit score, you can still go ahead and avail our other
                                                products and services. </p>

                                        </div>
                                        <p className="react-cong-card-bottomtxt-checkout-loan">Thank You IDFC FIRST Bank </p>
                                        <div>
                                            <p className="react-cong-card-download-sec">Check out other Loan services</p>
                                        </div>
                                    </div>
                                </>) :


                                <div className="react-congrats-card-container">
                                    {
                                        status === "approve" ? (
                                            <>
                                                <div className="react-congratCard-head-container-mainContainer">
                                                    <h2 className="react-congratCard-head-container"> Congratulations {twoWheelerData?.fullName} ! </h2>

                                                    <div className="react-cong-card-para-amount-container">

                                                        <p className="react-cong-card-para-mob">
                                                            Your loan for {twoWheelerData?.selectedBrandModelObj[0]?.MAKE} is approved. Please visit the nearest {twoWheelerData?.selectedBrand?.value} dealership for further process. </p>

                                                        <p className="react-cong-card-para">
                                                            Your loan for {twoWheelerData?.selectedBrandModelObj[0]?.MAKE} is approved. Please visit the nearest {twoWheelerData?.selectedBrand?.value} dealership for further process. </p>
                                                        {/* <p className="react-cong-card-amount">Ducati dealership for further process. </p> */}

                                                    </div>
                                                    <p className="react-cong-card-bottomtxt"> Your loan Application ID is : {twoWheelerData.applicationId} </p>
                                                    <div>
                                                        <p onClick={pdfDownload} className="react-cong-card-download-sec">Download sanction letter</p>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="react-congratCard-head-container-mainContainer">
                                                    <h2 className="react-congratCard-head-container">{twoWheelerData?.fullName} </h2>

                                                    <div className="react-cong-card-para-amount-container">

                                                        <p className="react-cong-card-para-mob">
                                                            You are almost done. We will need a few more details and a co-applicant to take this process ahead. Please go to the nearest dealership and quote the loan application ID to the IDFC FIRST Bank personnel.</p>

                                                        <p className="react-cong-card-para">

                                                            You are almost done. We will need a few more details and a co-applicant to take <br />
                                                            This process ahead. Please go to the nearest dealership and quote the loan application ID to the IDFC FIRST Bank personnel. </p>
                                                        {/* <p className="react-cong-card-amount">application ID to the IDFC FIRST Bank personnel. </p> */}

                                                    </div>
                                                    <p className="react-cong-card-bottomtxt react-cong-card-bottomtxt-marginBottom-68"> Your loan Application ID is : {twoWheelerData.applicationId} </p>
                                                    <div>
                                                        {/* <p onClick={pdfDownload} className="react-cong-card-download-sec">Download sanction letter</p> */}
                                                    </div>
                                                </div></>
                                        )
                                    }

                                    <div className="react-congrats-nearest-map-wrapper react-tw-congrat-main-wrapper-backgroundNone">
                                        <p className="react-congrats-para">Nearest Dealer Locator</p>
                                        <div className="react-congrates-Nearest-subWrapper">
                                            <div className="react-congrates-Nearest-subWrapper-mapper" >
                                                <div className="react-congrates-Nearest-subWrapper-mapper-image" style={{ backgroundImage: "url('/content/dam/idfcfirstbank/images/two-wheeler-loan/map.png')" }}></div>
                                                {/* <iframe className="react-congrates-Nearest-subWrapper-mapper" src="https://www.idfcfirstbank.com/" frameborder="0" title="idfcbank website"></iframe> */}
                                            </div>

                                            <div className="react-congrates-Nearest-subWrapper-container">

                                                {/* <div className="react-congrates-Nearest-subWrapper-paraOne">
                                                    <p className="react-congrates-Nearest-subWrapper-paraOne-para">Honda Dealership 1, Goregaon</p>
                                                    <p className="react-congrates-Nearest-subWrapper-paraOne-subPara">&, Yes bank, 8, Ganga Niwas, New Link Rd,
                                                        opp. Link House, near Chincholi Signal &
                                                        Hanuman Mandir</p>
                                                </div> */}

                                                {/* <div className="react-congrates-Nearest-subWrapper-paraTWo react-congrates-Nearest-subWrapper-paraOne">
                                                    <p className="react-congrates-Nearest-subWrapper-paraOne-para">Honda Dealership 2, Goregaon</p>
                                                    <p className="react-congrates-Nearest-subWrapper-paraOne-subPara">&, Yes bank, 8, Ganga Niwas, New Link Rd,
                                                        opp. Link House, near Chincholi Signal &
                                                        Hanuman Mandir</p>
                                                </div> */}

                                                <div className="react-congrates-Nearest-subWrapper-paraThree-mainWrapper">
                                                    <p onClick={showMoreStore} className="react-congrates-Nearest-subWrapper-paraThree">Show more stores near me</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        }

                        {/* congratulation card start */}


                        {/* Nearest Dealers start */}


                    </div>
                </>
            </div>
        </>
    );

}

export default ScreenCongratulations;