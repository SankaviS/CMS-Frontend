import React from "react";

//common Footer component for all the page

const Footer = () => {
  return (
    <div>
      <footer
        class="bg-dark text-center text-lg-start"
        style={{ marginTop: "10vh" }}
      >
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">About WebKit</h5>

              <p>
                We're empowering everyone to create for the web <br />
                and leading impactful, fulfilling lives while we do it.
              </p>
            </div>

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">VISION</h5>

              <p>
                The purpose of a blog is to provide content on your website that
                answers your prospective customers' questions and helps them
                learn about your product or service.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center p-3" style={{ backgroundcolor: "green" }}>
          © 2022 WebKit, Inc. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
