'use client';

import { useState } from 'react';

//icons
import { FILE_ICON, CHECKCIRCL_ICON, CIRCLE_ICON, RIGHT_ICON } from "./icons";

export default function SupportSection() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (cardId) => setHoveredCard(cardId);
    const handleMouseLeave = () => setHoveredCard(null);

    const getCardStyle = (cardId) => ({
        backgroundColor: hoveredCard === cardId ? '#007bff' : 'white', 
        color: hoveredCard === cardId ? 'white' : 'inherit',
        boxShadow: hoveredCard === cardId ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s, box-shadow 0.3s',
    });

    const getTextStyle = (cardId) => ({
        color: hoveredCard === cardId ? 'white' : 'black', 
    });

    const getPointStyle = (cardId) => ({
        color: hoveredCard === cardId ? 'white' : '#007bff', 
    });

    const getIconStyle = (cardId) => ({
        color: hoveredCard === cardId ? 'white' : 'green', 
    });

    const getRightIconStyle = (cardId) => ({
        color: hoveredCard === cardId ? 'white' : '#0d6efd',
    });

    const getButtonStyle = (cardId) => ({
        backgroundColor: hoveredCard === cardId ? 'white' : '#007bff', 
        color: hoveredCard === cardId ? '#007bff' : 'white', 
    });

    return (
        <section className="py-5 bg-white text-dark">
            <div className="container">
                <h2 className="text-center fw-bold mb-2">Support</h2>
                <p className="text-center text-muted mb-5">
                    Have any questions? We'd love to hear from you
                </p>

                <div className="row g-4">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div
                            className="card shadow-sm h-100"
                            style={getCardStyle(1)} 
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="card-body">
                                <h5 className="card-title fw-bold" style={getTextStyle(1)}>FREE Billplz resources</h5>
                                <p className="small mb-3" style={getTextStyle(1)}>
                                    View transactions, bank and system status.
                                </p>
                                <ul className="list-unstyled small mb-4">
                                    <li className="d-flex justify-content-between align-items-center text-success mb-4">
                                        <div className="d-flex align-items-center">
                                            <span style={getIconStyle(1)}>{CIRCLE_ICON}</span>
                                            <a href="#" className="ms-2 text-decoration-none" style={getPointStyle(1)}>System Status</a>
                                        </div>
                                        <span style={getRightIconStyle(1)}>{RIGHT_ICON}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-success mb-4">
                                        <div className="d-flex align-items-center">
                                            <span style={getIconStyle(1)}>{CIRCLE_ICON}</span>
                                            <a href="#" className="ms-2 text-decoration-none" style={getPointStyle(1)}>FPX Transaction Status</a>
                                        </div>
                                        <span style={getRightIconStyle(1)}>{RIGHT_ICON}</span>
                                    </li>
                                    <li className="d-flex justify-content-between align-items-center text-success mb-4">
                                        <div className="d-flex align-items-center">
                                            <span style={getIconStyle(1)}>{CIRCLE_ICON}</span>
                                            <a href="#" className="ms-2 text-decoration-none" style={getPointStyle(1)}>Bank Status</a>
                                        </div>
                                        <span style={getRightIconStyle(1)}>{RIGHT_ICON}</span>
                                    </li>
                                </ul>
                                <h6 className="fw-semibold" style={getTextStyle(1)}>Billplz Sandbox</h6>
                                <p className="small" style={getTextStyle(1)}>
                                    A safe environment to test our platform before going LIVE
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <a href="#" className=" text-decoration-none small" style={getPointStyle(1)}>Create a test account</a>
                                    <span style={getRightIconStyle(1)}>{RIGHT_ICON}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div
                            className="card shadow-sm h-100"
                            style={getCardStyle(2)} 
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="card-body">
                                <h5 className="card-title fw-bold" style={getTextStyle(2)}>Frequently Asked Questions</h5>
                                <p className="small mb-3" style={getTextStyle(2)}>
                                    Ask our dedicated support team for assistance
                                </p>
                                <ul className="list-unstyled small text-primary mb-4">
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(2)}>{FILE_ICON}</span>
                                        <a href="#" className="text-decoration-none ms-2" style={getPointStyle(2)}>What is Credit</a>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(2)}>{FILE_ICON}</span>
                                        <a href="#" className="text-decoration-none ms-2" style={getPointStyle(2)}>What is Billplz Payout Policy?</a>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(2)}>{FILE_ICON}</span>
                                        <a href="#" className="text-decoration-none ms-2" style={getPointStyle(2)}>Integrate Shopify with Billplz.</a>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(2)}>{FILE_ICON}</span>
                                        <a href="#" className="text-decoration-none ms-2" style={getPointStyle(2)}>How to create Payment Form?</a>
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-sm rounded-pill px-5 w-100 w-md-auto d-block mx-auto" style={getButtonStyle(2)}>Need Support</button>
                                <div className="mt-2 text-center">
                                    <a href="#" className="text-decoration-none small fw-bold" style={getPointStyle(2)}>Visit FAQ</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div
                            className="card shadow-sm h-100"
                            style={getCardStyle(3)} 
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="card-body">
                                <h5 className="card-title fw-bold" style={getTextStyle(3)}>Partnerships</h5>
                                <p className="small mb-3" style={getTextStyle(3)}>
                                    Get in touch with our team to see how we can work together.
                                </p>
                                <ul className="list-unstyled small mb-4">
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(3)}>{CHECKCIRCL_ICON}</span> <span className="ms-2" style={getPointStyle(3)}>Ready Ecosystem</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(3)}>{CHECKCIRCL_ICON}</span> <span className="ms-2" style={getPointStyle(3)}>Merchant Base</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(3)}>{CHECKCIRCL_ICON}</span> <span className="ms-2" style={getPointStyle(3)}>Revenue Share/Reseller Potential</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <span style={getIconStyle(3)}>{CHECKCIRCL_ICON}</span> <span className="ms-2" style={getPointStyle(3)}>Ideal Partner for Product Distribution</span>
                                    </li>
                                </ul>
                                <button className="btn btn-primary btn-sm rounded-pill px-5 w-100 w-md-auto d-block mx-auto" style={getButtonStyle(3)}>Get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5 small text-muted">
                    Support/Partnership Requests: <br />
                    <span className="text-dark fw-bold fs-5">team@billplz.com</span>
                </div>
            </div>
        </section>
    );
}