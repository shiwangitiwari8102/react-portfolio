import { Fragment } from "react";

const SideBar = () => {
  const toggleSidebar = () => {
    console.log("hi");
    document.querySelector("body").classList.remove("side-content-visible");
  };

  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div
        className="form-back-drop fixed inset-0 bg-black opacity-50 cursor-pointer"
        onClick={() => toggleSidebar()}
      />
      {/* Hidden Sidebar */}
      <section className="hidden-bar fixed top-0 right-0 bottom-0 w-72 bg-white z-50 overflow-y-auto">
        <div className="inner-box text-center p-8">
          <div className="cross-icon absolute top-4 right-4 cursor-pointer">
            <span className="fa fa-times" onClick={() => toggleSidebar()} />
          </div>
          <div className="title mb-6">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  placeholder="Message"
                  rows={5}
                  defaultValue=""
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="theme-btn px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one mt-6">
            <a href="#" className="mr-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};

export default SideBar;
