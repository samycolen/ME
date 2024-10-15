import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

import "./App.css";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaDribbble,
} from "react-icons/fa";

import logo from "./logo.jpg";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [rating, setRating] = useState(0);
  const [Feedback, setFeedback] = useState("");
  const [activeButton, setActiveButton] = useState("Home");

  // Function to handle star rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    document.getElementById(buttonName).scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle feedback form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp API
    const message = `Rating: ${rating}\nFeedback: ${Feedback}`;
    const phoneNumber = "917620830108"; // Replace with your phone number with country code (e.g., 917620830108)

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    // Reset form fields
    setRating(0);
    setFeedback("");
  };

  // Function to handle scroll
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Main Page */}
      <div id="Home" className="main-page">
        {/* Centered Logo */}
        <div className="centered-logo  main-page-element">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", display: "block", margin: "0 auto" }}
          />
        </div>

        {/* Editable Content Div */}
        <div className="header-content main-page-element">
          <h1>माणगांवे भुजल सर्वेक्षण आणि माणगांवे इलेक्ट्रिकल नांदणी</h1>
          <h3>Mr. Sanket Mangave</h3>
        </div>
        <div className="MainPageMapNnumber main-page-element">
          <div className="map-info">
            <FaMapMarkerAlt style={{ marginRight: "10px" }} />
            <a
              href="https://maps.app.goo.gl/oSKNUR6gGn2Gq3hm7"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Sanket Mangave Nandani, Mangavewadi 416102
            </a>
          </div>
          <div className="phone-info">
            <FaPhone size={20} />
            <a href="tel:+917620830108" className="phone-link">
              +917620830108
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links">
          <a
            href="https://www.facebook.com/panadi09?mibextid=ZbWKwL.com"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://wa.me/qr/Q2URXEOFQ4TOG1"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://www.instagram.com/panadi09?igsh=OHo0cnJpM3VybDJo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://youtube.com/@mangavewaterdetector09?si=6cF49O6LZ3xmAxkD"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-buttons">
          <button
            onClick={() => handleButtonClick("Home")}
            className={activeButton === "Home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => handleButtonClick("About US")}
            className={activeButton === "About US" ? "active" : ""}
          >
            About US
          </button>
          <button
            onClick={() => handleButtonClick("Product")}
            className={activeButton === "Product" ? "active" : ""}
          >
            Product
          </button>
          <button
            onClick={() => handleButtonClick("Other Services")}
            className={activeButton === "Other Services" ? "active" : ""}
          >
            Other Services
          </button>
          <button
            onClick={() => handleButtonClick("Gallery")}
            className={activeButton === "Gallery" ? "active" : ""}
          >
            Gallery
          </button>
          <button
            onClick={() => handleButtonClick("Payment")}
            className={activeButton === "Payment" ? "active" : ""}
          >
            Payment
          </button>
          <button
            onClick={() => handleButtonClick("Feedback")}
            className={activeButton === "Feedback" ? "active" : ""}
          >
            Feedback
          </button>
          <button
            onClick={() => handleButtonClick("Enquiry")}
            className={activeButton === "Enquiry" ? "active" : ""}
          >
            Enquiry
          </button>
          <button
            onClick={() => handleButtonClick("Share")}
            className={activeButton === "Share" ? "active" : ""}
          >
            Share
          </button>
        </div>
      </footer>

      {/* On Scroll Navbar */}
      {scrollPosition > 100 && (
        <header id className="navbar">
          <div className="navbar-mid">
            <h2>माणगांवे भुजल सर्वेक्षण आणि माणगांवे इलेक्ट्रिकल नांदणी</h2>
          </div>
          
        </header>
      )}

      {/* About Us Section */}

      <section id="About US" className="about-section">
        <h2>About Us</h2>
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/About1.png"}
            alt="About Image 1"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/About2.png"}
            alt="About Image 2"
          />
        </div>
      </section>

      <section id="Product" className="Product-section">
        <h2>Product</h2>
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/productnservices1.png"}
            alt="product Image 1"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/productnservices2.png"}
            alt="product Image 2"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/productnservices3.png"}
            alt="product Image 3"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/productnservices4.png"}
            alt="product Image 4"
          />
        </div>
      </section>

      {/* other services Section */}

      <section id="Other Services" className="services-section">
        <h2>Other Services</h2>
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/otherS.png"}
            alt="Other s Image 1"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/otherS2.png"}
            alt="Other s Image 2"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/otherS3.png"}
            alt="Other S Image 3"
          />
        </div>
      </section>

      <section id="Gallery" className="Gallery-section">
        <h2>Gallery</h2>
        <div className="Gallery-images"></div>
      </section>

      <section id="Payment" className="Payment-section">
        <h2>Payment</h2>
        <div className="Payment-details">
          <img
            sizes="50px"
            src={process.env.PUBLIC_URL + "/images/PaymentQRcode.png"}
            alt="Payment QR Image 1"
          />
          <p>google pay number : 7620830108</p>
        </div>
      </section>

      <section id="Feedback" className="Feedback-section">
        <div className="form-container">
          <h2>Feedback</h2>
          <div className="feedback-form">
            {/* Star Rating Component */}
            <ReactStars
              count={5}
              onChange={handleRatingChange}
              size={40}
              activeColor="#ffd700"
              value={rating} // Set current rating
            />

            {/* Feedback Text Area */}
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Please leave your feedback here..."
                value={Feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
              <br />
              {/* Submit Button */}
              <button type="submit">Submit Feedback</button>
            </form>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section id="Enquiry" className="Enquiry-section">
        <div className="form-container">
          <h2>Enquiry Form</h2>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section id="Share" className="Share-section">
        <h2>Share</h2>
        <div className="buttonImageLink">
          <img
            src={process.env.PUBLIC_URL + "/images/share.png"}
            alt="Share n Download Image 1"
          />
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "process.env.PUBLIC_URL + /images/share.png"; // Ensure image path is correct
              link.download = "share-image.png";
              link.click();
            }}
          >
            Download
          </button>
        </div>
        <h3>Copy and share this link</h3>
        <div className="buttonGroup">
          <button
            onClick={() => {
              const shareLink =
                "https://sanket0109.github.io/SanketMangaveWaterDetector/";

              // Check if clipboard API is supported
              if (navigator.clipboard) {
                navigator.clipboard
                  .writeText(shareLink)
                  .then(() => {
                    alert("Link copied to clipboard!");
                  })
                  .catch(() => {
                    alert("Failed to copy the link.");
                  });
              } else {
                // Fallback for browsers without navigator.clipboard support
                const tempInput = document.createElement("textarea");
                tempInput.value = shareLink;
                document.body.appendChild(tempInput);
                tempInput.select();
                try {
                  document.execCommand("copy");
                  alert("Link copied to clipboard using fallback!");
                } catch (err) {
                  alert("Fallback: Failed to copy the link.");
                }
                document.body.removeChild(tempInput);
              }
            }}
          >
            Copy Link
          </button>

          <button
            onClick={() => {
              const shareLink =
                "https://sanket0109.github.io/SanketMangaveWaterDetector/";
              const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
                `Check out this link: ${shareLink}`
              )}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            Share on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
