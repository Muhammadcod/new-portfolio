import React from 'react';
import StarRating from '../components/StarRating';

const Sky = () => {
  return (
    <div
      className="  container border d-flex justify-content-center align-items-center"
      style={{
        height: `90vh`,
        backgroundColor: `#385881`
      }}
    >
      <div
        className=" border py-4 bg-white"
        style={{
          borderRadius: `15px`
        }}
      >
        <h5 className="px-4 text-center">Give us your feedback</h5>
        <hr />
        <div className="content  px-4 text-center">
          <p className="mb-0">How would you rate our service?</p>
          <StarRating />
          {/* <div className="container">
            <div className="row">
              <div className="col border">One</div>
              <div className="col border">Two</div>
              <div className="col border">Three</div>
            </div>
          </div> */}
          <ul
            id="filter1"
            className="filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4"
          >
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input
                type="radio"
                name="filter1"
                id="filter1-0"
                className="sr-only"
                checked
              />
              <label
                htmlFor="filter1-0"
                className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow"
              >
                All
              </label>
              <div aria-hidden="true" className="filter-active"></div>
            </li>
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input
                type="radio"
                name="filter1"
                id="filter1-1"
                className="sr-only"
              />
              <label
                htmlFor="filter1-1"
                className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow"
              >
                Upcoming
              </label>
            </li>
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input
                type="radio"
                name="filter1"
                id="filter1-2"
                className="sr-only"
              />
              <label
                htmlFor="filter1-2"
                className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow"
              >
                Ongoing
              </label>
            </li>
            <li className="filter-switch-item flex relative h-8 bg-gray-300x">
              <input
                type="radio"
                name="filter1"
                id="filter1-3"
                className="sr-only"
              />
              <label
                htmlFor="filter1-3"
                className="h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow"
              >
                Complete
              </label>
            </li>
          </ul>
          <div className="my-2">Describe your experience</div>
          <div className="body">
            <form>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  style={{ resize: `none` }}
                  placeholder="Type something here"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email (optional)"
                />
              </div>
              <div className=" d-flex justify-content-between">
                <span className=" border">Icon</span>
                <button
                  type="submit"
                  className="btn btn-primary w-75"
                  style={{ padding: `10px 25px !important` }}
                >
                  Submit
                </button>
              </div>
            </form>
            <div>By trymodal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sky;
