export default function GeneralInfo(props) {
  return (
    <div className="form-wrapper">
      <h3 className="form--title">Personal Information</h3>
      <form className="form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.generalInfo.firstName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.generalInfo.lastName}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={props.generalInfo.title}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL"
          value={props.generalInfo.photoURL}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={props.generalInfo.address}
          onChange={props.handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={props.generalInfo.phoneNumber}
          onChange={props.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={props.generalInfo.email}
          onChange={props.handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={props.generalInfo.description}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}
