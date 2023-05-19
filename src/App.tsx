import { useReducer } from "react";
import { SET_ADDRESS, SET_AGE, SET_EMAIL, SET_FEEDBACK, SET_LIKES, SET_NAME, SET_OCCUPATION, SET_PHONE_NUMBER, formReducer, initialState } from "./formReducer";

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const keys = Object.keys(state.likes)
    const likesOfUsers = keys.filter((key) => {
      return state.likes[key] ? key : null;
    });

    const objectData = {
      name: state.name,
      age: state.age,
      address: state.address,
      email: state.email,
      phoneNumber: state.phoneNumber,
      occupation: state.occupation,
      likes: likesOfUsers,
      feedback: state.feedback
    };

    alert(
      `Here is your survey data, ${state.name}: ${JSON.stringify(objectData)}`
    );
  };

  const handleCheckBox = (key: string) => {
    const { likes } = state;
    const keyValue = likes[key];
    dispatch({
      type: SET_LIKES,
      payload: {
        ...likes,
        [key]: !keyValue
      }
    })
  };
  
  const handleInputChange = (e: any) => {
    switch(e.target.id) {
      case "name_input":
        dispatch({
          type: SET_NAME,
          payload: e.target.value
        });
      break;
      case "age_input":
        dispatch({
          type: SET_AGE,
          payload: e.target.value
        });
      break;
      case "email_input":
        dispatch({
          type: SET_EMAIL,
          payload: e.target.value
        });
      break;
      case "address_input":
        dispatch({
          type: SET_ADDRESS,
          payload: e.target.value
        });
      break;
      case "phone_number_input":
        dispatch({
          type: SET_PHONE_NUMBER,
          payload: e.target.value
        });
      break;
      case "occupation_select":
        dispatch({
          type: SET_OCCUPATION,
          payload: e.target.value
        });
      break;
      case "cleanliness_box":
        handleCheckBox(e.target.dataset.key);
      break;
      case "environmental_friendly_checkbox":
        handleCheckBox(e.target.dataset.key);
      break;
      case "price_checkbox":
        handleCheckBox(e.target.dataset.key);
      break;
      case "efficient_checkbox":
        handleCheckBox(e.target.dataset.key);
      break;
      case "customer_service_checkbox":
        handleCheckBox(e.target.dataset.key);
      break;
      case "feedbacks_text_area":
        dispatch({
          type: SET_FEEDBACK,
          payload: e.target.value
        });
      break;
    };
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name_input">
        <div>Enter your name</div>
        <input
          type="text"
          className="form_inputs"
          title="Enter your name"
          placeholder="Enter your name"
          id="name_input"
          onChange={(e) => {handleInputChange(e)}}
        />
      </label>

      <label htmlFor="age_input">
        <div>How old are you?</div>
        <input
          type="number"
          min={18}
          max={90}
          className="form_inputs"
          title="How old are you?"
          id="age_input"
          placeholder="How old are you?"
          onChange={(e) => {handleInputChange(e)}}
        />
      </label>

      <label htmlFor="email_input">
        <div>Enter your email</div>
        <input
          type="text"
          className="form_inputs"
          title="Enter your email"
          placeholder="Enter your email"
          id="email_input"
          onChange={(e) => {handleInputChange(e)}}
        />
      </label>

      <label htmlFor="address_input">
        <div>Enter your address</div>
        <input
          type="text"
          className="form_inputs"
          title="Enter your address"
          placeholder="Enter your address"
          id="address_input"
          onChange={(e) => {handleInputChange(e)}}
        />
      </label>

      <label htmlFor="phone_number_input">
        <div>Enter your phone number</div>
        <input
          type="text"
          className="form_inputs"
          title="Enter your phone number"
          placeholder="Enter your phone number"
          id="phone_number_input"
          onChange={(e) => {handleInputChange(e)}}
        />
      </label>

      <label htmlFor="occupation_select">
        <div>Occupation</div>
        <select
          id="occupation_select"
          title="Occupation"
          onChange={(e) => {handleInputChange(e)}}
        >
          <option disabled value={'readonly'} selected>Choose your occupation</option>
          <option value="Student">Student</option>
          <option value="Professor">Professor</option>
          <option value="Office Worker">Office Worker</option>
          <option value="Enterpreneur">Enterpreneur</option>
          <option value="Doctor">Doctor</option>
        </select>
      </label>

      <div className="section_of_checkboxes_container">
        <div>What did you like about our product?</div>
        <section className="section_of_checkboxes">
          <label htmlFor="cleanliness_box">
            <input
              type="checkbox"
              id="cleanliness_box"
              title="Cleanliness"
              onChange={(e) => {handleInputChange(e)}}
              data-key="cleanliness"
            />
            <div>Cleanliness</div>
          </label>
          <label htmlFor="environmental_friendly_checkbox">
            <input
              type="checkbox"
              id="environmental_friendly_checkbox"
              title="Environmental Friendly"
              onChange={(e) => {handleInputChange(e)}}
              data-key="environmentalFriendly"
            />
            <div>Environmental Friendly</div>
          </label>
          <label htmlFor="price_checkbox">
            <input
              type="checkbox"
              id="price_checkbox"
              title="Price"
              onChange={(e) => {handleInputChange(e)}}
              data-key="price"
            />
            <div>Price</div>
          </label>
          <label htmlFor="efficient_checkbox">
            <input
              type="checkbox"
              id="efficient_checkbox"
              title="Efficient"
              onChange={(e) => {handleInputChange(e)}}
              data-key="efficient"
            />
            <div>Efficient</div>
          </label>
          <label htmlFor="customer_service_checkbox">
            <input
              type="checkbox"
              id="customer_service_checkbox"
              title="Customer Service"
              onChange={(e) => {handleInputChange(e)}}
              data-key="customerService"
            />
            <div>Customer Service</div>
          </label>
        </section>
      </div>
      <label htmlFor="feedbacks_text_area">
          <div>What are your feedbacks?</div>
          <textarea
            id="feedbacks_text_area"
            placeholder="Enter your feedback"
            onChange={(e) => {handleInputChange(e)}}
          ></textarea>
        </label>

        <input
          type="submit"
        />
    </form>
  );
};

export default App;