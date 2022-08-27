export default function General(props) {
  return (
    <div className="form-wrapper">
      <h3 className="form--title">Personal Information</h3>
      <form className="form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.formData.firstName}
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.formData.lastName}
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={props.formData.title}
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL"
          value={props.formData.photoURL}
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={props.formData.address}
          onChange={props.handleOnChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={props.formData.phoneNumber}
          onChange={props.handleOnChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={props.formData.email}
          onChange={props.handleOnChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={props.formData.description}
          onChange={props.handleOnChange}
        />
      </form>
    </div>
  );
}
